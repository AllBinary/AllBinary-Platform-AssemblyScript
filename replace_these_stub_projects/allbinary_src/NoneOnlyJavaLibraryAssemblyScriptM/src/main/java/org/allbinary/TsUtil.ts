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

//None - Do not use
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
    

    hashCode1(anyType: Object | null): i32 {
        return JObject.jhashCode(anyType);
    }
    

    waitFor(any: Object | null, timeoutMillis: i64): void {
        let anyType: Object | null = changetype<Object | null>(any);
        JObject.jwait(anyType); if (JThrowable.pending !== null) return;
    }
    

    getRecord(anyType: Object | null, recordId: i32): StaticArray<i8> | null {
        return changetype<StaticArray<i8> | null>(new StaticArray<i8>(0));
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
    

    toNumberFromChar(value: u16): i32 {
        return (<i32>(value));
    }
    

    toNumber(value: i32): i32 {
        return value;
    }
    

    getByteArray(string: string | null): StaticArray<i8> | null {
        return JString.getBytes0(string);
    }
    

    isItemListener(owner: Object | null): bool {
        return false;
    }
    

    printAvailableMethods(anyType: Object | null): void {
    }
    

    gc(): void {
        JSystem.gc(); if (JThrowable.pending !== null) return;
    }
}

