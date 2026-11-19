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
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.ColorCompositeInterface
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels

@global export class SpriteIndexedAnimation extends IndexedAnimation implements ColorCompositeInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.SpriteIndexedAnimation";
    }
    sprite: Sprite | null = null;
    image: Image | null = null;
    basicColorArray: StaticArray<BasicColor | null> | null = null;

    jfields_SpriteIndexedAnimation(): void {
    
    
    
    }
    

    jinit_SpriteIndexedAnimation_4(sprite: Sprite | null, image: Image | null, basicColorArray: StaticArray<BasicColor | null> | null, animationBehavior: AnimationBehavior | null): SpriteIndexedAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_SpriteIndexedAnimation();
        this.sprite = sprite;
        this.image = image;
        this.basicColorArray = basicColorArray;
        if (this.basicColorArray!.length != 0 && this.getSize() != this.basicColorArray!.length) {
            { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.TOTAL_LABEL)!.appendint(this.getSize())!.append("!=")!.appendint(this.basicColorArray!.length)))); return this; }
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        for (let index: i32 = 0; index < this.basicColorArray!.length; index++) {
            if (basicColor == this.basicColorArray![index]) {
                this.setFrame(index); if (JThrowable.pending !== null) return;
                break;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getBasicColorP(): BasicColor | null {
        if (this.basicColorArray!.length < this.getFrame()) {
            return this.basicColorArray![this.getFrame()];
        } else {
            return BasicColorFactory.getInstance()!.WHITE;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    paintFrame(graphics: Graphics | null, frame: i32, x: i32, y: i32): void {
        this.setFrame(frame); if (JThrowable.pending !== null) return;
        this.sprite!.setPosition(x, y); if (JThrowable.pending !== null) return;
        this.sprite!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.sprite!.setPosition(x, y); if (JThrowable.pending !== null) return;
        this.sprite!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.sprite!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    nextFrame(): void {
        this.sprite!.nextFrame(); if (JThrowable.pending !== null) return;
    }
    

    previousFrame(): void {
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
    

    isLastFrame(): bool {
        if (this.sprite!.getFrame() == this.getSize() - 1) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getLastFrame(): i32 {
        return this.getSize();
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    close(): void {
    }
    

    finalize(): void {
    }
}

