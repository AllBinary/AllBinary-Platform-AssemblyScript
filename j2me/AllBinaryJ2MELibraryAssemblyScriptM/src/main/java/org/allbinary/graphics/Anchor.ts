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
// package org.allbinary.graphics
// import javax.microedition.lcdui.Graphics

@global export class Anchor extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.Anchor";
    }
    @lazy static jv_TOP_LEFT: i32 = 0;
    @lazy static js_TOP_LEFT: bool = false;
    static get TOP_LEFT(): i32 {
        if (!Anchor.js_TOP_LEFT) {
            Anchor.js_TOP_LEFT = true;
            Anchor.jv_TOP_LEFT = Graphics.TOP & Graphics.LEFT;
        }
        return Anchor.jv_TOP_LEFT;
    }
    static set TOP_LEFT(value: i32) {
        Anchor.js_TOP_LEFT = true;
        Anchor.jv_TOP_LEFT = value;
    }

    jinit_Anchor_0(): Anchor {
        super.jinit_JObject_0();
        return this;
    }
}

