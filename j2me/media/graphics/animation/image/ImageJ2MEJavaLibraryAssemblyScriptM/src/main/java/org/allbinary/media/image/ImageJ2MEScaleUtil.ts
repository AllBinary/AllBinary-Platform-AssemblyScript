/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2023 AllBinary
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

@global export class ImageJ2MEScaleUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageJ2MEScaleUtil";
    }
    @lazy static jv_instance: ImageJ2MEScaleUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageJ2MEScaleUtil | null {
        if (!ImageJ2MEScaleUtil.js_instance) {
            ImageJ2MEScaleUtil.js_instance = true;
            ImageJ2MEScaleUtil.jv_instance = new ImageJ2MEScaleUtil().jinit_ImageJ2MEScaleUtil_0();
        }
        return ImageJ2MEScaleUtil.jv_instance;
    }
    static set instance(value: ImageJ2MEScaleUtil | null) {
        ImageJ2MEScaleUtil.js_instance = true;
        ImageJ2MEScaleUtil.jv_instance = value;
    }
    

    static getInstance(): ImageJ2MEScaleUtil | null {
        return ImageJ2MEScaleUtil.instance;
    }
    

    jinit_ImageJ2MEScaleUtil_0(): ImageJ2MEScaleUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    scaleArray(images: StaticArray<Image | null> | null, width: i32, height: i32): StaticArray<Image | null> | null {
        let scaledImages: StaticArray<Image | null> | null = new StaticArray<Image | null>(images!.length);
        for (let index: i32 = images!.length; --index >= 0; ) {
            scaledImages![index] = this.scale(images![index], width, height); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return scaledImages;
    }
    

    scale(image: Image | null, width: i32, height: i32): Image | null {
        let sourceWidth: i32 = image!.getWidth(); if (JThrowable.pending !== null) return null;
        let sourceHeight: i32 = image!.getHeight(); if (JThrowable.pending !== null) return null;
        let originalData: StaticArray<i32> | null = new StaticArray<i32>(image!.getWidth() * image!.getHeight()); if (JThrowable.pending !== null) return null;
        image!.getRGB(originalData, 0, image!.getWidth(), 0, 0, image!.getWidth(), image!.getHeight()); if (JThrowable.pending !== null) return null;
        let scaledData: StaticArray<i32> | null = new StaticArray<i32>(width * height);
        let heightRatioFactor: i32 = (8 * sourceHeight) / height;
        let widthRatioFactor: i32 = (8 * sourceWidth) / width;
        let scaledIndex: i32 = scaledData!.length - 1;
        let dx: i32 = 0;
        let dy: i32 = 0;
        for (let index: i32 = height; --index >= 0; ) {
            dy = (index * heightRatioFactor) >> 3;
            for (let index2: i32 = width; --index2 >= 0; ) {
                dx = (index2 * widthRatioFactor) >> 3;
                scaledData![scaledIndex--] = originalData![(sourceWidth * dy) + dx];
            }
        }
        let scaledImage: Image | null = Image.createRGBImage(scaledData, width, height, true); if (JThrowable.pending !== null) return null;
        return scaledImage;
    }
}

