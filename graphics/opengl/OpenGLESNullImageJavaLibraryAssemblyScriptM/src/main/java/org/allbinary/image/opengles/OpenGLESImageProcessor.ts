/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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

@global export class OpenGLESImageProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLESImageProcessor";
    }
    @lazy static jv_instance: OpenGLESImageProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLESImageProcessor | null {
        if (!OpenGLESImageProcessor.js_instance) {
            OpenGLESImageProcessor.js_instance = true;
            OpenGLESImageProcessor.jv_instance = new OpenGLESImageProcessor().jinit_OpenGLESImageProcessor_0();
        }
        return OpenGLESImageProcessor.jv_instance;
    }
    static set instance(value: OpenGLESImageProcessor | null) {
        OpenGLESImageProcessor.js_instance = true;
        OpenGLESImageProcessor.jv_instance = value;
    }

    jinit_OpenGLESImageProcessor_0(): OpenGLESImageProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): OpenGLESImageProcessor | null {
        return OpenGLESImageProcessor.instance;
    }
    

    translate(gl: GL10 | null, translateX: f32, translateY: f32): void {
    }
    

    rotate(gl: GL10 | null, angle: f32): void {
    }
    

    scale(gl: GL10 | null, scaleX: f32, scaleY: f32): void {
    }
    

    colorMask(gl: GL10 | null, red: f32, green: f32, blue: f32, alpha: f32): void {
    }
}

