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
// import org.allbinary.image.GameFeatureImageCacheFactory

@global export class ImageCreationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageCreationUtil";
    }
    @lazy static jv_instance: ImageCreationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageCreationUtil | null {
        if (!ImageCreationUtil.js_instance) {
            ImageCreationUtil.js_instance = true;
            ImageCreationUtil.jv_instance = new ImageCreationUtil().jinit_ImageCreationUtil_0();
        }
        return ImageCreationUtil.jv_instance;
    }
    static set instance(value: ImageCreationUtil | null) {
        ImageCreationUtil.js_instance = true;
        ImageCreationUtil.jv_instance = value;
    }
    

    static getInstance(): ImageCreationUtil | null {
        return ImageCreationUtil.instance;
    }
    

    jinit_ImageCreationUtil_0(): ImageCreationUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    createImageWH(width: i32, height: i32): Image | null {
        let image: Image | null = GameFeatureImageCacheFactory.getInstance()!.get(JObject.jclassOf(this)!.getName(), width, height); if (JThrowable.pending !== null) return null;
        return image;
    }
    

    createImage(width: i32, height: i32, maxScaleX: f32, maxScaleY: f32): Image | null {
        let image: Image | null = GameFeatureImageCacheFactory.getInstance()!.get(JObject.jclassOf(this)!.getName(), JMath.toInt(((<f32>(width)) * maxScaleX)) + 1, JMath.toInt(((<f32>(height)) * maxScaleY)) + 1); if (JThrowable.pending !== null) return null;
        return image;
    }
}

