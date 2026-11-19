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
// package org.allbinary.logic.system.security.crypt
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.tokens.Tokenizer
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DatabaseEncoder extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.DatabaseEncoder";
    }
    

    jinit_DatabaseEncoder_0(): DatabaseEncoder {
        super.jinit_JObject_0();
        return this;
    }
    

    static encode(value: StaticArray<i8> | null): string | null {
        do {
            let array: StaticArray<i8> | null = value;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            for (let index: i32 = 0; index < array!.length; index++) {
                stringBuffer!.append(JObject.jtoString(new JByte().jinit_JByte_1(array![index]))); if (JThrowable.pending !== null) break;
                if (index < array!.length - 1) {
                    stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return JObject.jtoString(stringBuffer);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            PreLogUtil.putOE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e); if (JThrowable.pending !== null) return null;
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static decode(value: string | null): StaticArray<i8> | null {
        do {
            let tokenizer: Tokenizer | null = new Tokenizer().jinit_Tokenizer_1(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) break;
            let vector: BasicArrayList | null = tokenizer!.getTokensFromString(value, new BasicArrayListD().jinit_BasicArrayListD_0()); if (JThrowable.pending !== null) break;
            let size: i32 = vector!.size(); if (JThrowable.pending !== null) break;
            let decode: StaticArray<i8> | null = new StaticArray<i8>(size);
            let byteOfData: string | null = null;
            for (let index: i32 = 0; index < size; index++) {
                byteOfData = changetype<string | null>(vector!.objectArray![index]);
                decode![index] = JByte.parseByte1(byteOfData); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return decode;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            PreLogUtil.putSE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e); if (JThrowable.pending !== null) return null;
            return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

