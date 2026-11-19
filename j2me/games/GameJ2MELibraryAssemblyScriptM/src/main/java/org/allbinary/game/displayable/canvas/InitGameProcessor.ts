/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2026 AllBinary
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
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class InitGameProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.InitGameProcessor";
    }
    gameCanvas: AllBinaryGameCanvas | null = null;

    jfields_InitGameProcessor(): void {
    
    }
    

    jinit_InitGameProcessor_1(gameCanvas: AllBinaryGameCanvas | null): InitGameProcessor {
        super.jinit_Processor_0();
        this.jfields_InitGameProcessor();
        this.gameCanvas = gameCanvas;
        return this;
    }
    

    process(): void {
        if (ProgressCanvasFactory.getInstance()!.isInGame()) {
            this.gameCanvas!.setProcessGameProcessorInit(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

