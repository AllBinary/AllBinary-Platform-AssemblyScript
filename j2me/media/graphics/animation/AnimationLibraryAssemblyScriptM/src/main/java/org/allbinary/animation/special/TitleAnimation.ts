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
// package org.allbinary.animation.special
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.animation.IndexedAnimationBehavior
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.logic.ABSystemWrapper
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class TitleAnimation extends SpecialAnimation {

    jclassName(): string {
        return "org.allbinary.animation.special.TitleAnimation";
    }
    systemWrapper: ABSystemWrapper | null = null;
    deltaX: f32 = 0.0;
    deltaY: f32 = 0.0;
    deltaZ: f32 = 0.0;
    basicColorArray: StaticArray<BasicColor | null> | null = null;
    dxArray: StaticArray<i32> | null = null;
    dyArray: StaticArray<i32> | null = null;
    widthP: i32 = 0;
    animationInterfaceArray: StaticArray<IndexedAnimation | null> | null = null;
    sizeP: i32 = 0;
    y: i32 = 0;
    lastFrameStartTime: i64 = 0;
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    CLEAR_COLOR: BasicColor | null = null;

    jfields_TitleAnimation(): void {
    this.systemWrapper = ABSystemWrapper.getInstance();
    this.deltaX = 0.0;
    this.deltaY = 0.0;
    this.deltaZ = 0.0;
    
    
    
    
    
    
    
    
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.CLEAR_COLOR = BasicColorFactory.getInstance()!.CLEAR_COLOR;
    }
    

    static createAnimation(animationInterfaceArray: StaticArray<IndexedAnimation | null> | null, basicColorArray: StaticArray<BasicColor | null> | null, dxArray: StaticArray<i32> | null, dyArray: StaticArray<i32> | null, y: i32, width: i32): TitleAnimation | null {
        return new TitleAnimation().jinit_TitleAnimation_7(animationInterfaceArray, basicColorArray, dxArray, dyArray, y, width, new IndexedAnimationBehavior().jinit_IndexedAnimationBehavior_2(1, 250));
    }
    

    jinit_TitleAnimation_7(animationInterfaceArray: StaticArray<IndexedAnimation | null> | null, basicColorArray: StaticArray<BasicColor | null> | null, dxArray: StaticArray<i32> | null, dyArray: StaticArray<i32> | null, y: i32, width: i32, animationBehavior: AnimationBehavior | null): TitleAnimation {
        super.jinit_SpecialAnimation_1(animationBehavior);
        this.jfields_TitleAnimation();
        this.lastFrameStartTime = this.systemWrapper!.currentTimeMillis(); if (JThrowable.pending !== null) return this;
        this.animationInterfaceArray = animationInterfaceArray;
        this.sizeP = this.animationInterfaceArray!.length;
        this.basicColorArray = basicColorArray;
        this.dxArray = dxArray;
        this.dyArray = dyArray;
        this.y = y;
        this.widthP = width;
        this.reset(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextFrame(): void {
        let currentTime: i64 = this.systemWrapper!.currentTimeMillis(); if (JThrowable.pending !== null) return;
        let totalTimeElapsed: i64 = currentTime - this.lastFrameStartTime;
        let indexedAnimationBehavior: IndexedAnimationBehavior | null = changetype<IndexedAnimationBehavior | null>(this.getAnimationBehavior()); if (JThrowable.pending !== null) return;
        if (totalTimeElapsed > indexedAnimationBehavior!.frameDelayTime) {
            this.previousFrame(); if (JThrowable.pending !== null) return;
            this.lastFrameStartTime = currentTime;
        } if (JThrowable.pending !== null) return;
        if (this.animationInterfaceArray![0]!.getFrame() == 0) {
            indexedAnimationBehavior!.loopIndex++;
        } if (JThrowable.pending !== null) return;
    }
    

    isComplete(): bool {
        let indexedAnimationBehavior: IndexedAnimationBehavior | null = changetype<IndexedAnimationBehavior | null>(this.getAnimationBehavior()); if (JThrowable.pending !== null) return false;
        if (indexedAnimationBehavior!.loopTotal == -1 || indexedAnimationBehavior!.loopIndex < indexedAnimationBehavior!.loopTotal || this.getFrame() != 0) {
            return false;
        } else {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    getSize(): i32 {
        return this.animationInterfaceArray![0]!.getSize();
    }
    

    getFrame(): i32 {
        return this.animationInterfaceArray![0]!.getFrame();
    }
    

    setFrame(frame: i32): void {
        for (let index: i32 = 0; index < this.sizeP; index++) {
            this.animationInterfaceArray![index]!.setFrame(frame); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setLastFrame(): void {
        this.setFrame(this.getSize() - 1); if (JThrowable.pending !== null) return;
    }
    

    reset(): void {
        this.setLastFrame(); if (JThrowable.pending !== null) return;
        let indexedAnimationBehavior: IndexedAnimationBehavior | null = (changetype<IndexedAnimationBehavior | null>(this.getAnimationBehavior())); if (JThrowable.pending !== null) return;
        indexedAnimationBehavior!.reset(); if (JThrowable.pending !== null) return;
    }
    

    previousFrame(): void {
        for (let index: i32 = 0; index < this.sizeP; index++) {
            this.animationInterfaceArray![index]!.previousFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintFrameXY(graphics: Graphics | null, frame: i32, x: i32, y: i32): void {
        this.setFrame(frame); if (JThrowable.pending !== null) return;
        this.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, ax: i32, ay: i32): void {
        let x: i32 = 0;
        if (this.widthP != JInteger.MIN_VALUE) {
            x = ((this.displayInfoSingleton!.getLastWidth() - this.widthP) / 2); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let deltaX: i32 = 0;
        let deltaY: i32 = 0;
        for (let index: i32 = 0; index < this.sizeP; index++) {
            deltaX = this.dxArray![index] + x;
            deltaY = this.dyArray![index] + this.y;
            if (this.basicColorArray![index] != this.CLEAR_COLOR) {
                this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColorArray![index]); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.animationInterfaceArray![index]!.paintXY(graphics, deltaX, deltaY); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

