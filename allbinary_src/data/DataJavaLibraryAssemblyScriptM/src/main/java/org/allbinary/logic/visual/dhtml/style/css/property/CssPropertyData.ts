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
// package org.allbinary.logic.visual.dhtml.style.css.property

@global export class CssPropertyData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.css.property.CssPropertyData";
    }
    @lazy static jv_instance: CssPropertyData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CssPropertyData | null {
        if (!CssPropertyData.js_instance) {
            CssPropertyData.js_instance = true;
            CssPropertyData.jv_instance = new CssPropertyData().jinit_CssPropertyData_0();
        }
        return CssPropertyData.jv_instance;
    }
    static set instance(value: CssPropertyData | null) {
        CssPropertyData.js_instance = true;
        CssPropertyData.jv_instance = value;
    }
    NAME: string | null = null;
    VALUES: string | null = null;

    jfields_CssPropertyData(): void {
    this.NAME = "CSS_PROPERTY_NAME";
    this.VALUES = "CSS_PROPERTY_VALUES";
    }
    

    static getInstance(): CssPropertyData | null {
        return CssPropertyData.instance;
    }
    

    jinit_CssPropertyData_0(): CssPropertyData {
        super.jinit_JObject_0();
        this.jfields_CssPropertyData();
        return this;
    }
}

