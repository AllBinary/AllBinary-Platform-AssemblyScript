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
    

    static getInstance(): LogUtil | null {
        return LogUtil.instance;
    }
    

    jinit_LogUtil_0(): LogUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    putP(log: Log | null): void {
    }
    

    putF(specialMessage: string | null, anyType: Object | null, functionName: string | null): void {
    }
    

    putFS(specialMessage: string | null, className: string | null, functionName: string | null): void {
    }
    

    put(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): void {
    }
}

