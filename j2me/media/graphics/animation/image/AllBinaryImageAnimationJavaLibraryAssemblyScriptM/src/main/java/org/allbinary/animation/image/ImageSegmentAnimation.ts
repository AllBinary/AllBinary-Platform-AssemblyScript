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
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.util.CircularIndexUtil

@global export class ImageSegmentAnimation extends ImageAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageSegmentAnimation";
    }
    startX: i32 = 0;
    startY: i32 = 0;
    drawWidth: i32 = 0;
    drawHeight: i32 = 0;
    circularIndexUtil: CircularIndexUtil | null = null;
    sequenceArray: StaticArray<i32> | null = null;

    jfields_ImageSegmentAnimation(): void {
    
    
    
    
    
    
    }
    

    jinit_ImageSegmentAnimation_3(image: Image | null, sequenceArray: StaticArray<i32> | null, animationBehavior: AnimationBehavior | null): ImageSegmentAnimation {
        super.jinit_ImageAnimation_2(image, animationBehavior);
        this.jfields_ImageSegmentAnimation();
        this.startX = 0;
        this.startY = 0;
        this.drawWidth = this.getImage()!.getWidth(); if (JThrowable.pending !== null) return this;
        this.drawHeight = this.getImage()!.getHeight(); if (JThrowable.pending !== null) return this;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.drawHeight); if (JThrowable.pending !== null) return this;
        this.sequenceArray = sequenceArray;
        return this;
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
        return this.circularIndexUtil!.getSize();
    }
    

    setSequence(sequenceArray: StaticArray<i32> | null): void {
        this.sequenceArray = sequenceArray;
    }
    

    getSequence(): StaticArray<i32> | null {
        return this.sequenceArray;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
    }
    

    getStartX(): i32 {
        return this.startX;
    }
    

    setStartX(startX: i32): void {
        this.startX = startX;
    }
    

    getStartY(): i32 {
        return this.startY;
    }
    

    setStartY(startY: i32): void {
        this.startY = startY;
    }
    

    getDrawWidth(): i32 {
        return this.drawWidth;
    }
    

    setDrawWidth(drawWidth: i32): void {
        this.drawWidth = drawWidth;
    }
    

    getDrawHeight(): i32 {
        return this.drawHeight;
    }
    

    setDrawHeight(drawHeight: i32): void {
        this.drawHeight = drawHeight;
    }
}

