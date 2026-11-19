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

@global export class StylesData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.StylesData";
    }
    @lazy static jv_instance: StylesData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StylesData | null {
        if (!StylesData.js_instance) {
            StylesData.js_instance = true;
            StylesData.jv_instance = new StylesData().jinit_StylesData_0();
        }
        return StylesData.jv_instance;
    }
    static set instance(value: StylesData | null) {
        StylesData.js_instance = true;
        StylesData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_StylesData(): void {
    this.NAME = "STYLES_NAME";
    }
    

    static getInstance(): StylesData | null {
        return StylesData.instance;
    }
    

    jinit_StylesData_0(): StylesData {
        super.jinit_JObject_0();
        this.jfields_StylesData();
        return this;
    }
}

