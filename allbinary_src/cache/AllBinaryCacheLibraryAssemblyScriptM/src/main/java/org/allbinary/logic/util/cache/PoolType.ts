/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2007 AllBinary 
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

@global export class PoolType extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.PoolType";
    }
    cacheType: CacheType | null = null;

    jfields_PoolType(): void {
    
    }
    

    jinit_PoolType_1(cacheType: CacheType | null): PoolType {
        super.jinit_JObject_0();
        this.jfields_PoolType();
        this.cacheType = cacheType;
        return this;
    }
    

    getCacheType(): CacheType | null {
        return this.cacheType;
    }
    

    toString(): string | null {
        let POOL_TYPE: string | null = "PoolType: ";
        return jstr(POOL_TYPE) + jstr(JObject.jtoString(this.getCacheType()));
    }
}

