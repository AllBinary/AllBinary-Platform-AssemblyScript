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
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayListD

@global export class BasicArrayListCacheable extends BasicArrayListD implements CacheableInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.BasicArrayListCacheable";
    }

    jinit_BasicArrayListCacheable_0(): BasicArrayListCacheable {
        super.jinit_BasicArrayListD_0();
        return this;
    }
    

    getKey(): Object | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
}

