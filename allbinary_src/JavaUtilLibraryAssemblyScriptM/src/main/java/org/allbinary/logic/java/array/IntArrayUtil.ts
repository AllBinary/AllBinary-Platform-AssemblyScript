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
// package org.allbinary.logic.java.array
// import org.allbinary.logic.string.StringMaker

@global export class IntArrayUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.array.IntArrayUtil";
    }
    

    jinit_IntArrayUtil_0(): IntArrayUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static toString_1_intA(array: StaticArray<i32> | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < array!.length; index++) {
            stringBuffer!.appendint(array![index]); if (JThrowable.pending !== null) return null;
            if (index < array!.length) {
                stringBuffer!.append(", "); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    static toString_1_intAA(array: StaticArray<StaticArray<i32> | null> | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < array!.length; index++) {
            stringBuffer!.append("{"); if (JThrowable.pending !== null) return null;
            for (let index2: i32 = 0; index2 < array![index]!.length; index2++) {
                stringBuffer!.appendint((<i32>(array![index]![index2]))); if (JThrowable.pending !== null) return null;
                if (index2 < array![index]!.length - 1) {
                    stringBuffer!.append(", "); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            stringBuffer!.append("}"); if (JThrowable.pending !== null) return null;
            if (index < array!.length - 1) {
                stringBuffer!.append(", \n"); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    static toString_1_intAAA(array: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < array!.length; index++) {
            stringBuffer!.append("{"); if (JThrowable.pending !== null) return null;
            for (let index2: i32 = 0; index2 < array![index]!.length; index2++) {
                stringBuffer!.append("{"); if (JThrowable.pending !== null) return null;
                for (let index3: i32 = 0; index3 < array![index]![index2]!.length; index3++) {
                    stringBuffer!.appendint((<i32>(array![index]![index2]![index3]))); if (JThrowable.pending !== null) return null;
                    if (index3 < array![index]![index2]!.length - 1) {
                        stringBuffer!.append(", "); if (JThrowable.pending !== null) return null;
                    } if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
                stringBuffer!.append("}"); if (JThrowable.pending !== null) return null;
                if (index2 < array![index]!.length - 1) {
                    stringBuffer!.append(", "); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            stringBuffer!.append("}"); if (JThrowable.pending !== null) return null;
            if (index < array!.length - 1) {
                stringBuffer!.append(", \n"); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

