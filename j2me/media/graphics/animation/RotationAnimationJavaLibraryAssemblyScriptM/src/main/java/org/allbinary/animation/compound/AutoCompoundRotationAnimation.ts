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
// import org.allbinary.animation.RotationAnimation
// import org.allbinary.direction.Direction
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.util.CircularIndexUtil

@global export class AutoCompoundRotationAnimation extends RotationAnimation implements CompoundAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.compound.AutoCompoundRotationAnimation";
    }
    animationInterfaceArray: StaticArray<RotationAnimation | null> | null = null;

    jfields_AutoCompoundRotationAnimation(): void {
    
    }
    

    jinit_AutoCompoundRotationAnimation_2(animationInterfaceArray: StaticArray<RotationAnimation | null> | null, animationBehavior: AnimationBehavior | null): AutoCompoundRotationAnimation {
        super.jinit_RotationAnimation_3(AngleInfo.getInstance1(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
        this.jfields_AutoCompoundRotationAnimation();
        this.animationInterfaceArray = animationInterfaceArray;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.animationInterfaceArray!.length); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setFrame(index: i32): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.setFrame(index); if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        return this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.getFrame();
    }
    

    getAnimationSize(): i32 {
        return this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.getAnimationSize();
    }
    

    getSize(): i32 {
        return this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.getSize();
    }
    

    previousFrame(): void {
        this.circularIndexUtil!.previous(); if (JThrowable.pending !== null) return;
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.previousFrame(); if (JThrowable.pending !== null) return;
    }
    

    nextFrame(): void {
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.nextFrame(); if (JThrowable.pending !== null) return;
    }
    

    previousRotation(): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.previousRotation(); if (JThrowable.pending !== null) return;
    }
    

    nextRotation(): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.nextRotation(); if (JThrowable.pending !== null) return;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.paintThreedXYZ(graphics, x, y, z); if (JThrowable.pending !== null) return;
    }
    

    getCurrentAnimation(): IndexedAnimation | null {
        return this.animationInterfaceArray![this.circularIndexUtil!.getIndex()];
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
    

    setFrameByDirection(direction: Direction | null): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.setFrameByDirection(direction); if (JThrowable.pending !== null) return;
    }
    

    setFrameToAngle(angle: Angle | null): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.setFrameToAngle(angle); if (JThrowable.pending !== null) return;
    }
    

    adjustFrameToAngle(newAngle: Angle | null): void {
        this.adjustFrame(newAngle!.getValue()); if (JThrowable.pending !== null) return;
    }
    

    adjustFrame(angle: i16): void {
        this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.adjustFrame(angle); if (JThrowable.pending !== null) return;
    }
    

    getAngleInfoP(): AngleInfo | null {
        return this.animationInterfaceArray![this.circularIndexUtil!.getIndex()]!.getAngleInfoP();
    }
    

    getAnimationInterfaceArray(): StaticArray<RotationAnimation | null> | null {
        return this.animationInterfaceArray;
    }
    

    setAnimationInterfaceArray(animationInterfaceArray: StaticArray<RotationAnimation | null> | null): void {
        this.animationInterfaceArray = animationInterfaceArray;
    }
    

    set(gl: GL | null): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.set(gl); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

