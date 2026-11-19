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
// import org.allbinary.string.CommonSeps

@global export class InterfaceUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.anyType.InterfaceUtil";
    }
    

    jinit_InterfaceUtil_0(): InterfaceUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static viewAll(myClass: JClass | null, lineBreak: string | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let interfaces: StaticArray<JClass | null> | null = myClass!.getInterfaces(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Interfaces: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < interfaces!.length; index++) {
            stringBuffer!.append("Interface: "); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(interfaces![index]!.getName()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(lineBreak); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    static getClass(interfaceName: string | null, interfaces: StaticArray<JClass | null> | null): JClass | null {
        if (interfaceName != null && interfaces != null && interfaces!.length > 0) {
            for (let index: i32 = 0; index < interfaces!.length; index++) {
                if (JString.indexOf1(interfaces![index]!.getName(), interfaceName) >= 0) {
                    return interfaces![index];
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static isImplemented_2_ClassObject(clazz: JClass | null, anyType: Object | null): bool {
        let classes: StaticArray<JClass | null> | null = JObject.jclassOf(anyType)!.getInterfaces(); if (JThrowable.pending !== null) return false;
        for (let index: i32 = 0; index < classes!.length; index++) {
            if (JString.compareTo1(clazz!.getName(), classes![index]!.getName()) == 0) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    static isImplemented_2_StringObject(className: string | null, anyType: Object | null): bool {
        let classes: StaticArray<JClass | null> | null = JObject.jclassOf(anyType)!.getInterfaces(); if (JThrowable.pending !== null) return false;
        for (let index: i32 = 0; index < classes!.length; index++) {
            if (JString.indexOf1(classes![index]!.getName(), className) == 0) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    static isImplementedView(clazz: JClass | null, anyType: Object | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let classes: StaticArray<JClass | null> | null = JObject.jclassOf(anyType)!.getInterfaces(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("isImplementedView: \n"); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < classes!.length; index++) {
            stringBuffer!.append(clazz!.getName()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(" should be = "); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(classes![index]!.getName()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(classes![index]!.getName()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

