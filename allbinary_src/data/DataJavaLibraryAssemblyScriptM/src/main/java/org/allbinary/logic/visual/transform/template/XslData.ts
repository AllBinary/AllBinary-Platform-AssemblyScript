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
// package org.allbinary.logic.visual.transform.template

@global export class XslData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.template.XslData";
    }
    @lazy static jv_instance: XslData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): XslData | null {
        if (!XslData.js_instance) {
            XslData.js_instance = true;
            XslData.jv_instance = new XslData().jinit_XslData_0();
        }
        return XslData.jv_instance;
    }
    static set instance(value: XslData | null) {
        XslData.js_instance = true;
        XslData.jv_instance = value;
    }
    NAME: string | null = null;
    ROOT_IMPORT_URI: string | null = null;

    jfields_XslData(): void {
    this.NAME = "XSL_NAME";
    this.ROOT_IMPORT_URI = "ROOT_IMPORT_URI";
    }
    

    static getInstance(): XslData | null {
        return XslData.instance;
    }
    

    jinit_XslData_0(): XslData {
        super.jinit_JObject_0();
        this.jfields_XslData();
        return this;
    }
}

