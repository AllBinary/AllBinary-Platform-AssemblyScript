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
// package org.allbinary.game.score
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.input.PlayerGameInput
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.score.displayable.HighScoresCanvas
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class HighScoresCanvasInputProcessor extends PlayerGameInput {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresCanvasInputProcessor";
    }
    highScoresCanvas: HighScoresCanvas | null = null;

    jfields_HighScoresCanvasInputProcessor(): void {
    
    }
    

    jinit_HighScoresCanvasInputProcessor_1(highScoresCanvas: HighScoresCanvas | null): HighScoresCanvasInputProcessor {
        super.jinit_PlayerGameInput_3(new BasicArrayListD().jinit_BasicArrayListD_0(), new BasicArrayListD().jinit_BasicArrayListD_0(), -1);
        this.jfields_HighScoresCanvasInputProcessor();
        this.highScoresCanvas = highScoresCanvas;
        return this;
    }
    

    open(): void {
    }
    

    close(): void {
    }
    

    onPressGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        super.onPressGameKeyEvent(gameKeyEvent); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    onDownGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        super.onDownGameKeyEvent(gameKeyEvent); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    onUpGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        super.onUpGameKeyEvent(gameKeyEvent); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
    }
    

    getHighScoresCanvas(): HighScoresCanvas | null {
        return this.highScoresCanvas;
    }
}

