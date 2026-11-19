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
// import javax.microedition.lcdui.NullImage
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.util.CircularIndexUtil

@global export class VectorAnimation extends IndexedAnimation implements VectorAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.VectorAnimation";
    }
    currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;
    circularIndexUtil: CircularIndexUtil | null = null;

    jfields_VectorAnimation(): void {
    this.currentPoints = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
    this.circularIndexUtil = CircularIndexUtil.createInstance(0);
    }
    

    static createVectorAnimation(currentPoints2: StaticArray<StaticArray<i32> | null> | null, basicColor: BasicColor | null, animationBehavior: AnimationBehavior | null): VectorAnimation | null {
        let currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = JArrays.new3<i32>(1, currentPoints2!.length, 2);
        let size: i32 = currentPoints2!.length;
        for (let index: i32 = 0; index < size; index++) {
            currentPoints![0]![index]![0] = currentPoints2![index]![0];
            currentPoints![0]![index]![1] = currentPoints2![index]![1];
        }
        return new VectorAnimation().jinit_VectorAnimation_3(currentPoints, basicColor, animationBehavior);
    }
    

    jinit_VectorAnimation_3(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null, animationBehavior: AnimationBehavior | null): VectorAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_VectorAnimation();
        this.setPoints(currentPoints); if (JThrowable.pending !== null) return this;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        let changed: bool = false;
        if (this.getBasicColorP() == null || this.getBasicColorP()!.intValue() != basicColor!.intValue()) {
            changed = true;
        } if (JThrowable.pending !== null) return;
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
        if (changed) {
            this.updateModifiers(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    changeBasicColor(basicColor: BasicColor | null): void {
        let changed: bool = false;
        if (this.getChangeBasicColor() == null || this.getChangeBasicColor()!.intValue() != basicColor!.intValue()) {
            changed = true;
        } if (JThrowable.pending !== null) return;
        super.changeBasicColor(basicColor); if (JThrowable.pending !== null) return;
        if (changed) {
            this.updateModifiers(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setAlpha(alpha: i32): void {
        let changed: bool = false;
        if (this.alphaP != alpha) {
            changed = true;
        }
        super.setAlpha(alpha); if (JThrowable.pending !== null) return;
        if (changed) {
            this.updateModifiers(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setScale(scaleX: f32, scaleY: f32): void {
    }
    

    setMaxScale(maxScaleX: f32, maxScaleY: f32): void {
    }
    

    updateModifiers(): void {
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    getSize(): i32 {
        return this.currentPoints!.length;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    nextFrame(): void {
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    previousFrame(): void {
        this.circularIndexUtil!.previous(); if (JThrowable.pending !== null) return;
    }
    

    paintVectors(graphics: Graphics | null, x: i32, y: i32): void {
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
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColor); if (JThrowable.pending !== null) return;
        this.paintVectors(graphics, x, y); if (JThrowable.pending !== null) return;
    }
    

    getFrame(): i32 {
        return this.circularIndexUtil!.getIndex();
    }
    

    setFrame(index: i32): void {
        this.circularIndexUtil!.setIndex(index); if (JThrowable.pending !== null) return;
    }
    

    getPoints(frame: i32): StaticArray<StaticArray<i32> | null> | null {
        return this.currentPoints![frame];
    }
    

    setPoints(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null): void {
        this.currentPoints = currentPoints;
        this.circularIndexUtil = CircularIndexUtil.createInstance(currentPoints!.length); if (JThrowable.pending !== null) return;
    }
    

    getBasicColorP(): BasicColor | null {
        return super.getBasicColorP();
    }
}

