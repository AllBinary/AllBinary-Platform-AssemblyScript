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
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AbstractArrayListPool extends JObject implements PoolInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.AbstractArrayListPool";
    }
    commonStrings: CommonStrings | null = null;
    buffers: BasicArrayList | null = null;
    cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface | null = null;

    jfields_AbstractArrayListPool(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.buffers = new BasicArrayListD().jinit_BasicArrayListD_0();
    
    }
    

    jinit_AbstractArrayListPool_1(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface | null): AbstractArrayListPool {
        super.jinit_JObject_0();
        this.jfields_AbstractArrayListPool();
        this.cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface;
        return this;
    }
    

    clear(): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    remove(key: Object | null): CacheableInterface | null {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
    

    add(cacheableInterface: CacheableInterface | null): void {
        this.buffers!.add(cacheableInterface); if (JThrowable.pending !== null) return;
    }
    

    addArray(cacheableInterfaces: StaticArray<CacheableInterface | null> | null): void {
        for (let index: i32 = 0; index < cacheableInterfaces!.length; index++) {
            this.buffers!.add(cacheableInterfaces![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

