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

@global export class ColorsData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.style.color.ColorsData";
    }
    @lazy static jv_instance: ColorsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ColorsData | null {
        if (!ColorsData.js_instance) {
            ColorsData.js_instance = true;
            ColorsData.jv_instance = new ColorsData().jinit_ColorsData_0();
        }
        return ColorsData.jv_instance;
    }
    static set instance(value: ColorsData | null) {
        ColorsData.js_instance = true;
        ColorsData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_ColorsData(): void {
    this.NAME = "COLORS_NAME";
    }
    

    static getInstance(): ColorsData | null {
        return ColorsData.instance;
    }
    

    jinit_ColorsData_0(): ColorsData {
        super.jinit_JObject_0();
        this.jfields_ColorsData();
        return this;
    }
}

