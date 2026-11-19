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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.logic.system.loader.WebappClassLoaderInfo
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

@global export class Globals extends JObject {

    jclassName(): string {
        return "org.allbinary.globals.Globals";
    }
    @lazy static jv_instance: Globals | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Globals | null {
        if (!Globals.js_instance) {
            Globals.js_instance = true;
            Globals.jv_instance = new Globals().jinit_Globals_0();
        }
        return Globals.jv_instance;
    }
    static set instance(value: Globals | null) {
        Globals.js_instance = true;
        Globals.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_Globals(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    static getInstance(): Globals | null {
        return Globals.instance;
    }
    

    jinit_Globals_0(): Globals {
        super.jinit_JObject_0();
        this.jfields_Globals();
        return this;
    }
    

    init(classLoader: JClassLoader | null, pathString: string | null): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        let appUrlGlobals: AppUrlGlobals | null = new AppUrlGlobals().jinit_AppUrlGlobals_0(); if (JThrowable.pending !== null) return;
        appUrlGlobals!.setWebappPath(pathString); if (JThrowable.pending !== null) return;
        URLGLOBALS.init(appUrlGlobals); if (JThrowable.pending !== null) return;
        WebappClassLoaderInfo.setLoader(classLoader); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Setting Up AllBinary System Configuration Args: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(pathString); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" ClassLoader: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(JObject.jclassOf(classLoader)!.getName()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, commonStrings!.INIT); if (JThrowable.pending !== null) return;
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return;
        if (stringValidationUtil!.isEmpty(pathString)) {
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            stringBuffer!.append("No Path Provided. Using Process Path: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(pathString); if (JThrowable.pending !== null) return;
            stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return;
            stringBuffer!.append(CommonSeps.getInstance()!.EQUALS); if (JThrowable.pending !== null) return;
            stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return;
            stringBuffer!.append(URLGLOBALS.getWebappPath()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, commonStrings!.INIT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Webapp Path Set To: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(URLGLOBALS.getWebappPath()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, commonStrings!.INIT); if (JThrowable.pending !== null) return;
    }
}

