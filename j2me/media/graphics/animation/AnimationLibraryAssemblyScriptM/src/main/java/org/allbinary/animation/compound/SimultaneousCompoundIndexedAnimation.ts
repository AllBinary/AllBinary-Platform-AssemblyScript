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
// package org.allbinary.animation.compound
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class SimultaneousCompoundIndexedAnimation extends IndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.compound.SimultaneousCompoundIndexedAnimation";
    }
    animationInterfaceArray: StaticArray<Animation | null> | null = null;

    jfields_SimultaneousCompoundIndexedAnimation(): void {
    
    }
    

    jinit_SimultaneousCompoundIndexedAnimation_2(animationInterfaceArray: StaticArray<Animation | null> | null, animationBehavior: AnimationBehavior | null): SimultaneousCompoundIndexedAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_SimultaneousCompoundIndexedAnimation();
        this.animationInterfaceArray = animationInterfaceArray;
        return this;
    }
    

    setFrame(frameIndex: i32): void {
        let indexedAnimation: IndexedAnimation | null = null;
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            indexedAnimation = changetype<IndexedAnimation | null>(this.animationInterfaceArray![index]);
            indexedAnimation!.setFrame(frameIndex); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        let indexedAnimation: IndexedAnimation | null = changetype<IndexedAnimation | null>(this.animationInterfaceArray![0]);
        return indexedAnimation!.getFrame();
    }
    

    getSize(): i32 {
        let indexedAnimation: IndexedAnimation | null = changetype<IndexedAnimation | null>(this.animationInterfaceArray![0]);
        return indexedAnimation!.getSize();
    }
    

    previousFrame(): void {
        let indexedAnimation: IndexedAnimation | null = null;
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            indexedAnimation = changetype<IndexedAnimation | null>(this.animationInterfaceArray![index]);
            indexedAnimation!.previousFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    nextFrame(): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.nextFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        let size: i32 = this.animationInterfaceArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.animationInterfaceArray![index]!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
        let size: i32 = this.animationInterfaceArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.animationInterfaceArray![index]!.paintThreedXYZ(graphics, x, y, z); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getAnimationInterfaceArray(): StaticArray<Animation | null> | null {
        return this.animationInterfaceArray;
    }
    

    setAnimationInterfaceArray(animationInterfaceArray: StaticArray<Animation | null> | null): void {
        this.animationInterfaceArray = animationInterfaceArray;
    }
}

