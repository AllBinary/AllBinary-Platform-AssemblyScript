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
// package org.allbinary.logic.io
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.path.AbPath

@global export class FileStreamFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.FileStreamFactory";
    }
    @lazy static jv_SINGLETON: Object | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): Object | null {
        if (!FileStreamFactory.js_SINGLETON) {
            FileStreamFactory.js_SINGLETON = true;
            FileStreamFactory.jv_SINGLETON = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return FileStreamFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: Object | null) {
        FileStreamFactory.js_SINGLETON = true;
        FileStreamFactory.jv_SINGLETON = value;
    }
    

    static getInstance(): FileStreamFactory | null {
        if (FileStreamFactory.SINGLETON == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            FileStreamFactory.SINGLETON = new FileStreamFactory().jinit_FileStreamFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<FileStreamFactory | null>(FileStreamFactory.SINGLETON);
    }
    

    jinit_FileStreamFactory_0(): FileStreamFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getFileInputStreamInstance(path: string | null, fileName: string | null): AbFileInputStream | null {
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(path, fileName); if (JThrowable.pending !== null) return null;
        let file: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) return null;
        return AbFileInputStream.createFromAbFile(file);
    }
    

    getFileOutputStreamInstance(path: string | null, fileName: string | null): AbFileOutputStream | null {
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(path, fileName); if (JThrowable.pending !== null) return null;
        let file: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) return null;
        if (file!.exists()) {
            file!.delete_(); if (JThrowable.pending !== null) return null;
            file!.createNewFile(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return AbFileOutputStream.createFromAbFile(file);
    }
    

    delete_(path: string | null, fileName: string | null): void {
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(path, fileName); if (JThrowable.pending !== null) return;
        let file: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) return;
        file!.delete_(); if (JThrowable.pending !== null) return;
    }
}

