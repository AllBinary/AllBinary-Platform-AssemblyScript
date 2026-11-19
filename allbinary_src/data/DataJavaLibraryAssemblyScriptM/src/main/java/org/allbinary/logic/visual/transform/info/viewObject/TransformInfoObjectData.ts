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
// package org.allbinary.logic.visual.transform.info.viewObject

@global export class TransformInfoObjectData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.viewObject.TransformInfoObjectData";
    }
    @lazy static jv_instance: TransformInfoObjectData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TransformInfoObjectData | null {
        if (!TransformInfoObjectData.js_instance) {
            TransformInfoObjectData.js_instance = true;
            TransformInfoObjectData.jv_instance = new TransformInfoObjectData().jinit_TransformInfoObjectData_0();
        }
        return TransformInfoObjectData.jv_instance;
    }
    static set instance(value: TransformInfoObjectData | null) {
        TransformInfoObjectData.js_instance = true;
        TransformInfoObjectData.jv_instance = value;
    }
    UNCRYPTED_EXTENSION: string | null = null;
    ENCRYPTED_EXTENSION: string | null = null;

    jfields_TransformInfoObjectData(): void {
    this.UNCRYPTED_EXTENSION = "class";
    this.ENCRYPTED_EXTENSION = "abw";
    }
    

    static getInstance(): TransformInfoObjectData | null {
        return TransformInfoObjectData.instance;
    }
    

    jinit_TransformInfoObjectData_0(): TransformInfoObjectData {
        super.jinit_JObject_0();
        this.jfields_TransformInfoObjectData();
        return this;
    }
}

