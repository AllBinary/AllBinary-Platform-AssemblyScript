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
// package org.allbinary.logic.visual.dhtml.style.css.property.font

@global export class FontFamilyData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.css.property.font.FontFamilyData";
    }
    @lazy static jv_instance: FontFamilyData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FontFamilyData | null {
        if (!FontFamilyData.js_instance) {
            FontFamilyData.js_instance = true;
            FontFamilyData.jv_instance = new FontFamilyData().jinit_FontFamilyData_0();
        }
        return FontFamilyData.jv_instance;
    }
    static set instance(value: FontFamilyData | null) {
        FontFamilyData.js_instance = true;
        FontFamilyData.jv_instance = value;
    }
    NAME: string | null = null;
    VALUE: string | null = null;

    jfields_FontFamilyData(): void {
    this.NAME = "FONT_FAMILY_NAME";
    this.VALUE = "font-family";
    }
    

    static getInstance(): FontFamilyData | null {
        return FontFamilyData.instance;
    }
    

    jinit_FontFamilyData_0(): FontFamilyData {
        super.jinit_JObject_0();
        this.jfields_FontFamilyData();
        return this;
    }
}

