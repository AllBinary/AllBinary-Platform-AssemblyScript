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
// import org.allbinary.logic.communication.log.PreLogUtil

@global export class ForcedLogUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.ForcedLogUtil";
    }

    jinit_ForcedLogUtil_0(): ForcedLogUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static log(message: string | null, anyType: Object | null): void {
        do {
            { JThrowable.raise(new JException().jinit_JException_1(message)); break; }
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE(CommonStrings.getInstance()!.EXCEPTION, anyType, "log", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

