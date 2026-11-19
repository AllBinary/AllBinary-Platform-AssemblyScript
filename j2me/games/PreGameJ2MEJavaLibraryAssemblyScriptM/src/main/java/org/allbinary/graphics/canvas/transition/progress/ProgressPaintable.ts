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
// package org.allbinary.graphics.canvas.transition.progress
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.paint.Paintable

@global export class ProgressPaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.graphics.canvas.transition.progress.ProgressPaintable";
    }
    progressCanvas: ProgressCanvas | null = null;

    jfields_ProgressPaintable(): void {
    
    }
    

    jinit_ProgressPaintable_1(progressCanvas: ProgressCanvas | null): ProgressPaintable {
        super.jinit_Paintable_0();
        this.jfields_ProgressPaintable();
        this.progressCanvas = progressCanvas;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.progressCanvas!.paint2(graphics); if (JThrowable.pending !== null) return;
    }
}

