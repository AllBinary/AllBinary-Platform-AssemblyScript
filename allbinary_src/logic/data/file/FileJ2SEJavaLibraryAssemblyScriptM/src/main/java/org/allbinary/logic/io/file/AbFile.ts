/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
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
// package org.allbinary.logic.io.file
// import java.io.File
// import java.io.FileFilter
// import java.io.FilenameFilter
// import java.io.IOException
// import java.net.URI
// import org.allbinary.TsUtil
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.logic.string.StringUtil

@global export class AbFile extends JObject implements AbFileInterface {

    jclassName(): string {
        return "org.allbinary.logic.io.file.AbFile";
    }
    @lazy static jv_NULL_FILE: AbFile | null = null;
    @lazy static js_NULL_FILE: bool = false;
    static get NULL_FILE(): AbFile | null {
        if (!AbFile.js_NULL_FILE) {
            AbFile.js_NULL_FILE = true;
            AbFile.jv_NULL_FILE = AbFile.createAbFileFromRawPath(StringUtil.getInstance()!.EMPTY_STRING);
        }
        return AbFile.jv_NULL_FILE;
    }
    static set NULL_FILE(value: AbFile | null) {
        AbFile.js_NULL_FILE = true;
        AbFile.jv_NULL_FILE = value;
    }
    file: JFile | null = null;

    jfields_AbFile(): void {
    
    }
    

    static createAbFileWithChild(file: AbFile | null, childPathName: string | null): AbFile | null {
        return new AbFile().jinit_AbFile_1(new JFile().jinit_JFile_2(file!.getFile(), childPathName));
    }
    

    static createAbFile(filePath: string | null): AbFile | null {
        return new AbFile().jinit_AbFile_1(new JFile().jinit_JFile_1(new AbPath().jinit_AbPath_2(filePath, StringUtil.getInstance()!.EMPTY_STRING)!.toFileSystemString()));
    }
    

    static createAbFilePathAndName(filePath: string | null, fileName: string | null): AbFile | null {
        return new AbFile().jinit_AbFile_1(new JFile().jinit_JFile_2(new AbPath().jinit_AbPath_2(filePath, StringUtil.getInstance()!.EMPTY_STRING)!.toFileSystemString(), fileName));
    }
    

    static createAbFileFromAbPath(abPath: AbPath | null): AbFile | null {
        return new AbFile().jinit_AbFile_1(new JFile().jinit_JFile_1(abPath!.toFileSystemString()));
    }
    

    static createAbFileFromRawPath(filePath: string | null): AbFile | null {
        return new AbFile().jinit_AbFile_1(new JFile().jinit_JFile_1(filePath));
    }
    

    jinit_AbFile_1(file: JFile | null): AbFile {
        super.jinit_JObject_0();
        this.jfields_AbFile();
        this.file = file;
        return this;
    }
    

    getFile(): JFile | null {
        return this.file;
    }
    

    getName(): string | null {
        return this.file!.getName();
    }
    

    getParent(): string | null {
        return this.file!.getParent();
    }
    

    getParentFile(): Object | null {
        return this.file!.getParentFile();
    }
    

    getPath(): string | null {
        return this.file!.getPath();
    }
    

    isAbsolute(): bool {
        return this.file!.isAbsolute();
    }
    

    getAbsolutePath(): string | null {
        return this.file!.getAbsolutePath();
    }
    

    getAbsoluteFile(): Object | null {
        return this.file!.getAbsoluteFile();
    }
    

    getCanonicalPath(): string | null {
        return this.file!.getCanonicalPath();
    }
    

    getCanonicalFile(): Object | null {
        return this.file!.getCanonicalFile();
    }
    

    toURI(): JURI | null {
        return this.file!.toURI();
    }
    

    canRead(): bool {
        return this.file!.canRead();
    }
    

    canWrite(): bool {
        return this.file!.canWrite();
    }
    

    exists(): bool {
        return this.file!.exists();
    }
    

    isDirectory(): bool {
        return this.file!.isDirectory();
    }
    

    isFile(): bool {
        return this.file!.isFile();
    }
    

    isHidden(): bool {
        return this.file!.isHidden();
    }
    

    lastModified(): i64 {
        return this.file!.lastModified();
    }
    

    length(): i64 {
        return (<i64>(this.file!.length()));
    }
    

    createNewFile(): bool {
        return this.file!.createNewFile();
    }
    

    delete_(): bool {
        return this.file!.delete0();
    }
    

    deleteOnExit(): void {
        this.file!.deleteOnExit(); if (JThrowable.pending !== null) return;
    }
    

    list(): StaticArray<string | null> | null {
        return this.file!.list();
    }
    

    listWithFilter(filter: JFilenameFilter | null): StaticArray<string | null> | null {
        return this.file!.list(filter);
    }
    

    listFiles(): StaticArray<Object | null> | null {
        return changetype<StaticArray<Object | null> | null>(this.file!.listFiles());
    }
    

    listFilesFileNameFilter(filter: JFilenameFilter | null): StaticArray<Object | null> | null {
        return changetype<StaticArray<Object | null> | null>(this.file!.listFiles(filter));
    }
    

    listFilesFileFilter(filter: FileFilter | null): StaticArray<Object | null> | null {
        return changetype<StaticArray<Object | null> | null>(this.file!.listFiles(filter));
    }
    

    mkdir(): bool {
        return this.file!.mkdir();
    }
    

    mkdirs(): bool {
        return this.file!.mkdirs();
    }
    

    renameTo(dest: AbFile | null): bool {
        return this.file!.renameTo(dest!.getFile());
    }
    

    setLastModified(time: i64): bool {
        return this.file!.setLastModified(time);
    }
    

    setReadOnly(): bool {
        return this.file!.setReadOnly();
    }
    

    setWritable_2(writable: bool, ownerOnly: bool): bool {
        return this.file!.setExecutable(writable, ownerOnly);
    }
    

    setWritable_1(writable: bool): bool {
        return this.file!.setWritable(writable);
    }
    

    setReadable_2(readable: bool, ownerOnly: bool): bool {
        return this.file!.setReadable(readable, ownerOnly);
    }
    

    setReadable_1(readable: bool): bool {
        return this.file!.setReadable(readable);
    }
    

    setExecutable_2(executable: bool, ownerOnly: bool): bool {
        return this.file!.setExecutable(executable, ownerOnly);
    }
    

    setExecutable_1(executable: bool): bool {
        return this.file!.setExecutable(executable);
    }
    

    canExecute(): bool {
        return this.file!.canExecute();
    }
    

    getTotalSpace(): i64 {
        return this.file!.getTotalSpace();
    }
    

    getFreeSpace(): i64 {
        return this.file!.getFreeSpace();
    }
    

    getUsableSpace(): i64 {
        return this.file!.getUsableSpace();
    }
    

    compareTo(pathname: JFile | null): i32 {
        return this.file!.compareTo(pathname);
    }
    

    equals(obj: Object | null): bool {
        return TsUtil.getInstance()!.equalsNotstring(this.file, obj);
    }
    

    hashCode(): i32 {
        return JObject.jhashCode(this.file);
    }
    

    toString(): string | null {
        return JObject.jtoString(this.file);
    }
}

