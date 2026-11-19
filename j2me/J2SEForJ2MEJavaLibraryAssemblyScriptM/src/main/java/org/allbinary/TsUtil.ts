/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary
// import javax.microedition.lcdui.Displayable
// import javax.microedition.lcdui.Form
// import javax.microedition.rms.InvalidRecordIDException
// import javax.microedition.rms.RecordStore
// import javax.microedition.rms.RecordStoreException
// import javax.microedition.rms.RecordStoreNotOpenException
// import org.allbinary.logic.NullUtil

//J2SE
@global export class TsUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.TsUtil";
    }
    @lazy static jv_instance: TsUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TsUtil | null {
        if (!TsUtil.js_instance) {
            TsUtil.js_instance = true;
            TsUtil.jv_instance = new TsUtil().jinit_TsUtil_0();
        }
        return TsUtil.jv_instance;
    }
    static set instance(value: TsUtil | null) {
        TsUtil.js_instance = true;
        TsUtil.jv_instance = value;
    }

    jinit_TsUtil_0(): TsUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): TsUtil | null {
        return TsUtil.instance;
    }
    

    longBitsToDouble(bits: i64): f64 {
        return JDouble.longBitsToDouble(bits);
    }
    

    intBitsToFloat(bits: i32): f32 {
        return JFloat.intBitsToFloat(bits);
    }
    

    hashCode1(anyType: Object | null): i32 {
        return JObject.jhashCode(anyType);
    }
    

    waitFor(any: Object | null, timeoutMillis: i64): void {
        let anyType: Object | null = changetype<Object | null>(any);
        JObject.jwait(anyType); if (JThrowable.pending !== null) return;
    }
    

    getRecord(anyType: Object | null, recordId: i32): StaticArray<i8> | null {
        let recordStore: RecordStore | null = changetype<RecordStore | null>(anyType);
        let data: StaticArray<i8> | null = null;
        {
            data = new StaticArray<i8>(recordStore!.getRecordSize(recordId)); if (JThrowable.pending !== null) return null;
            recordStore!.getRecord(recordId, data, 0); if (JThrowable.pending !== null) return null;
        }
        return (data!.length < 1 ? NullUtil.getInstance()!.NULL_BYTE_ARRAY : data);
    }
    

    compareTo(a: string | null, b: string | null): i32 {
        return JString.compareTo1(a, b);
    }
    

    equalIgnoreCase(a: string | null, b: string | null): bool {
        return JString.equalsIgnoreCase1(a, b);
    }
    

    equalsNotstring(anyType: Object | null, object2: Object | null): bool {
        return JObject.jequals(anyType, object2);
    }
    

    getClassClassLoader(anyType: Object | null): JClassLoader | null {
        return JObject.jclassOf(anyType)!.getClassLoader();
    }
    

    toNumberFromChar(value: u16): i32 {
        return (<i32>(value));
    }
    

    toNumber(value: i32): i32 {
        return value;
    }
    

    getByteArray(string: string | null): StaticArray<i8> | null {
        return JString.getBytes0(string);
    }
    

    isItemListener(owner: Displayable | null): bool {
        if ((owner instanceof Form)) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    

    gc(): void {
        JSystem.gc(); if (JThrowable.pending !== null) return;
    }
}

