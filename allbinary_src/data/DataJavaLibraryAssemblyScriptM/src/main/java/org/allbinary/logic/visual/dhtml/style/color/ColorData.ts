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
// package org.allbinary.logic.visual.dhtml.style.color

@global export class ColorData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.color.ColorData";
    }
    @lazy static jv_instance: ColorData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ColorData | null {
        if (!ColorData.js_instance) {
            ColorData.js_instance = true;
            ColorData.jv_instance = new ColorData().jinit_ColorData_0();
        }
        return ColorData.jv_instance;
    }
    static set instance(value: ColorData | null) {
        ColorData.js_instance = true;
        ColorData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_ColorData(): void {
    this.NAME = "COLOR_NAME";
    }
    

    static getInstance(): ColorData | null {
        return ColorData.instance;
    }
    

    jinit_ColorData_0(): ColorData {
        super.jinit_JObject_0();
        this.jfields_ColorData();
        return this;
    }
}

