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
// package org.allbinary.logic.visual.transform.template.customizer.widgets.logo

@global export class LogoData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.template.customizer.widgets.logo.LogoData";
    }
    @lazy static jv_instance: LogoData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogoData | null {
        if (!LogoData.js_instance) {
            LogoData.js_instance = true;
            LogoData.jv_instance = new LogoData().jinit_LogoData_0();
        }
        return LogoData.jv_instance;
    }
    static set instance(value: LogoData | null) {
        LogoData.js_instance = true;
        LogoData.jv_instance = value;
    }
    NAME: string | null = null;
    IMAGEPATH: string | null = null;
    IMAGEFILENAME: string | null = null;
    IMAGE: string | null = null;

    jfields_LogoData(): void {
    this.NAME = "LOGO_NAME";
    this.IMAGEPATH = "LOGO_IMAGE_PATH";
    this.IMAGEFILENAME = "LOGO_IMAGE_FILE_NAME";
    this.IMAGE = "LOGO_IMAGE";
    }
    

    static getInstance(): LogoData | null {
        return LogoData.instance;
    }
    

    jinit_LogoData_0(): LogoData {
        super.jinit_JObject_0();
        this.jfields_LogoData();
        return this;
    }
}

