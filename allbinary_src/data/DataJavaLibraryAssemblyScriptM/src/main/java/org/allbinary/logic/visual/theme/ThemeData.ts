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

@global export class ThemeData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.theme.ThemeData";
    }
    @lazy static jv_instance: ThemeData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThemeData | null {
        if (!ThemeData.js_instance) {
            ThemeData.js_instance = true;
            ThemeData.jv_instance = new ThemeData().jinit_ThemeData_0();
        }
        return ThemeData.jv_instance;
    }
    static set instance(value: ThemeData | null) {
        ThemeData.js_instance = true;
        ThemeData.jv_instance = value;
    }
    NAME: string | null = null;
    PATH: string | null = null;
    PREVIEW_IMAGE_NAME: string | null = null;
    PREVIEW_IMAGE_PATH: string | null = null;

    jfields_ThemeData(): void {
    this.NAME = "THEME_NAME";
    this.PATH = "THEME_PATH";
    this.PREVIEW_IMAGE_NAME = "THEME_PREVIEW_IMAGE_NAME";
    this.PREVIEW_IMAGE_PATH = "THEME_PREVIEW_IMAGE_PATH";
    }
    

    static getInstance(): ThemeData | null {
        return ThemeData.instance;
    }
    

    jinit_ThemeData_0(): ThemeData {
        super.jinit_JObject_0();
        this.jfields_ThemeData();
        return this;
    }
}

