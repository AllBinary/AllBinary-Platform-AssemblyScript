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
// import org.allbinary.string.CommonStrings

@global export class PATH_GLOBALS extends JObject {

    jclassName(): string {
        return "org.allbinary.globals.PATH_GLOBALS";
    }
    @lazy static jv_instance: PATH_GLOBALS | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PATH_GLOBALS | null {
        if (!PATH_GLOBALS.js_instance) {
            PATH_GLOBALS.js_instance = true;
            PATH_GLOBALS.jv_instance = new PATH_GLOBALS().jinit_PATH_GLOBALS_0();
        }
        return PATH_GLOBALS.jv_instance;
    }
    static set instance(value: PATH_GLOBALS | null) {
        PATH_GLOBALS.js_instance = true;
        PATH_GLOBALS.jv_instance = value;
    }
    DATA_PATH: string | null = null;
    INIT_PATH: string | null = null;
    VIEWS_PATH: string | null = null;
    LOG_PATH: string | null = null;
    BACKUP_PATH: string | null = null;

    jfields_PATH_GLOBALS(): void {
    
    
    
    
    
    }
    

    static getInstance(): PATH_GLOBALS | null {
        return PATH_GLOBALS.instance;
    }
    

    jinit_PATH_GLOBALS_0(): PATH_GLOBALS {
        super.jinit_JObject_0();
        this.jfields_PATH_GLOBALS();
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return this;
        let abPathData: AbPathData | null = AbPathData.getInstance(); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("data"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(abPathData!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.DATA_PATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.DATA_PATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(CommonStrings.getInstance()!.INIT); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(abPathData!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.INIT_PATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.DATA_PATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("log"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(abPathData!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.LOG_PATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.DATA_PATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("backup"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(abPathData!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.BACKUP_PATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.INIT_PATH); if (JThrowable.pending !== null) return this;
        stringBuffer!.append("views"); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(abPathData!.SEPARATOR); if (JThrowable.pending !== null) return this;
        this.VIEWS_PATH = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return this;
        return this;
    }
}

