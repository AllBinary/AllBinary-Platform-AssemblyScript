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
// import java.lang.reflect.Constructor
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

@global export class ConstructorUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.anyType.ConstructorUtil";
    }
    

    jinit_ConstructorUtil_0(): ConstructorUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static viewAll(myClass: JClass | null, lineBreak: string | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let constructor_: StaticArray<JConstructor | null> | null = myClass!.getConstructors(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Constructors: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < constructor_!.length; index++) {
            stringBuffer!.append(ConstructorUtil.view(constructor_![index], lineBreak)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    static view(constructor_: JConstructor | null, lineBreak: string | null): string | null {
        if (constructor_ != null) {
            let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(constructor_!.getName()); if (JThrowable.pending !== null) return null;
            let classes: StaticArray<JClass | null> | null = constructor_!.getParameterTypes(); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < classes!.length; index++) {
                stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(classes![index]!.getName()); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(commonSeps!.COLON); if (JThrowable.pending !== null) return null;
                stringBuffer!.appendint(index); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            return JObject.jtoString(stringBuffer);
        } else {
            return "Constructor Null";
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

