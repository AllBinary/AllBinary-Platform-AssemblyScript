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

@global export class BasicArrayListResetablePool extends AbstractArrayListPool {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.BasicArrayListResetablePool";
    }
    

    jinit_BasicArrayListResetablePool_1(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface | null): BasicArrayListResetablePool {
        super.jinit_AbstractArrayListPool_1(cacheableInterfaceFactoryInterface);
        return this;
    }
    

    clear(): void {
    }
    

    remove(key: Object | null): CacheableInterface | null {
        let size: i32 = this.buffers!.size(); if (JThrowable.pending !== null) return null;
        if (size > 0) {
            return changetype<CacheableInterface | null>(this.buffers!.removeAt(size - 1));
        } else {
            return this.cacheableInterfaceFactoryInterface!.getInstance1(key);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

