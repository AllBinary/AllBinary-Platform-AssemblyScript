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
// import java.lang.reflect.Method
// import org.allbinary.logic.string.StringMaker

@global export class MethodUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.anyType.MethodUtil";
    }
    

    jinit_MethodUtil_0(): MethodUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static viewAll(myClass: JClass | null, lineBreak: string | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let method: StaticArray<JMethod | null> | null = myClass!.getMethods(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Methods: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < method!.length; index++) {
            stringBuffer!.append(method![index]!.getReturnType()!.getName()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(" "); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(method![index]!.getName()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append("("); if (JThrowable.pending !== null) return null;
            ParamsUtil.viewParams(method![index]!.getParameterTypes()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(")"); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

