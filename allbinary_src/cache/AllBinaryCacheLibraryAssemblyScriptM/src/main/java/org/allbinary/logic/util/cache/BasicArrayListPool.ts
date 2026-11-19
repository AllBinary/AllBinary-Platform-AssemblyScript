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
// import org.allbinary.util.BasicArrayList

@global export class BasicArrayListPool extends AbstractArrayListPool {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.BasicArrayListPool";
    }
    

    jinit_BasicArrayListPool_1(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface | null): BasicArrayListPool {
        super.jinit_AbstractArrayListPool_1(cacheableInterfaceFactoryInterface);
        return this;
    }
    

    clear(): void {
        this.buffers!.clear(); if (JThrowable.pending !== null) return;
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
    

    addAll(usedList: BasicArrayList | null): void {
        for (let index: i32 = usedList!.size(); --index >= 0; ) {
            let anyType: CacheableInterface | null = changetype<CacheableInterface | null>(usedList!.objectArray![index]);
            this.add(anyType); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        usedList!.clear(); if (JThrowable.pending !== null) return;
    }
    

    releaseUsedBackToPool(usedList: BasicArrayList | null): void {
        for (let index: i32 = usedList!.size(); --index >= 0; ) {
            let list: BasicArrayListCacheable | null = changetype<BasicArrayListCacheable | null>(usedList!.objectArray![index]);
            if (list!.size() == 0) {
                usedList!.removeAt(index); if (JThrowable.pending !== null) return;
                this.add(list); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

