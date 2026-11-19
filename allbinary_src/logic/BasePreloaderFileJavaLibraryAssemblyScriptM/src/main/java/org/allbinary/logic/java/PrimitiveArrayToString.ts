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
// package org.allbinary.logic.java
// import org.allbinary.logic.string.StringMaker

@global export class PrimitiveArrayToString extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.PrimitiveArrayToString";
    }

    jinit_PrimitiveArrayToString_0(): PrimitiveArrayToString {
        super.jinit_JObject_0();
        return this;
    }
    

    static toString1(floats: StaticArray<f32> | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < floats!.length; index++) {
            stringBuffer!.appendfloat(floats![index]); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

