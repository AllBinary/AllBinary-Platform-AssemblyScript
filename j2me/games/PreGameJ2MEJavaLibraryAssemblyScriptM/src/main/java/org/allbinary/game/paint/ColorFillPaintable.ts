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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton

@global export class ColorFillPaintable extends ColorFillBasePaintable {

    jclassName(): string {
        return "org.allbinary.game.paint.ColorFillPaintable";
    }
    displayInfoSingleton: DisplayInfoSingleton | null = null;

    jfields_ColorFillPaintable(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    }
    

    jinit_ColorFillPaintable_1(basicColor: BasicColor | null): ColorFillPaintable {
        super.jinit_ColorFillBasePaintable_1(basicColor);
        this.jfields_ColorFillPaintable();
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        graphics!.setColor(this.colorP); if (JThrowable.pending !== null) return;
        graphics!.fillRect(0, 0, this.displayInfoSingleton!.getLastWidth(), this.displayInfoSingleton!.getLastHeight()); if (JThrowable.pending !== null) return;
    }
}

