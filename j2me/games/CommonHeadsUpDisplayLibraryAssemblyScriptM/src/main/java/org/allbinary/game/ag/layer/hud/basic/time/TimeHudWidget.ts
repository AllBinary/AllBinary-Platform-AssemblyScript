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
// package org.allbinary.game.ag.layer.hud.basic.time
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.graphics.hud.BasicHud
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.logic.math.PrimitiveLongSingleton

@global export class TimeHudWidget extends BasicHud {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.time.TimeHudWidget";
    }
    TIME_STRING: string | null = null;
    TIME_CHAR_ARRAY: StaticArray<u16> | null = null;
    offset: i32 = 0;
    string: StaticArray<u16> | null = null;
    totalDigits: i32 = 0;
    timer: HudTimer | null = null;

    jfields_TimeHudWidget(): void {
    this.TIME_STRING = "Time ";
    this.TIME_CHAR_ARRAY = StaticArray.fromArray<u16>([(<u16>0x54), (<u16>0x69), (<u16>0x6D), (<u16>0x65), (<u16>0x20)]);
    this.offset = 0;
    this.string = PrimitiveLongSingleton.getInstance()!.ZERO;
    this.totalDigits = 1;
    
    }
    

    static getInstance4(location: i32, direction: i32, basicColor: BasicColor | null, timer: HudTimer | null): TimeHudWidget | null {
        return new TimeHudWidget().jinit_TimeHudWidget_5(location, direction, 2, basicColor, timer);
    }
    

    jinit_TimeHudWidget_5(location: i32, direction: i32, bufferZone: i32, basicColor: BasicColor | null, timer: HudTimer | null): TimeHudWidget {
        super.jinit_BasicHud_4(location, direction, bufferZone, basicColor);
        this.jfields_TimeHudWidget();
        this.timer = timer;
        this.set(); if (JThrowable.pending !== null) return this;
        this.updateMaxHeight = 14;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.updateMaxWidth = font!.getSize() * 5; if (JThrowable.pending !== null) return;
        this.offset = font!.stringWidth(this.TIME_STRING) + MyFontProcessor.defaultStringWidth(font, 3); if (JThrowable.pending !== null) return;
        super.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.timer!.update(); if (JThrowable.pending !== null) return;
        this.set(); if (JThrowable.pending !== null) return;
    }
    

    set(): void {
        this.string = this.timer!.getTimeChars(); if (JThrowable.pending !== null) return;
        this.totalDigits = this.timer!.getCurrentTotalDigits(); if (JThrowable.pending !== null) return;
    }
    

    getTimer(): HudTimer | null {
        return this.timer;
    }
    

    paint(graphics: Graphics | null): void {
        super.paintDX(graphics, this.TIME_CHAR_ARRAY, 0, this.TIME_CHAR_ARRAY!.length, this.string, 0, this.totalDigits, this.offset); if (JThrowable.pending !== null) return;
    }
}

