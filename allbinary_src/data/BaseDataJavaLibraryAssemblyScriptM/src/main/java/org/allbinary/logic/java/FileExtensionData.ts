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
// package org.allbinary.logic.java

@global export class FileExtensionData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.FileExtensionData";
    }
    @lazy static jv_instance: FileExtensionData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileExtensionData | null {
        if (!FileExtensionData.js_instance) {
            FileExtensionData.js_instance = true;
            FileExtensionData.jv_instance = new FileExtensionData().jinit_FileExtensionData_0();
        }
        return FileExtensionData.jv_instance;
    }
    static set instance(value: FileExtensionData | null) {
        FileExtensionData.js_instance = true;
        FileExtensionData.jv_instance = value;
    }
    DOT_JAVA_SOURCE: string | null = null;
    JAVA_SOURCE: string | null = null;

    jfields_FileExtensionData(): void {
    this.DOT_JAVA_SOURCE = ".java";
    this.JAVA_SOURCE = "java";
    }
    

    static getInstance(): FileExtensionData | null {
        return FileExtensionData.instance;
    }
    

    jinit_FileExtensionData_0(): FileExtensionData {
        super.jinit_JObject_0();
        this.jfields_FileExtensionData();
        return this;
    }
}

