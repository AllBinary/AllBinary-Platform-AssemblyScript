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
// import org.allbinary.AppletUtil
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.input.motion.button.TouchScreenFactory
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.time.TimeDelayHelper

@global export class PressStartMenuPaintable extends Paintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.paint.PressStartMenuPaintable";
    }
    displayInfo: DisplayInfoSingleton | null = null;
    PRESS_START: string | null = null;
    KEY_START: string | null = null;
    MENU_START: string | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    startString: string | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;
    flash: bool = false;
    anchor: i32 = 0;
    beginWidth: i32 = 0;
    line: i32 = 0;

    jfields_PressStartMenuPaintable(): void {
    this.displayInfo = DisplayInfoSingleton.getInstance();
    this.PRESS_START = "Press Screen To Start";
    this.KEY_START = "Press or Click F2 To Begin";
    this.MENU_START = "Press Start From The Menu To Begin";
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.startString = StringUtil.getInstance()!.EMPTY_STRING;
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(1100);
    this.flash = false;
    this.anchor = Anchor.TOP_LEFT;
    this.beginWidth = 0;
    this.line = 0;
    }
    

    jinit_PressStartMenuPaintable_0(): PressStartMenuPaintable {
        super.jinit_Paintable_0();
        this.jfields_PressStartMenuPaintable();
        if (TouchScreenFactory.getInstance()!.isTouch()) {
            this.startString = this.PRESS_START;
        } else if (AppletUtil.isAppletLoader(this)) {
            this.startString = this.KEY_START;
        } else {
            this.startString = this.MENU_START;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.beginWidth = (graphics!.getFont()!.stringWidth(this.startString) >> 1); if (JThrowable.pending !== null) return;
        this.line = (4 * MyFontProcessor.defaultCharWidth(font)) + (font!.getHeight() >> 1); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        if (this.timeDelayHelper!.isTimeTNT()) {
            if (this.isFlash()) {
                this.setFlash(false); if (JThrowable.pending !== null) return;
            } else {
                this.setFlash(true); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.isFlash()) {
            this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
            graphics!.drawString(this.startString, this.displayInfo!.getLastHalfWidth() - this.beginWidth, this.displayInfo!.getLastHeight() - this.line, this.anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setFlash(flash: bool): void {
        this.flash = flash;
    }
    

    isFlash(): bool {
        return this.flash;
    }
}

