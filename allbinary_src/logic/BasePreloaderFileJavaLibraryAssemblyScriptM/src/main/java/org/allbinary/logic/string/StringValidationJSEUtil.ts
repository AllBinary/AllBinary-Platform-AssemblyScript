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
// package org.allbinary.logic.string

@global export class StringValidationJSEUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.StringValidationJSEUtil";
    }
    

    jinit_StringValidationJSEUtil_0(): StringValidationJSEUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static isBlank(string: string | null): bool {
        let len: i32 = JString.length0(string); if (JThrowable.pending !== null) return false;
        for (let i: i32 = 0; i < len; i++) {
            let c: u16 = JString.charAt1(string, i); if (JThrowable.pending !== null) return false;
            if (JCharacter.isWhitespace(c) == false) {
                return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
}

