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

@global export class CacheInterfaceFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.CacheInterfaceFactory";
    }
    

    jinit_CacheInterfaceFactory_0(): CacheInterfaceFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance2(cacheType: CacheType | null, cachePolicy: CachePolicy | null): CacheInterface | null {
        { JThrowable.raise(new JException().jinit_JException_1(jstr("No such ") + jstr(JObject.jtoString(cacheType)))); return null; }
        return null;
    }
}

