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
// import org.allbinary.animation.RotationAnimation
// import org.allbinary.direction.Direction
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.util.CircularIndexUtil

@global export class SimultaneousCompoundRotationAnimation extends RotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.compound.SimultaneousCompoundRotationAnimation";
    }
    animationInterfaceArray: StaticArray<RotationAnimation | null> | null = null;

    jfields_SimultaneousCompoundRotationAnimation(): void {
    
    }
    

    jinit_SimultaneousCompoundRotationAnimation_2(animationInterfaceArray: StaticArray<RotationAnimation | null> | null, animationBehavior: AnimationBehavior | null): SimultaneousCompoundRotationAnimation {
        super.jinit_RotationAnimation_3(AngleInfo.getInstance1(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
        this.jfields_SimultaneousCompoundRotationAnimation();
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
    

    previousRotation(): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.previousRotation(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    nextRotation(): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.nextRotation(); if (JThrowable.pending !== null) return;
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
    

    setFrameByDirection(direction: Direction | null): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.setFrameByDirection(direction); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setFrameToAngle(angle: Angle | null): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.setFrameToAngle(angle); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    adjustFrameToAngle(newAngle: Angle | null): void {
        this.adjustFrame(newAngle!.getValue()); if (JThrowable.pending !== null) return;
    }
    

    adjustFrame(angle: i16): void {
        for (let index: i32 = this.animationInterfaceArray!.length; --index >= 0; ) {
            this.animationInterfaceArray![index]!.adjustFrame(angle); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getAngleInfoP(): AngleInfo | null {
        return this.animationInterfaceArray![0]!.getAngleInfoP();
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

