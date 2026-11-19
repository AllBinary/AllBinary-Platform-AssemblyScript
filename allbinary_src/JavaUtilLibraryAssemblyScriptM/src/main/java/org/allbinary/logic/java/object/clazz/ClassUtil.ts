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
// package org.allbinary.logic.java.anyType.clazz
// import org.allbinary.logic.java.anyType.ConstructorUtil
// import org.allbinary.logic.java.anyType.InterfaceUtil
// import org.allbinary.logic.java.anyType.MethodUtil
// import org.allbinary.logic.string.StringMaker

@global export class ClassUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.anyType.clazz.ClassUtil";
    }
    

    jinit_ClassUtil_0(): ClassUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static viewAll_2_ObjectString(anyType: Object | null, lineBreak: string | null): string | null {
        if (anyType != null) {
            return ClassUtil.viewAll_2_ObjectString(JObject.jclassOf(anyType), lineBreak);
        } else {
            return "Object Null";
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static viewAll_2_ClassString(myClass: JClass | null, lineBreak: string | null): string | null {
        if (myClass != null) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            let classes: StaticArray<JClass | null> | null = myClass!.getClasses(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            stringBuffer!.append("Class: "); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(myClass!.getName()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(" uses "); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(classes!.length); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(" other classes"); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            stringBuffer!.append("Classes: "); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < classes!.length; index++) {
                stringBuffer!.append("Class: "); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(classes![index]!.getName()); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            stringBuffer!.append(InterfaceUtil.viewAll(myClass, lineBreak)); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(ConstructorUtil.viewAll(myClass, lineBreak)); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(MethodUtil.viewAll(myClass, lineBreak)); if (JThrowable.pending !== null) return null;
            return JObject.jtoString(stringBuffer);
        } else {
            return "Class Null";
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

