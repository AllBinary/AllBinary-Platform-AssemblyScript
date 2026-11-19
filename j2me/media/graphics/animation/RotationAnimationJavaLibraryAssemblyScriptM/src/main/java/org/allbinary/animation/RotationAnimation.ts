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
// import org.allbinary.direction.Direction
// import org.allbinary.direction.DirectionUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleInfo
// import org.allbinary.math.FrameUtil
// import org.allbinary.util.CircularIndexUtil

@global export class RotationAnimation extends IndexedAnimation implements RotationAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.RotationAnimation";
    }
    frameUtil: FrameUtil | null = null;
    directionUtil: DirectionUtil | null = null;
    angleInfo: AngleInfo | null = null;
    circularIndexUtil: CircularIndexUtil | null = null;

    jfields_RotationAnimation(): void {
    this.frameUtil = FrameUtil.getInstance();
    this.directionUtil = DirectionUtil.getInstance();
    
    
    }
    

    jinit_RotationAnimation_3(angleInfo: AngleInfo | null, circularIndexUtil: CircularIndexUtil | null, animationBehavior: AnimationBehavior | null): RotationAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_RotationAnimation();
        this.angleInfo = angleInfo;
        this.circularIndexUtil = circularIndexUtil;
        return this;
    }
    

    nextRotationX(): void {
    }
    

    previousRotationX(): void {
    }
    

    nextRotation(): void {
        this.angleInfo!.adjustAngle(this.circularIndexUtil!.next()); if (JThrowable.pending !== null) return;
    }
    

    previousRotation(): void {
        this.angleInfo!.adjustAngle(this.circularIndexUtil!.previous()); if (JThrowable.pending !== null) return;
    }
    

    nextRotationZ(): void {
    }
    

    previousRotationZ(): void {
    }
    

    setFrame(index: i32): void {
        this.circularIndexUtil!.setIndex(index); if (JThrowable.pending !== null) return;
        let newFrame: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.angleInfo!.adjustAngle(newFrame); if (JThrowable.pending !== null) return;
    }
    

    setFrameByDirection(direction: Direction | null): void {
        let angle: Angle | null = this.directionUtil!.getFrameAngle(direction); if (JThrowable.pending !== null) return;
        this.adjustFrameToAngle(angle); if (JThrowable.pending !== null) return;
    }
    

    setFrameToAngle(angle: Angle | null): void {
        this.adjustFrameToAngle(angle); if (JThrowable.pending !== null) return;
    }
    

    adjustFrameToAngle(angle: Angle | null): void {
        this.adjustFrame(angle!.getValue()); if (JThrowable.pending !== null) return;
    }
    

    adjustFrame(angle: i16): void {
        this.setFrame(this.frameUtil!.getFrameForAngle(angle, (<i32>(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())))); if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        return this.circularIndexUtil!.getIndex();
    }
    

    getSize(): i32 {
        return this.circularIndexUtil!.getSize();
    }
    

    getAngleInfoP(): AngleInfo | null {
        return this.angleInfo;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(super.toString())!.append("circularIndexUtil: ")!.append(JObject.jtoString(this.circularIndexUtil))!.append("angleInfo: ")!.append(JObject.jtoString(this.angleInfo)));
    }
}

