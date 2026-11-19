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
// package org.allbinary.game.layer
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.layer.Layer

@global export class PaintableLayerComposite extends Paintable {

    jclassName(): string {
        return "org.allbinary.game.layer.PaintableLayerComposite";
    }
    paintableArray: StaticArray<Layer | null> | null = null;

    jfields_PaintableLayerComposite(): void {
    
    }
    

    jinit_PaintableLayerComposite_1(paintableArray: StaticArray<Layer | null> | null): PaintableLayerComposite {
        super.jinit_Paintable_0();
        this.jfields_PaintableLayerComposite();
        this.paintableArray = paintableArray;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        for (let index: i32 = this.paintableArray!.length; --index >= 0; ) {
            this.paintableArray![index]!.paint(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        let paintableInterface: PaintableInterface | null = null;
        for (let index: i32 = this.paintableArray!.length; --index >= 0; ) {
            paintableInterface = changetype<PaintableInterface | null>(this.paintableArray![index]);
            paintableInterface!.paintThreed(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

