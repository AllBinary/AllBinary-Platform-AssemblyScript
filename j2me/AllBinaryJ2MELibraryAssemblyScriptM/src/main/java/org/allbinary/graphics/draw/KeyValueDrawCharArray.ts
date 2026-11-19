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
// import org.allbinary.logic.java.character.CharArrayFactory
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor

@global export class KeyValueDrawCharArray extends JObject implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.draw.KeyValueDrawCharArray";
    }
    myFontProcessor: MyFontProcessor | null = null;
    LABEL: string | null = null;
    labelX: i32 = 0;
    valueX: i32 = 0;
    value: StaticArray<u16> | null = null;
    len: i32 = 0;

    jfields_KeyValueDrawCharArray(): void {
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    
    
    this.valueX = 0;
    this.value = CharArrayFactory.getInstance()!.getZeroCharArray();
    this.len = 0;
    }
    

    jinit_KeyValueDrawCharArray_2(label: string | null, x: i32): KeyValueDrawCharArray {
        super.jinit_JObject_0();
        this.jfields_KeyValueDrawCharArray();
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
        graphics!.drawChars(this.value, 0, this.len, this.valueX, y, 0); if (JThrowable.pending !== null) return;
    }
    

    update(value: StaticArray<u16> | null, len: i32): void {
        this.value = value;
        this.len = len;
    }
}

