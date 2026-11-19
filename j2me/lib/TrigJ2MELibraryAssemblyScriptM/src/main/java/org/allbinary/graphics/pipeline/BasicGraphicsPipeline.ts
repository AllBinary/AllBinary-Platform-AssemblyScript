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
// package org.allbinary.graphics.pipeline
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.math.Angle
// import org.allbinary.math.NoDecimalTrigTable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class BasicGraphicsPipeline extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.pipeline.BasicGraphicsPipeline";
    }
    pointBasicArrayList: BasicArrayList | null = null;
    noDecimalTrigTable: NoDecimalTrigTable | null = null;

    jfields_BasicGraphicsPipeline(): void {
    
    this.noDecimalTrigTable = NoDecimalTrigTable.getInstance();
    }
    

    jinit_BasicGraphicsPipeline_1(points: BasicArrayList | null): BasicGraphicsPipeline {
        super.jinit_JObject_0();
        this.jfields_BasicGraphicsPipeline();
        this.pointBasicArrayList = points;
        return this;
    }
    

    setInitMatrix(points: BasicArrayList | null): void {
        this.pointBasicArrayList = points;
    }
    

    createMatrix(): void {
    }
    

    translate(x: i32, y: i32): void {
        let newBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        let size: i32 = this.pointBasicArrayList!.size(); if (JThrowable.pending !== null) return;
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return;
        let secondPoint: GPoint | null = null;
        for (let index: i32 = 0; index < size; index++) {
            secondPoint = changetype<GPoint | null>(this.pointBasicArrayList!.objectArray![index]);
            if (secondPoint!.getX() != 1000) {
                newBasicArrayList!.add(pointFactory!.createXY(secondPoint!.getX() + x, secondPoint!.getY() + y)); if (JThrowable.pending !== null) return;
            } else {
                newBasicArrayList!.add(secondPoint); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.pointBasicArrayList = newBasicArrayList;
    }
    

    rotateToAngle(angle: Angle | null): void {
        this.rotate((<i32>(angle!.getValue()))); if (JThrowable.pending !== null) return;
    }
    

    rotate(angle: i32): void {
        let newBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        let secondPoint: GPoint | null = null;
        let y: i64 = 0;
        let secondX: i64 = 0;
        let secondY: i64 = 0;
        let point: GPoint | null = null;
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return;
        let size: i32 = this.pointBasicArrayList!.size(); if (JThrowable.pending !== null) return;
        let sin: i64 = 0;
        let cos: i64 = 0;
        for (let index: i32 = 0; index < size; index++) {
            secondPoint = changetype<GPoint | null>(this.pointBasicArrayList!.objectArray![index]);
            if (secondPoint!.getX() != 1000) {
                sin = this.noDecimalTrigTable!.sin(angle); if (JThrowable.pending !== null) return;
                cos = this.noDecimalTrigTable!.cos(angle); if (JThrowable.pending !== null) return;
                y = (<i64>(secondPoint!.getY())) * sin; if (JThrowable.pending !== null) return;
                secondX = ((<i64>(secondPoint!.getX())) * cos) - y; if (JThrowable.pending !== null) return;
                secondY = ((<i64>(secondPoint!.getX())) * sin) + ((<i64>(secondPoint!.getY())) * cos); if (JThrowable.pending !== null) return;
                point = pointFactory!.createXY((<i32>(secondX)) / 10000, (<i32>(secondY)) / 10000); if (JThrowable.pending !== null) return;
                newBasicArrayList!.add(point); if (JThrowable.pending !== null) return;
            } else {
                newBasicArrayList!.add(secondPoint); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.pointBasicArrayList = newBasicArrayList;
    }
    

    mirror(width: i32): void {
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = (width >> 1);
        let newBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        let secondPoint: GPoint | null = null;
        let newX: i32 = 0;
        let point: GPoint | null = null;
        let size: i32 = this.pointBasicArrayList!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            secondPoint = changetype<GPoint | null>(this.pointBasicArrayList!.objectArray![index]);
            if (secondPoint!.getX() != 1000) {
                newX = 0;
                if (secondPoint!.getX() > halfWidth) {
                    newX = halfWidth - (secondPoint!.getX() - halfWidth); if (JThrowable.pending !== null) return;
                } else {
                    newX = halfWidth + (halfWidth - secondPoint!.getX()); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                point = pointFactory!.createXY(newX, secondPoint!.getY()); if (JThrowable.pending !== null) return;
                newBasicArrayList!.add(point); if (JThrowable.pending !== null) return;
            } else {
                newBasicArrayList!.add(secondPoint); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.pointBasicArrayList = newBasicArrayList;
    }
    

    getMatrix(): BasicArrayList | null {
        return this.pointBasicArrayList;
    }
}

