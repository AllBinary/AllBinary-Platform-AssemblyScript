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
// package org.allbinary.image.opengles
// import javax.microedition.khronos.opengles.GL10

@global export class OpenGLESImageTranslate extends JObject {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLESImageTranslate";
    }
    @lazy static jv_instance: OpenGLESImageTranslate | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLESImageTranslate | null {
        if (!OpenGLESImageTranslate.js_instance) {
            OpenGLESImageTranslate.js_instance = true;
            OpenGLESImageTranslate.jv_instance = new OpenGLESImageTranslate().jinit_OpenGLESImageTranslate_0();
        }
        return OpenGLESImageTranslate.jv_instance;
    }
    static set instance(value: OpenGLESImageTranslate | null) {
        OpenGLESImageTranslate.js_instance = true;
        OpenGLESImageTranslate.jv_instance = value;
    }

    jinit_OpenGLESImageTranslate_0(): OpenGLESImageTranslate {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): OpenGLESImageTranslate | null {
        return OpenGLESImageTranslate.instance;
    }
    

    translate(gl: GL10 | null, openGLESImage: OpenGLESImage | null, x: f32, y: f32): void {
    }
    

    translate2(gl: GL10 | null, openGLESImage: OpenGLESImage | null): void {
    }
}

