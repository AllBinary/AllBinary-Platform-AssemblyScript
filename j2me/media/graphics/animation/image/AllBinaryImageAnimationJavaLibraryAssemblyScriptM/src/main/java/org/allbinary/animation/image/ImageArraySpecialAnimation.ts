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
// import org.allbinary.animation.special.SpecialAnimationInterface
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

@global export class ImageArraySpecialAnimation extends ImageArrayAnimation implements SpecialAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArraySpecialAnimation";
    }
    timeDelayHelper: TimeDelayHelper | null = null;
    loopCount: i32 = 0;
    loopCountTotal: i32 = 0;

    jfields_ImageArraySpecialAnimation(): void {
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(270);
    this.loopCount = 0;
    this.loopCountTotal = 1;
    }
    

    jinit_ImageArraySpecialAnimation_2(imageArray: StaticArray<Image | null> | null, animationBehavior: AnimationBehavior | null): ImageArraySpecialAnimation {
        super.jinit_ImageArrayAnimation_2(imageArray, animationBehavior);
        this.jfields_ImageArraySpecialAnimation();
        this.reset(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getLoopCount(): i32 {
        return this.loopCount;
    }
    

    setLastFrame(): void {
        this.circularIndexUtil!.setIndex(this.circularIndexUtil!.getSize() - 1); if (JThrowable.pending !== null) return;
    }
    

    reset(): void {
        this.setFrame(this.getSize() - 1); if (JThrowable.pending !== null) return;
        this.loopCount = 0;
    }
    

    nextFrame(): void {
        if (this.getFrame() > 0) {
            if (this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime)) {
                this.previousFrame(); if (JThrowable.pending !== null) return;
                if (this.getFrame() == 0) {
                    this.loopCount++;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isComplete(): bool {
        if (this.loopCount < this.loopCountTotal || this.getFrame() != 0) {
            return false;
        } else {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        x = DisplayInfoSingleton.getInstance()!.getLastHalfWidth() - (this.getImage(this.circularIndexUtil!.getIndex())!.getWidth() >> 1); if (JThrowable.pending !== null) return;
        y = 5;
        super.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
}

