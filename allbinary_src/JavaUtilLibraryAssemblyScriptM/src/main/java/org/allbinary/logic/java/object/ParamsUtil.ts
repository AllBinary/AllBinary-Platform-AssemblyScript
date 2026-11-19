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
// package org.allbinary.logic.java.anyType
// import org.allbinary.logic.string.StringMaker

@global export class ParamsUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.anyType.ParamsUtil";
    }
    

    jinit_ParamsUtil_0(): ParamsUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static viewParams(params: StaticArray<JClass | null> | null): string | null {
        if (params != null) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < params!.length; index++) {
                stringBuffer!.append(" "); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(params![index]!.getName()); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return JObject.jtoString(stringBuffer);
        } else {
            return "Params Null";
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

