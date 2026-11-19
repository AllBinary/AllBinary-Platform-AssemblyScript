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
// import java.awt.GraphicsConfiguration
// import java.awt.GraphicsDevice
// import java.awt.GraphicsEnvironment
// import java.awt.Transparency
// import java.awt.geom.AffineTransform
// import java.awt.image.BufferedImage
// import javax.microedition.lcdui.Image
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.microemu.device.j2se.J2SEImmutableImage
// import org.microemu.device.j2se.J2SEMutableImage

@global export class ImageUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageUtil";
    }
    @lazy static jv_instance: ImageUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageUtil | null {
        if (!ImageUtil.js_instance) {
            ImageUtil.js_instance = true;
            ImageUtil.jv_instance = new ImageUtil().jinit_ImageUtil_0();
        }
        return ImageUtil.jv_instance;
    }
    static set instance(value: ImageUtil | null) {
        ImageUtil.js_instance = true;
        ImageUtil.jv_instance = value;
    }
    commonStrings: CommonStrings | null = null;
    commonSeps: CommonSeps | null = null;
    IIOIMAGE_POOL_NAME: string | null = null;
    CREATE_BUFFERED_IMAGE: string | null = null;

    jfields_ImageUtil(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.commonSeps = CommonSeps.getInstance();
    this.IIOIMAGE_POOL_NAME = "IIOIMAGE_POOL_NAME";
    this.CREATE_BUFFERED_IMAGE = "createBufferedImage";
    }
    

    static getInstance(): ImageUtil | null {
        return ImageUtil.instance;
    }
    

    jinit_ImageUtil_0(): ImageUtil {
        super.jinit_JObject_0();
        this.jfields_ImageUtil();
        return this;
    }
    

    getDefaultConfiguration(): GraphicsConfiguration | null {
        let ge: GraphicsEnvironment | null = GraphicsEnvironment.getLocalGraphicsEnvironment(); if (JThrowable.pending !== null) return null;
        let gd: GraphicsDevice | null = ge!.getDefaultScreenDevice(); if (JThrowable.pending !== null) return null;
        return gd!.getDefaultConfiguration();
    }
    

    create(width: i32, height: i32): BufferedImage | null {
        let graphicsConfiguration: GraphicsConfiguration | null = this.getDefaultConfiguration(); if (JThrowable.pending !== null) return null;
        return graphicsConfiguration!.createCompatibleImage(width, height, Transparency.TRANSLUCENT);
    }
    

    createBufferedImageForResize(bufferedImageArray: StaticArray<BufferedImage | null> | null, percent: i32, scale: bool): StaticArray<BufferedImage | null> | null {
        let size: i32 = bufferedImageArray!.length;
        let scaledBufferedImageArray: StaticArray<BufferedImage | null> | null = new StaticArray<BufferedImage | null>(size);
        let bufferedImage: BufferedImage | null = null;
        for (let index: i32 = 0; index < size; index++) {
            bufferedImage = bufferedImageArray![index];
            let newWidth: i32 = (bufferedImage!.getWidth() * percent / 100); if (JThrowable.pending !== null) return null;
            let newHeight: i32 = (bufferedImage!.getHeight() * percent / 100); if (JThrowable.pending !== null) return null;
            scaledBufferedImageArray![index] = this.createBufferedImage(bufferedImage, newWidth, newHeight, scale); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return scaledBufferedImageArray;
    }
    

    createBufferedImage2(bufferedImageArray: StaticArray<BufferedImage | null> | null, percent: f32, scale: bool): StaticArray<BufferedImage | null> | null {
        let size: i32 = bufferedImageArray!.length;
        let scaledBufferedImageArray: StaticArray<BufferedImage | null> | null = new StaticArray<BufferedImage | null>(size);
        let bufferedImage: BufferedImage | null = null;
        for (let index: i32 = 0; index < size; index++) {
            bufferedImage = bufferedImageArray![index];
            let newWidth: i32 = JMath.toInt(((<f32>(bufferedImage!.getWidth())) * percent)); if (JThrowable.pending !== null) return null;
            let newHeight: i32 = JMath.toInt(((<f32>(bufferedImage!.getHeight())) * percent)); if (JThrowable.pending !== null) return null;
            scaledBufferedImageArray![index] = this.createBufferedImage(bufferedImage, newWidth, newHeight, scale); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return scaledBufferedImageArray;
    }
    

    createBufferedImage3(bufferedImageArray: StaticArray<BufferedImage | null> | null, width: i32, height: i32, scale: bool): StaticArray<BufferedImage | null> | null {
        let size: i32 = bufferedImageArray!.length;
        let scaledBufferedImageArray: StaticArray<BufferedImage | null> | null = new StaticArray<BufferedImage | null>(size);
        for (let index: i32 = 0; index < size; index++) {
            scaledBufferedImageArray![index] = this.createBufferedImage(bufferedImageArray![index], width, height, scale); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return scaledBufferedImageArray;
    }
    

    createBufferedImageForSave(bufferedImage: BufferedImage | null, newWidth: i32, newHeight: i32): BufferedImage | null {
        return this.createBufferedImage(bufferedImage, newWidth, newHeight, true);
    }
    

    createBufferedImage(bufferedImage: BufferedImage | null, newWidth: i32, newHeight: i32, scale: bool): BufferedImage | null {
        return this.createBufferedImageAllowTranslate(bufferedImage, newWidth, newHeight, scale, false);
    }
    

    createBufferedImageAllowTranslate(bufferedImage: BufferedImage | null, newWidth: i32, newHeight: i32, scale: bool, allowTranslate: bool): BufferedImage | null {
        let width: f64 = (<f64>(bufferedImage!.getWidth())); if (JThrowable.pending !== null) return null;
        let height: f64 = (<f64>(bufferedImage!.getHeight())); if (JThrowable.pending !== null) return null;
        let d_newWidth: f64 = (<f64>(newWidth));
        let d_newHeight: f64 = (<f64>(newHeight));
        let widthRatio: f64 = d_newWidth / width;
        let heightRatio: f64 = d_newHeight / height;
        let ratioX: f64 = 1.0;
        let ratioY: f64 = 1.0;
        if (scale) {
            ratioX = widthRatio;
            ratioY = heightRatio;
        }
        let affineTransform: AffineTransform | null = AffineTransform.getScaleInstance(ratioX, ratioY); if (JThrowable.pending !== null) return null;
        if (!scale && allowTranslate) {
            let dx: f64 = ((<f64>(newWidth)) - width) / 2.0;
            let dy: f64 = ((<f64>(newHeight)) - height) / 2.0;
            affineTransform!.translate(dx, dy); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let newBufferedImage: BufferedImage | null = new BufferedImage().jinit_BufferedImage_3(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE); if (JThrowable.pending !== null) return null;
        let graphics: Graphics2D | null = newBufferedImage!.createGraphics(); if (JThrowable.pending !== null) return null;
        graphics!.drawRenderedImage(bufferedImage, affineTransform); if (JThrowable.pending !== null) return null;
        return newBufferedImage;
    }
    

    createBufferedImageWithLargerCanvas(bufferedImage: BufferedImage | null, newWidth: i32, newHeight: i32): BufferedImage | null {
        let width: f64 = (<f64>(bufferedImage!.getWidth())); if (JThrowable.pending !== null) return null;
        let height: f64 = (<f64>(bufferedImage!.getHeight())); if (JThrowable.pending !== null) return null;
        let d_newWidth: f64 = (<f64>(newWidth));
        let d_newHeight: f64 = (<f64>(newHeight));
        let widthRatio: f64 = d_newWidth / width;
        let heightRatio: f64 = d_newHeight / height;
        let dx2: i32 = JMath.toInt(((<f64>(newWidth)) - width));
        let dy2: i32 = JMath.toInt(((<f64>(newHeight)) - height));
        let dx: i32 = dx2 / 2;
        let dy: i32 = dy2 / 2;
        let dx4: i32 = dx2 / 4;
        let dy4: i32 = dy2 / 4;
        let newBufferedImage: BufferedImage | null = new BufferedImage().jinit_BufferedImage_3(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE); if (JThrowable.pending !== null) return null;
        let graphics: Graphics2D | null = newBufferedImage!.createGraphics(); if (JThrowable.pending !== null) return null;
        graphics!.drawImage(bufferedImage, dx4, dy4, null); if (JThrowable.pending !== null) return null;
        return newBufferedImage;
    }
    

    convertToBufferedImage(toolkitImage: Image | null): BufferedImage | null {
        if (toolkitImage == null) {
            return null;
        }
        let bufferedImage: BufferedImage | null = new BufferedImage().jinit_BufferedImage_3(toolkitImage!.getWidth(null), toolkitImage!.getHeight(null), BufferedImage.TYPE_INT_ARGB); if (JThrowable.pending !== null) return null;
        let g2d: Graphics2D | null = bufferedImage!.createGraphics(); if (JThrowable.pending !== null) return null;
        g2d!.drawImage(toolkitImage, 0, 0, null); if (JThrowable.pending !== null) return null;
        g2d!.dispose(); if (JThrowable.pending !== null) return null;
        return bufferedImage;
    }
    

    getBufferedImage(image: Image | null): BufferedImage | null {
        let bufferedImage: BufferedImage | null = null;
        if (image!.isMutable()) {
            let j2seImage: J2SEMutableImage | null = changetype<J2SEMutableImage | null>(image);
            bufferedImage = changetype<BufferedImage | null>(j2seImage!.getImage()); if (JThrowable.pending !== null) return null;
        } else {
            let j2seImage: J2SEImmutableImage | null = changetype<J2SEImmutableImage | null>(image);
            bufferedImage = changetype<BufferedImage | null>(j2seImage!.getImage()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return bufferedImage;
    }
    

    toString1(bufferedImage: BufferedImage | null): string | null {
        let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" BufferedImage -"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonLabels!.WIDTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(bufferedImage!.getWidth()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonLabels!.HEIGHT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(bufferedImage!.getHeight()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Type: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(bufferedImage!.getType()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

