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
// package org.allbinary.util
// import java.util.Enumeration
// import jsinterop.annotations.JsType

@global export class HashtableUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.util.HashtableUtil";
    }
    @lazy static jv_instance: HashtableUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HashtableUtil | null {
        if (!HashtableUtil.js_instance) {
            HashtableUtil.js_instance = true;
            HashtableUtil.jv_instance = new HashtableUtil().jinit_HashtableUtil_0();
        }
        return HashtableUtil.jv_instance;
    }
    static set instance(value: HashtableUtil | null) {
        HashtableUtil.js_instance = true;
        HashtableUtil.jv_instance = value;
    }
    enumerationUtil: EnumerationUtil | null = null;

    jfields_HashtableUtil(): void {
    this.enumerationUtil = EnumerationUtil.getInstance();
    }

    jinit_HashtableUtil_0(): HashtableUtil {
        super.jinit_JObject_0();
        this.jfields_HashtableUtil();
        return this;
    }
    

    static getInstance(): HashtableUtil | null {
        return HashtableUtil.instance;
    }
    

    putAll(fromHashtable: ABHashtable | null, hashtable: ABHashtable | null): void {
        let enumeration: JEnumeration | null = fromHashtable!.keys(); if (JThrowable.pending !== null) return;
        let keyCanBeNull: Object | null = null;
        let valueCanBeNull: Object | null = null;
        while (this.enumerationUtil!.hasMoreElements(enumeration)) {
            keyCanBeNull = this.enumerationUtil!.nextElement(enumeration); if (JThrowable.pending !== null) return;
            valueCanBeNull = hashtable!.get(keyCanBeNull); if (JThrowable.pending !== null) return;
            if (valueCanBeNull == null) {
            } else {
                hashtable!.put(keyCanBeNull, valueCanBeNull); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getKeysAsArray(hashtable: ABHashtable | null): StaticArray<Object | null> | null {
        let objectArray: StaticArray<Object | null> | null = new StaticArray<Object | null>(hashtable!.size()); if (JThrowable.pending !== null) return null;
        let index: i32 = 0;
        let enumeration: JEnumeration | null = hashtable!.keys(); if (JThrowable.pending !== null) return null;
        while (this.enumerationUtil!.hasMoreElements(enumeration)) {
            objectArray![index++] = this.enumerationUtil!.nextElement(enumeration); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return objectArray;
    }
    

    getKeysAsList(hashtable: ABHashtable | null): BasicArrayList | null {
        let list: BasicArrayList | null = new BasicArrayListS().jinit_BasicArrayListS_1(hashtable!.size()); if (JThrowable.pending !== null) return null;
        let enumeration: JEnumeration | null = hashtable!.keys(); if (JThrowable.pending !== null) return null;
        while (this.enumerationUtil!.hasMoreElements(enumeration)) {
            list!.add(this.enumerationUtil!.nextElement(enumeration)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return list;
    }
}

