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

@global export class BasicArrayListCacheableInterfaceFactory extends JObject implements CacheableInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.BasicArrayListCacheableInterfaceFactory";
    }

    jinit_BasicArrayListCacheableInterfaceFactory_0(): BasicArrayListCacheableInterfaceFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance1(key: Object | null): CacheableInterface | null {
        return new BasicArrayListCacheable().jinit_BasicArrayListCacheable_0();
    }
}

