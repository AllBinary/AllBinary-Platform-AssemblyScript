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
// package org.allbinary.game.ag.layer.hud.basic.level
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.graphics.hud.BasicHud
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.math.PrimitiveLongUtil

@global export class LevelHudWidget extends BasicHud implements PaintableInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.level.LevelHudWidget";
    }
    level: i32 = 0;
    maxlevel: i32 = 0;
    levelString: StaticArray<u16> | null = null;
    levelNumberCharArray: StaticArray<u16> | null = null;
    levelNumberTotalDigits: i32 = 0;
    offset: i32 = 0;
    primitiveLongUtil: PrimitiveLongUtil | null = null;

    jfields_LevelHudWidget(): void {
    
    
    
    this.levelNumberCharArray = NullUtil.getInstance()!.NULL_CHAR_ARRAY;
    this.levelNumberTotalDigits = 0;
    this.offset = 0;
    
    }
    

    static createHud(maxlevel: i32, location: i32, direction: i32): LevelHudWidget | null {
        return new LevelHudWidget().jinit_LevelHudWidget_3(maxlevel, location, direction);
    }
    

    jinit_LevelHudWidget_3(maxlevel: i32, location: i32, direction: i32): LevelHudWidget {
        super.jinit_BasicHud_4(location, direction, 2, BasicColorFactory.getInstance()!.GREY);
        this.jfields_LevelHudWidget();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(1000); if (JThrowable.pending !== null) return this;
        let LEVEL: string | null = "Lv ";
        this.levelString = JString.toCharArray0(LEVEL); if (JThrowable.pending !== null) return this;
        this.maxlevel = maxlevel;
        this.level = maxlevel;
        this.update(); if (JThrowable.pending !== null) return this;
        this.updateMaxHeight = 14;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.updateMaxWidth = font!.getSize() * 4; if (JThrowable.pending !== null) return;
        this.offset = font!.charsWidth(this.levelString, 0, this.levelString!.length) + font!.getSize(); if (JThrowable.pending !== null) return;
        super.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.levelNumberCharArray = this.primitiveLongUtil!.getCharArray(this.level); if (JThrowable.pending !== null) return;
        this.levelNumberTotalDigits = this.primitiveLongUtil!.getCurrentTotalDigits(); if (JThrowable.pending !== null) return;
    }
    

    setLevel(level: i32): void {
        this.level = level;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    nextLevel(): void {
        this.level++;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    previousLevel(): void {
        this.level--;
        if (this.level < 0) {
            this.level = 0;
        }
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    isComplete(): bool {
        if (this.level <= this.maxlevel) {
            return false;
        } else {
            return true;
        }
        return false;
    }
    

    paint(graphics: Graphics | null): void {
        super.paintDX(graphics, this.levelString, 0, this.levelString!.length, this.levelNumberCharArray, 0, this.levelNumberTotalDigits, this.offset); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
}

