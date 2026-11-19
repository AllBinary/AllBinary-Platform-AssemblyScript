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

@global export class NullLocationPaintable extends LocationPaintable {

    jclassName(): string {
        return "org.allbinary.graphics.paint.NullLocationPaintable";
    }
    @lazy static jv_instanceC: NullLocationPaintable | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): NullLocationPaintable | null {
        if (!NullLocationPaintable.js_instanceC) {
            NullLocationPaintable.js_instanceC = true;
            NullLocationPaintable.jv_instanceC = new NullLocationPaintable().jinit_NullLocationPaintable_0();
        }
        return NullLocationPaintable.jv_instanceC;
    }
    static set instanceC(value: NullLocationPaintable | null) {
        NullLocationPaintable.js_instanceC = true;
        NullLocationPaintable.jv_instanceC = value;
    }

    jinit_NullLocationPaintable_0(): NullLocationPaintable {
        super.jinit_LocationPaintable_0();
        return this;
    }
    

    static getInstance(): NullLocationPaintable | null {
        return NullLocationPaintable.instanceC;
    }
}

