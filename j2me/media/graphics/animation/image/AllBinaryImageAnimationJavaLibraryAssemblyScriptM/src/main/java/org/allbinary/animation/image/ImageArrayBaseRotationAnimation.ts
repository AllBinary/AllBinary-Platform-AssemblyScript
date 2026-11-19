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
// import org.allbinary.animation.RotationAnimation
// import org.allbinary.graphics.Anchor
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleInfo
// import org.allbinary.media.image.ImageModifierUtil
// import org.allbinary.util.CircularIndexUtil

@global export class ImageArrayBaseRotationAnimation extends RotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayBaseRotationAnimation";
    }
    imageModifierUtil: ImageModifierUtil | null = null;
    originalImageArray: StaticArray<Image | null> | null = null;
    imageArray: StaticArray<Image | null> | null = null;
    currentImage: Image | null = null;
    totalFrames: i32 = 0;
    anchor: i32 = 0;

    jfields_ImageArrayBaseRotationAnimation(): void {
    this.imageModifierUtil = ImageModifierUtil.getInstanceOrCreate();
    
    this.imageArray = NullImage.NULL_IMAGE_ARRAY;
    
    this.totalFrames = 0;
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_ImageArrayBaseRotationAnimation_3(originalImageArray: StaticArray<Image | null> | null, angleInfo: AngleInfo | null, animationBehavior: AnimationBehavior | null): ImageArrayBaseRotationAnimation {
        super.jinit_RotationAnimation_3(angleInfo, CircularIndexUtil.createInstance(360 / (<i32>(angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()))), animationBehavior);
        this.jfields_ImageArrayBaseRotationAnimation();
        this.originalImageArray = originalImageArray;
        this.setImageArray(this.imageModifierUtil!.getImageArray(originalImageArray)); if (JThrowable.pending !== null) return this;
        this.currentImage = this.imageArray![this.circularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    setAlpha(alpha: i32): void {
        if (this.alphaP != alpha) {
            super.setAlpha(alpha); if (JThrowable.pending !== null) return;
            this.imageModifierUtil!.reset(); if (JThrowable.pending !== null) return;
            let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
            this.imageModifierUtil!.setAlpha(this.originalImageArray![index], this.imageArray![index], index, this.alphaP); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    nextRotation(): void {
        super.nextRotation(); if (JThrowable.pending !== null) return;
        let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.imageModifierUtil!.setAlpha(this.originalImageArray![index], this.imageArray![index], index, this.alphaP); if (JThrowable.pending !== null) return;
        this.currentImage = this.imageArray![index];
    }
    

    previousRotation(): void {
        super.previousRotation(); if (JThrowable.pending !== null) return;
        let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.imageModifierUtil!.setAlpha(this.originalImageArray![index], this.imageArray![index], index, this.alphaP); if (JThrowable.pending !== null) return;
        this.currentImage = this.imageArray![index];
    }
    

    setFrame(index2: i32): void {
        super.setFrame(index2); if (JThrowable.pending !== null) return;
        let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.imageModifierUtil!.setAlpha(this.originalImageArray![index], this.imageArray![index], index, this.alphaP); if (JThrowable.pending !== null) return;
        this.currentImage = this.imageArray![index];
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    setImageArray(imageArray: StaticArray<Image | null> | null): void {
        this.imageArray = imageArray;
        this.totalFrames = imageArray!.length;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.totalFrames); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawImage(this.currentImage, x, y, this.anchor); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        let disposalUtil: DisposalUtil | null = DisposalUtil.getInstance(); if (JThrowable.pending !== null) return;
        let size2: i32 = this.imageArray!.length;
        for (let index: i32 = 0; index < size2; index++) {
            disposalUtil!.disposeImage(this.imageArray![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let size: i32 = this.originalImageArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            disposalUtil!.disposeImage(this.originalImageArray![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        disposalUtil!.disposeImage(this.currentImage); if (JThrowable.pending !== null) return;
    }
    

    finalize(): void {
        let disposalUtil: DisposalUtil | null = DisposalUtil.getInstance(); if (JThrowable.pending !== null) return;
        let size2: i32 = this.imageArray!.length;
        for (let index: i32 = 0; index < size2; index++) {
            disposalUtil!.disposeImage(this.imageArray![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let size: i32 = this.originalImageArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            disposalUtil!.disposeImage(this.originalImageArray![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        disposalUtil!.disposeImage(this.currentImage); if (JThrowable.pending !== null) return;
    }
}

