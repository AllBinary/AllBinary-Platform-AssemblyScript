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
// package org.allbinary.logic.visual.dhtml.style

@global export class StyleData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.StyleData";
    }
    @lazy static jv_instance: StyleData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StyleData | null {
        if (!StyleData.js_instance) {
            StyleData.js_instance = true;
            StyleData.jv_instance = new StyleData().jinit_StyleData_0();
        }
        return StyleData.jv_instance;
    }
    static set instance(value: StyleData | null) {
        StyleData.js_instance = true;
        StyleData.jv_instance = value;
    }
    NAME: string | null = null;
    NAMEMAXLEN: i32 = 0;

    jfields_StyleData(): void {
    this.NAME = "STYLE_NAME";
    this.NAMEMAXLEN = 255;
    }
    

    static getInstance(): StyleData | null {
        return StyleData.instance;
    }
    

    jinit_StyleData_0(): StyleData {
        super.jinit_JObject_0();
        this.jfields_StyleData();
        return this;
    }
}

