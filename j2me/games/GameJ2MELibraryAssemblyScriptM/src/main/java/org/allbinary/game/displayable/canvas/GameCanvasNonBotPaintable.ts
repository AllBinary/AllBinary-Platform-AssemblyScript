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
// import org.allbinary.graphics.paint.Paintable

@global export class GameCanvasNonBotPaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameCanvasNonBotPaintable";
    }
    gameCanvas: AllBinaryGameCanvas | null = null;

    jfields_GameCanvasNonBotPaintable(): void {
    
    }
    

    jinit_GameCanvasNonBotPaintable_1(gameCanvas: AllBinaryGameCanvas | null): GameCanvasNonBotPaintable {
        super.jinit_Paintable_0();
        this.jfields_GameCanvasNonBotPaintable();
        this.gameCanvas = gameCanvas;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.gameCanvas!.nonBotPaint(graphics); if (JThrowable.pending !== null) return;
    }
}

