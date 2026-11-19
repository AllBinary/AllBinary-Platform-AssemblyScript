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
// package org.allbinary.media
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.time.TimeDelayHelper

@global export class AllBinaryVisualDebugVibration extends AllBinaryVibrationME implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.media.AllBinaryVisualDebugVibration";
    }
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;
    VIBRATING: string | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    anchor: i32 = 0;
    width: i32 = 0;

    jfields_AllBinaryVisualDebugVibration(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(JInteger.MAX_VALUE);
    this.VIBRATING = "Vibrating";
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.anchor = Anchor.TOP_LEFT;
    this.width = 0;
    }

    jinit_AllBinaryVisualDebugVibration_0(): AllBinaryVisualDebugVibration {
        super.jinit_AllBinaryVibrationME_0();
        this.jfields_AllBinaryVisualDebugVibration();
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.width = font!.stringWidth(this.VIBRATING); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    vibrate(duration: i32, type: i32, volume: i32): void {
        this.timeDelayHelper!.delay = duration;
    }
    

    paint(graphics: Graphics | null): void {
        if (this.timeDelayHelper!.isTimeTNT()) {
            this.timeDelayHelper!.delay = JInteger.MAX_VALUE;
            this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
            graphics!.drawString(this.VIBRATING, this.displayInfoSingleton!.getLastHalfWidth() - (this.width >> 1), 0, this.anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

