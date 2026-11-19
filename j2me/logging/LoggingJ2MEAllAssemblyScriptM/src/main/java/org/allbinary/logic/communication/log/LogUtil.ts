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
// import org.allbinary.TsUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

//ActualPlatform
@global export class LogUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.LogUtil";
    }
    @lazy static jv_instance: LogUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogUtil | null {
        if (!LogUtil.js_instance) {
            LogUtil.js_instance = true;
            LogUtil.jv_instance = new LogUtil().jinit_LogUtil_0();
        }
        return LogUtil.jv_instance;
    }
    static set instance(value: LogUtil | null) {
        LogUtil.js_instance = true;
        LogUtil.jv_instance = value;
    }
    logFormatUtil: LogFormatUtil | null = null;
    LOG_SUCCESS: string | null = null;

    jfields_LogUtil(): void {
    this.logFormatUtil = LogFormatUtil.getInstance();
    this.LOG_SUCCESS = "org.allbinary: ";
    }
    

    static getInstance(): LogUtil | null {
        return LogUtil.instance;
    }
    

    jinit_LogUtil_0(): LogUtil {
        super.jinit_JObject_0();
        this.jfields_LogUtil();
        return this;
    }
    

    putL(log: Log | null): void {
        let specialMessage: string | null = log!.getSpecialMessage(); if (JThrowable.pending !== null) return;
        let anyType: Object | null = log!.getObject(); if (JThrowable.pending !== null) return;
        let functionName: string | null = log!.getFunctionName(); if (JThrowable.pending !== null) return;
        let exception: Object | null = log!.getThrowable(); if (JThrowable.pending !== null) return;
        this.put(specialMessage, anyType, functionName, exception); if (JThrowable.pending !== null) return;
    }
    

    putF(specialMessage: string | null, anyType: Object | null, functionName: string | null): void {
        let className: string | null = CommonStrings.getInstance()!.EMPTY; if (JThrowable.pending !== null) return;
        if (JObject.jclassOf(anyType)!.getName() != null) {
            className = JString.new1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(JObject.jclassOf(anyType)!.getName())!.append(CommonSeps.getInstance()!.COLON)!.append(JInteger.toHexString(TsUtil.getInstance()!.hashCode1(anyType))))); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let message: string | null = this.logFormatUtil!.getS(className, functionName, specialMessage); if (JThrowable.pending !== null) return;
        JSystem.print(jstr(this.LOG_SUCCESS)); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(message)); if (JThrowable.pending !== null) return;
    }
    

    putFS(specialMessage: string | null, className: string | null, functionName: string | null): void {
        let message: string | null = this.logFormatUtil!.getS(className, functionName, specialMessage); if (JThrowable.pending !== null) return;
        JSystem.print(jstr(this.LOG_SUCCESS)); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(message)); if (JThrowable.pending !== null) return;
    }
    

    put(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): void {
        let className: string | null = CommonStrings.getInstance()!.EMPTY; if (JThrowable.pending !== null) return;
        if (JObject.jclassOf(anyType)!.getName() != null) {
            let hashCodeValue: i32 = TsUtil.getInstance()!.hashCode1(anyType); if (JThrowable.pending !== null) return;
            let hexString: string | null = JInteger.toHexString(hashCodeValue); if (JThrowable.pending !== null) return;
            className = JString.new1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(JObject.jclassOf(anyType)!.getName())!.append(CommonSeps.getInstance()!.COLON)!.append(hexString))); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let message: string | null = this.logFormatUtil!.get(className, functionName, specialMessage, exception); if (JThrowable.pending !== null) return;
        JSystem.print(jstr(this.LOG_SUCCESS)); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(message)); if (JThrowable.pending !== null) return;
    }
}

