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

@global export class CachePolicy extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.CachePolicy";
    }
    name: string | null = null;
    maxTime: i64 = 0;
    maxSize: i64 = 0;

    jfields_CachePolicy(): void {
    
    this.maxTime = 0;
    this.maxSize = 0;
    }
    

    jinit_CachePolicy_3(name: string | null, maxTime: i64, maxSize: i64): CachePolicy {
        super.jinit_JObject_0();
        this.jfields_CachePolicy();
        this.name = name;
        this.setMaxTime(maxTime); if (JThrowable.pending !== null) return this;
        this.setMaxSize(maxSize); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getMaxTime(): i64 {
        return this.maxTime;
    }
    

    setMaxTime(maxTime: i64): void {
        this.maxTime = maxTime;
    }
    

    getMaxSize(): i64 {
        return this.maxSize;
    }
    

    setMaxSize(maxSize: i64): void {
        this.maxSize = maxSize;
    }
    

    getName(): string | null {
        return this.name;
    }
}

