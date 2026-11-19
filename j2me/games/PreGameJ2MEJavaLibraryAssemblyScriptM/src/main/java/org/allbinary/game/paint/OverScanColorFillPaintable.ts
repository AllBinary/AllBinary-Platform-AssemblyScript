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

@global export class OverScanColorFillPaintable extends ColorFillPaintable {

    jclassName(): string {
        return "org.allbinary.game.paint.OverScanColorFillPaintable";
    }
    

    jinit_OverScanColorFillPaintable_1(basicColor: BasicColor | null): OverScanColorFillPaintable {
        super.jinit_ColorFillPaintable_1(basicColor);
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        graphics!.setColor(this.colorP); if (JThrowable.pending !== null) return;
        graphics!.fillRect(-graphics!.getClipX(), -graphics!.getClipY(), this.displayInfoSingleton!.getLastWidth() + (graphics!.getClipX() * 2), this.displayInfoSingleton!.getLastHeight() + (graphics!.getClipY() * 2)); if (JThrowable.pending !== null) return;
    }
}

