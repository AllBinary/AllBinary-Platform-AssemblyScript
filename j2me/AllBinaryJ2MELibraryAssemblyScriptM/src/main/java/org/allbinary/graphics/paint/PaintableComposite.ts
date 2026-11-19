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

@global export class PaintableComposite extends Paintable {

    jclassName(): string {
        return "org.allbinary.graphics.paint.PaintableComposite";
    }
    paintableArray: StaticArray<PaintableInterface | null> | null = null;

    jfields_PaintableComposite(): void {
    
    }
    

    jinit_PaintableComposite_1(paintableArray: StaticArray<PaintableInterface | null> | null): PaintableComposite {
        super.jinit_Paintable_0();
        this.jfields_PaintableComposite();
        this.paintableArray = paintableArray;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        for (let index: i32 = this.paintableArray!.length - 1; index >= 0; index--) {
            this.paintableArray![index]!.paint(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        for (let index: i32 = this.paintableArray!.length - 1; index >= 0; index--) {
            this.paintableArray![index]!.paintThreed(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

