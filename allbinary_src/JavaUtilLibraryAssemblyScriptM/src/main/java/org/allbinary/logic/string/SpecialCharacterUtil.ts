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
// import java.util.HashMap
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.math.MathData
// import org.allbinary.string.CommonPhoneStrings
// import org.allbinary.string.CommonSeps

@global export class SpecialCharacterUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.SpecialCharacterUtil";
    }

    jinit_SpecialCharacterUtil_0(): SpecialCharacterUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getHashMap(): JHashMap | null {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        let commonPhoneStrings: CommonPhoneStrings | null = CommonPhoneStrings.getInstance(); if (JThrowable.pending !== null) return null;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let hashMap: JHashMap | null = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) return null;
        hashMap!.put("!", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("@", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonPhoneStrings!.POUND, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("$", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("%", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("^", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonSeps!.AMPERSAND, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonPhoneStrings!.STAR, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonSeps!.PARENTHESIS_OPEN, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonSeps!.PARENTHESIS_CLOSE, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonSeps!.DASH, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonSeps!.UNDERSCORE, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(MathData.getInstance()!.PLUS, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(commonSeps!.EQUALS, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("\\", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("|", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(AbPathData.getInstance()!.EXTENSION_SEP, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(",", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("<", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(">", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("?", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put(AbPathData.getInstance()!.SEPARATOR, stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("~", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        hashMap!.put("`", stringUtil!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        return hashMap;
    }
}

