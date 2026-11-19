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
// import org.allbinary.DisposalUtil
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.graphics.Anchor
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.util.CircularIndexUtil

@global export class TweenedImageAnimation extends IndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.TweenedImageAnimation";
    }
    image: Image | null = null;
    dx: i32 = 0;
    dy: i32 = 0;
    totalFrames: i32 = 0;
    circularIndexUtil: CircularIndexUtil | null = null;
    anchor: i32 = 0;

    jfields_TweenedImageAnimation(): void {
    
    
    
    
    
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_TweenedImageAnimation_5(image: Image | null, dx: i32, dy: i32, totalFrames: i32, animationBehavior: AnimationBehavior | null): TweenedImageAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_TweenedImageAnimation();
        this.image = image;
        this.dx = dx;
        this.dy = dy;
        this.totalFrames = totalFrames;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.totalFrames); if (JThrowable.pending !== null) return this;
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
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        let frame: i32 = this.getFrame(); if (JThrowable.pending !== null) return;
        let currentX: i32 = this.dx * frame;
        let currentY: i32 = this.dy * frame;
        graphics!.drawImage(this.image, x + currentX, y + currentY, this.anchor); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        DisposalUtil.getInstance()!.disposeImage(this.image); if (JThrowable.pending !== null) return;
    }
    

    finalize(): void {
        DisposalUtil.getInstance()!.disposeImage(this.image); if (JThrowable.pending !== null) return;
    }
}

