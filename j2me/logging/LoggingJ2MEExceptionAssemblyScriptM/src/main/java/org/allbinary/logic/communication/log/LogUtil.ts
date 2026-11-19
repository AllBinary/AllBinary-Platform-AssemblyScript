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
        if (log == LogFactory.LOG) {
            return;
        }
        let exception: Object | null = log!.getThrowable(); if (JThrowable.pending !== null) return;
        if (exception == null) {
            return;
        }
        let specialMessage: string | null = log!.getSpecialMessage(); if (JThrowable.pending !== null) return;
        let anyType: Object | null = log!.getObject(); if (JThrowable.pending !== null) return;
        let functionName: string | null = log!.getFunctionName(); if (JThrowable.pending !== null) return;
        this.put(specialMessage, anyType, functionName, exception); if (JThrowable.pending !== null) return;
    }
    

    putF(specialMessage: string | null, anyType: Object | null, functionName: string | null): void {
    }
    

    putFS(specialMessage: string | null, className: string | null, functionName: string | null): void {
    }
    

    put(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): void {
        let className: string | null = CommonStrings.getInstance()!.EMPTY; if (JThrowable.pending !== null) return;
        if (JObject.jclassOf(anyType)!.getName() != null) {
            className = JString.new1(JObject.jclassOf(anyType)!.getName()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let message: string | null = this.logFormatUtil!.get(className, functionName, specialMessage, exception); if (JThrowable.pending !== null) return;
        JSystem.print(jstr(this.LOG_SUCCESS)); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(message)); if (JThrowable.pending !== null) return;
    }
}

