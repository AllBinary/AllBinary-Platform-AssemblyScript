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

@global export class HtmlMetaAttributesData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaAttributesData";
    }
    @lazy static jv_instance: HtmlMetaAttributesData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HtmlMetaAttributesData | null {
        if (!HtmlMetaAttributesData.js_instance) {
            HtmlMetaAttributesData.js_instance = true;
            HtmlMetaAttributesData.jv_instance = new HtmlMetaAttributesData().jinit_HtmlMetaAttributesData_0();
        }
        return HtmlMetaAttributesData.jv_instance;
    }
    static set instance(value: HtmlMetaAttributesData | null) {
        HtmlMetaAttributesData.js_instance = true;
        HtmlMetaAttributesData.jv_instance = value;
    }
    NAME_VALUE: string | null = null;
    HTTP_EQUIV_VALUE: string | null = null;

    jfields_HtmlMetaAttributesData(): void {
    this.NAME_VALUE = "name";
    this.HTTP_EQUIV_VALUE = "http-equiv";
    }
    

    static getInstance(): HtmlMetaAttributesData | null {
        return HtmlMetaAttributesData.instance;
    }
    

    jinit_HtmlMetaAttributesData_0(): HtmlMetaAttributesData {
        super.jinit_JObject_0();
        this.jfields_HtmlMetaAttributesData();
        return this;
    }
}

