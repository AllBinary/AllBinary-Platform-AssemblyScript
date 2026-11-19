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
// import org.allbinary.logic.communication.log.LogFormatUtil

@global export class Log extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.Log";
    }
    logFormatUtil: LogFormatUtil | null = null;
    specialMessage: string | null = null;
    anyType: Object | null = null;
    functionName: string | null = null;
    exception: Object | null = null;

    jfields_Log(): void {
    this.logFormatUtil = LogFormatUtil.getInstance();
    
    
    
    
    }
    

    jinit_Log_4(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): Log {
        super.jinit_JObject_0();
        this.jfields_Log();
        this.specialMessage = specialMessage;
        this.anyType = anyType;
        this.functionName = functionName;
        this.exception = exception;
        return this;
    }
    

    getSpecialMessage(): string | null {
        return this.specialMessage;
    }
    

    getObject(): Object | null {
        return this.anyType;
    }
    

    getFunctionName(): string | null {
        return this.functionName;
    }
    

    getThrowable(): Object | null {
        return this.exception;
    }
    

    toString(): string | null {
        let className: string | null = CommonStrings.getInstance()!.EMPTY; if (JThrowable.pending !== null) return null;
        let clazz: JClass | null = JObject.jclassOf(this.anyType); if (JThrowable.pending !== null) return null;
        if (clazz!.getName() != null) {
            className = clazz!.getName(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.logFormatUtil!.get(className, this.functionName, this.specialMessage, this.exception);
    }
}

