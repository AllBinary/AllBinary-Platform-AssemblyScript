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
// package org.allbinary.game.ag.layer.hud.basic
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.graphics.hud.BasicHud
// import org.allbinary.game.graphics.hud.BasicHudFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.logic.math.PrimitiveLongSingleton
// import org.allbinary.logic.math.PrimitiveLongUtil

@global export class NumberStringHud extends BasicHud implements PaintableInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.NumberStringHud";
    }
    primitiveLongUtil: PrimitiveLongUtil | null = null;
    prependString: string | null = null;
    PREPEND_STRING: StaticArray<u16> | null = null;
    value: i32 = 0;
    max: i32 = 0;
    offset: i32 = 0;
    valueString: StaticArray<u16> | null = null;
    valueTotalDigits: i32 = 0;

    jfields_NumberStringHud(): void {
    
    
    
    
    
    this.offset = 0;
    
    this.valueTotalDigits = 0;
    }
    

    jinit_NumberStringHud_6(prependString: string | null, max: i32, location: i32, direction: i32, bufferZone: i32, basicColor: BasicColor | null): NumberStringHud {
        super.jinit_BasicHud_4(location, direction, bufferZone, basicColor);
        this.jfields_NumberStringHud();
        this.prependString = prependString;
        this.PREPEND_STRING = JString.toCharArray0(prependString); if (JThrowable.pending !== null) return this;
        this.valueString = PrimitiveLongSingleton.getInstance()!.NUMBER_CHAR_ARRAYS![0]; if (JThrowable.pending !== null) return this;
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(max + 1); if (JThrowable.pending !== null) return this;
        this.max = max;
        this.value = 0;
        if (direction == 0) {
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_1(BasicHudFactory.getInstance()!.DIRECTION_EXCEPTION)); return this; }
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.offset = font!.stringWidth(this.prependString) + MyFontProcessor.defaultCharWidth(font); if (JThrowable.pending !== null) return;
        super.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
    }
    

    get(): i32 {
        return this.value;
    }
    

    add(value: i32): void {
        this.set(this.value + value); if (JThrowable.pending !== null) return;
    }
    

    set(value: i32): void {
        this.value = value;
        if (this.value > this.max) {
            this.value = 0;
        }
        this.valueString = this.primitiveLongUtil!.getCharArray(this.value); if (JThrowable.pending !== null) return;
        this.valueTotalDigits = this.primitiveLongUtil!.getCurrentTotalDigits(); if (JThrowable.pending !== null) return;
    }
    

    reduce(value: i32): void {
        this.set(this.value - value); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        super.paintDX(graphics, this.PREPEND_STRING, 0, this.PREPEND_STRING!.length, this.valueString, 0, this.valueTotalDigits, this.offset); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let charArray: StaticArray<u16> | null = this.PREPEND_STRING;
        let len: i32 = this.PREPEND_STRING!.length;
        let charArray2: StaticArray<u16> | null = this.valueString;
        let len2: i32 = this.valueTotalDigits;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP()); if (JThrowable.pending !== null) return;
        graphics!.drawChars(charArray, 0, len, x, y, 0); if (JThrowable.pending !== null) return;
        graphics!.drawChars(charArray2, 0, len2, x - this.offset, y, 0); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
}

