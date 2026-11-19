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
// package org.allbinary.layer
// import javax.microedition.lcdui.Graphics

@global export class NullLayer extends Layer {

    jclassName(): string {
        return "org.allbinary.layer.NullLayer";
    }
    @lazy static jv_instance: NullLayer | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NullLayer | null {
        if (!NullLayer.js_instance) {
            NullLayer.js_instance = true;
            NullLayer.jv_instance = new NullLayer().jinit_NullLayer_0();
        }
        return NullLayer.jv_instance;
    }
    static set instance(value: NullLayer | null) {
        NullLayer.js_instance = true;
        NullLayer.jv_instance = value;
    }
    

    static getInstance(): NullLayer | null {
        return NullLayer.instance;
    }
    

    jinit_NullLayer_0(): NullLayer {
        super.jinit_Layer_2(0, 0);
        return this;
    }
    

    paint(graphics: Graphics | null): void {
    }
}

