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
// package org.allbinary.graphics.paint
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor

@global export class SimpleTextPaintable extends Paintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.paint.SimpleTextPaintable";
    }
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    text: string | null = null;
    basicColor: BasicColor | null = null;
    topScoresWidth: i32 = 0;
    fontHeight: i32 = 0;
    anchor: i32 = 0;

    jfields_SimpleTextPaintable(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    
    
    this.topScoresWidth = 0;
    this.fontHeight = 0;
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_SimpleTextPaintable_2(text: string | null, basicColor: BasicColor | null): SimpleTextPaintable {
        super.jinit_Paintable_0();
        this.jfields_SimpleTextPaintable();
        this.text = text;
        this.basicColor = basicColor;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.topScoresWidth = (font!.stringWidth(this.text) >> 1); if (JThrowable.pending !== null) return;
        this.fontHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let width: i32 = this.displayInfoSingleton!.getLast()![this.displayInfoSingleton!.WIDTH]; if (JThrowable.pending !== null) return;
        graphics!.setColor(this.getBasicColorP()!.intValue()); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.text, (width >> 1) - this.topScoresWidth, this.fontHeight, this.anchor); if (JThrowable.pending !== null) return;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    setText(text: string | null): void {
        this.text = text;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    getText(): string | null {
        return this.text;
    }
}

