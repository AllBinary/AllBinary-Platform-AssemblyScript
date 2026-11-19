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

@global export class DrawStringUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.draw.DrawStringUtil";
    }
    @lazy static jv_instance: DrawStringUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DrawStringUtil | null {
        if (!DrawStringUtil.js_instance) {
            DrawStringUtil.js_instance = true;
            DrawStringUtil.jv_instance = new DrawStringUtil().jinit_DrawStringUtil_0();
        }
        return DrawStringUtil.jv_instance;
    }
    static set instance(value: DrawStringUtil | null) {
        DrawStringUtil.js_instance = true;
        DrawStringUtil.jv_instance = value;
    }
    EMPTY_STRING: string | null = null;
    anchor: i32 = 0;

    jfields_DrawStringUtil(): void {
    this.EMPTY_STRING = StringUtil.getInstance()!.EMPTY_STRING;
    this.anchor = Anchor.TOP_LEFT;
    }

    jinit_DrawStringUtil_0(): DrawStringUtil {
        super.jinit_JObject_0();
        this.jfields_DrawStringUtil();
        return this;
    }
    

    static getInstance(): DrawStringUtil | null {
        return DrawStringUtil.instance;
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
    

    drawCenterStrings(graphics: Graphics | null, stringArray: StaticArray<string | null> | null, maxWidth: i32, charHeight: i32, x: i32, y: i32): void {
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
                    this.drawCenterString(graphics, string, offset, currentLength, x, y + ((index + extraLines++) * charHeight)); if (JThrowable.pending !== null) return;
                    offset = offset + currentLength;
                    currentLength = linePortion;
                } if (JThrowable.pending !== null) return;
                extraLines--;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

