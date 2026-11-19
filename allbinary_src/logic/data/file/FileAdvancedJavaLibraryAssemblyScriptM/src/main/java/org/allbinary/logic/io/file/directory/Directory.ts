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
// package org.allbinary.logic.io.file.directory
// import java.io.FileFilter
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.FileFactory
// import org.allbinary.logic.io.file.FileWrapperUtil
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class Directory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.directory.Directory";
    }
    @lazy static jv_instance: Directory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Directory | null {
        if (!Directory.js_instance) {
            Directory.js_instance = true;
            Directory.jv_instance = new Directory().jinit_Directory_0();
        }
        return Directory.jv_instance;
    }
    static set instance(value: Directory | null) {
        Directory.js_instance = true;
        Directory.jv_instance = value;
    }
    

    static getInstance(): Directory | null {
        return Directory.instance;
    }
    

    jinit_Directory_0(): Directory {
        super.jinit_JObject_0();
        return this;
    }
    

    create_1_AbPath(directoryAbPath: AbPath | null): bool {
        return this.create_1_String(directoryAbPath!.toFileSystemString());
    }
    

    remove_1_AbPath(existingDirectoryAbPath: AbPath | null): void {
        this.remove_1_String(existingDirectoryAbPath!.toFileSystemString()); if (JThrowable.pending !== null) return;
    }
    

    create_1_String(directory: string | null): bool {
        do {
            let directoryFile: AbFile | null = FileFactory.getInstance()!.getInstance1(directory); if (JThrowable.pending !== null) break;
            if (!directoryFile!.isDirectory()) {
                PreLogUtil.put(jstr("Creating Directories: ") + jstr(directory), this, "create"); if (JThrowable.pending !== null) break;
                if (!directoryFile!.mkdirs()) {
                    return false;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE(jstr("Error Creating Directories: ") + jstr(directory), this, "create", e); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    remove_1_String(existingDirectory: string | null): void {
        let existingDirectoryFile: AbFile | null = FileFactory.getInstance()!.getInstance1(existingDirectory); if (JThrowable.pending !== null) return;
        if (existingDirectoryFile!.isDirectory()) {
            if (existingDirectoryFile!.list()!.length > 0) {
                { JThrowable.raise(new JException().jinit_JException_1(jstr(jstr("Did not remove category: ") + jstr(existingDirectory)) + jstr(" because files exist"))); return; }
            } else if (existingDirectoryFile!.delete_()) {
                PreLogUtil.put(jstr("Successfully Removed: ") + jstr(existingDirectory), "Directory", "remove"); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1(jstr("Category Directory Is Missing:") + jstr(existingDirectory))); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    search_2_FileFilterAbFile(fileFilter: FileFilter | null, file: AbFile | null): BasicArrayList | null {
        return this.search_3_FileFilterAbFileboolean(fileFilter, file, false);
    }
    

    search_3_FileFilterAbFileboolean(fileFilter: FileFilter | null, file: AbFile | null, isRecursiveSearch: bool): BasicArrayList | null {
        let fileList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let recursiveFileList: BasicArrayList | null = null;
        if (file!.isDirectory()) {
            let fileArray: StaticArray<Object | null> | null = file!.listFilesFileFilter(fileFilter); if (JThrowable.pending !== null) return null;
            if (fileArray == null) {
                return fileList;
            }
            let files: StaticArray<AbFile | null> | null = FileWrapperUtil.wrapFiles(fileArray); if (JThrowable.pending !== null) return null;
            if (files == null) {
                return fileList;
            }
            let size: i32 = files!.length;
            for (let index: i32 = 0; index < size; index++) {
                fileList!.add(files![index]); if (JThrowable.pending !== null) return null;
                if (isRecursiveSearch) {
                    recursiveFileList = this.search_3_FileFilterAbFileboolean(fileFilter, files![index], isRecursiveSearch); if (JThrowable.pending !== null) return null;
                    fileList!.addAllList(recursiveFileList); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return fileList;
    }
    

    search_1(file: AbFile | null): BasicArrayList | null {
        return this.search_2_AbFileboolean(file, false);
    }
    

    search_2_AbFileboolean(file: AbFile | null, isRecursiveSearch: bool): BasicArrayList | null {
        let fileList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let recursiveFileList: BasicArrayList | null = null;
        if (file!.isDirectory()) {
            let fileArray: StaticArray<Object | null> | null = file!.listFiles(); if (JThrowable.pending !== null) return null;
            if (fileArray == null) {
                return fileList;
            }
            let files: StaticArray<AbFile | null> | null = FileWrapperUtil.wrapFiles(fileArray); if (JThrowable.pending !== null) return null;
            if (files == null) {
                return fileList;
            }
            for (let index: i32 = 0; index < files!.length; index++) {
                fileList!.add(files![index]); if (JThrowable.pending !== null) return null;
                if (isRecursiveSearch) {
                    recursiveFileList = this.search_2_AbFileboolean(files![index], isRecursiveSearch); if (JThrowable.pending !== null) return null;
                    fileList!.addAllList(recursiveFileList); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return fileList;
    }
    

    search_2_StringAbFile(searchValue: string | null, file: AbFile | null): BasicArrayList | null {
        return this.search_3_StringAbFileboolean(searchValue, file, false);
    }
    

    search_3_StringAbFileboolean(searchValue: string | null, file: AbFile | null, isRecursiveSearch: bool): BasicArrayList | null {
        let fileList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let recursiveFileList: BasicArrayList | null = null;
        if (file!.isDirectory()) {
            let fileArray: StaticArray<Object | null> | null = file!.listFiles(); if (JThrowable.pending !== null) return null;
            if (fileArray == null) {
                return fileList;
            }
            let files: StaticArray<AbFile | null> | null = FileWrapperUtil.wrapFiles(fileArray); if (JThrowable.pending !== null) return null;
            if (files == null) {
                return fileList;
            }
            for (let index: i32 = 0; index < files!.length; index++) {
                if (JString.indexOf1(files![index]!.getPath(), searchValue) >= 0) {
                    fileList!.add(files![index]); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
                if (isRecursiveSearch) {
                    recursiveFileList = this.search_3_StringAbFileboolean(searchValue, files![index], isRecursiveSearch); if (JThrowable.pending !== null) return null;
                    fileList!.addAllList(recursiveFileList); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return fileList;
    }
    

    search_2_intAbFile(level: i32, file: AbFile | null): BasicArrayList | null {
        return this.search_3_intAbFileboolean(level, file, false);
    }
    

    search_3_intAbFileboolean(level: i32, file: AbFile | null, isRecursiveSearch: bool): BasicArrayList | null {
        let fileList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let recursiveFileList: BasicArrayList | null = null;
        if (file!.isDirectory()) {
            let fileArray: StaticArray<Object | null> | null = file!.listFiles(); if (JThrowable.pending !== null) return null;
            if (fileArray == null) {
                return fileList;
            }
            let files: StaticArray<AbFile | null> | null = FileWrapperUtil.wrapFiles(fileArray); if (JThrowable.pending !== null) return null;
            if (files == null) {
                return fileList;
            }
            for (let index: i32 = 0; index < files!.length; index++) {
                fileList!.add(files![index]); if (JThrowable.pending !== null) return null;
                if (level <= 0) {
                    return fileList;
                }
                recursiveFileList = this.search_3_intAbFileboolean(level - 1, files![index], isRecursiveSearch); if (JThrowable.pending !== null) return null;
                fileList!.addAllList(recursiveFileList); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return fileList;
    }
}

