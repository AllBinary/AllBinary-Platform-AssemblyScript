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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsProperty

@global export class BaseBasicArrayListCache extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.BaseBasicArrayListCache";
    }
    list: BasicArrayList | null = null;

    jfields_BaseBasicArrayListCache(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_BaseBasicArrayListCache_0(): BaseBasicArrayListCache {
        super.jinit_JObject_0();
        this.jfields_BaseBasicArrayListCache();
        return this;
    }
    

    log(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("S: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.list!.size()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

