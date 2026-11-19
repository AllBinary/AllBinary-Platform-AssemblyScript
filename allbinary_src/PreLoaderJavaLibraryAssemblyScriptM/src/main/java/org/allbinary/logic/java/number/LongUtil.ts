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
// package org.allbinary.logic.java.number
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonPhoneStrings

@global export class LongUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.number.LongUtil";
    }
    

    jinit_LongUtil_0(): LongUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static fillIn(end: string | null): string | null {
        let frameStringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        if (frameStringBuffer!.length() < LongData.MAX_LONG_LENGTH) {
            let commonPhoneStrings: CommonPhoneStrings | null = CommonPhoneStrings.getInstance(); if (JThrowable.pending !== null) return null;
            let size: i32 = LongData.MAX_LONG_LENGTH - frameStringBuffer!.length(); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < size; index++) {
                frameStringBuffer!.append(commonPhoneStrings!.ZERO); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        frameStringBuffer!.append(end); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(frameStringBuffer);
    }
}

