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
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.canvas.GameStatisticsFactory
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.InitUpdatePaintable

@global export class GamePerformanceInitUpdatePaintable extends InitUpdatePaintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GamePerformanceInitUpdatePaintable";
    }
    halfHeight: i32 = 0;
    yArray: StaticArray<i32> | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    baseRefreshHelperCharArray: StaticArray<StaticArray<u16> | null> | null = null;
    defaultStringWidth: i32 = 0;
    RED: i32 = 0;

    jfields_GamePerformanceInitUpdatePaintable(): void {
    this.halfHeight = DisplayInfoSingleton.getInstance()!.getLastHalfHeight();
    this.yArray = StaticArray.fromArray<i32>([this.halfHeight + 30, this.halfHeight + 30, this.halfHeight + 30 + 15, this.halfHeight + 30 + 15, this.halfHeight + 30 + 30, this.halfHeight + 30 + 30, this.halfHeight + 30 + 45, this.halfHeight + 30 + 45]);
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.baseRefreshHelperCharArray = JArrays.new2<u16>(0, 0);
    this.defaultStringWidth = 0;
    this.RED = BasicColorFactory.getInstance()!.RED!.intValue();
    }

    jinit_GamePerformanceInitUpdatePaintable_0(): GamePerformanceInitUpdatePaintable {
        super.jinit_InitUpdatePaintable_0();
        this.jfields_GamePerformanceInitUpdatePaintable();
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.defaultStringWidth = MyFontProcessor.defaultStringWidth(font, 2); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    init(): void {
    }
    

    update(): void {
        this.baseRefreshHelperCharArray = GameStatisticsFactory.getInstance()!.to2DCharArray(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.RED); if (JThrowable.pending !== null) return;
        let charArray: StaticArray<u16> | null = null;
        let charArray2: StaticArray<u16> | null = null;
        let size2: i32 = 0;
        let size3: i32 = 0;
        let size: i32 = this.baseRefreshHelperCharArray!.length - 2;
        for (let index: i32 = size; index >= 0; index -= 2) {
            charArray = this.baseRefreshHelperCharArray![index];
            charArray2 = this.baseRefreshHelperCharArray![index + 1];
            size2 = charArray!.length;
            size3 = charArray2!.length;
            graphics!.drawChars(charArray, 0, size2, 0, this.yArray![index], 0); if (JThrowable.pending !== null) return;
            graphics!.drawChars(charArray2, 0, size3, size2 * this.defaultStringWidth, this.yArray![index + 1], 0); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

