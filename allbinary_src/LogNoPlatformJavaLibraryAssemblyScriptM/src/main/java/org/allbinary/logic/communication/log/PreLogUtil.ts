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

//NoPlatform
@global export class PreLogUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.PreLogUtil";
    }
    

    jinit_PreLogUtil_0(): PreLogUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static put(specialMessage: string | null, anyType: Object | null, functionName: string | null): void {
        PreLogUtil.putOE(specialMessage, anyType, functionName, NullUtil.getInstance()!.NULL_OBJECT); if (JThrowable.pending !== null) return;
    }
    

    static putOE(specialMessage: string | null, anyType: Object | null, functionName: string | null, exception: Object | null): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
    

    static putSE(specialMessage: string | null, className: string | null, functionName: string | null, exception: Object | null): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
}

