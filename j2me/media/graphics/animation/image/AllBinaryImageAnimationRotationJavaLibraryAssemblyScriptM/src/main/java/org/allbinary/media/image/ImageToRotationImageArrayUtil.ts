/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
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

@global export class ImageToRotationImageArrayUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageToRotationImageArrayUtil";
    }
    @lazy static jv_instance: ImageToRotationImageArrayUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageToRotationImageArrayUtil | null {
        if (!ImageToRotationImageArrayUtil.js_instance) {
            ImageToRotationImageArrayUtil.js_instance = true;
            ImageToRotationImageArrayUtil.jv_instance = new ImageToRotationImageArrayUtil().jinit_ImageToRotationImageArrayUtil_0();
        }
        return ImageToRotationImageArrayUtil.jv_instance;
    }
    static set instance(value: ImageToRotationImageArrayUtil | null) {
        ImageToRotationImageArrayUtil.js_instance = true;
        ImageToRotationImageArrayUtil.jv_instance = value;
    }
    

    static getInstance(): ImageToRotationImageArrayUtil | null {
        return ImageToRotationImageArrayUtil.instance;
    }
    

    jinit_ImageToRotationImageArrayUtil_0(): ImageToRotationImageArrayUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    generate(image: Image | null, angleIncrement: i32, totalAngle: i32): StaticArray<Image | null> | null {
        let imageRotationUtil: ImageRotationUtil | null = ImageRotationUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let totalFrames: i32 = totalAngle / angleIncrement;
        let imageArray: StaticArray<Image | null> | null = new StaticArray<Image | null>(totalFrames);
        imageArray![0] = image;
        for (let index: i32 = 1; index < totalFrames; index++) {
            imageArray![index] = imageRotationUtil!.createRotatedImage(image, index * angleIncrement); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return imageArray;
    }
}

