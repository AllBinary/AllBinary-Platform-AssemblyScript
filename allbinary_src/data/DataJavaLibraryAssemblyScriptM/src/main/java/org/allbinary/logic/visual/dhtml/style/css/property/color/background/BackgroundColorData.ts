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
// package org.allbinary.logic.visual.dhtml.style.css.property.color.background

@global export class BackgroundColorData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.css.property.color.background.BackgroundColorData";
    }
    @lazy static jv_instance: BackgroundColorData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BackgroundColorData | null {
        if (!BackgroundColorData.js_instance) {
            BackgroundColorData.js_instance = true;
            BackgroundColorData.jv_instance = new BackgroundColorData().jinit_BackgroundColorData_0();
        }
        return BackgroundColorData.jv_instance;
    }
    static set instance(value: BackgroundColorData | null) {
        BackgroundColorData.js_instance = true;
        BackgroundColorData.jv_instance = value;
    }
    VALUE: string | null = null;

    jfields_BackgroundColorData(): void {
    this.VALUE = "background-color";
    }
    

    static getInstance(): BackgroundColorData | null {
        return BackgroundColorData.instance;
    }
    

    jinit_BackgroundColorData_0(): BackgroundColorData {
        super.jinit_JObject_0();
        this.jfields_BackgroundColorData();
        return this;
    }
}

