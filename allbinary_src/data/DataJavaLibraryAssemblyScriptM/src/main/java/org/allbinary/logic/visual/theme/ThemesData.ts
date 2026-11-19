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
// package org.allbinary.logic.visual.theme

@global export class ThemesData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.theme.ThemesData";
    }
    @lazy static jv_instance: ThemesData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThemesData | null {
        if (!ThemesData.js_instance) {
            ThemesData.js_instance = true;
            ThemesData.jv_instance = new ThemesData().jinit_ThemesData_0();
        }
        return ThemesData.jv_instance;
    }
    static set instance(value: ThemesData | null) {
        ThemesData.js_instance = true;
        ThemesData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_ThemesData(): void {
    this.NAME = "THEMES_NAME";
    }
    

    static getInstance(): ThemesData | null {
        return ThemesData.instance;
    }
    

    jinit_ThemesData_0(): ThemesData {
        super.jinit_JObject_0();
        this.jfields_ThemesData();
        return this;
    }
}

