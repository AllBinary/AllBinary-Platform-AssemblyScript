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

@global export class NoCacheableFactory extends JObject implements CacheableInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.NoCacheableFactory";
    }
    

    jinit_NoCacheableFactory_0(): NoCacheableFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance1(key: Object | null): CacheableInterface | null {
        { JThrowable.raise(new JException().jinit_JException_1("This Factory Does Not")); return null; }
        return null;
    }
}

