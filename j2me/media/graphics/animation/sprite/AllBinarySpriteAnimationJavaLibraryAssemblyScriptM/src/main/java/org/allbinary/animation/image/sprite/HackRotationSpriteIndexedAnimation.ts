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
// package org.allbinary.animation.image.sprite
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.game.Sprite
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.RotationAnimation
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleInfo
// import org.allbinary.util.CircularIndexUtil

@global export class HackRotationSpriteIndexedAnimation extends RotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.HackRotationSpriteIndexedAnimation";
    }
    sprite: Sprite | null = null;
    image: Image | null = null;

    jfields_HackRotationSpriteIndexedAnimation(): void {
    
    
    }
    

    jinit_HackRotationSpriteIndexedAnimation_4(sprite: Sprite | null, image: Image | null, angleInfo: AngleInfo | null, animationBehavior: AnimationBehavior | null): HackRotationSpriteIndexedAnimation {
        super.jinit_RotationAnimation_3(angleInfo, CircularIndexUtil.createInstance(360 / (<i32>(angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()))), animationBehavior);
        this.jfields_HackRotationSpriteIndexedAnimation();
        this.sprite = sprite;
        this.image = image;
        return this;
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    paintFrame(g: Graphics | null, frame: i32, x: i32, y: i32): void {
        this.setFrame(frame); if (JThrowable.pending !== null) return;
        this.paintXY(g, x, y); if (JThrowable.pending !== null) return;
    }
    

    paintXY(g: Graphics | null, x: i32, y: i32): void {
        this.sprite!.setPosition(x, y); if (JThrowable.pending !== null) return;
        this.paint(g); if (JThrowable.pending !== null) return;
    }
    

    paint(g: Graphics | null): void {
        this.sprite!.paint(g); if (JThrowable.pending !== null) return;
    }
    

    nextRotation(): void {
        this.sprite!.nextFrame(); if (JThrowable.pending !== null) return;
    }
    

    previousRotation(): void {
        this.sprite!.prevFrame(); if (JThrowable.pending !== null) return;
    }
    

    getSize(): i32 {
        return this.sprite!.getRawFrameCount();
    }
    

    setFrame(frame: i32): void {
        this.sprite!.setFrame(frame); if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        return this.sprite!.getFrame();
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
}

