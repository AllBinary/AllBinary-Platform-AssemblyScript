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
// import java.awt.image.BufferedImage
// import javax.microedition.lcdui.Image
// import org.allbinary.graphics.Anchor
// import org.allbinary.logic.communication.log.LogUtil
// import org.microemu.device.j2se.J2SEImmutableImage

@global export class ImageCopyUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageCopyUtil";
    }
    @lazy static jv_instance: ImageCopyUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageCopyUtil | null {
        if (!ImageCopyUtil.js_instance) {
            ImageCopyUtil.js_instance = true;
            ImageCopyUtil.jv_instance = new ImageCopyUtil().jinit_ImageCopyUtil_0();
        }
        return ImageCopyUtil.jv_instance;
    }
    static set instance(value: ImageCopyUtil | null) {
        ImageCopyUtil.js_instance = true;
        ImageCopyUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    imageUtil: ImageUtil | null = null;
    imageCreationUtil: ImageCreationUtil | null = null;
    anchor: i32 = 0;

    jfields_ImageCopyUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.imageUtil = ImageUtil.getInstance();
    this.imageCreationUtil = ImageCreationUtil.getInstance();
    this.anchor = Anchor.TOP_LEFT;
    }
    

    static getInstance(): ImageCopyUtil | null {
        return ImageCopyUtil.instance;
    }
    

    jinit_ImageCopyUtil_0(): ImageCopyUtil {
        super.jinit_JObject_0();
        this.jfields_ImageCopyUtil();
        return this;
    }
    

    createImageForRotation(originalImage: Image | null): Image | null {
        return this.createImage(originalImage);
    }
    

    createImage(originalImage: Image | null): Image | null {
        let image: Image | null = this.imageCreationUtil!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight()); if (JThrowable.pending !== null) return null;
        if (image!.isMutable()) {
            image!.getGraphics()!.drawImage(originalImage, 0, 0, this.anchor); if (JThrowable.pending !== null) return null;
            return image;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Not Mutable")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    createImageScale(originalImage: Image | null, canvasScale: f32, resize: bool): Image | null {
        let newWidth: i32 = JMath.toInt(((<f32>(originalImage!.getWidth())) * canvasScale)); if (JThrowable.pending !== null) return null;
        let newHeight: i32 = JMath.toInt(((<f32>(originalImage!.getHeight())) * canvasScale)); if (JThrowable.pending !== null) return null;
        if (resize) {
            if (newWidth < newHeight) {
                newWidth = newHeight;
            }
            if (newHeight < newWidth) {
                newHeight = newWidth;
            }
        }
        let originalBufferedImage: BufferedImage | null = this.imageUtil!.getBufferedImage(originalImage); if (JThrowable.pending !== null) return null;
        let bufferedImage: BufferedImage | null = this.imageUtil!.createBufferedImageWithLargerCanvas(originalBufferedImage, newWidth, newHeight); if (JThrowable.pending !== null) return null;
        let image: J2SEImmutableImage | null = new J2SEImmutableImage().jinit_J2SEImmutableImage_1(bufferedImage); if (JThrowable.pending !== null) return null;
        return image;
    }
}

