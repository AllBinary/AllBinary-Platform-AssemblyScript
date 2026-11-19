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

@global export class TransformInfoData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.TransformInfoData";
    }
    @lazy static jv_instance: TransformInfoData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TransformInfoData | null {
        if (!TransformInfoData.js_instance) {
            TransformInfoData.js_instance = true;
            TransformInfoData.jv_instance = new TransformInfoData().jinit_TransformInfoData_0();
        }
        return TransformInfoData.jv_instance;
    }
    static set instance(value: TransformInfoData | null) {
        TransformInfoData.js_instance = true;
        TransformInfoData.jv_instance = value;
    }
    PARENT: string | null = null;
    MAPPED: string | null = null;
    NAME: string | null = null;
    DESCRIPTION: string | null = null;
    CATEGORY: string | null = null;
    OBJECTFILENAME: string | null = null;
    OBJECT: string | null = null;
    OBJECTCONFIGFILENAME: string | null = null;
    OBJECTCONFIG: string | null = null;
    TEMPLATEFILENAME: string | null = null;
    TEMPLATE: string | null = null;
    DATAFILENAME: string | null = null;
    DATA: string | null = null;
    LABEL: string | null = null;
    OWNER: string | null = null;
    PARTIAL: string | null = null;

    jfields_TransformInfoData(): void {
    this.PARENT = "TRANSFORM_INFO_PARENT";
    this.MAPPED = "TRANSFORM_INFO_MAPPED";
    this.NAME = "TRANSFORM_INFO_NAME";
    this.DESCRIPTION = "TRANSFORM_INFO_DESCRIPTION";
    this.CATEGORY = "TRANSFORM_INFO_CATEGORY";
    this.OBJECTFILENAME = "TRANSFORM_INFO_OBJECTFILENAME";
    this.OBJECT = "TRANSFORM_INFO_OBJECT";
    this.OBJECTCONFIGFILENAME = "TRANSFORM_INFO_OBJECTCONFIGFILENAME";
    this.OBJECTCONFIG = "TRANSFORM_INFO_OBJECTCONFIG";
    this.TEMPLATEFILENAME = "TRANSFORM_INFO_TEMPLATEFILENAME";
    this.TEMPLATE = "TRANSFORM_INFO_TEMPLATE";
    this.DATAFILENAME = "TRANSFORM_INFO_DATAFILENAME";
    this.DATA = "TRANSFORM_INFO_DATA";
    this.LABEL = "TRANSFORM_INFO_LABEL";
    this.OWNER = jstr("OWNER_") + jstr(this.NAME);
    this.PARTIAL = jstr("PARTIAL_") + jstr(this.NAME);
    }
    

    static getInstance(): TransformInfoData | null {
        return TransformInfoData.instance;
    }
    

    jinit_TransformInfoData_0(): TransformInfoData {
        super.jinit_JObject_0();
        this.jfields_TransformInfoData();
        return this;
    }
}

