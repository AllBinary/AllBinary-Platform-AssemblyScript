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
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.util.CircularIndexUtil

@global export class CompoundIndexedAnimation extends IndexedAnimation implements CompoundAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.compound.CompoundIndexedAnimation";
    }
    circularIndexUtil: CircularIndexUtil | null = null;
    animationInterfaceArray: StaticArray<Animation | null> | null = null;

    jfields_CompoundIndexedAnimation(): void {
    
    
    }
    

    jinit_CompoundIndexedAnimation_2(animationInterfaceArray: StaticArray<Animation | null> | null, animationBehavior: AnimationBehavior | null): CompoundIndexedAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_CompoundIndexedAnimation();
        this.animationInterfaceArray = animationInterfaceArray;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.animationInterfaceArray!.length); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setFrame(index: i32): void {
        let indexedAnimation: IndexedAnimation | null = changetype<IndexedAnimation | null>(this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]); if (JThrowable.pending !== null) return;
        indexedAnimation!.setFrame(index); if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        let indexedAnimation: IndexedAnimation | null = changetype<IndexedAnimation | null>(this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]); if (JThrowable.pending !== null) return 0;
        return indexedAnimation!.getFrame();
    }
    

    getSize(): i32 {
        let indexedAnimation: IndexedAnimation | null = changetype<IndexedAnimation | null>(this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]); if (JThrowable.pending !== null) return 0;
        return indexedAnimation!.getSize();
    }
    

    previousFrame(): void {
        let indexedAnimation: IndexedAnimation | null = changetype<IndexedAnimation | null>(this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]); if (JThrowable.pending !== null) return;
        indexedAnimation!.previousFrame(); if (JThrowable.pending !== null) return;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    nextFrame(): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.nextFrame(); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.paintThreedXYZ(graphics, x, y, z); if (JThrowable.pending !== null) return;
    }
    

    getCurrentAnimation(): IndexedAnimation | null {
        return changetype<IndexedAnimation | null>(this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]);
    }
    

    nextAnimation(): void {
        let frame: i32 = this.getFrame(); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
        this.setFrame(frame); if (JThrowable.pending !== null) return;
    }
    

    previousAnimation(): void {
        let frame: i32 = this.getFrame(); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.previous(); if (JThrowable.pending !== null) return;
        this.setFrame(frame); if (JThrowable.pending !== null) return;
    }
    

    setAnimation(index: i32): void {
        let frame: i32 = this.getFrame(); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.setIndex(index); if (JThrowable.pending !== null) return;
        this.setFrame(frame); if (JThrowable.pending !== null) return;
    }
    

    getAnimationInterfaceArray(): StaticArray<Animation | null> | null {
        return this.animationInterfaceArray;
    }
    

    setAnimationInterfaceArray(animationInterfaceArray: StaticArray<Animation | null> | null): void {
        this.animationInterfaceArray = animationInterfaceArray;
    }
    

    set(gl: GL | null): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.set(gl); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

