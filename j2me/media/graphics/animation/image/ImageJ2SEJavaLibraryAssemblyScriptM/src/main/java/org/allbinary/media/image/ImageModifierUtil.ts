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
// import java.awt.image.BufferedImage
// import java.awt.image.ColorModel
// import java.awt.image.WritableRaster
// import javax.microedition.lcdui.Image
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings

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
    imageUtil: ImageUtil | null = null;
    colorArray: StaticArray<i32> | null = null;

    jfields_ImageModifierUtil(): void {
    this.imageUtil = ImageUtil.getInstance();
    this.colorArray = new StaticArray<i32>(1);
    }

    jinit_ImageModifierUtil_0(): ImageModifierUtil {
        super.jinit_JObject_0();
        this.jfields_ImageModifierUtil();
        return this;
    }
    

    static getInstanceOrCreate(): ImageModifierUtil | null {
        return ImageModifierUtil.instance;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
    }
    

    setColor(unusedOriginalImage: Image | null, image: Image | null, imageIndex: i32, basicColor: BasicColor | null): void {
        let newBufferedImage: BufferedImage | null = this.imageUtil!.getBufferedImage(image); if (JThrowable.pending !== null) return;
        let r: i16 = basicColor!.red;
        let g: i16 = basicColor!.green;
        let b: i16 = basicColor!.blue;
        let width: i32 = image!.getWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = image!.getHeight(); if (JThrowable.pending !== null) return;
        let colorModel: ColorModel | null = null;
        let dataElements: Object | null = null;
        let ax: i32 = 0;
        let rx: i32 = 0;
        let gx: i32 = 0;
        let bx: i32 = 0;
        for (let index: i32 = 0; index < width; index++) {
            for (let index2: i32 = 0; index2 < height; index2++) {
                colorModel = newBufferedImage!.getColorModel(); if (JThrowable.pending !== null) return;
                dataElements = newBufferedImage!.getRaster()!.getDataElements(index, index2, null); if (JThrowable.pending !== null) return;
                ax = colorModel!.getAlpha(dataElements); if (JThrowable.pending !== null) return;
                rx = colorModel!.getRed(dataElements); if (JThrowable.pending !== null) return;
                gx = colorModel!.getGreen(dataElements); if (JThrowable.pending !== null) return;
                bx = colorModel!.getBlue(dataElements); if (JThrowable.pending !== null) return;
                if (rx != 0 || gx != 0 || bx != 0) {
                    newBufferedImage!.setRGB(index, index2, (ax << 24) | (r << 16) | (g << 8) | (<i32>((b)))); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    changeColor(unusedOriginalImage: Image | null, image: Image | null, imageIndex: i32, basicColor: BasicColor | null): void {
        let newBufferedImage: BufferedImage | null = this.imageUtil!.getBufferedImage(image); if (JThrowable.pending !== null) return;
        let MAX: f32 = (<f32>255.0);
        let r: f32 = ((<f32>(basicColor!.red))) / MAX;
        let g: f32 = ((<f32>(basicColor!.green))) / MAX;
        let b: f32 = ((<f32>(basicColor!.blue))) / MAX;
        let width: i32 = image!.getWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = image!.getHeight(); if (JThrowable.pending !== null) return;
        let colorModel: ColorModel | null = null;
        let dataElements: Object | null = null;
        let ax: i32 = 0;
        let rx: i32 = 0;
        let gx: i32 = 0;
        let bx: i32 = 0;
        for (let index: i32 = 0; index < width; index++) {
            for (let index2: i32 = 0; index2 < height; index2++) {
                colorModel = newBufferedImage!.getColorModel(); if (JThrowable.pending !== null) return;
                dataElements = newBufferedImage!.getRaster()!.getDataElements(index, index2, null); if (JThrowable.pending !== null) return;
                ax = colorModel!.getAlpha(dataElements); if (JThrowable.pending !== null) return;
                rx = colorModel!.getRed(dataElements); if (JThrowable.pending !== null) return;
                gx = colorModel!.getGreen(dataElements); if (JThrowable.pending !== null) return;
                bx = colorModel!.getBlue(dataElements); if (JThrowable.pending !== null) return;
                rx = JMath.toInt(rx * r);
                gx = JMath.toInt(gx * g);
                bx = JMath.toInt(bx * b);
                newBufferedImage!.setRGB(index, index2, (ax << 24) | (rx << 16) | (gx << 8) | (bx)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setAlpha(unusedOriginalImage: Image | null, image: Image | null, imageIndex: i32, alphaInt: i32): void {
        let alpha: i8 = (<i8>(alphaInt));
        let newBufferedImage: BufferedImage | null = this.imageUtil!.getBufferedImage(image); if (JThrowable.pending !== null) return;
        let width: i32 = image!.getWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = image!.getHeight(); if (JThrowable.pending !== null) return;
        let raster: WritableRaster | null = newBufferedImage!.getAlphaRaster(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < width; index++) {
            for (let index2: i32 = 0; index2 < height; index2++) {
                raster!.getPixel(index, index2, this.colorArray); if (JThrowable.pending !== null) return;
                this.colorArray![0] = (<i32>(alpha)) & this.colorArray![0];
                raster!.setPixel(index, index2, this.colorArray); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getImageArray(originalImageArray: StaticArray<Image | null> | null): StaticArray<Image | null> | null {
        do {
            let newImageArray: StaticArray<Image | null> | null = new StaticArray<Image | null>(originalImageArray!.length);
            let size: i32 = newImageArray!.length;
            let originalImage: Image | null = null;
            for (let index: i32 = 0; index < size; index++) {
                originalImage = originalImageArray![index];
                let image: Image | null = ImageCreationUtil.getInstance()!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight()); if (JThrowable.pending !== null) break;
                image!.getGraphics()!.drawImage(originalImage, 0, 0, Anchor.TOP_LEFT); if (JThrowable.pending !== null) break;
                newImageArray![index] = image;
            } if (JThrowable.pending !== null) break;
            return newImageArray;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "getImageArray", e); if (JThrowable.pending !== null) return null;
            return originalImageArray;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    handleImage(imageArray: StaticArray<Image | null> | null, index: i32, image: Image | null): void {
    }
    

    reset(): void {
    }
}

