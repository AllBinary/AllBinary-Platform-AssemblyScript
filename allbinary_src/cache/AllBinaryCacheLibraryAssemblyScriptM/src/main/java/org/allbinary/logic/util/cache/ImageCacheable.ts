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

@global export class ImageCacheable extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.ImageCacheable";
    }
    name: string | null = null;

    jfields_ImageCacheable(): void {
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_ImageCacheable_2(name: string | null, anyType: Object | null): ImageCacheable {
        super.jinit_JObject_0();
        this.jfields_ImageCacheable();
        return this;
    }
    

    getKey(): Object | null {
        return this.name;
    }
    

    toString(): string | null {
        return this.name;
    }
}

