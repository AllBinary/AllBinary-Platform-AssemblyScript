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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleInfo
// import org.allbinary.util.CircularIndexUtil

@global export class VectorBaseRotationAnimation extends RotationAnimation implements VectorAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.VectorBaseRotationAnimation";
    }
    currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;

    jfields_VectorBaseRotationAnimation(): void {
    this.currentPoints = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
    }
    

    jinit_VectorBaseRotationAnimation_4(angleInfo: AngleInfo | null, currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null, animationBehavior: AnimationBehavior | null): VectorBaseRotationAnimation {
        super.jinit_RotationAnimation_3(angleInfo, CircularIndexUtil.createInstance(360 / (<i32>(angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()))), animationBehavior);
        this.jfields_VectorBaseRotationAnimation();
        this.setPoints(currentPoints); if (JThrowable.pending !== null) return this;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    getFrame(): i32 {
        return this.circularIndexUtil!.getIndex();
    }
    

    setFrame(index: i32): void {
        this.circularIndexUtil!.setIndex(index); if (JThrowable.pending !== null) return;
    }
    

    nextFrame(): void {
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    previousFrame(): void {
        this.circularIndexUtil!.previous(); if (JThrowable.pending !== null) return;
    }
    

    getSize(): i32 {
        return this.currentPoints!.length;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColor); if (JThrowable.pending !== null) return;
        do {
            let nextPointX: i32 = 0;
            let nextPointY: i32 = 0;
            let nextPoint: StaticArray<i32> | null = null;
            let point: StaticArray<i32> | null = null;
            let currentPointsFrame: StaticArray<StaticArray<i32> | null> | null = this.currentPoints![this.circularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) break;
            let size: i32 = currentPointsFrame!.length;
            let index: i32 = size - 2;
            while (--index >= 0) {
                nextPoint = currentPointsFrame![index];
                point = currentPointsFrame![index + 1];
                nextPointX = nextPoint![0];
                nextPointY = nextPoint![1];
                if (nextPointX != 1000) {
                    graphics!.drawLine(point![0] + x, point![1] + y, nextPointX + x, nextPointY + y); if (JThrowable.pending !== null) break;
                } else {
                    index--;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "paintVectors", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getPoints(frame: i32): StaticArray<StaticArray<i32> | null> | null {
        return this.currentPoints![frame];
    }
    

    setPoints(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null): void {
        this.currentPoints = currentPoints;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.currentPoints!.length); if (JThrowable.pending !== null) return;
    }
    

    getBasicColorP(): BasicColor | null {
        return super.getBasicColorP();
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
    }
}

