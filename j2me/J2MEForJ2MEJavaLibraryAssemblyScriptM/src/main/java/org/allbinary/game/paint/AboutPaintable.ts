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
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.Paintable

//J2MEForJ2ME
@global export class AboutPaintable extends Paintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.paint.AboutPaintable";
    }
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    ABOUT: string | null = null;
    info: StaticArray<string | null> | null = null;
    developers: StaticArray<string | null> | null = null;
    paintableArray: StaticArray<Paintable | null> | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    charHeight: i32 = 0;
    aboutBeginWidth: i32 = 0;
    infoBeginWidth: StaticArray<i32> | null = null;
    developersBeginWidth: StaticArray<i32> | null = null;
    anchor: i32 = 0;

    jfields_AboutPaintable(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.ABOUT = CanvasStrings.getInstance()!.ABOUT;
    
    
    this.paintableArray = StaticArray.fromArray<Paintable | null>([this]);
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.charHeight = 0;
    this.aboutBeginWidth = 0;
    
    
    this.anchor = Anchor.TOP_LEFT;
    }
    

    static getInstance2(info: StaticArray<string | null> | null, developers: StaticArray<string | null> | null): AboutPaintable | null {
        return new AboutPaintable().jinit_AboutPaintable_2(info, developers);
    }
    

    jinit_AboutPaintable_2(info: StaticArray<string | null> | null, developers: StaticArray<string | null> | null): AboutPaintable {
        super.jinit_Paintable_0();
        this.jfields_AboutPaintable();
        this.info = info;
        this.infoBeginWidth = new StaticArray<i32>(this.info!.length);
        this.developers = developers;
        this.developersBeginWidth = new StaticArray<i32>(this.developers!.length);
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.charHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.aboutBeginWidth = (font!.stringWidth(this.ABOUT) >> 1); if (JThrowable.pending !== null) return;
        let infoSize: i32 = this.info!.length;
        for (let index: i32 = 0; index < infoSize; index++) {
            this.infoBeginWidth![index] = (font!.stringWidth(this.info![index]) >> 1); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let size: i32 = this.developers!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.developersBeginWidth![index] = (font!.stringWidth(this.developers![index]) >> 1); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    getPaintableArrayInstance(): StaticArray<Paintable | null> | null {
        return this.paintableArray;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = this.displayInfoSingleton!.getLastHalfWidth(); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.ABOUT, halfWidth - this.aboutBeginWidth, 2 * this.charHeight, this.anchor); if (JThrowable.pending !== null) return;
        let infoSize: i32 = this.info!.length;
        for (let index: i32 = 0; index < infoSize; index++) {
            graphics!.drawString(this.info![index], halfWidth - this.infoBeginWidth![index], (4 + index) * this.charHeight, this.anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let size: i32 = this.developers!.length;
        for (let index: i32 = 0; index < size; index++) {
            graphics!.drawString(this.developers![index], halfWidth - this.developersBeginWidth![index], (5 + infoSize + index) * this.charHeight, this.anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

