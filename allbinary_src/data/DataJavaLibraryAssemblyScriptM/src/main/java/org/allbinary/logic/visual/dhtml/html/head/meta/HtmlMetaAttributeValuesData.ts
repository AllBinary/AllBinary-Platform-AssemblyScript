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

@global export class HtmlMetaAttributeValuesData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaAttributeValuesData";
    }
    @lazy static jv_instance: HtmlMetaAttributeValuesData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HtmlMetaAttributeValuesData | null {
        if (!HtmlMetaAttributeValuesData.js_instance) {
            HtmlMetaAttributeValuesData.js_instance = true;
            HtmlMetaAttributeValuesData.jv_instance = new HtmlMetaAttributeValuesData().jinit_HtmlMetaAttributeValuesData_0();
        }
        return HtmlMetaAttributeValuesData.jv_instance;
    }
    static set instance(value: HtmlMetaAttributeValuesData | null) {
        HtmlMetaAttributeValuesData.js_instance = true;
        HtmlMetaAttributeValuesData.jv_instance = value;
    }
    ABSTRACT: string | null = null;
    DESCRIPTION: string | null = null;
    KEYWORDS: string | null = null;

    jfields_HtmlMetaAttributeValuesData(): void {
    this.ABSTRACT = "abstract";
    this.DESCRIPTION = "description";
    this.KEYWORDS = "keywords";
    }
    

    static getInstance(): HtmlMetaAttributeValuesData | null {
        return HtmlMetaAttributeValuesData.instance;
    }
    

    jinit_HtmlMetaAttributeValuesData_0(): HtmlMetaAttributeValuesData {
        super.jinit_JObject_0();
        this.jfields_HtmlMetaAttributeValuesData();
        return this;
    }
}

