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
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.FontDebugFactory
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.InitUpdatePaintable
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class StartIntermissionPaintable extends InitUpdatePaintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.StartIntermissionPaintable";
    }
    fontDebugFactory: FontDebugFactory | null = null;
    basicSetColorUtil: BasicColorSetUtil | null = null;
    gameCanvas: AllBinaryGameCanvas | null = null;
    stringArray: StaticArray<string | null> | null = null;
    fontSize: i32 = 0;
    font: Font | null = null;
    lastWidth: StaticArray<i32> | null = null;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    basicColor: BasicColor | null = null;
    color: i32 = 0;
    lineYOffsetArray: StaticArray<i32> | null = null;
    hasChanged: bool = false;
    anchor: i32 = 0;
    fontHeightP: i32 = 0;
    BEGIN_LEVEL: string | null = null;
    EMPTY_STRING: string | null = null;

    jfields_StartIntermissionPaintable(): void {
    this.fontDebugFactory = FontDebugFactory.getInstance();
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    
    
    
    
    
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.basicColor = BasicColorFactory.getInstance()!.BLACK;
    
    this.lineYOffsetArray = NullUtil.getInstance()!.NULL_INT_ARRAY;
    this.hasChanged = true;
    this.anchor = Anchor.TOP_LEFT;
    this.fontHeightP = 0;
    this.BEGIN_LEVEL = "Begin Level ";
    this.EMPTY_STRING = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_StartIntermissionPaintable_4(gameCanvas: AllBinaryGameCanvas | null, stringArray: StaticArray<string | null> | null, basicColor: BasicColor | null, font: Font | null): StartIntermissionPaintable {
        super.jinit_InitUpdatePaintable_0();
        this.jfields_StartIntermissionPaintable();
        this.gameCanvas = gameCanvas;
        this.stringArray = stringArray;
        this.lastWidth = new StaticArray<i32>(this.stringArray!.length);
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        this.color = basicColor!.intValue(); if (JThrowable.pending !== null) return this;
        this.fontSize = font!.getSize(); if (JThrowable.pending !== null) return this;
        this.font = font;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.fontHeightP = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let existingFont: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.fontDebugFactory!.setFont(this.font, graphics); if (JThrowable.pending !== null) return;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.basicColor, this.color); if (JThrowable.pending !== null) return;
        let beginWidth: i32 = 0;
        for (let index: i32 = this.lineYOffsetArray!.length - 1; index >= 0; index--) {
            if (this.hasChanged) {
                this.lastWidth![index] = (graphics!.getFont()!.stringWidth(this.stringArray![index]) >> 1); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            beginWidth = this.lastWidth![index];
            graphics!.drawString(this.stringArray![index], displayInfo!.getLastHalfWidth() - beginWidth, displayInfo!.getLastHalfHeight() - this.lineYOffsetArray![index], this.anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.hasChanged = false;
        this.fontDebugFactory!.setFont(existingFont, graphics); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        let level: i32 = this.gameCanvas!.getLayerManager()!.getGameInfo()!.getCurrentLevel(); if (JThrowable.pending !== null) return;
        this.stringArray![0] = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.BEGIN_LEVEL)!.appendint(level)); if (JThrowable.pending !== null) return;
        for (let index: i32 = this.stringArray!.length - 1; index >= 1; index--) {
            this.stringArray![index] = this.EMPTY_STRING;
        }
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
}

