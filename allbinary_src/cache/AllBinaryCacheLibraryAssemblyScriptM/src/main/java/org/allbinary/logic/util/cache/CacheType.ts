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
// import org.allbinary.logic.string.StringMaker

@global export class CacheType extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.CacheType";
    }
    vendor: string | null = null;
    type: string | null = null;

    jfields_CacheType(): void {
    
    
    }
    

    jinit_CacheType_2(vendor: string | null, type: string | null): CacheType {
        super.jinit_JObject_0();
        this.jfields_CacheType();
        this.vendor = vendor;
        this.type = type;
        return this;
    }
    

    getVendor(): string | null {
        return this.vendor;
    }
    

    getType(): string | null {
        return this.type;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("CacheType: Vendor: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getVendor()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Type: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getType()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

