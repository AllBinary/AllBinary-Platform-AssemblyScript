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
// package org.allbinary.game.paint
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.communication.log.LogUtil

//J2MEForJ2ME
@global export class OwnershipPaintable extends Paintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.paint.OwnershipPaintable";
    }
    logUtil: LogUtil | null = null;
    displayInfo: DisplayInfoSingleton | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    COPYRIGHT: string | null = null;
    basicColor: BasicColor | null = null;
    color: i32 = 0;
    anchor: i32 = 0;
    COPYRIGHT_Y: i32 = 0;
    beginWidth: i32 = 0;

    jfields_OwnershipPaintable(): void {
    this.logUtil = LogUtil.getInstance();
    this.displayInfo = DisplayInfoSingleton.getInstance();
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.COPYRIGHT = "AllBinary Copyright (c) 2011";
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    this.color = this.basicColor!.intValue();
    this.anchor = Anchor.TOP_LEFT;
    this.COPYRIGHT_Y = 0;
    this.beginWidth = 0;
    }
    

    static getInstance(): OwnershipPaintable | null {
        return new OwnershipPaintable().jinit_OwnershipPaintable_0();
    }
    

    jinit_OwnershipPaintable_0(): OwnershipPaintable {
        super.jinit_Paintable_0();
        this.jfields_OwnershipPaintable();
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.COPYRIGHT_Y = 2 * font!.getHeight(); if (JThrowable.pending !== null) return;
        this.beginWidth = (font!.stringWidth(this.COPYRIGHT) >> 1); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
        this.color = basicColor!.intValue(); if (JThrowable.pending !== null) return;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.color); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = this.displayInfo!.getLastHalfWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = this.displayInfo!.getLastHeight(); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.COPYRIGHT, halfWidth - this.beginWidth, height - this.COPYRIGHT_Y, this.anchor); if (JThrowable.pending !== null) return;
    }
}

