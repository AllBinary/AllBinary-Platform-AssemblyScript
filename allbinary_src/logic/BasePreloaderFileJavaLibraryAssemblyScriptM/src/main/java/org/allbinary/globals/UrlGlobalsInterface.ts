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

@global export class UrlGlobalsInterface extends JObject {

    jclassName(): string {
        return "org.allbinary.globals.UrlGlobalsInterface";
    }

    jinit_UrlGlobalsInterface_0(): UrlGlobalsInterface {
        super.jinit_JObject_0();
        return this;
    }
    

    getMainPath(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    getTestHtmlPath(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    getWebappPath(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    isTestingMode(): bool {
        return false;
    }
}

