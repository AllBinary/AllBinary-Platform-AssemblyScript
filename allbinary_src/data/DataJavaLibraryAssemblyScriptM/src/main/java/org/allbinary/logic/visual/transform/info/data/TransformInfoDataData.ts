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
// package org.allbinary.logic.visual.transform.info.data
// import org.allbinary.logic.io.file.CommonDataFileStrings

@global export class TransformInfoDataData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.data.TransformInfoDataData";
    }
    @lazy static jv_instance: TransformInfoDataData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TransformInfoDataData | null {
        if (!TransformInfoDataData.js_instance) {
            TransformInfoDataData.js_instance = true;
            TransformInfoDataData.jv_instance = new TransformInfoDataData().jinit_TransformInfoDataData_0();
        }
        return TransformInfoDataData.jv_instance;
    }
    static set instance(value: TransformInfoDataData | null) {
        TransformInfoDataData.js_instance = true;
        TransformInfoDataData.jv_instance = value;
    }
    UNCRYPTED_EXTENSION: string | null = null;
    ENCRYPTED_EXTENSION: string | null = null;

    jfields_TransformInfoDataData(): void {
    this.UNCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.UNCRYPTED_EXTENSION;
    this.ENCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.ENCRYPTED_EXTENSION;
    }
    

    static getInstance(): TransformInfoDataData | null {
        return TransformInfoDataData.instance;
    }
    

    jinit_TransformInfoDataData_0(): TransformInfoDataData {
        super.jinit_JObject_0();
        this.jfields_TransformInfoDataData();
        return this;
    }
}

