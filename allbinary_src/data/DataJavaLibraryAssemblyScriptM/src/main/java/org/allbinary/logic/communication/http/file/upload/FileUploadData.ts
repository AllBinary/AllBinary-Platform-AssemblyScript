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
// package org.allbinary.logic.communication.http.file.upload

@global export class FileUploadData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.http.file.upload.FileUploadData";
    }
    @lazy static jv_instance: FileUploadData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileUploadData | null {
        if (!FileUploadData.js_instance) {
            FileUploadData.js_instance = true;
            FileUploadData.jv_instance = new FileUploadData().jinit_FileUploadData_0();
        }
        return FileUploadData.jv_instance;
    }
    static set instance(value: FileUploadData | null) {
        FileUploadData.js_instance = true;
        FileUploadData.jv_instance = value;
    }
    FILE: string | null = null;
    UPLOAD_TO_FILE_PATH: string | null = null;
    FILE_DATA: string | null = null;

    jfields_FileUploadData(): void {
    this.FILE = "download_file_permissions.xml";
    this.UPLOAD_TO_FILE_PATH = "FILE_UPLOAD_UPLOAD_TO_FILE_PATH";
    this.FILE_DATA = "FILE_UPLOAD_FILE_DATA";
    }

    jinit_FileUploadData_0(): FileUploadData {
        super.jinit_JObject_0();
        this.jfields_FileUploadData();
        return this;
    }
    

    static getInstance(): FileUploadData | null {
        return FileUploadData.instance;
    }
}

