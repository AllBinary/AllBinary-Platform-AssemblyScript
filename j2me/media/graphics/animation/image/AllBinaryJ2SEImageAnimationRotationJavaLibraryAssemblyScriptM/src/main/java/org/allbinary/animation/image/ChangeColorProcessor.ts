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

@global export class ChangeColorProcessor extends ModifierBaseProcessor {

    jclassName(): string {
        return "org.allbinary.animation.image.ChangeColorProcessor";
    }
    @lazy static jv_instanceC: ChangeColorProcessor | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): ChangeColorProcessor | null {
        if (!ChangeColorProcessor.js_instanceC) {
            ChangeColorProcessor.js_instanceC = true;
            ChangeColorProcessor.jv_instanceC = new ChangeColorProcessor().jinit_ChangeColorProcessor_0();
        }
        return ChangeColorProcessor.jv_instanceC;
    }
    static set instanceC(value: ChangeColorProcessor | null) {
        ChangeColorProcessor.js_instanceC = true;
        ChangeColorProcessor.jv_instanceC = value;
    }

    jinit_ChangeColorProcessor_0(): ChangeColorProcessor {
        super.jinit_ModifierBaseProcessor_0();
        return this;
    }
    

    static getInstance(): ChangeColorProcessor | null {
        return ChangeColorProcessor.instanceC;
    }
    

    updateColor(imageModifierUtil: ImageModifierUtil | null, originalImage: Image | null, imageToShow: Image | null, index: i32, basicColor: BasicColor | null): void {
        imageModifierUtil!.changeColor(originalImage, imageToShow, index, basicColor); if (JThrowable.pending !== null) return;
    }
}

