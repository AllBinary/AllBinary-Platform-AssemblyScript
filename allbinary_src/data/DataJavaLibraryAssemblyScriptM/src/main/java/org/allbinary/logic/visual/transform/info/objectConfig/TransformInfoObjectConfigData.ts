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
// package org.allbinary.logic.visual.transform.info.objectConfig
// import org.allbinary.logic.io.file.CommonDataFileStrings

@global export class TransformInfoObjectConfigData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData";
    }
    @lazy static jv_instance: TransformInfoObjectConfigData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TransformInfoObjectConfigData | null {
        if (!TransformInfoObjectConfigData.js_instance) {
            TransformInfoObjectConfigData.js_instance = true;
            TransformInfoObjectConfigData.jv_instance = new TransformInfoObjectConfigData().jinit_TransformInfoObjectConfigData_0();
        }
        return TransformInfoObjectConfigData.jv_instance;
    }
    static set instance(value: TransformInfoObjectConfigData | null) {
        TransformInfoObjectConfigData.js_instance = true;
        TransformInfoObjectConfigData.jv_instance = value;
    }
    NAME: string | null = null;
    VARKEY: string | null = null;
    UNCRYPTED_EXTENSION: string | null = null;
    ENCRYPTED_EXTENSION: string | null = null;

    jfields_TransformInfoObjectConfigData(): void {
    this.NAME = "OBJECTCONFIG_NAME";
    this.VARKEY = "$";
    this.UNCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.UNCRYPTED_EXTENSION;
    this.ENCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.ENCRYPTED_EXTENSION;
    }
    

    static getInstance(): TransformInfoObjectConfigData | null {
        return TransformInfoObjectConfigData.instance;
    }
    

    jinit_TransformInfoObjectConfigData_0(): TransformInfoObjectConfigData {
        super.jinit_JObject_0();
        this.jfields_TransformInfoObjectConfigData();
        return this;
    }
}

