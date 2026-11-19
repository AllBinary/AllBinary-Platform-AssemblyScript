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
// package org.allbinary.logic.visual.transform.template.customizer.widgets.title

@global export class TitleData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleData";
    }
    @lazy static jv_instance: TitleData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TitleData | null {
        if (!TitleData.js_instance) {
            TitleData.js_instance = true;
            TitleData.jv_instance = new TitleData().jinit_TitleData_0();
        }
        return TitleData.jv_instance;
    }
    static set instance(value: TitleData | null) {
        TitleData.js_instance = true;
        TitleData.jv_instance = value;
    }
    NAME: string | null = null;
    TEXT: string | null = null;
    VIEWNAMEKEY: string | null = null;
    MAXLEN: i32 = 0;

    jfields_TitleData(): void {
    this.NAME = "TITLE_NAME";
    this.TEXT = "TITLE_TEXT";
    this.VIEWNAMEKEY = "Title";
    this.MAXLEN = 255;
    }
    

    static getInstance(): TitleData | null {
        return TitleData.instance;
    }
    

    jinit_TitleData_0(): TitleData {
        super.jinit_JObject_0();
        this.jfields_TitleData();
        return this;
    }
}

