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
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.media.image.ImageModifierUtil

@global export class SetColorProcessor extends ModifierBaseProcessor {

    jclassName(): string {
        return "org.allbinary.animation.image.SetColorProcessor";
    }
    @lazy static jv_instanceC: SetColorProcessor | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): SetColorProcessor | null {
        if (!SetColorProcessor.js_instanceC) {
            SetColorProcessor.js_instanceC = true;
            SetColorProcessor.jv_instanceC = new SetColorProcessor().jinit_SetColorProcessor_0();
        }
        return SetColorProcessor.jv_instanceC;
    }
    static set instanceC(value: SetColorProcessor | null) {
        SetColorProcessor.js_instanceC = true;
        SetColorProcessor.jv_instanceC = value;
    }

    jinit_SetColorProcessor_0(): SetColorProcessor {
        super.jinit_ModifierBaseProcessor_0();
        return this;
    }
    

    static getInstance(): SetColorProcessor | null {
        return SetColorProcessor.instanceC;
    }
    

    updateColor(imageModifierUtil: ImageModifierUtil | null, originalImage: Image | null, imageToShow: Image | null, index: i32, basicColor: BasicColor | null): void {
        imageModifierUtil!.setColor(originalImage, imageToShow, index, basicColor); if (JThrowable.pending !== null) return;
    }
}

