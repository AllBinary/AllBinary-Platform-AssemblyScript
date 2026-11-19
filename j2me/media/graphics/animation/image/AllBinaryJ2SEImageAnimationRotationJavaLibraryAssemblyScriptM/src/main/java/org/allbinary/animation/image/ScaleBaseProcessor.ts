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
// package org.allbinary.animation.image
// import javax.microedition.lcdui.Image

@global export class ScaleBaseProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.image.ScaleBaseProcessor";
    }
    @lazy static jv_instance: ScaleBaseProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScaleBaseProcessor | null {
        if (!ScaleBaseProcessor.js_instance) {
            ScaleBaseProcessor.js_instance = true;
            ScaleBaseProcessor.jv_instance = new ScaleBaseProcessor().jinit_ScaleBaseProcessor_0();
        }
        return ScaleBaseProcessor.jv_instance;
    }
    static set instance(value: ScaleBaseProcessor | null) {
        ScaleBaseProcessor.js_instance = true;
        ScaleBaseProcessor.jv_instance = value;
    }

    jinit_ScaleBaseProcessor_0(): ScaleBaseProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ScaleBaseProcessor | null {
        return ScaleBaseProcessor.instance;
    }
    

    update(originalImage: Image | null, originalImageArray: StaticArray<Image | null> | null, imageToShowArray: StaticArray<Image | null> | null, index: i32, scaleX: f32, scaleY: f32, maxScaleX: f32, maxScaleY: f32): void {
    }
}

