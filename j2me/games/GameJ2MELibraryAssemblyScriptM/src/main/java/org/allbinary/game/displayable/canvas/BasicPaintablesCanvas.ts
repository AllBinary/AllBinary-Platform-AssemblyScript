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
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.paint.ColorFillBasePaintable
// import org.allbinary.game.paint.ColorFillPaintableFactory
// import org.allbinary.graphics.paint.Paintable

@global export class BasicPaintablesCanvas extends GameCommandCanvas {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.BasicPaintablesCanvas";
    }
    paintableArray: StaticArray<Paintable | null> | null = null;
    colorFillPaintable: ColorFillBasePaintable | null = null;

    jfields_BasicPaintablesCanvas(): void {
    
    
    }
    

    jinit_BasicPaintablesCanvas_4(cmdListener: CommandListener | null, name: string | null, allBinaryGameLayerManager: AllBinaryGameLayerManager | null, paintableArray: StaticArray<Paintable | null> | null): BasicPaintablesCanvas {
        super.jinit_GameCommandCanvas_4(cmdListener, name, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
        this.jfields_BasicPaintablesCanvas();
        this.paintableArray = paintableArray;
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance()!.getInstance2(allBinaryGameLayerManager!.getBackgroundBasicColor(), false); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.colorFillPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.foregroundColor); if (JThrowable.pending !== null) return;
        for (let index: i32 = this.paintableArray!.length - 1; index >= 0; index--) {
            this.paintableArray![index]!.paint(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
}

