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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.logic.string.StringUtil

@global export class KeyValueDrawString extends JObject implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.draw.KeyValueDrawString";
    }
    myFontProcessor: MyFontProcessor | null = null;
    LABEL: string | null = null;
    labelX: i32 = 0;
    valueX: i32 = 0;
    value: string | null = null;

    jfields_KeyValueDrawString(): void {
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    
    
    this.valueX = 0;
    this.value = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_KeyValueDrawString_2(label: string | null, x: i32): KeyValueDrawString {
        super.jinit_JObject_0();
        this.jfields_KeyValueDrawString();
        this.LABEL = label;
        this.labelX = x;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let labelWidth: i32 = graphics!.getFont()!.stringWidth(this.LABEL) - JString.length0(this.LABEL); if (JThrowable.pending !== null) return;
        this.valueX = labelWidth + this.labelX;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null, y: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.LABEL, this.labelX, y, 0); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.value, this.valueX, y, 0); if (JThrowable.pending !== null) return;
    }
    

    update(value: string | null): void {
        this.value = value;
    }
}

