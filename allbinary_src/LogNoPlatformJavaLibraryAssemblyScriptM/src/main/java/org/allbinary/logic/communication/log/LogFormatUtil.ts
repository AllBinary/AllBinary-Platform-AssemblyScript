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
// package org.allbinary.logic.communication.log
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.java.exception.ExceptionUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.time.TimeStampUtil

//NoPlatform
@global export class LogFormatUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.LogFormatUtil";
    }
    @lazy static jv_instance: LogFormatUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogFormatUtil | null {
        if (!LogFormatUtil.js_instance) {
            LogFormatUtil.js_instance = true;
            LogFormatUtil.jv_instance = new LogFormatUtil().jinit_LogFormatUtil_0();
        }
        return LogFormatUtil.jv_instance;
    }
    static set instance(value: LogFormatUtil | null) {
        LogFormatUtil.js_instance = true;
        LogFormatUtil.jv_instance = value;
    }
    

    static getInstance(): LogFormatUtil | null {
        return LogFormatUtil.instance;
    }
    

    jinit_LogFormatUtil_0(): LogFormatUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    get(className: string | null, functionName: string | null, specialMessage: string | null, exception: Object | null): string | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getS(className: string | null, functionName: string | null, specialMessage: string | null): string | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getO(exception: Object | null): string | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
}

