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

@global export class FilePathData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FilePathData";
    }
    @lazy static jv_instance: FilePathData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FilePathData | null {
        if (!FilePathData.js_instance) {
            FilePathData.js_instance = true;
            FilePathData.jv_instance = new FilePathData().jinit_FilePathData_0();
        }
        return FilePathData.jv_instance;
    }
    static set instance(value: FilePathData | null) {
        FilePathData.js_instance = true;
        FilePathData.jv_instance = value;
    }
    SEPARATORCHAR: u16 = 0;
    PATH_START: string | null = null;

    jfields_FilePathData(): void {
    this.SEPARATORCHAR = (<u16>0x5C);
    this.PATH_START = "\\\\";
    }
    

    static getInstance(): FilePathData | null {
        return FilePathData.instance;
    }
    

    jinit_FilePathData_0(): FilePathData {
        super.jinit_JObject_0();
        this.jfields_FilePathData();
        return this;
    }
}

