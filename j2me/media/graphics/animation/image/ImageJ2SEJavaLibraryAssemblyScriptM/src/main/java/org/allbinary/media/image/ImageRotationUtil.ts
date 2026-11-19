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
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.microemu.device.j2se.J2SEImmutableImage
// import org.microemu.device.j2se.J2SEMutableImage

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
    imageJ2SERotationUtil: ImageJ2SERotationUtil | null = null;

    jfields_ImageRotationUtil(): void {
    this.imageJ2SERotationUtil = ImageJ2SERotationUtil.getInstance();
    }
    

    static getInstance(): ImageRotationUtil | null {
        return ImageRotationUtil.instance;
    }
    

    jinit_ImageRotationUtil_0(): ImageRotationUtil {
        super.jinit_JObject_0();
        this.jfields_ImageRotationUtil();
        return this;
    }
    

    rotateImage(originalImage: Image | null, image: Image | null, totalAngle: i32): void {
        if (image!.isMutable()) {
            let j2seImage: J2SEMutableImage | null = changetype<J2SEMutableImage | null>(image);
            let newBufferedImage: BufferedImage | null = changetype<BufferedImage | null>(j2seImage!.getImage()); if (JThrowable.pending !== null) return;
            let originalAwtImage: Image | null = null;
            if (originalImage!.isMutable()) {
                let originalJ2SEImage: J2SEMutableImage | null = changetype<J2SEMutableImage | null>(originalImage);
                originalAwtImage = changetype<Image | null>(originalJ2SEImage!.getImage()); if (JThrowable.pending !== null) return;
            } else {
                let originalJ2SEImage: J2SEImmutableImage | null = changetype<J2SEImmutableImage | null>(originalImage);
                originalAwtImage = changetype<Image | null>(originalJ2SEImage!.getImage()); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.imageJ2SERotationUtil!.rotateImage(originalAwtImage, newBufferedImage, totalAngle); if (JThrowable.pending !== null) return;
        } else {
            PreLogUtil.putOE("Not Mutable", this, "getRotatedImage", new JException().jinit_JException_0()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    createRotatedImage(originalImage: Image | null, rotationInDegrees: i32): Image | null {
        let image: Image | null = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight()); if (JThrowable.pending !== null) return null;
        if (image!.isMutable()) {
            let originalAwtImage: Image | null = null;
            if (originalImage!.isMutable()) {
                let originalJ2SEImage: J2SEMutableImage | null = changetype<J2SEMutableImage | null>(originalImage);
                originalAwtImage = changetype<Image | null>(originalJ2SEImage!.getImage()); if (JThrowable.pending !== null) return null;
            } else {
                let originalJ2SEImage: J2SEImmutableImage | null = changetype<J2SEImmutableImage | null>(originalImage);
                originalAwtImage = changetype<Image | null>(originalJ2SEImage!.getImage()); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            let j2seImage: J2SEMutableImage | null = changetype<J2SEMutableImage | null>(image);
            let newBufferedImage: BufferedImage | null = changetype<BufferedImage | null>(j2seImage!.getImage()); if (JThrowable.pending !== null) return null;
            let bufferedImage: BufferedImage | null = this.imageJ2SERotationUtil!.createRotatedImage(originalAwtImage, newBufferedImage, rotationInDegrees); if (JThrowable.pending !== null) return null;
            return image;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Not Mutable")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

