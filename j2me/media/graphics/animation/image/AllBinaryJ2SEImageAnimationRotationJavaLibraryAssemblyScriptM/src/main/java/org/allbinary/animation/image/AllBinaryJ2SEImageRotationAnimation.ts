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
// package org.allbinary.animation.image
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.NullImage
// import org.allbinary.DisposalUtil
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.math.AngleInfo
// import org.allbinary.media.image.ImageCopyUtil
// import org.allbinary.media.image.ImageModifierUtil
// import org.allbinary.media.image.ImageRotationUtil

@global export class AllBinaryJ2SEImageRotationAnimation extends ImageBaseRotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.AllBinaryJ2SEImageRotationAnimation";
    }
    imageRotationUtil: ImageRotationUtil | null = null;
    imageModifierUtil: ImageModifierUtil | null = null;
    realOriginalImage: Image | null = null;
    originalImageArray: StaticArray<Image | null> | null = null;
    twoImages: StaticArray<Image | null> | null = null;
    imageToShow: Image | null = null;
    bufferedImageIndex: i32 = 0;
    lastScaleX: f32 = 0.0;
    lastScaleY: f32 = 0.0;
    scaleX: f32 = 0.0;
    scaleY: f32 = 0.0;
    maxScaleX: f32 = 0.0;
    maxScaleY: f32 = 0.0;
    alphaProcessor: ModifierBaseProcessor | null = null;
    setColorProcessor: ModifierBaseProcessor | null = null;
    changeColorProcessor: ModifierBaseProcessor | null = null;
    scaleProcessor: ScaleBaseProcessor | null = null;

    jfields_AllBinaryJ2SEImageRotationAnimation(): void {
    this.imageRotationUtil = ImageRotationUtil.getInstance();
    this.imageModifierUtil = ImageModifierUtil.getInstanceOrCreate();
    
    this.originalImageArray = new StaticArray<Image | null>(1);
    this.twoImages = new StaticArray<Image | null>(2);
    
    this.bufferedImageIndex = 0;
    this.lastScaleX = (<f32>1.0);
    this.lastScaleY = (<f32>1.0);
    this.scaleX = (<f32>1.0);
    this.scaleY = (<f32>1.0);
    this.maxScaleX = 0.0;
    this.maxScaleY = 0.0;
    this.alphaProcessor = ModifierBaseProcessor.getInstance();
    this.setColorProcessor = ModifierBaseProcessor.getInstance();
    this.changeColorProcessor = ModifierBaseProcessor.getInstance();
    this.scaleProcessor = ScaleProcessor.getInstance();
    }
    

    jinit_AllBinaryJ2SEImageRotationAnimation_5(originalImage: Image | null, image: Image | null, angleInfo: AngleInfo | null, totalAngle: i16, animationBehavior: AnimationBehavior | null): AllBinaryJ2SEImageRotationAnimation {
        super.jinit_ImageBaseRotationAnimation_4(image, angleInfo, totalAngle, animationBehavior);
        this.jfields_AllBinaryJ2SEImageRotationAnimation();
        this.realOriginalImage = originalImage;
        this.originalImageArray![0] = originalImage;
        this.imageToShow = image;
        this.twoImages![0] = image;
        this.twoImages![1] = ImageCopyUtil.getInstance()!.createImageForRotation(image); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        let changed: bool = false;
        if (this.getBasicColorP() == null || this.getBasicColorP()!.intValue() != basicColor!.intValue()) {
            changed = true;
        } if (JThrowable.pending !== null) return;
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
        if (changed) {
            this.setColorProcessor = SetColorProcessor.getInstance(); if (JThrowable.pending !== null) return;
            this.updateImage(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    changeBasicColor(basicColor: BasicColor | null): void {
        let changed: bool = false;
        if (this.getChangeBasicColor() == null || this.getChangeBasicColor()!.intValue() != basicColor!.intValue()) {
            changed = true;
        } if (JThrowable.pending !== null) return;
        super.changeBasicColor(basicColor); if (JThrowable.pending !== null) return;
        if (changed) {
            this.changeColorProcessor = ChangeColorProcessor.getInstance(); if (JThrowable.pending !== null) return;
            this.updateImage(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setAlpha(alpha: i32): void {
        let changed: bool = false;
        if (this.alphaP != alpha) {
            changed = true;
        }
        super.setAlpha(alpha); if (JThrowable.pending !== null) return;
        if (changed) {
            this.alphaProcessor = AlphaProcessor.getInstance(); if (JThrowable.pending !== null) return;
            this.updateImage(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setScale(scaleX: f32, scaleY: f32): void {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        if (this.scaleX != this.lastScaleX || this.scaleY != this.lastScaleY) {
            this.scaleProcessor!.update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY); if (JThrowable.pending !== null) return;
            this.updateImage(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.lastScaleX = this.scaleX;
        this.lastScaleY = this.scaleY;
    }
    

    setMaxScale(maxScaleX: f32, maxScaleY: f32): void {
        this.maxScaleX = maxScaleX;
        this.maxScaleY = maxScaleY;
        this.scaleProcessor!.update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY); if (JThrowable.pending !== null) return;
        this.updateImage(); if (JThrowable.pending !== null) return;
    }
    

    nextRotation(): void {
        super.nextRotation(); if (JThrowable.pending !== null) return;
        this.updateImage(); if (JThrowable.pending !== null) return;
    }
    

    previousRotation(): void {
        super.previousRotation(); if (JThrowable.pending !== null) return;
        this.updateImage(); if (JThrowable.pending !== null) return;
    }
    

    updateImage(): void {
        this.imageRotationUtil!.rotateImage(this.originalImageArray![0], this.twoImages![this.bufferedImageIndex], (<i32>(this.angleInfo!.getAngle())) + 90); if (JThrowable.pending !== null) return;
        this.alphaProcessor!.updateAlpha(this.imageModifierUtil, NullImage.NULL_IMAGE, this.twoImages![this.bufferedImageIndex], 0, this.alphaP); if (JThrowable.pending !== null) return;
        this.setColorProcessor!.updateColor(this.imageModifierUtil, NullImage.NULL_IMAGE, this.twoImages![this.bufferedImageIndex], 0, this.basicColor); if (JThrowable.pending !== null) return;
        this.changeColorProcessor!.updateColor(this.imageModifierUtil, NullImage.NULL_IMAGE, this.twoImages![this.bufferedImageIndex], 0, this.changeBasicColorP); if (JThrowable.pending !== null) return;
        this.swap(); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
        super.setFrame(index); if (JThrowable.pending !== null) return;
        this.updateImage(); if (JThrowable.pending !== null) return;
    }
    

    swap(): void {
        this.imageToShow = this.twoImages![this.bufferedImageIndex];
        if (this.bufferedImageIndex == 0) {
            this.bufferedImageIndex = 1;
        } else {
            this.bufferedImageIndex = 0;
        }
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawImage(this.imageToShow, x, y, this.anchor); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        super.close(); if (JThrowable.pending !== null) return;
        let disposalUtil: DisposalUtil | null = DisposalUtil.getInstance(); if (JThrowable.pending !== null) return;
        let size2: i32 = this.twoImages!.length;
        for (let index: i32 = 0; index < size2; index++) {
            disposalUtil!.disposeImage(this.twoImages![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let size: i32 = this.originalImageArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            disposalUtil!.disposeImage(this.originalImageArray![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        disposalUtil!.disposeImage(this.realOriginalImage); if (JThrowable.pending !== null) return;
        disposalUtil!.disposeImage(this.imageToShow); if (JThrowable.pending !== null) return;
    }
    

    finalize(): void {
        super.finalize(); if (JThrowable.pending !== null) return;
        let disposalUtil: DisposalUtil | null = DisposalUtil.getInstance(); if (JThrowable.pending !== null) return;
        let size2: i32 = this.twoImages!.length;
        for (let index: i32 = 0; index < size2; index++) {
            disposalUtil!.disposeImage(this.twoImages![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let size: i32 = this.originalImageArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            disposalUtil!.disposeImage(this.originalImageArray![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        disposalUtil!.disposeImage(this.realOriginalImage); if (JThrowable.pending !== null) return;
        disposalUtil!.disposeImage(this.imageToShow); if (JThrowable.pending !== null) return;
    }
}

