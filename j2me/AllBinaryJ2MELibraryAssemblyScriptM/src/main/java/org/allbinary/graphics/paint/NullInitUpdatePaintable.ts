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
// package org.allbinary.graphics.paint

@global export class NullInitUpdatePaintable extends InitUpdatePaintable {

    jclassName(): string {
        return "org.allbinary.graphics.paint.NullInitUpdatePaintable";
    }
    @lazy static jv_SINGLETON: NullInitUpdatePaintable | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NullInitUpdatePaintable | null {
        if (!NullInitUpdatePaintable.js_SINGLETON) {
            NullInitUpdatePaintable.js_SINGLETON = true;
            NullInitUpdatePaintable.jv_SINGLETON = new NullInitUpdatePaintable().jinit_NullInitUpdatePaintable_0();
        }
        return NullInitUpdatePaintable.jv_SINGLETON;
    }
    static set SINGLETON(value: NullInitUpdatePaintable | null) {
        NullInitUpdatePaintable.js_SINGLETON = true;
        NullInitUpdatePaintable.jv_SINGLETON = value;
    }
    

    jinit_NullInitUpdatePaintable_0(): NullInitUpdatePaintable {
        super.jinit_InitUpdatePaintable_0();
        return this;
    }
    

    static getInstance(): InitUpdatePaintable | null {
        return NullInitUpdatePaintable.SINGLETON;
    }
}

