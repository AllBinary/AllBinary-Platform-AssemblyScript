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
// package org.allbinary.logic.util.cache
// import jsinterop.annotations.JsType
// import org.allbinary.logic.NullUtil
// import org.allbinary.util.CircularIndexUtil
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsProperty

@global export class BaseCircularPool extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.BaseCircularPool";
    }
    circularIndexUtil: CircularIndexUtil | null = null;
    OBJECT_ARRAY: StaticArray<Object | null> | null = null;

    jfields_BaseCircularPool(): void {
    this.circularIndexUtil = CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL;
    this.OBJECT_ARRAY = NullUtil.getInstance()!.NULL_OBJECT_ARRAY;
    }

    jinit_BaseCircularPool_0(): BaseCircularPool {
        super.jinit_JObject_0();
        this.jfields_BaseCircularPool();
        return this;
    }
    

    getNextInstance(): Object | null {
        let anyType: Object | null = this.OBJECT_ARRAY![this.circularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) return null;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return null;
        return anyType;
    }
    

    init(allBinaryObjectFactoryInterface: AllBinaryObjectFactoryInterface | null): void {
        this.circularIndexUtil!.setIndex(0); if (JThrowable.pending !== null) return;
        let size: i32 = this.circularIndexUtil!.getSize(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            this.OBJECT_ARRAY![index] = allBinaryObjectFactoryInterface!.getInstance(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getInstance1(index: i32): Object | null {
        return this.OBJECT_ARRAY![index];
    }
}

