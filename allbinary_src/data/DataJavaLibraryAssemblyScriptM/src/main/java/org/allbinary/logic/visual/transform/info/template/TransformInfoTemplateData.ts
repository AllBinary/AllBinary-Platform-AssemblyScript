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
// package org.allbinary.logic.visual.transform.info.template

@global export class TransformInfoTemplateData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.template.TransformInfoTemplateData";
    }
    @lazy static jv_instance: TransformInfoTemplateData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TransformInfoTemplateData | null {
        if (!TransformInfoTemplateData.js_instance) {
            TransformInfoTemplateData.js_instance = true;
            TransformInfoTemplateData.jv_instance = new TransformInfoTemplateData().jinit_TransformInfoTemplateData_0();
        }
        return TransformInfoTemplateData.jv_instance;
    }
    static set instance(value: TransformInfoTemplateData | null) {
        TransformInfoTemplateData.js_instance = true;
        TransformInfoTemplateData.jv_instance = value;
    }
    UNCRYPTED_EXTENSION: string | null = null;
    ENCRYPTED_EXTENSION: string | null = null;

    jfields_TransformInfoTemplateData(): void {
    this.UNCRYPTED_EXTENSION = "xsl";
    this.ENCRYPTED_EXTENSION = "abv";
    }
    

    static getInstance(): TransformInfoTemplateData | null {
        return TransformInfoTemplateData.instance;
    }
    

    jinit_TransformInfoTemplateData_0(): TransformInfoTemplateData {
        super.jinit_JObject_0();
        this.jfields_TransformInfoTemplateData();
        return this;
    }
}

