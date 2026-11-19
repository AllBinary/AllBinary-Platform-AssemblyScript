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
// import java.awt.Image
// import java.awt.image.BufferedImage

@global export class ImageJ2SERotationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageJ2SERotationUtil";
    }
    @lazy static jv_instance: ImageJ2SERotationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageJ2SERotationUtil | null {
        if (!ImageJ2SERotationUtil.js_instance) {
            ImageJ2SERotationUtil.js_instance = true;
            ImageJ2SERotationUtil.jv_instance = new ImageJ2SERotationUtil().jinit_ImageJ2SERotationUtil_0();
        }
        return ImageJ2SERotationUtil.jv_instance;
    }
    static set instance(value: ImageJ2SERotationUtil | null) {
        ImageJ2SERotationUtil.js_instance = true;
        ImageJ2SERotationUtil.jv_instance = value;
    }
    imageUtil: ImageUtil | null = null;
    imageJ2SEUtil: ImageJ2SEUtil | null = null;
    TWO_PIE: f64 = 0.0;

    jfields_ImageJ2SERotationUtil(): void {
    this.imageUtil = ImageUtil.getInstance();
    this.imageJ2SEUtil = ImageJ2SEUtil.getInstance();
    this.TWO_PIE = 2 * JMath.PI;
    }
    

    static getInstance(): ImageJ2SERotationUtil | null {
        return ImageJ2SERotationUtil.instance;
    }
    

    jinit_ImageJ2SERotationUtil_0(): ImageJ2SERotationUtil {
        super.jinit_JObject_0();
        this.jfields_ImageJ2SERotationUtil();
        return this;
    }
    

    getRotatedImage(bufferedImage: Image | null, totalAngle: i32): BufferedImage | null {
        return this.getRotatedImageRadians(bufferedImage, this.TWO_PIE * (<f64>(totalAngle)) / 360.0);
    }
    

    getRotatedImageRadians(bufferedImage: Image | null, radians: f64): BufferedImage | null {
        let newBufferedImage: BufferedImage | null = this.imageUtil!.create(bufferedImage!.getWidth(null), bufferedImage!.getHeight(null)); if (JThrowable.pending !== null) return null;
        return this.drawRotatedImageRadians(bufferedImage, newBufferedImage, newBufferedImage!.createGraphics(), radians);
    }
    

    drawRotatedImageRadians(bufferedImage: Image | null, newBufferedImage: BufferedImage | null, g: Graphics2D | null, radians: f64): BufferedImage | null {
        g!.rotate(radians, newBufferedImage!.getWidth(null) / 2, newBufferedImage!.getHeight(null) / 2); if (JThrowable.pending !== null) return null;
        g!.drawImage(bufferedImage, 0, 0, bufferedImage!.getWidth(null), bufferedImage!.getHeight(null), null); if (JThrowable.pending !== null) return null;
        g!.dispose(); if (JThrowable.pending !== null) return null;
        return newBufferedImage;
    }
    

    rotateImage(bufferedImage: Image | null, newBufferedImage: BufferedImage | null, totalAngle: i32): BufferedImage | null {
        let g: Graphics2D | null = newBufferedImage!.createGraphics(); if (JThrowable.pending !== null) return null;
        g!.setBackground(this.imageJ2SEUtil!.TRANSPARENT_COLOR); if (JThrowable.pending !== null) return null;
        g!.clearRect(0, 0, newBufferedImage!.getWidth(), newBufferedImage!.getHeight()); if (JThrowable.pending !== null) return null;
        return this.drawRotatedImageRadians(bufferedImage, newBufferedImage, g, this.TWO_PIE * (<f64>(totalAngle)) / 360.0);
    }
    

    createRotatedImage(bufferedImage: Image | null, newBufferedImage: BufferedImage | null, totalAngle: i32): BufferedImage | null {
        let g: Graphics2D | null = newBufferedImage!.createGraphics(); if (JThrowable.pending !== null) return null;
        return this.drawRotatedImageRadians(bufferedImage, newBufferedImage, g, this.TWO_PIE * (<f64>(totalAngle)) / 360.0);
    }
    

    getRotatedImages(bufferedImage: Image | null, numberOfFrames: i32, totalAngle: i32): StaticArray<BufferedImage | null> | null {
        let bufferedImageArray: StaticArray<BufferedImage | null> | null = new StaticArray<BufferedImage | null>(numberOfFrames);
        let arc: f64 = (this.TWO_PIE) * (<f64>(totalAngle)) / 360.0;
        let size: i32 = bufferedImageArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            let radians: f64 = (arc / (<f64>(size))) * (<f64>(index));
            bufferedImageArray![index] = this.getRotatedImageRadians(bufferedImage, radians); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return bufferedImageArray;
    }
    

    createSpriteImage(bufferedImageArray: StaticArray<BufferedImage | null> | null): BufferedImage | null {
        let columns: i32 = 9;
        let rows: i32 = 0;
        let size: i32 = bufferedImageArray!.length;
        if (size < columns) {
            columns = size;
        }
        rows = (size / columns);
        if (size % columns != 0) {
            rows++;
        }
        let firstBufferedImage: BufferedImage | null = bufferedImageArray![0];
        let bufferedImage: BufferedImage | null = this.imageUtil!.create(firstBufferedImage!.getWidth(null) * columns, firstBufferedImage!.getHeight(null) * rows); if (JThrowable.pending !== null) return null;
        let g: Graphics2D | null = bufferedImage!.createGraphics(); if (JThrowable.pending !== null) return null;
        let columnIndex: i32 = 0;
        let rowIndex: i32 = 0;
        let nextBufferedImage: BufferedImage | null = null;
        for (let index: i32 = 0; index < size; index++) {
            if (index / 9 != 0 && index % 9 == 0) {
                rowIndex++;
                columnIndex = 0;
            }
            nextBufferedImage = bufferedImageArray![index];
            g!.drawImage(nextBufferedImage, nextBufferedImage!.getWidth(null) * columnIndex, nextBufferedImage!.getHeight(null) * rowIndex, nextBufferedImage!.getWidth(null), nextBufferedImage!.getHeight(null), null); if (JThrowable.pending !== null) return null;
            columnIndex++;
        } if (JThrowable.pending !== null) return null;
        g!.dispose(); if (JThrowable.pending !== null) return null;
        return bufferedImage;
    }
}

