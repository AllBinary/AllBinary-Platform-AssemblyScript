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
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor

@global export class SelectableTextItem extends ABTextItem {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.SelectableTextItem";
    }
    

    jinit_SelectableTextItem_5(label: string | null, layout: i32, altText: string | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): SelectableTextItem {
        super.jinit_ABTextItem_5(label, layout, altText, backgroundBasicColor, foregroundBasicColor);
        return this;
    }
    

    isFocusable(): bool {
        return true;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let stringComponent: ABStringComponent | null = this.getLabelStringComponent(); if (JThrowable.pending !== null) return;
        if (stringComponent != null) {
            graphics!.setColor(stringComponent!.getForegroundBasicColor()!.intValue()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        graphics!.drawString(this.getLabel(), x + 2, y, 0); if (JThrowable.pending !== null) return;
    }
}

