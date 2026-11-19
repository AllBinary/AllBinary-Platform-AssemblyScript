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
// import org.allbinary.string.CommonStrings

//ActualPlatform
@global export class PreLogUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.PreLogUtil";
    }
    @lazy static readonly LOG_SUCCESS: string | null = "org.allbinary: ";
    

    jinit_PreLogUtil_0(): PreLogUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static put(specialMessage: string | null, anyType: Object | null, functionName: string | null): void {
        PreLogUtil.putOE(specialMessage, anyType, functionName, NullUtil.getInstance()!.NULL_OBJECT); if (JThrowable.pending !== null) return;
    }
    

    static putOE(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): void {
        let className: string | null = CommonStrings.getInstance()!.EMPTY; if (JThrowable.pending !== null) return;
        if (JObject.jclassOf(anyType)!.getName() != null) {
            className = JString.new1(JObject.jclassOf(anyType)!.getName()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let message: string | null = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception); if (JThrowable.pending !== null) return;
        JSystem.print(jstr(PreLogUtil.LOG_SUCCESS)); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(message)); if (JThrowable.pending !== null) return;
    }
    

    static putS(specialMessage: string | null, className: string | null, functionName: string | null): void {
        PreLogUtil.putSE(specialMessage, className, functionName, NullUtil.getInstance()!.NULL_OBJECT); if (JThrowable.pending !== null) return;
    }
    

    static putSE(specialMessage: string | null, className: string | null, functionName: string | null, exception: Object | null): void {
        let message: string | null = LogFormatUtil.getInstance()!.get(className, functionName, specialMessage, exception); if (JThrowable.pending !== null) return;
        JSystem.print(jstr(PreLogUtil.LOG_SUCCESS)); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(message)); if (JThrowable.pending !== null) return;
    }
    

    static getClassName(anyType: Object | null): string | null {
        return JObject.jclassOf(anyType)!.getName();
    }
}

