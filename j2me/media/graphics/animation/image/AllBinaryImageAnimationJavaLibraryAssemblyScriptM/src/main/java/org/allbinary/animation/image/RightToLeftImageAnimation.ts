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

@global export class RightToLeftImageAnimation extends ImageSegmentAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.RightToLeftImageAnimation";
    }
    startWidth: i32 = 0;
    currentWidth: i32 = 0;
    anchor: i32 = 0;

    jfields_RightToLeftImageAnimation(): void {
    this.startWidth = 0;
    this.currentWidth = 0;
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_RightToLeftImageAnimation_2(image: Image | null, animationBehavior: AnimationBehavior | null): RightToLeftImageAnimation {
        super.jinit_ImageSegmentAnimation_3(image, PrimitiveIntUtil.getArrayInstance(), animationBehavior);
        this.jfields_RightToLeftImageAnimation();
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
        this.startWidth = this.getDrawWidth() * this.getFrame() / this.getSize(); if (JThrowable.pending !== null) return;
        this.currentWidth = this.getDrawWidth() - this.startWidth; if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawRegion(this.getImage(), this.startWidth, this.getStartY(), this.currentWidth, this.getDrawHeight(), Sprite.TRANS_NONE, x + this.startWidth, y, this.anchor); if (JThrowable.pending !== null) return;
    }
}

