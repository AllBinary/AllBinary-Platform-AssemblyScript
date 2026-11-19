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
// package org.allbinary.animation.caption
// import javax.microedition.lcdui.Graphics
// import javax.microedition.media.Player
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.AnimationEventHandler
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

@global export class CaptionIndexedAnimation extends IndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.caption.CaptionIndexedAnimation";
    }
    animationInterface: Animation | null = null;
    movieIndexedAnimationInterface: IndexedAnimation | null = null;
    captionDx: i32 = 0;
    captionDy: i32 = 0;
    dx: i32 = 0;
    dy: i32 = 0;
    time: i32 = 0;
    END_EVENT: AllBinaryEventObject | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;
    player: Player | null = null;

    jfields_CaptionIndexedAnimation(): void {
    
    
    
    
    
    
    
    
    
    
    }
    

    jinit_CaptionIndexedAnimation_9(animationInterface: Animation | null, movieIndexedAnimationInterface: IndexedAnimation | null, player: Player | null, captionDx: i32, captionDy: i32, dx: i32, dy: i32, time: i32, animationBehavior: AnimationBehavior | null): CaptionIndexedAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_CaptionIndexedAnimation();
        this.animationInterface = animationInterface;
        this.movieIndexedAnimationInterface = movieIndexedAnimationInterface;
        this.captionDx = captionDx;
        this.captionDy = captionDy;
        this.dx = dx;
        this.dy = dy;
        this.time = time;
        this.END_EVENT = new AllBinaryEventObject().jinit_AllBinaryEventObject_1(this); if (JThrowable.pending !== null) return this;
        let timePerFrame: i32 = this.time / this.getSize(); if (JThrowable.pending !== null) return this;
        this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(timePerFrame); if (JThrowable.pending !== null) return this;
        this.player = player;
        this.player!.start(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextFrame(): void {
        if (this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime)) {
            this.movieIndexedAnimationInterface!.nextFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.isLastFrame()) {
            AnimationEventHandler.getInstance()!.fireEvent(this.END_EVENT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isLastFrame(): bool {
        if (this.movieIndexedAnimationInterface!.getFrame() == this.getSize() - 1) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    previousFrame(): void {
        this.movieIndexedAnimationInterface!.previousFrame(); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
        this.movieIndexedAnimationInterface!.setFrame(index); if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        return this.movieIndexedAnimationInterface!.getFrame();
    }
    

    getSize(): i32 {
        return this.movieIndexedAnimationInterface!.getSize();
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.animationInterface!.paintXY(graphics, x + this.captionDx, y + this.captionDy); if (JThrowable.pending !== null) return;
        this.movieIndexedAnimationInterface!.paintXY(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy); if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
        this.animationInterface!.paintThreedXYZ(graphics, x + this.captionDx, y + this.captionDy, z); if (JThrowable.pending !== null) return;
        this.movieIndexedAnimationInterface!.paintThreedXYZ(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy, z); if (JThrowable.pending !== null) return;
    }
}

