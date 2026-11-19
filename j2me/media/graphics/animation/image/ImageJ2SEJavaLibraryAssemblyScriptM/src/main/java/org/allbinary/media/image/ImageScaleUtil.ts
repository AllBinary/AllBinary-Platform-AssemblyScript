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
// import java.awt.Graphics2D
// import java.awt.geom.AffineTransform
// import java.awt.image.BufferedImage
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
    imageUtil: ImageUtil | null = null;
    imageJ2SEUtil: ImageJ2SEUtil | null = null;
    imageCreationUtil: ImageCreationUtil | null = null;

    jfields_ImageScaleUtil(): void {
    this.imageUtil = ImageUtil.getInstance();
    this.imageJ2SEUtil = ImageJ2SEUtil.getInstance();
    this.imageCreationUtil = ImageCreationUtil.getInstance();
    }
    

    static getInstance(): ImageScaleUtil | null {
        return ImageScaleUtil.instance;
    }
    

    jinit_ImageScaleUtil_0(): ImageScaleUtil {
        super.jinit_JObject_0();
        this.jfields_ImageScaleUtil();
        return this;
    }
    

    createImage2(imageCache: ImageCache | null, originalImage: Image | null, scaleNominatorX: f32, scaleDenominatorX: f32, scaleNominatorY: f32, scaleDenominatorY: f32, cached: bool): Image | null {
        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);
    }
    

    createImage3(imageCache: ImageCache | null, originalImage: Image | null, scaleNominatorX: f32, scaleDenominatorX: f32, scaleNominatorY: f32, scaleDenominatorY: f32, cached: bool, mutable: bool): Image | null {
        let width: i32 = originalImage!.getWidth(); if (JThrowable.pending !== null) return null;
        let height: i32 = originalImage!.getHeight(); if (JThrowable.pending !== null) return null;
        let scaleX: f32 = scaleNominatorX / scaleDenominatorX;
        let scaleY: f32 = scaleNominatorY / scaleDenominatorY;
        let image: Image | null = null;
        if (cached) {
            image = imageCache!.get(JObject.jclassOf(this)!.getName(), JMath.toInt(((<f32>(width)) * scaleX)), JMath.toInt(((<f32>(height)) * scaleY))); if (JThrowable.pending !== null) return null;
        } else {
            image = imageCache!.get("createImage", JMath.toInt(((<f32>(width)) * scaleX)), JMath.toInt(((<f32>(height)) * scaleY))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        this.scale(originalImage, image, scaleX, scaleY, true); if (JThrowable.pending !== null) return null;
        return image;
    }
    

    scale2(originalImage: Image | null, originalImageArray: StaticArray<Image | null> | null, ximageToShowArray: StaticArray<Image | null> | null, unused: i32, scaleX: f32, scaleY: f32, maxScaleX: f32, maxScaleY: f32): void {
        if (maxScaleX * (<f32>(originalImage!.getWidth())) > (<f32>(originalImageArray![0]!.getWidth())) || maxScaleY * (<f32>(originalImage!.getHeight())) > (<f32>(originalImageArray![0]!.getHeight()))) {
            originalImageArray![0] = this.imageCreationUtil!.createImage(originalImage!.getWidth(), originalImage!.getHeight(), maxScaleX, maxScaleY); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.scale(originalImage, originalImageArray![0], scaleX, scaleY, false); if (JThrowable.pending !== null) return;
    }
    

    scale(originalImage: Image | null, newMaxSizeImage: Image | null, scaleX: f32, scaleY: f32, clear: bool): void {
        let bufferedImage: BufferedImage | null = this.imageUtil!.getBufferedImage(originalImage); if (JThrowable.pending !== null) return;
        let newBufferedImage: BufferedImage | null = this.imageUtil!.getBufferedImage(newMaxSizeImage); if (JThrowable.pending !== null) return;
        let at: AffineTransform | null = AffineTransform.getScaleInstance(scaleX, scaleY); if (JThrowable.pending !== null) return;
        let g: Graphics2D | null = newBufferedImage!.createGraphics(); if (JThrowable.pending !== null) return;
        if (clear) {
            g!.setBackground(this.imageJ2SEUtil!.TRANSPARENT_COLOR); if (JThrowable.pending !== null) return;
            g!.clearRect(0, 0, newBufferedImage!.getWidth(), newBufferedImage!.getHeight()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        g!.drawRenderedImage(bufferedImage, at); if (JThrowable.pending !== null) return;
        g!.dispose(); if (JThrowable.pending !== null) return;
    }
}

