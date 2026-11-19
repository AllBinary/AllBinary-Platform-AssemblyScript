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

@global export class FileData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileData";
    }
    @lazy static jv_instance: FileData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileData | null {
        if (!FileData.js_instance) {
            FileData.js_instance = true;
            FileData.jv_instance = new FileData().jinit_FileData_0();
        }
        return FileData.jv_instance;
    }
    static set instance(value: FileData | null) {
        FileData.js_instance = true;
        FileData.jv_instance = value;
    }
    NAME: string | null = null;
    ISFILE: string | null = null;
    ISDIRECTORY: string | null = null;
    ISHIDDEN: string | null = null;
    ISABSOLUTE: string | null = null;
    ROOT_NAME: string | null = null;
    PATH: string | null = null;
    ABSOLUTE_PATH: string | null = null;
    CANONICAL_PATH: string | null = null;
    PARENT: string | null = null;
    MINLEN: i32 = 0;
    MAXLEN: i32 = 0;
    MAXIMAGEFILESIZE: i32 = 0;
    MINIMAGEFILESIZE: i32 = 0;
    MAXDOWNLOADABLEFILESIZE: i32 = 0;
    MINDOWNLOADABLEFILESIZE: i32 = 0;

    jfields_FileData(): void {
    this.NAME = "FILE_NAME";
    this.ISFILE = "FILE_ISFILE";
    this.ISDIRECTORY = "FILE_ISDIRECTORY";
    this.ISHIDDEN = "FILE_ISHIDDEN";
    this.ISABSOLUTE = "FILE_ISABSOLUTE";
    this.ROOT_NAME = "FILE_ROOT_NAME";
    this.PATH = "FILE_PATH";
    this.ABSOLUTE_PATH = "FILE_ABSOLUTE_PATH";
    this.CANONICAL_PATH = "FILE_CANONICAL_PATH";
    this.PARENT = "FILE_PARENT";
    this.MINLEN = 1;
    this.MAXLEN = 120;
    this.MAXIMAGEFILESIZE = 1048576;
    this.MINIMAGEFILESIZE = 32;
    this.MAXDOWNLOADABLEFILESIZE = 1048576 * 20;
    this.MINDOWNLOADABLEFILESIZE = 1;
    }
    

    static getInstance(): FileData | null {
        return FileData.instance;
    }
    

    jinit_FileData_0(): FileData {
        super.jinit_JObject_0();
        this.jfields_FileData();
        return this;
    }
}

