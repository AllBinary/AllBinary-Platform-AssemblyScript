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

@global export class PoolInterfaceFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.PoolInterfaceFactory";
    }
    

    jinit_PoolInterfaceFactory_0(): PoolInterfaceFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance3(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface | null, poolType: PoolType | null, cachePolicy: CachePolicy | null): PoolInterface | null {
        { JThrowable.raise(new JException().jinit_JException_1(jstr("No Such PoolType: ") + jstr(JObject.jtoString(poolType)))); return null; }
        return null;
    }
}

