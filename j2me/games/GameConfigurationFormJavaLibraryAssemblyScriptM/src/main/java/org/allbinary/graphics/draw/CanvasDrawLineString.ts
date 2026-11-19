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
// package org.allbinary.graphics.draw
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor

@global export class CanvasDrawLineString extends JObject implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.draw.CanvasDrawLineString";
    }
    @lazy static jv_NULL_CANVAS_DRAW_LINE_STRING: CanvasDrawLineString | null = null;
    @lazy static js_NULL_CANVAS_DRAW_LINE_STRING: bool = false;
    static get NULL_CANVAS_DRAW_LINE_STRING(): CanvasDrawLineString | null {
        if (!CanvasDrawLineString.js_NULL_CANVAS_DRAW_LINE_STRING) {
            CanvasDrawLineString.js_NULL_CANVAS_DRAW_LINE_STRING = true;
            CanvasDrawLineString.jv_NULL_CANVAS_DRAW_LINE_STRING = new CanvasDrawLineString().jinit_CanvasDrawLineString_2(0, 0);
        }
        return CanvasDrawLineString.jv_NULL_CANVAS_DRAW_LINE_STRING;
    }
    static set NULL_CANVAS_DRAW_LINE_STRING(value: CanvasDrawLineString | null) {
        CanvasDrawLineString.js_NULL_CANVAS_DRAW_LINE_STRING = true;
        CanvasDrawLineString.jv_NULL_CANVAS_DRAW_LINE_STRING = value;
    }
    drawStringUtil: DrawStringUtil | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    x: i32 = 0;
    y: i32 = 0;
    fontHeight: i32 = 0;

    jfields_CanvasDrawLineString(): void {
    this.drawStringUtil = DrawStringUtil.getInstance();
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    
    
    this.fontHeight = 0;
    }
    

    jinit_CanvasDrawLineString_2(x: i32, y: i32): CanvasDrawLineString {
        super.jinit_JObject_0();
        this.jfields_CanvasDrawLineString();
        this.x = x;
        this.y = y;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.fontHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null, string: string | null, line: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.drawStringUtil!.drawCenterString(graphics, string, 0, JString.length0(string), this.x, this.y + (line * this.fontHeight)); if (JThrowable.pending !== null) return;
    }
}

