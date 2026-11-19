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
// import org.allbinary.canvas.RunnableCanvas
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class RunnableCanvasSingleThreadStartRunnable extends GameRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.RunnableCanvasSingleThreadStartRunnable";
    }
    logUtil: LogUtil | null = null;
    runnableCanvas: RunnableCanvas | null = null;

    jfields_RunnableCanvasSingleThreadStartRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_RunnableCanvasSingleThreadStartRunnable_1(demoCanvas: RunnableCanvas | null): RunnableCanvasSingleThreadStartRunnable {
        super.jinit_GameRunnable_0();
        this.jfields_RunnableCanvasSingleThreadStartRunnable();
        this.runnableCanvas = demoCanvas;
        return this;
    }
    

    run(): void {
        do {
            this.runnableCanvas!.run(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processLoopSleep(): void {
        this.runnableCanvas!.processLoopSleep(); if (JThrowable.pending !== null) return;
    }
}

