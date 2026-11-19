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

@global export class OpenGLESImageProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLESImageProperties";
    }
    textureID: i32 = 0;
    scaleX: f32 = 0.0;
    scaleY: f32 = 0.0;
    scaleX2: f32 = 0.0;
    scaleY2: f32 = 0.0;
    angle: i32 = 0;
    redf: f32 = 0.0;
    greenf: f32 = 0.0;
    bluef: f32 = 0.0;
    alphaf: f32 = 0.0;

    jfields_OpenGLESImageProperties(): void {
    this.textureID = -1;
    this.scaleX = (<f32>1.0);
    this.scaleY = (<f32>1.0);
    this.scaleX2 = (<f32>1.0);
    this.scaleY2 = (<f32>1.0);
    this.angle = 0;
    this.redf = (<f32>1.0);
    this.greenf = (<f32>1.0);
    this.bluef = (<f32>1.0);
    this.alphaf = (<f32>1.0);
    }

    jinit_OpenGLESImageProperties_0(): OpenGLESImageProperties {
        super.jinit_JObject_0();
        this.jfields_OpenGLESImageProperties();
        return this;
    }
}

