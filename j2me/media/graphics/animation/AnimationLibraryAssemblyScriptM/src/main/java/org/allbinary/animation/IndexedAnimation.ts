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
// package org.allbinary.animation
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.string.CommonStrings

@global export class IndexedAnimation extends Animation implements IndexedAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.IndexedAnimation";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    animationBehaviorP: AnimationBehavior | null = null;

    jfields_IndexedAnimation(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    }
    

    jinit_IndexedAnimation_1(animationBehavior: AnimationBehavior | null): IndexedAnimation {
        super.jinit_Animation_0();
        this.jfields_IndexedAnimation();
        this.animationBehaviorP = animationBehavior;
        return this;
    }
    

    getAnimationBehavior(): AnimationBehavior | null {
        return this.animationBehaviorP;
    }
    

    reset(): void {
        this.animationBehaviorP!.reset(); if (JThrowable.pending !== null) return;
        this.setFrame(0); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
    }
    

    getFrame(): i32 {
        return 0;
    }
    

    getAnimationSize(): i32 {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return 0; }
        return 0;
    }
    

    getSize(): i32 {
        return 0;
    }
    

    previousFrame(): void {
    }
    

    isLastFrame(): bool {
        if (this.getFrame() == this.getSize() - 1) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    setState(indexedAnimation: IndexedAnimation | null): void {
        this.setFrame(indexedAnimation!.getFrame()); if (JThrowable.pending !== null) return;
        this.setDx(indexedAnimation!.getDx()); if (JThrowable.pending !== null) return;
        this.setDy(indexedAnimation!.getDy()); if (JThrowable.pending !== null) return;
    }
    

    getWidth(): i32 {
        return 0;
    }
    

    getHeight(): i32 {
        return 0;
    }
}

