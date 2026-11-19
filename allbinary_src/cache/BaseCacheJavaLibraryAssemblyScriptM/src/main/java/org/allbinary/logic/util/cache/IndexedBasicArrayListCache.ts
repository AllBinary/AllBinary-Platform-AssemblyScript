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
// import org.allbinary.string.CommonStrings
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class IndexedBasicArrayListCache extends BaseBasicArrayListCache implements CacheInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.IndexedBasicArrayListCache";
    }
    commonStrings: CommonStrings | null = null;
    size: i32 = 0;
    index: i32 = 0;

    jfields_IndexedBasicArrayListCache(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.size = 0;
    this.index = 0;
    }
    

    static createCache(size: i32): IndexedBasicArrayListCache | null {
        let indexedBasicArrayListCache: IndexedBasicArrayListCache | null = new IndexedBasicArrayListCache().jinit_IndexedBasicArrayListCache_0(); if (JThrowable.pending !== null) return null;
        indexedBasicArrayListCache!.init(size); if (JThrowable.pending !== null) return null;
        return indexedBasicArrayListCache;
    }
    

    jinit_IndexedBasicArrayListCache_0(): IndexedBasicArrayListCache {
        super.jinit_BaseBasicArrayListCache_0();
        this.jfields_IndexedBasicArrayListCache();
        return this;
    }
    

    init(size: i32): void {
        if (this.size < size) {
            this.list!.ensureCapacity(size); if (JThrowable.pending !== null) return;
            for (let index: i32 = size - 1; index >= this.size; index--) {
                this.addDefault(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.size = size;
        } if (JThrowable.pending !== null) return;
    }
    

    getAt(index: i32): Object | null {
        return this.list!.objectArray![index];
    }
    

    addDefault(): void {
    }
    

    addObject(anyType: Object | null): void {
        this.list!.add(anyType); if (JThrowable.pending !== null) return;
    }
    

    add(cacheableInterface: CacheableInterface | null): void {
        this.list!.add(cacheableInterface); if (JThrowable.pending !== null) return;
    }
    

    addArray(cacheableInterfaces: StaticArray<CacheableInterface | null> | null): void {
        { JThrowable.raise(new JException().jinit_JException_1("No Imple")); return; }
    }
    

    clear(): void {
        this.index = 0;
    }
}

