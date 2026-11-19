/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.device
// import javax.microedition.khronos.opengles.GL10

@global export class NullGL10 extends JObject implements GL10 {

    jclassName(): string {
        return "org.allbinary.device.NullGL10";
    }
    @lazy static jv_NULL_GL10: NullGL10 | null = null;
    @lazy static js_NULL_GL10: bool = false;
    static get NULL_GL10(): NullGL10 | null {
        if (!NullGL10.js_NULL_GL10) {
            NullGL10.js_NULL_GL10 = true;
            NullGL10.jv_NULL_GL10 = new NullGL10().jinit_NullGL10_0();
        }
        return NullGL10.jv_NULL_GL10;
    }
    static set NULL_GL10(value: NullGL10 | null) {
        NullGL10.js_NULL_GL10 = true;
        NullGL10.jv_NULL_GL10 = value;
    }

    jinit_NullGL10_0(): NullGL10 {
        super.jinit_JObject_0();
        return this;
    }
}

