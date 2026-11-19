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

@global export class CssPropertyValueData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.css.property.CssPropertyValueData";
    }
    @lazy static jv_instance: CssPropertyValueData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CssPropertyValueData | null {
        if (!CssPropertyValueData.js_instance) {
            CssPropertyValueData.js_instance = true;
            CssPropertyValueData.jv_instance = new CssPropertyValueData().jinit_CssPropertyValueData_0();
        }
        return CssPropertyValueData.jv_instance;
    }
    static set instance(value: CssPropertyValueData | null) {
        CssPropertyValueData.js_instance = true;
        CssPropertyValueData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_CssPropertyValueData(): void {
    this.NAME = "CSS_PROPERTY_VALUE";
    }
    

    static getInstance(): CssPropertyValueData | null {
        return CssPropertyValueData.instance;
    }
    

    jinit_CssPropertyValueData_0(): CssPropertyValueData {
        super.jinit_JObject_0();
        this.jfields_CssPropertyValueData();
        return this;
    }
}

