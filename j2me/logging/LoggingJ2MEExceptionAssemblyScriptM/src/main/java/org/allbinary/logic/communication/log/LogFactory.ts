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
// import org.allbinary.logic.string.StringUtil

//ActualPlatform
@global export class LogFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.LogFactory";
    }
    @lazy static jv_LOG: Log | null = null;
    @lazy static js_LOG: bool = false;
    static get LOG(): Log | null {
        if (!LogFactory.js_LOG) {
            LogFactory.js_LOG = true;
            LogFactory.jv_LOG = new Log().jinit_Log_4(StringUtil.getInstance()!.EMPTY_STRING, NullUtil.getInstance()!.NULL_OBJECT, StringUtil.getInstance()!.EMPTY_STRING, NullUtil.getInstance()!.NULL_OBJECT);
        }
        return LogFactory.jv_LOG;
    }
    static set LOG(value: Log | null) {
        LogFactory.js_LOG = true;
        LogFactory.jv_LOG = value;
    }

    jinit_LogFactory_0(): LogFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstanceD(): Log | null {
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let nullUtil: NullUtil | null = NullUtil.getInstance(); if (JThrowable.pending !== null) return null;
        return new Log().jinit_Log_4(stringUtil!.EMPTY_STRING, nullUtil!.NULL_OBJECT, stringUtil!.EMPTY_STRING, nullUtil!.NULL_OBJECT);
    }
    

    static getInstance4(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): Log | null {
        return new Log().jinit_Log_4(specialMessage, anyType, functionName, exception);
    }
    

    static getInstanceF(specialMessage: string | null, anyType: Object | null, functionName: string | null): Log | null {
        return LogFactory.LOG;
    }
}

