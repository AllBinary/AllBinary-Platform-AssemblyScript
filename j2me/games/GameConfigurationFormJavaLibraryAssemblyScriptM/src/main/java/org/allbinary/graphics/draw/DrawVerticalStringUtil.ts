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
// import org.allbinary.AndroidUtil
// import org.allbinary.J2MEUtil
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.opengles.OpenGLFeatureUtil
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class DrawVerticalStringUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.draw.DrawVerticalStringUtil";
    }
    @lazy static jv_instance: DrawVerticalStringUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DrawVerticalStringUtil | null {
        if (!DrawVerticalStringUtil.js_instance) {
            DrawVerticalStringUtil.js_instance = true;
            DrawVerticalStringUtil.jv_instance = new DrawVerticalStringUtil().jinit_DrawVerticalStringUtil_0();
        }
        return DrawVerticalStringUtil.jv_instance;
    }
    static set instance(value: DrawVerticalStringUtil | null) {
        DrawVerticalStringUtil.js_instance = true;
        DrawVerticalStringUtil.jv_instance = value;
    }
    EMPTY_STRING: string | null = null;
    anchor: i32 = 0;
    charHeight: i32 = 0;
    offsetY: i32 = 0;
    offsetXArray: StaticArray<i32> | null = null;

    jfields_DrawVerticalStringUtil(): void {
    this.EMPTY_STRING = StringUtil.getInstance()!.EMPTY_STRING;
    this.anchor = Anchor.TOP_LEFT;
    this.charHeight = 0;
    this.offsetY = 0;
    this.offsetXArray = NullUtil.getInstance()!.NULL_INT_ARRAY;
    }

    jinit_DrawVerticalStringUtil_0(): DrawVerticalStringUtil {
        super.jinit_JObject_0();
        this.jfields_DrawVerticalStringUtil();
        return this;
    }
    

    static getInstance(): DrawVerticalStringUtil | null {
        return DrawVerticalStringUtil.instance;
    }
    

    updateMeasurement(graphics: Graphics | null, string: string | null): void {
        let openGLFeatureUtil: OpenGLFeatureUtil | null = OpenGLFeatureUtil.getInstance(); if (JThrowable.pending !== null) return;
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.charHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.offsetY = 0;
        if (J2MEUtil.isHTML()) {
            this.charHeight += 1;
        } else if (openGLFeatureUtil!.isAnyThreed()) {
            this.charHeight += 2;
            if (AndroidUtil.isAndroid()) {
            } else {
                this.offsetY = 2 + (this.charHeight * 2 / 3);
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let size: i32 = JString.length0(string); if (JThrowable.pending !== null) return;
        let aChar: u16 = 0;
        let offsetXArray: StaticArray<i32> | null = new StaticArray<i32>(size);
        for (let index: i32 = size - 1; index >= 0; index--) {
            aChar = JString.charAt1(string, index); if (JThrowable.pending !== null) return;
            if (openGLFeatureUtil!.isAnyThreed()) {
                offsetXArray![index] = font!.charWidth(aChar) / 2; if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.offsetXArray = offsetXArray;
    }
    

    paintVerticle(graphics: Graphics | null, string: string | null, x: i32, y: i32, anchor: i32): void {
        let size: i32 = JString.length0(string); if (JThrowable.pending !== null) return;
        let aChar: u16 = 0;
        for (let index: i32 = size - 1; index >= 0; index--) {
            aChar = JString.charAt1(string, index); if (JThrowable.pending !== null) return;
            graphics!.drawChar(aChar, x + this.offsetXArray![index], y + (this.charHeight * index) + this.offsetY, anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    drawCenterString(graphics: Graphics | null, string: string | null, offset: i32, length: i32, x: i32, y: i32): void {
        let width: i32 = (graphics!.getFont()!.substringWidth(string, offset, length) >> 1); if (JThrowable.pending !== null) return;
        do {
            graphics!.drawSubstring(string, offset, length, x - width, y, this.anchor); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Exception: stringLength: ")!.appendint(JString.length0(string))!.append(" offset: ")!.appendint(offset)!.append(" currentLength: ")!.appendint(length)), this, "drawCenterString"); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    drawCenterStrings(graphics: Graphics | null, stringArray: StaticArray<string | null> | null, maxWidth: i32, x: i32, y: i32): void {
        let extraLines: i32 = 0;
        for (let index: i32 = 0; index < stringArray!.length; index++) {
            let string: string | null = stringArray![index];
            if (string != this.EMPTY_STRING) {
                let width: i32 = graphics!.getFont()!.stringWidth(string); if (JThrowable.pending !== null) return;
                let minTotalLines: i32 = 1;
                if (width > maxWidth) {
                    minTotalLines = (width / maxWidth) + 1;
                }
                let linePortion: i32 = JString.length0(string) / minTotalLines; if (JThrowable.pending !== null) return;
                let offset: i32 = 0;
                let currentLength: i32 = linePortion;
                let size: i32 = JString.length0(string); if (JThrowable.pending !== null) return;
                while (offset < size) {
                    if (offset + currentLength > size) {
                        currentLength = size - offset;
                    }
                    if (offset + currentLength != size) {
                        while (currentLength > 0 && JString.charAt1(stringArray![index], offset + currentLength) != (<u16>0x20)) {
                            currentLength--;
                        } if (JThrowable.pending !== null) return;
                        if (currentLength <= 4) {
                            currentLength = linePortion;
                        }
                    } if (JThrowable.pending !== null) return;
                    this.drawCenterString(graphics, string, offset, currentLength, x, y + ((index + extraLines++) * this.charHeight)); if (JThrowable.pending !== null) return;
                    offset = offset + currentLength;
                    currentLength = linePortion;
                } if (JThrowable.pending !== null) return;
                extraLines--;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

