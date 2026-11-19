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
// package org.allbinary.logic.visual.dhtml.html.head.meta

@global export class HtmlMetaData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaData";
    }
    @lazy static jv_instance: HtmlMetaData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HtmlMetaData | null {
        if (!HtmlMetaData.js_instance) {
            HtmlMetaData.js_instance = true;
            HtmlMetaData.jv_instance = new HtmlMetaData().jinit_HtmlMetaData_0();
        }
        return HtmlMetaData.jv_instance;
    }
    static set instance(value: HtmlMetaData | null) {
        HtmlMetaData.js_instance = true;
        HtmlMetaData.jv_instance = value;
    }
    NAME: string | null = null;
    LABEL: string | null = null;
    VALUE: string | null = null;

    jfields_HtmlMetaData(): void {
    this.NAME = "HTMLMETA_NAME";
    this.LABEL = "HTMLMETA_LABEL";
    this.VALUE = "meta";
    }
    

    jinit_HtmlMetaData_0(): HtmlMetaData {
        super.jinit_JObject_0();
        this.jfields_HtmlMetaData();
        return this;
    }
    

    static getInstance(): HtmlMetaData | null {
        return HtmlMetaData.instance;
    }
}

