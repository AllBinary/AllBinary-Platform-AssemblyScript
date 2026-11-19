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
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.NullCanvas
// import javax.microedition.lcdui.NullImage
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.graphics.paint.ProcessPaintable
// import org.allbinary.util.CircularIndexUtil

@global export class BufferedGameCanvasPaintHelper extends ProcessPaintable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.BufferedGameCanvasPaintHelper";
    }
    static readonly MAX_IMAGES: i32 = 4;
    gameCanvas: Canvas | null = null;
    offScreenImage: StaticArray<Image | null> | null = null;
    previousImage: Image | null = null;
    circularIndexUtil: CircularIndexUtil | null = null;
    drawCircularIndexUtil: CircularIndexUtil | null = null;
    anchor: i32 = 0;

    jfields_BufferedGameCanvasPaintHelper(): void {
    this.gameCanvas = NullCanvas.NULL_CANVAS;
    this.offScreenImage = new StaticArray<Image | null>(BufferedGameCanvasPaintHelper.MAX_IMAGES);
    this.previousImage = NullImage.NULL_IMAGE;
    this.circularIndexUtil = CircularIndexUtil.createInstance(BufferedGameCanvasPaintHelper.MAX_IMAGES);
    this.drawCircularIndexUtil = CircularIndexUtil.createInstanceAt(BufferedGameCanvasPaintHelper.MAX_IMAGES - 1, BufferedGameCanvasPaintHelper.MAX_IMAGES);
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_BufferedGameCanvasPaintHelper_1(gameCanvas: AllBinaryGameCanvas | null): BufferedGameCanvasPaintHelper {
        super.jinit_ProcessPaintable_0();
        this.jfields_BufferedGameCanvasPaintHelper();
        { JThrowable.raise(new JException().jinit_JException_1("No Longer Used")); return this; }
        return this;
    }
    

    process(): void {
        let myCanvas: MyCanvas | null = (changetype<MyCanvas | null>(this.gameCanvas));
        myCanvas!.draw(this.offScreenImage![this.circularIndexUtil!.getIndex()]!.getGraphics()); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
        this.drawCircularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.previousImage = this.offScreenImage![this.drawCircularIndexUtil!.getIndex()]; if (JThrowable.pending !== null) return;
        graphics!.drawImage(this.previousImage, 0, 0, this.anchor); if (JThrowable.pending !== null) return;
    }
}

