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
// import javax.microedition.lcdui.game.Sprite
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.graphics.Anchor

@global export class TopToBottomImageAnimation extends ImageSegmentAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.TopToBottomImageAnimation";
    }
    currentHeight: i32 = 0;
    anchor: i32 = 0;

    jfields_TopToBottomImageAnimation(): void {
    
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_TopToBottomImageAnimation_3(image: Image | null, sequenceArray: StaticArray<i32> | null, animationBehavior: AnimationBehavior | null): TopToBottomImageAnimation {
        super.jinit_ImageSegmentAnimation_3(image, sequenceArray, animationBehavior);
        this.jfields_TopToBottomImageAnimation();
        this.currentHeight = 0;
        if (this.getSequence()![0] == -1) {
            this.setFrame(this.getSize() - 1); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextFrame(): void {
        if (this.getSequence()![0] == -1) {
            super.previousFrame(); if (JThrowable.pending !== null) return;
        } else {
            super.nextFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    previousFrame(): void {
        if (this.getSequence()![0] == -1) {
            super.nextFrame(); if (JThrowable.pending !== null) return;
        } else {
            super.previousFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
        super.setFrame(index); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.currentHeight = this.getDrawHeight() * this.getFrame() / this.getSize(); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawRegion(this.getImage(), this.getStartX(), this.getStartY(), this.getDrawWidth(), this.currentHeight, Sprite.TRANS_NONE, x, y, this.anchor); if (JThrowable.pending !== null) return;
    }
}

