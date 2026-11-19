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
// package org.allbinary.globals

@global export class URLGLOBALS extends JObject {

    jclassName(): string {
        return "org.allbinary.globals.URLGLOBALS";
    }
    @lazy static jv_urlGlobalsInterface: UrlGlobalsInterface | null = null;
    @lazy static js_urlGlobalsInterface: bool = false;
    static get urlGlobalsInterface(): UrlGlobalsInterface | null {
        if (!URLGLOBALS.js_urlGlobalsInterface) {
            URLGLOBALS.js_urlGlobalsInterface = true;
            URLGLOBALS.jv_urlGlobalsInterface = AppUrlGlobals.NULL_APP_URL_GLOBALS;
        }
        return URLGLOBALS.jv_urlGlobalsInterface;
    }
    static set urlGlobalsInterface(value: UrlGlobalsInterface | null) {
        URLGLOBALS.js_urlGlobalsInterface = true;
        URLGLOBALS.jv_urlGlobalsInterface = value;
    }

    jinit_URLGLOBALS_0(): URLGLOBALS {
        super.jinit_JObject_0();
        return this;
    }
    

    static init(urlGlobalsInterface: UrlGlobalsInterface | null): void {
        URLGLOBALS.urlGlobalsInterface = urlGlobalsInterface;
    }
    

    static isTestingMode(): bool {
        return URLGLOBALS.urlGlobalsInterface!.isTestingMode();
    }
    

    static getWebappPath(): string | null {
        return URLGLOBALS.urlGlobalsInterface!.getWebappPath();
    }
    

    static getTestHtmlPath(): string | null {
        return URLGLOBALS.urlGlobalsInterface!.getTestHtmlPath();
    }
    

    static getMainPath(): string | null {
        return URLGLOBALS.urlGlobalsInterface!.getMainPath();
    }
}

