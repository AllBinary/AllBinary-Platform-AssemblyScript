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
// import org.allbinary.graphics.Anchor

@global export class ImageRotationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageRotationUtil";
    }
    @lazy static jv_instance: ImageRotationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageRotationUtil | null {
        if (!ImageRotationUtil.js_instance) {
            ImageRotationUtil.js_instance = true;
            ImageRotationUtil.jv_instance = new ImageRotationUtil().jinit_ImageRotationUtil_0();
        }
        return ImageRotationUtil.jv_instance;
    }
    static set instance(value: ImageRotationUtil | null) {
        ImageRotationUtil.js_instance = true;
        ImageRotationUtil.jv_instance = value;
    }
    anchor: i32 = 0;

    jfields_ImageRotationUtil(): void {
    this.anchor = Anchor.TOP_LEFT;
    }
    

    static getInstance(): ImageRotationUtil | null {
        return ImageRotationUtil.instance;
    }
    

    jinit_ImageRotationUtil_0(): ImageRotationUtil {
        super.jinit_JObject_0();
        this.jfields_ImageRotationUtil();
        return this;
    }
    

    createRotatedImage(originalImage: Image | null, rotationInDegrees: i32): Image | null {
        return originalImage;
    }
}

