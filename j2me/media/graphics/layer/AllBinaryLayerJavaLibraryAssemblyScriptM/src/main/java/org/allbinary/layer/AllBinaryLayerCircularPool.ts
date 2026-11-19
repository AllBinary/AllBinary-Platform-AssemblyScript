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
// package org.allbinary.layer
// import org.allbinary.logic.util.cache.BaseCircularPool
// import org.allbinary.util.CircularIndexUtil

@global export class AllBinaryLayerCircularPool extends BaseCircularPool {

    jclassName(): string {
        return "org.allbinary.layer.AllBinaryLayerCircularPool";
    }
    

    jinit_AllBinaryLayerCircularPool_0(): AllBinaryLayerCircularPool {
        super.jinit_BaseCircularPool_0();
        return this;
    }
    

    initAllBinaryLayerCircularPool(allbinaryLayerFactoryInterface: AllBinaryLayerFactoryInterface | null, total: i32): void {
        this.circularIndexUtil = CircularIndexUtil.createInstance(total); if (JThrowable.pending !== null) return;
        this.OBJECT_ARRAY = new StaticArray<Object | null>(total);
        for (let localIndex: i32 = 0; localIndex < total; localIndex++) {
            this.OBJECT_ARRAY![localIndex] = allbinaryLayerFactoryInterface!.getInstance(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

