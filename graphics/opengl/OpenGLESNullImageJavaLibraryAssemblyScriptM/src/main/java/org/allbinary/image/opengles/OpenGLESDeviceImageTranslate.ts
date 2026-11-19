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

@global export class OpenGLESDeviceImageTranslate extends OpenGLESImageTranslate {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLESDeviceImageTranslate";
    }
    translateX: f32 = 0.0;
    translateY: f32 = 0.0;
    translateX2: f32 = 0.0;
    translateY2: f32 = 0.0;

    jfields_OpenGLESDeviceImageTranslate(): void {
    this.translateX = (<f32>0.0);
    this.translateY = (<f32>0.0);
    this.translateX2 = (<f32>0.0);
    this.translateY2 = (<f32>0.0);
    }

    jinit_OpenGLESDeviceImageTranslate_0(): OpenGLESDeviceImageTranslate {
        super.jinit_OpenGLESImageTranslate_0();
        this.jfields_OpenGLESDeviceImageTranslate();
        return this;
    }
    

    translate(gl: GL10 | null, openGLESImage: OpenGLESImage | null, x: f32, y: f32): void {
        openGLESImage!.imageProcessor!.translate(gl, this.translateX + (openGLESImage!.openGLESImageProperties!.scaleX * x), this.translateY + (openGLESImage!.openGLESImageProperties!.scaleY * y)); if (JThrowable.pending !== null) return;
    }
    

    translate2(gl: GL10 | null, openGLESImage: OpenGLESImage | null): void {
        openGLESImage!.imageProcessor!.translate(gl, this.translateX2, this.translateY2); if (JThrowable.pending !== null) return;
    }
}

