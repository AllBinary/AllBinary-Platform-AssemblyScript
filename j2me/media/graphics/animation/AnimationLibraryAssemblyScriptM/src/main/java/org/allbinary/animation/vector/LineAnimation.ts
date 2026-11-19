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
// package org.allbinary.animation.vector
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.ColorCompositeInterface
// import org.allbinary.layer.PositionInterface
// import org.allbinary.logic.NullUtil

@global export class LineAnimation extends Animation implements ColorCompositeInterface, PositionInterface {

    jclassName(): string {
        return "org.allbinary.animation.vector.LineAnimation";
    }
    newLine: StaticArray<StaticArray<i32> | null> | null = null;
    tempLine: StaticArray<StaticArray<i32> | null> | null = null;
    line: StaticArray<StaticArray<i32> | null> | null = null;

    jfields_LineAnimation(): void {
    this.newLine = JArrays.new2<i32>(2, 2);
    this.tempLine = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;
    this.line = JArrays.new2<i32>(2, 2);
    }
    

    jinit_LineAnimation_1(basicColor: BasicColor | null): LineAnimation {
        super.jinit_Animation_0();
        this.jfields_LineAnimation();
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(x: i32, y: i32): void {
        this.newLine![0]![0] = x;
        this.newLine![0]![1] = y;
        this.newLine![1]![0] = x;
        this.newLine![1]![1] = y;
        this.tempLine = this.line;
        this.line = this.newLine;
        this.newLine = this.tempLine;
    }
    

    setPosition(x: i32, y: i32, z: i32): void {
        this.newLine![0]![0] = this.line![1]![0];
        this.newLine![0]![1] = this.line![1]![1];
        this.newLine![1]![0] = x;
        this.newLine![1]![1] = y;
        this.tempLine = this.line;
        this.line = this.newLine;
        this.newLine = this.tempLine;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        let currentLine: StaticArray<StaticArray<i32> | null> | null = this.line;
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor()); if (JThrowable.pending !== null) return;
        graphics!.drawLine(currentLine![0]![0], currentLine![0]![1], currentLine![1]![0], currentLine![1]![1]); if (JThrowable.pending !== null) return;
    }
    

    nextFrame(): void {
    }
    

    getBasicColorP(): BasicColor | null {
        return super.getBasicColorP();
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
    }
}

