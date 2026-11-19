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
// package org.allbinary.media.image
// import javax.microedition.lcdui.Image
// import org.allbinary.graphics.color.BasicColor

@global export class ImageModifierUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageModifierUtil";
    }
    @lazy static jv_instance: ImageModifierUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageModifierUtil | null {
        if (!ImageModifierUtil.js_instance) {
            ImageModifierUtil.js_instance = true;
            ImageModifierUtil.jv_instance = new ImageModifierUtil().jinit_ImageModifierUtil_0();
        }
        return ImageModifierUtil.jv_instance;
    }
    static set instance(value: ImageModifierUtil | null) {
        ImageModifierUtil.js_instance = true;
        ImageModifierUtil.jv_instance = value;
    }

    jinit_ImageModifierUtil_0(): ImageModifierUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstanceOrCreate(): ImageModifierUtil | null {
        return ImageModifierUtil.instance;
    }
    

    setColor(unusedOriginalImage: Image | null, image: Image | null, imageIndex: i32, basicColor: BasicColor | null): void {
    }
    

    changeColor(unusedOriginalImage: Image | null, image: Image | null, imageIndex: i32, basicColor: BasicColor | null): void {
    }
    

    setAlpha(originalImage: Image | null, image: Image | null, imageIndex: i32, alphaInt: i32): void {
    }
    

    getImageArray(originalImageArray: StaticArray<Image | null> | null): StaticArray<Image | null> | null {
        return originalImageArray;
    }
    

    handleImage(imageArray: StaticArray<Image | null> | null, index: i32, image: Image | null): void {
    }
    

    reset(): void {
    }
}

