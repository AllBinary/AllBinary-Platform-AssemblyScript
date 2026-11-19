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

//ActualPlatform
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
    timeStampUtil: TimeStampUtil | null = null;
    commonSeps: CommonSeps | null = null;
    NONE: string | null = null;
    LOG_ERROR: string | null = null;
    EMPTY: string | null = null;
    STACK_TRACE: string | null = null;
    TIME: string | null = null;
    CLASS_NAME: string | null = null;
    FUNCTION_CALL: string | null = null;
    SPECIAL_MESSAGE: string | null = null;
    stringUtil: StringUtil | null = null;
    exceptionUtil: ExceptionUtil | null = null;
    nullUtil: NullUtil | null = null;

    jfields_LogFormatUtil(): void {
    this.timeStampUtil = TimeStampUtil.getInstance();
    this.commonSeps = CommonSeps.getInstance();
    this.NONE = "None";
    this.LOG_ERROR = "\nLog-Error: ";
    this.EMPTY = "Empty";
    this.STACK_TRACE = "\nStack Trace: ";
    this.TIME = "Time: ";
    this.CLASS_NAME = this.commonSeps!.SPACE;
    this.FUNCTION_CALL = CommonLabels.getInstance()!.COLON_SEP;
    this.SPECIAL_MESSAGE = "> ";
    this.stringUtil = StringUtil.getInstance();
    this.exceptionUtil = ExceptionUtil.getInstance();
    this.nullUtil = NullUtil.getInstance();
    }
    

    static getInstance(): LogFormatUtil | null {
        return LogFormatUtil.instance;
    }
    

    jinit_LogFormatUtil_0(): LogFormatUtil {
        super.jinit_JObject_0();
        this.jfields_LogFormatUtil();
        return this;
    }
    

    get(className: string | null, functionName: string | null, specialMessage: string | null, exception: Object | null): string | null {
        let stringBuffer: StringMaker | null = this.getF(className, functionName); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getO(exception)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.SPECIAL_MESSAGE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(specialMessage); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getS(className: string | null, functionName: string | null, specialMessage: string | null): string | null {
        let stringBuffer: StringMaker | null = this.getF(className, functionName); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.SPECIAL_MESSAGE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(specialMessage); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getF(className: string | null, functionName: string | null): StringMaker | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.TIME); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.timeStampUtil!.getAsString()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.CLASS_NAME); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(className); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.FUNCTION_CALL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(functionName); if (JThrowable.pending !== null) return null;
        return stringBuffer;
    }
    

    getO(exception: Object | null): string | null {
        if (exception != changetype<Object | null>(this.nullUtil!.NULL_OBJECT)) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.LOG_ERROR); if (JThrowable.pending !== null) return null;
            let exceptionAsString: string | null = JObject.jtoString(exception); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(exceptionAsString); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.STACK_TRACE); if (JThrowable.pending !== null) return null;
            if (exception != changetype<Object | null>(this.nullUtil!.NULL_OBJECT)) {
                stringBuffer!.append(this.exceptionUtil!.getStackTrace(changetype<JThrowable | null>(exception))); if (JThrowable.pending !== null) return null;
            } else {
                stringBuffer!.append(this.stringUtil!.NULL_STRING); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return JObject.jtoString(stringBuffer);
        } else {
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

