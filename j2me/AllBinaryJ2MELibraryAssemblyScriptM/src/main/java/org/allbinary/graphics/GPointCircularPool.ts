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
// package org.allbinary.graphics
// import org.allbinary.logic.util.cache.BaseCircularPool
// import org.allbinary.util.CircularIndexUtil

@global export class GPointCircularPool extends BaseCircularPool {

    jclassName(): string {
        return "org.allbinary.graphics.GPointCircularPool";
    }
    

    jinit_GPointCircularPool_1(size: i32): GPointCircularPool {
        super.jinit_BaseCircularPool_0();
        this.circularIndexUtil = CircularIndexUtil.createInstance(size); if (JThrowable.pending !== null) return this;
        this.OBJECT_ARRAY = new StaticArray<Object | null>(size);
        for (let index: i32 = size - 1; index >= 0; index--) {
            this.OBJECT_ARRAY![index] = CustomGPoint.getInstance3(0, 0); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
}

