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
// import org.allbinary.canvas.Processor

@global export class GameProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameProcessor";
    }
    gameCanvas: AllBinaryGameCanvas | null = null;

    jfields_GameProcessor(): void {
    
    }
    

    jinit_GameProcessor_1(gameCanvas: AllBinaryGameCanvas | null): GameProcessor {
        super.jinit_Processor_0();
        this.jfields_GameProcessor();
        this.gameCanvas = gameCanvas;
        return this;
    }
    

    process(): void {
        this.gameCanvas!.processPlayingGame(); if (JThrowable.pending !== null) return;
    }
}

