#!/usr/bin/env bash

# Compiles the AssemblyScript sources the AssemblyScript converter generated with asc. Every class is @global so the hand
# written runtime, the AssemblyScript sources of the dependencies (META-INF/assemblyscript/src of their jars), and this
# project are copied to one tree and an entry file imports every file. asc compiles only what the entry reaches, so the
# jcheck transform (next to asc in C:/assemblyscript) compiles every function, method, and constructor of this project and
# the runtime. This project's sources are written to <output>/src.
# Arguments: source_dir output_dir object_dir dependency_dir runtime_dir compiler "flags" artifactId fail_on_error

set -uo pipefail

export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"

source_dir="$(cygpath -u "$1")"
output_dir="$(cygpath -u "$2")"
object_dir="$(cygpath -u "$3")"
dependency_dir="$(cygpath -u "$4")"
runtime_dir="$(cygpath -u "$5")"
compiler="$(cygpath -m "$6")"
read -r -a compiler_flags <<< "$7"
artifact="$8"
fail_on_error="${9:-true}"

if [ ! -d "$source_dir" ]; then
    echo "No AssemblyScript sources: $source_dir"
    exit 0
fi

transform="$(dirname "$(dirname "$(dirname "$(dirname "$compiler")")")")/jcheck-transform.mjs"

rm -rf "$output_dir" "$object_dir"
tree="$object_dir/tree"
mkdir -p "$output_dir/src" "$tree"
cp -R "$source_dir/." "$output_dir/src/"
cp -R "$runtime_dir/." "$tree/"
if [ -d "$dependency_dir/src" ]; then
    cp -R "$dependency_dir/src/." "$tree/"
fi
cp -R "$source_dir/." "$tree/"

# A Windows program can not open a path over 260 characters, which a deep project folder plus a deep package reaches,
# so the check runs in a short temporary copy of the tree
short_tree="$(mktemp -d /tmp/ascXXXXXX)"
trap 'rm -rf "$short_tree"' EXIT
cp -R "$tree/." "$short_tree/"
cd "$short_tree" || exit 1

# The files asc compiles completely: this project and the runtime (a dependency is checked by its own build)
checked="$object_dir/checked-files.txt"
( cd "$source_dir" && find . -name '*.ts' ; cd "$runtime_dir" && find . -name '*.ts' ) | sed 's|^\./||; s|\.ts$||' | sort -u > "$checked"

# A class of a dependency's optional dependency (not transitive in Maven, like TsUtil) is taken from the AssemblyScript
# jars installed in the local Maven repository when this project uses it
local_repository="$(sed -n 's:.*<localRepository>\([^<]*\)</localRepository>.*:\1:p' "${USERPROFILE:-$HOME}/.m2/settings.xml" 2>/dev/null | head -1)"
[ -z "$local_repository" ] && local_repository="${USERPROFILE:-$HOME}/.m2/repository"
local_repository="$(cygpath -u "$local_repository")"
jar_index="$object_dir/assemblyscript-jar-index.txt"

count="$(find "$source_dir" -name '*.ts' | wc -l)"
echo "AssemblyScript sources: $count"
check="jcheck_entry.ts"
run_check() {
    # The runtime first: its globals are declared before a static initializer of a converted class uses them
    { ( cd "$runtime_dir" && find . -name '*.ts' | sort ) ; find . -name '*.ts' ! -name "$check" | sort ; } | awk '!seen[$0]++' | sed 's|^\./\(.*\)\.ts$|import "./\1";|' > "$check"
    # Plain text without colors or carriage returns, so the locations of the errors are found
    JCHECK_ONLY_FILE="$(cygpath -m "$checked")" node "$compiler" "$check" --transform "$transform" --noEmit --noColors "${compiler_flags[@]}" 2>&1 | tr -d '\r\033'

}

output="$(run_check)"
for pass in 1 2 3; do
    missing="$(echo "$output" | sed -n "s/.*Cannot find name '\([A-Za-z0-9_]*\)'.*/\1/p" | sort -u)"
    [ -z "$missing" ] && break
    if [ ! -f "$jar_index" ]; then
        find "$local_repository/org/allbinary" -name '*AssemblyScript-*.jar' ! -name '*-sources.jar' 2>/dev/null | while IFS= read -r jar; do
            unzip -Z1 "$jar" 2>/dev/null | sed -n "s|^META-INF/assemblyscript/src/\(.*\.ts\)$|\1 $jar|p"
        done > "$jar_index"
    fi
    found=0
    while IFS= read -r name; do
        line="$(grep -m1 "/$name\.ts " "$jar_index")"
        [ -z "$line" ] && continue
        module="${line%% *}"
        jar="${line#* }"
        [ -f "$module" ] && continue
        mkdir -p "$(dirname "$module")"
        unzip -p "$jar" "META-INF/assemblyscript/src/$module" > "$module"
        echo "AssemblyScript module from $(basename "$jar"): $module"
        found=1
    done <<< "$missing"
    [ "$found" = "0" ] && break
    output="$(run_check)"
done

# Only the errors of this project's files and the runtime count
errors="$(echo "$output" | awk '/^ERROR / { if (message != "") print message; message = $0; next }
    / in [^ ]*\.ts\([0-9]+,[0-9]+\)[ ]*$/ && message != "" { location = $0; sub(/.* in /, "", location); sub(/[ ]*$/, "", location); print message " @ " location; message = ""; next }
    END { if (message != "") print message }')"
problems=""
while IFS= read -r line; do
    [ -z "$line" ] && continue
    file="$(echo "$line" | sed -n 's/.* @ \(.*\)\.ts([0-9]*,[0-9]*)$/\1/p')"
    if [ -z "$file" ] || grep -qxF "$file" "$checked"; then
        problems="$problems$line"$'\n'
    fi
done <<< "$errors"
if [ -z "$problems" ]; then
    echo "AssemblyScript compiled: $artifact"
    exit 0
fi
printf '%s' "$problems"
echo "AssemblyScript build failed: $artifact" >&2
if [ "$fail_on_error" = "true" ]; then
    exit 1
fi
exit 0
