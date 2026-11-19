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
// import org.allbinary.logic.string.StringUtil

//implements
@global export class AppUrlGlobals extends UrlGlobalsInterface {

    jclassName(): string {
        return "org.allbinary.globals.AppUrlGlobals";
    }
    @lazy static jv_NULL_APP_URL_GLOBALS: AppUrlGlobals | null = null;
    @lazy static js_NULL_APP_URL_GLOBALS: bool = false;
    static get NULL_APP_URL_GLOBALS(): AppUrlGlobals | null {
        if (!AppUrlGlobals.js_NULL_APP_URL_GLOBALS) {
            AppUrlGlobals.js_NULL_APP_URL_GLOBALS = true;
            AppUrlGlobals.jv_NULL_APP_URL_GLOBALS = new AppUrlGlobals().jinit_AppUrlGlobals_0();
        }
        return AppUrlGlobals.jv_NULL_APP_URL_GLOBALS;
    }
    static set NULL_APP_URL_GLOBALS(value: AppUrlGlobals | null) {
        AppUrlGlobals.js_NULL_APP_URL_GLOBALS = true;
        AppUrlGlobals.jv_NULL_APP_URL_GLOBALS = value;
    }
    path: string | null = null;

    jfields_AppUrlGlobals(): void {
    this.path = StringUtil.getInstance()!.EMPTY_STRING;
    }

    jinit_AppUrlGlobals_0(): AppUrlGlobals {
        super.jinit_UrlGlobalsInterface_0();
        this.jfields_AppUrlGlobals();
        return this;
    }
    

    isTestingMode(): bool {
        return false;
    }
    

    getWebappPath(): string | null {
        return this.path;
    }
    

    setWebappPath(path: string | null): void {
        this.path = path;
        if (!(JString.endsWith1(this.path, "\\") || JString.endsWith1(this.path, "/"))) {
            this.path = jstr(this.path) + jstr("\\");
        } if (JThrowable.pending !== null) return;
    }
    

    getTestHtmlPath(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    getMainPath(): string | null {
        return this.path;
    }
}

