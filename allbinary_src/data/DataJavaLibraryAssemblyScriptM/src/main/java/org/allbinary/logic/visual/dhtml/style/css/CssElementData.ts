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
// package org.allbinary.logic.visual.dhtml.style.css

@global export class CssElementData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.css.CssElementData";
    }
    @lazy static jv_instance: CssElementData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CssElementData | null {
        if (!CssElementData.js_instance) {
            CssElementData.js_instance = true;
            CssElementData.jv_instance = new CssElementData().jinit_CssElementData_0();
        }
        return CssElementData.jv_instance;
    }
    static set instance(value: CssElementData | null) {
        CssElementData.js_instance = true;
        CssElementData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_CssElementData(): void {
    this.NAME = "CSS_ELEMENT_NAME";
    }
    

    static getInstance(): CssElementData | null {
        return CssElementData.instance;
    }
    

    jinit_CssElementData_0(): CssElementData {
        super.jinit_JObject_0();
        this.jfields_CssElementData();
        return this;
    }
}

