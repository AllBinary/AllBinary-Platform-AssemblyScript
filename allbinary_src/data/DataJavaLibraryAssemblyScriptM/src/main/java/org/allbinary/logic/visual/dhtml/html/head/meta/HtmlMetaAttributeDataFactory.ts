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

@global export class HtmlMetaAttributeDataFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaAttributeDataFactory";
    }
    @lazy static jv_instance: HtmlMetaAttributeDataFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HtmlMetaAttributeDataFactory | null {
        if (!HtmlMetaAttributeDataFactory.js_instance) {
            HtmlMetaAttributeDataFactory.js_instance = true;
            HtmlMetaAttributeDataFactory.jv_instance = new HtmlMetaAttributeDataFactory().jinit_HtmlMetaAttributeDataFactory_0();
        }
        return HtmlMetaAttributeDataFactory.jv_instance;
    }
    static set instance(value: HtmlMetaAttributeDataFactory | null) {
        HtmlMetaAttributeDataFactory.js_instance = true;
        HtmlMetaAttributeDataFactory.jv_instance = value;
    }
    NAME: HtmlMetaAttributeData | null = null;
    HTTP_EQUIV: HtmlMetaAttributeData | null = null;
    CONTENT: HtmlMetaAttributeData | null = null;

    jfields_HtmlMetaAttributeDataFactory(): void {
    this.NAME = new HtmlMetaAttributeData().jinit_HtmlMetaAttributeData_2(0, "HTMLMETA_ATTRIBUTE_NAME");
    this.HTTP_EQUIV = new HtmlMetaAttributeData().jinit_HtmlMetaAttributeData_2(1, "HTMLMETA_ATTRIBUTE_HTTPEQUIV");
    this.CONTENT = new HtmlMetaAttributeData().jinit_HtmlMetaAttributeData_2(2, "HTMLMETA_ATTRIBUTE_CONTENT");
    }
    

    static getInstance(): HtmlMetaAttributeDataFactory | null {
        return HtmlMetaAttributeDataFactory.instance;
    }
    

    jinit_HtmlMetaAttributeDataFactory_0(): HtmlMetaAttributeDataFactory {
        super.jinit_JObject_0();
        this.jfields_HtmlMetaAttributeDataFactory();
        return this;
    }
}

