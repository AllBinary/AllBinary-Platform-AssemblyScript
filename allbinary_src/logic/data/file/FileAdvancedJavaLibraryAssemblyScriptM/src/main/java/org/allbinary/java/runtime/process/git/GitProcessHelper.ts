/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2026 AllBinary 
 *  
 * By agreeing to this license you and any business entity you represent are 
 * legally bound to the AllBinary Open License Version 1 legal agreement. 
 *  
 * You may obtain the AllBinary Open License Version 1 legal agreement from 
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
 *  
 * Created By: Travis Berthelot 
 *   
 */
// Generated Code Do Not Modify
// package org.allbinary.java.runtime.process.git
// import java.io.File
// import java.io.IOException
// import java.nio.charset.StandardCharsets
// import java.util.ArrayList
// import java.util.List
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.AbFileNativeUtil
// import org.allbinary.logic.io.file.directory.TrackedStrings
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

//Do not use this instead just skip target, build, Application paths.
@global export class GitProcessHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.java.runtime.process.git.GitProcessHelper";
    }
    @lazy static jv_instance: GitProcessHelper | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GitProcessHelper | null {
        if (!GitProcessHelper.js_instance) {
            GitProcessHelper.js_instance = true;
            GitProcessHelper.jv_instance = new GitProcessHelper().jinit_GitProcessHelper_0();
        }
        return GitProcessHelper.jv_instance;
    }
    static set instance(value: GitProcessHelper | null) {
        GitProcessHelper.js_instance = true;
        GitProcessHelper.jv_instance = value;
    }
    trackedStrings: TrackedStrings | null = null;

    jfields_GitProcessHelper(): void {
    this.trackedStrings = TrackedStrings.getInstance();
    }
    

    static getInstance(): GitProcessHelper | null {
        return GitProcessHelper.instance;
    }
    

    jinit_GitProcessHelper_0(): GitProcessHelper {
        super.jinit_JObject_0();
        this.jfields_GitProcessHelper();
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return this;
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
        let THIS_IS_SLOW: string | null = "This is slow consider path exclusion instead";
        logUtil!.putF(THIS_IS_SLOW, this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    trackedFiles_2(rootAsString: string | null, pathspec: string | null): List | null {
        return this.trackedFiles_3(rootAsString, pathspec, ".java");
    }
    

    trackedFiles_3(rootAsString: string | null, pathspec: string | null, suffix: string | null): List | null {
        let process: Process | null = new ProcessBuilder().jinit_ProcessBuilder_7(this.trackedStrings!.GIT_COMMAND, this.trackedStrings!.CHANGE_DIRECTORY_OPTION, rootAsString, this.trackedStrings!.LIST_FILES_COMMAND, this.trackedStrings!.SEP_BY_NULL_CHAR_INSTEAD_OF_NEW_LINE, this.trackedStrings!.PATHSPEC_SEPARATOR, pathspec)!.redirectError(ProcessBuilder.Redirect!.INHERIT)!.start(); if (JThrowable.pending !== null) return null;
        let output: StaticArray<i8> | null = process!.getInputStream()!.readAllBytes(); if (JThrowable.pending !== null) return null;
        let exitCode: i32 = process!.waitFor(); if (JThrowable.pending !== null) return null;
        if (exitCode != 0) {
            { JThrowable.raise(new JIllegalStateException().jinit_JIllegalStateException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("git ls-files failed for ")!.append(rootAsString)!.append(" with exit code ")!.appendint(exitCode)))); return null; }
        } if (JThrowable.pending !== null) return null;
        let files: List | null = new JArrayList().jinit_JArrayList_0(); if (JThrowable.pending !== null) return null;
        let start: i32 = 0;
        let relativePath: string | null = null;
        for (let index: i32 = 0; index < output!.length; index++) {
            if ((<i32>(output![index])) == 0) {
                relativePath = JString.new4(output, start, index - start, StandardCharsets.UTF_8); if (JThrowable.pending !== null) return null;
                if (JString.endsWith1(relativePath, suffix)) {
                    files!.add(relativePath); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
                start = index + 1;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return files;
    }
    

    isTracked(file: AbFile | null): bool {
        do {
            let nativeFile: JFile | null = AbFileNativeUtil.get(file); if (JThrowable.pending !== null) break;
            let parentFile: JFile | null = nativeFile!.getParentFile(); if (JThrowable.pending !== null) break;
            let process: Process | null = new ProcessBuilder().jinit_ProcessBuilder_7(this.trackedStrings!.GIT_COMMAND, this.trackedStrings!.CHANGE_DIRECTORY_OPTION, parentFile!.getPath(), this.trackedStrings!.LIST_FILES_COMMAND, this.trackedStrings!.ERROR_UNMATCH_OPTION, this.trackedStrings!.PATHSPEC_SEPARATOR, nativeFile!.getName())!.redirectErrorStream(true)!.start(); if (JThrowable.pending !== null) break;
            process!.getInputStream()!.readAllBytes(); if (JThrowable.pending !== null) break;
            return process!.waitFor() == 0;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

