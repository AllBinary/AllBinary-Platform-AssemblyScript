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

@global export class HtmlMetasData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetasData";
    }
    @lazy static jv_instance: HtmlMetasData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HtmlMetasData | null {
        if (!HtmlMetasData.js_instance) {
            HtmlMetasData.js_instance = true;
            HtmlMetasData.jv_instance = new HtmlMetasData().jinit_HtmlMetasData_0();
        }
        return HtmlMetasData.jv_instance;
    }
    static set instance(value: HtmlMetasData | null) {
        HtmlMetasData.js_instance = true;
        HtmlMetasData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_HtmlMetasData(): void {
    this.NAME = "HTMLMETAS_NAME";
    }
    

    jinit_HtmlMetasData_0(): HtmlMetasData {
        super.jinit_JObject_0();
        this.jfields_HtmlMetasData();
        return this;
    }
    

    static getInstance(): HtmlMetasData | null {
        return HtmlMetasData.instance;
    }
}

