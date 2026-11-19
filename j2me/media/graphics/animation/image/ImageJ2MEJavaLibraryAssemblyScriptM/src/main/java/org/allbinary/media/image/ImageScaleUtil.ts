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
// import org.allbinary.image.ImageCache

@global export class ImageScaleUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageScaleUtil";
    }
    @lazy static jv_instance: ImageScaleUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageScaleUtil | null {
        if (!ImageScaleUtil.js_instance) {
            ImageScaleUtil.js_instance = true;
            ImageScaleUtil.jv_instance = new ImageScaleUtil().jinit_ImageScaleUtil_0();
        }
        return ImageScaleUtil.jv_instance;
    }
    static set instance(value: ImageScaleUtil | null) {
        ImageScaleUtil.js_instance = true;
        ImageScaleUtil.jv_instance = value;
    }
    

    static getInstance(): ImageScaleUtil | null {
        return ImageScaleUtil.instance;
    }
    

    jinit_ImageScaleUtil_0(): ImageScaleUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    createImage2(imageCache: ImageCache | null, originalImage: Image | null, scaleNominatorX: f32, scaleDenominatorX: f32, scaleNominatorY: f32, scaleDenominatorY: f32, cached: bool): Image | null {
        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);
    }
    

    createImage3(imageCache: ImageCache | null, originalImage: Image | null, scaleNominatorX: f32, scaleDenominatorX: f32, scaleNominatorY: f32, scaleDenominatorY: f32, cached: bool, mutable: bool): Image | null {
        return originalImage;
    }
}

