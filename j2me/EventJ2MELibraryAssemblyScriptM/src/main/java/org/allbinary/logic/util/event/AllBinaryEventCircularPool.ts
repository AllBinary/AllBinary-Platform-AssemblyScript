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
// package org.allbinary.logic.util.event
// import org.allbinary.logic.util.cache.BaseCircularPool
// import org.allbinary.util.CircularIndexUtil

@global export class AllBinaryEventCircularPool extends BaseCircularPool {

    jclassName(): string {
        return "org.allbinary.logic.util.event.AllBinaryEventCircularPool";
    }
    

    jinit_AllBinaryEventCircularPool_1(max: i32): AllBinaryEventCircularPool {
        super.jinit_BaseCircularPool_0();
        this.OBJECT_ARRAY = new StaticArray<Object | null>(max);
        this.circularIndexUtil = CircularIndexUtil.createInstance(max); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initAllBinaryEventCircularPool(allBinaryEventObjectFactoryInterface: AllBinaryEventObjectFactoryInterface | null): void {
        this.circularIndexUtil!.setIndex(0); if (JThrowable.pending !== null) return;
        let size: i32 = this.circularIndexUtil!.getSize(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            this.OBJECT_ARRAY![index] = allBinaryEventObjectFactoryInterface!.getInstance(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

