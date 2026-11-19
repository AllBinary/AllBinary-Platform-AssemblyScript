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
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.graphics.paint.PaintableComposite
// import org.allbinary.graphics.paint.PaintableInterface

@global export class DemoCanvasProgressUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.DemoCanvasProgressUtil";
    }

    jinit_DemoCanvasProgressUtil_0(): DemoCanvasProgressUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static showProgress(demoCanvas: DemoCanvas | null): void {
        DemoCanvasProgressUtil.showProgressOptionallyInTheBackground(demoCanvas, false); if (JThrowable.pending !== null) return;
    }
    

    static showProgressOptionallyInTheBackground(demoCanvas: DemoCanvas | null, background: bool): void {
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.startBackground(background); if (JThrowable.pending !== null) return;
        let paintableArray: StaticArray<PaintableInterface | null> | null = new StaticArray<PaintableInterface | null>(2);
        paintableArray![0] = progressCanvas;
        paintableArray![1] = demoCanvas!.getDefaultPaintableInterface(); if (JThrowable.pending !== null) return;
        demoCanvas!.setDefaultPaintableInterface(new PaintableComposite().jinit_PaintableComposite_1(paintableArray)); if (JThrowable.pending !== null) return;
        demoCanvas!.setPaintableInterface(demoCanvas!.getDefaultPaintableInterface()); if (JThrowable.pending !== null) return;
    }
}

