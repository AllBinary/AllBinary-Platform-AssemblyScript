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
// package org.allbinary.logic.visual.transform.info

@global export class TransformInfosData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.TransformInfosData";
    }
    @lazy static jv_instance: TransformInfosData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TransformInfosData | null {
        if (!TransformInfosData.js_instance) {
            TransformInfosData.js_instance = true;
            TransformInfosData.jv_instance = new TransformInfosData().jinit_TransformInfosData_0();
        }
        return TransformInfosData.jv_instance;
    }
    static set instance(value: TransformInfosData | null) {
        TransformInfosData.js_instance = true;
        TransformInfosData.jv_instance = value;
    }
    NAME: string | null = null;
    GROUP: string | null = null;
    ALL: string | null = null;
    PREVIEW: string | null = null;
    SMALL_PREVIEW: string | null = null;

    jfields_TransformInfosData(): void {
    this.NAME = "TRANSFORM_INFOS_NAME";
    this.GROUP = "TRANSFORM_INFOS_GROUP";
    this.ALL = "TRANSFORM_INFOS_ALL";
    this.PREVIEW = "TRANSFORM_INFOS_PREVIEW";
    this.SMALL_PREVIEW = "TRANSFORM_INFOS_SMALL_PREVIEW";
    }
    

    jinit_TransformInfosData_0(): TransformInfosData {
        super.jinit_JObject_0();
        this.jfields_TransformInfosData();
        return this;
    }
    

    static getInstance(): TransformInfosData | null {
        return TransformInfosData.instance;
    }
}

