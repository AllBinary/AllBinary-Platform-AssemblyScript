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
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.graphics.Anchor
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.util.CircularIndexUtil

@global export class ImageArrayAnimation extends IndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayAnimation";
    }
    imageArray: StaticArray<Image | null> | null = null;
    totalFrames: i32 = 0;
    circularIndexUtil: CircularIndexUtil | null = null;
    anchor: i32 = 0;

    jfields_ImageArrayAnimation(): void {
    this.imageArray = NullImage.NULL_IMAGE_ARRAY;
    this.totalFrames = 0;
    this.circularIndexUtil = CircularIndexUtil.NULL_CIRCULAR_INDEX_UTIL;
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_ImageArrayAnimation_2(imageArray: StaticArray<Image | null> | null, animationBehavior: AnimationBehavior | null): ImageArrayAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_ImageArrayAnimation();
        this.setImageArray(imageArray); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    nextFrame(): void {
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    previousFrame(): void {
        this.circularIndexUtil!.previous(); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
        this.circularIndexUtil!.setIndex(index); if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        return this.circularIndexUtil!.getIndex();
    }
    

    getSize(): i32 {
        return this.totalFrames;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    getImage(index: i32): Image | null {
        return this.imageArray![index];
    }
    

    getImageArray(): StaticArray<Image | null> | null {
        return this.imageArray;
    }
    

    setImageArray(imageArray: StaticArray<Image | null> | null): void {
        this.imageArray = imageArray;
        this.totalFrames = imageArray!.length;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.totalFrames); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawImage(this.imageArray![this.circularIndexUtil!.getIndex()], x, y, this.anchor); if (JThrowable.pending !== null) return;
    }
}

