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
// import org.allbinary.media.image.ImageModifierUtil

@global export class AlphaProcessor extends ModifierBaseProcessor {

    jclassName(): string {
        return "org.allbinary.animation.image.AlphaProcessor";
    }
    @lazy static jv_instanceC: AlphaProcessor | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): AlphaProcessor | null {
        if (!AlphaProcessor.js_instanceC) {
            AlphaProcessor.js_instanceC = true;
            AlphaProcessor.jv_instanceC = new AlphaProcessor().jinit_AlphaProcessor_0();
        }
        return AlphaProcessor.jv_instanceC;
    }
    static set instanceC(value: AlphaProcessor | null) {
        AlphaProcessor.js_instanceC = true;
        AlphaProcessor.jv_instanceC = value;
    }

    jinit_AlphaProcessor_0(): AlphaProcessor {
        super.jinit_ModifierBaseProcessor_0();
        return this;
    }
    

    static getInstance(): AlphaProcessor | null {
        return AlphaProcessor.instanceC;
    }
    

    updateAlpha(imageModifierUtil: ImageModifierUtil | null, originalImage: Image | null, imageToShow: Image | null, index: i32, alpha: i32): void {
        imageModifierUtil!.setAlpha(originalImage, imageToShow, index, alpha); if (JThrowable.pending !== null) return;
    }
}

