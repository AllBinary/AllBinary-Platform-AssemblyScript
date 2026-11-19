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
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class SimultaneousCompoundIndexAnimation extends IndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.compound.SimultaneousCompoundIndexAnimation";
    }
    animationInterfaceArray: StaticArray<IndexedAnimation | null> | null = null;

    jfields_SimultaneousCompoundIndexAnimation(): void {
    
    }
    

    jinit_SimultaneousCompoundIndexAnimation_2(animationInterfaceArray: StaticArray<IndexedAnimation | null> | null, animationBehavior: AnimationBehavior | null): SimultaneousCompoundIndexAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_SimultaneousCompoundIndexAnimation();
        this.animationInterfaceArray = animationInterfaceArray;
        return this;
    }
    

    setFrame(frameIndex: i32): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.setFrame(frameIndex); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        return this.animationInterfaceArray![0]!.getFrame();
    }
    

    getAnimationSize(): i32 {
        return this.animationInterfaceArray![0]!.getAnimationSize();
    }
    

    getSize(): i32 {
        return this.animationInterfaceArray![0]!.getSize();
    }
    

    previousFrame(): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.previousFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    nextFrame(): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.nextFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.paintThreedXYZ(graphics, x, y, z); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    set(gl: GL | null): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.set(gl); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getAnimationInterfaceArray(): StaticArray<IndexedAnimation | null> | null {
        return this.animationInterfaceArray;
    }
    

    setAnimationInterfaceArray(animationInterfaceArray: StaticArray<IndexedAnimation | null> | null): void {
        this.animationInterfaceArray = animationInterfaceArray;
    }
}

