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

@global export class ModifierBaseProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.image.ModifierBaseProcessor";
    }
    @lazy static jv_instance: ModifierBaseProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ModifierBaseProcessor | null {
        if (!ModifierBaseProcessor.js_instance) {
            ModifierBaseProcessor.js_instance = true;
            ModifierBaseProcessor.jv_instance = new ModifierBaseProcessor().jinit_ModifierBaseProcessor_0();
        }
        return ModifierBaseProcessor.jv_instance;
    }
    static set instance(value: ModifierBaseProcessor | null) {
        ModifierBaseProcessor.js_instance = true;
        ModifierBaseProcessor.jv_instance = value;
    }

    jinit_ModifierBaseProcessor_0(): ModifierBaseProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ModifierBaseProcessor | null {
        return ModifierBaseProcessor.instance;
    }
    

    updateColor(imageModifierUtil: ImageModifierUtil | null, originalImage: Image | null, imageToShow: Image | null, index: i32, basicColor: BasicColor | null): void {
    }
    

    updateAlpha(imageModifierUtil: ImageModifierUtil | null, originalImage: Image | null, imageToShow: Image | null, index: i32, alpha: i32): void {
    }
}

