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

    jinit_LogFactory_0(): LogFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstanceD(): Log | null {
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let nullUtil: NullUtil | null = NullUtil.getInstance(); if (JThrowable.pending !== null) return null;
        return new Log().jinit_Log_4(stringUtil!.EMPTY_STRING, nullUtil!.NULL_OBJECT, stringUtil!.EMPTY_STRING, nullUtil!.NULL_OBJECT);
    }
    

    static getInstanceNoF(specialMessage: string | null, anyType: Object | null, exception: Object | null): Log | null {
        return new Log().jinit_Log_4(specialMessage, anyType, StringUtil.getInstance()!.EMPTY_STRING, exception);
    }
    

    static getInstance4(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): Log | null {
        return new Log().jinit_Log_4(specialMessage, anyType, functionName, exception);
    }
    

    static getInstanceF(specialMessage: string | null, anyType: Object | null, functionName: string | null): Log | null {
        let nullUtil: NullUtil | null = NullUtil.getInstance(); if (JThrowable.pending !== null) return null;
        return new Log().jinit_Log_4(specialMessage, anyType, functionName, nullUtil!.NULL_OBJECT);
    }
}

