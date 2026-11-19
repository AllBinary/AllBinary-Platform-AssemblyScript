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
// import javax.microedition.lcdui.Graphics

@global export class StringLocationPaintable extends LocationPaintable {

    jclassName(): string {
        return "org.allbinary.graphics.paint.StringLocationPaintable";
    }
    value: string | null = null;

    jfields_StringLocationPaintable(): void {
    
    }
    

    jinit_StringLocationPaintable_1(value: string | null): StringLocationPaintable {
        super.jinit_LocationPaintable_0();
        this.jfields_StringLocationPaintable();
        this.value = value;
        return this;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawString(this.value, x, y, 0); if (JThrowable.pending !== null) return;
    }
}

