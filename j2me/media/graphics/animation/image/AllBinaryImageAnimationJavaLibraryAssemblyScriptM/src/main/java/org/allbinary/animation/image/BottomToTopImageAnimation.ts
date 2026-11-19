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
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class BottomToTopImageAnimation extends ImageSegmentAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.BottomToTopImageAnimation";
    }
    startHeight: i32 = 0;
    currentHeight: i32 = 0;
    anchor: i32 = 0;

    jfields_BottomToTopImageAnimation(): void {
    this.startHeight = 0;
    this.currentHeight = 0;
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_BottomToTopImageAnimation_2(image: Image | null, animationBehavior: AnimationBehavior | null): BottomToTopImageAnimation {
        super.jinit_ImageSegmentAnimation_3(image, PrimitiveIntUtil.getArrayInstance(), animationBehavior);
        this.jfields_BottomToTopImageAnimation();
        this.setFrame(this.getSize() - 1); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextFrame(): void {
        super.previousFrame(); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    previousFrame(): void {
        super.nextFrame(); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
        super.setFrame(index); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.startHeight = this.getDrawHeight() * this.getFrame() / this.getSize(); if (JThrowable.pending !== null) return;
        this.currentHeight = this.getDrawHeight() - this.startHeight; if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawRegion(this.getImage(), this.getStartX(), this.startHeight, this.getDrawWidth(), this.currentHeight, Sprite.TRANS_NONE, x, y + this.startHeight, this.anchor); if (JThrowable.pending !== null) return;
    }
}

