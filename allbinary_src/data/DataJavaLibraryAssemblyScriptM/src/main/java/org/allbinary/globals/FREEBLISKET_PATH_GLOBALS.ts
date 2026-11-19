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
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringMaker

@global export class FREEBLISKET_PATH_GLOBALS extends JObject {

    jclassName(): string {
        return "org.allbinary.globals.FREEBLISKET_PATH_GLOBALS";
    }
    @lazy static jv_instance: FREEBLISKET_PATH_GLOBALS | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FREEBLISKET_PATH_GLOBALS | null {
        if (!FREEBLISKET_PATH_GLOBALS.js_instance) {
            FREEBLISKET_PATH_GLOBALS.js_instance = true;
            FREEBLISKET_PATH_GLOBALS.jv_instance = new FREEBLISKET_PATH_GLOBALS().jinit_FREEBLISKET_PATH_GLOBALS_0();
        }
        return FREEBLISKET_PATH_GLOBALS.jv_instance;
    }
    static set instance(value: FREEBLISKET_PATH_GLOBALS | null) {
        FREEBLISKET_PATH_GLOBALS.js_instance = true;
        FREEBLISKET_PATH_GLOBALS.jv_instance = value;
    }
    INSTALLPATH: string | null = null;
    XSLPATH: string | null = null;
    TEMPLATEPATH: string | null = null;
    STYLEPATH: string | null = null;
    THEMEPATH: string | null = null;
    DBINITPATH: string | null = null;
    LINEDATAPATH: string | null = null;
    CONFIGURATIONPATH: string | null = null;
    USERCONFIGURATIONPATH: string | null = null;
    CONTEXTCONFIGURATIONPATH: string | null = null;
    LICENSEERRORPAGE: string | null = null;
    ERRORPAGE: string | null = null;

    jfields_FREEBLISKET_PATH_GLOBALS(): void {
    
    
    this.TEMPLATEPATH = jstr("template") + jstr(AbPathData.getInstance()!.SEPARATOR);
    this.STYLEPATH = jstr(jstr(this.TEMPLATEPATH) + jstr("style")) + jstr(AbPathData.getInstance()!.SEPARATOR);
    this.THEMEPATH = jstr(jstr(this.STYLEPATH) + jstr("theme")) + jstr(AbPathData.getInstance()!.SEPARATOR);
    this.DBINITPATH = jstr(jstr(PATH_GLOBALS.getInstance()!.INIT_PATH) + jstr("db")) + jstr(AbPathData.getInstance()!.SEPARATOR);
    this.LINEDATAPATH = jstr(jstr(PATH_GLOBALS.getInstance()!.INIT_PATH) + jstr("lineData")) + jstr(AbPathData.getInstance()!.SEPARATOR);
    
    
    
    this.LICENSEERRORPAGE = "LicensingError.jsp";
    this.ERRORPAGE = "Error.jsp";
    }
    

    static getInstance(): FREEBLISKET_PATH_GLOBALS | null {
        return FREEBLISKET_PATH_GLOBALS.instance;
    }
    

    jinit_FREEBLISKET_PATH_GLOBALS_0(): FREEBLISKET_PATH_GLOBALS {
        super.jinit_JObject_0();
        this.jfields_FREEBLISKET_PATH_GLOBALS();
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("install"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.INSTALLPATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(PATH_GLOBALS.getInstance()!.INIT_PATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("views"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.XSLPATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.XSLPATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("configuration"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.CONFIGURATIONPATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.CONFIGURATIONPATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("user"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.USERCONFIGURATIONPATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.CONFIGURATIONPATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("context"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.CONTEXTCONFIGURATIONPATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        return this;
    }
}

