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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.paint.ProcessPaintable

@global export class GameCanvasPaintHelper extends ProcessPaintable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameCanvasPaintHelper";
    }
    gameCanvas: AllBinaryGameCanvas | null = null;

    jfields_GameCanvasPaintHelper(): void {
    
    }
    

    jinit_GameCanvasPaintHelper_1(gameCanvas: AllBinaryGameCanvas | null): GameCanvasPaintHelper {
        super.jinit_ProcessPaintable_0();
        this.jfields_GameCanvasPaintHelper();
        this.gameCanvas = gameCanvas;
        return this;
    }
    

    process(): void {
    }
    

    paint(graphics: Graphics | null): void {
        this.gameCanvas!.draw(graphics); if (JThrowable.pending !== null) return;
    }
}

