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
// package org.allbinary.game.paint.help
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil

@global export class HelpPaintable extends Paintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.paint.help.HelpPaintable";
    }
    displayInfo: DisplayInfoSingleton | null = null;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    anchor: i32 = 0;
    title: string | null = null;
    inputInfo: StaticArray<string | null> | null = null;
    basicColor: BasicColor | null = null;
    titleBeginWidth: i32 = 0;
    beginWidthArray: StaticArray<i32> | null = null;
    charHeight: i32 = 0;

    jfields_HelpPaintable(): void {
    this.displayInfo = DisplayInfoSingleton.getInstance();
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.anchor = Anchor.TOP_LEFT;
    
    this.inputInfo = StringUtil.getInstance()!.getArrayInstance();
    
    this.titleBeginWidth = 0;
    this.beginWidthArray = NullUtil.getInstance()!.NULL_INT_ARRAY;
    this.charHeight = 0;
    }
    

    jinit_HelpPaintable_3(title: string | null, backgroundBasicColor: BasicColor | null, basicColor: BasicColor | null): HelpPaintable {
        super.jinit_Paintable_0();
        this.jfields_HelpPaintable();
        this.title = title;
        this.basicColor = basicColor;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.titleBeginWidth = (font!.stringWidth(this.title) >> 1); if (JThrowable.pending !== null) return;
        this.charHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        let size: i32 = this.inputInfo!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.beginWidthArray![index] = (font!.stringWidth(this.inputInfo![index]) >> 1); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    setInputInfoP(inputInfo: StaticArray<string | null> | null): void {
        this.inputInfo = inputInfo;
        this.beginWidthArray = new StaticArray<i32>(this.inputInfo!.length);
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = this.displayInfo!.getLastHalfWidth(); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.basicColor!.intValue()); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.title, halfWidth - this.titleBeginWidth, this.charHeight, this.anchor); if (JThrowable.pending !== null) return;
        let size: i32 = this.inputInfo!.length;
        for (let index: i32 = 0; index < size; index++) {
            graphics!.drawString(this.inputInfo![index], halfWidth - this.beginWidthArray![index], (index + 3) * this.charHeight, this.anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

