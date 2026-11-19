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
// import org.allbinary.graphics.displayable.GameTickDisplayInfoSingleton
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory

@global export class GameCanvasRunnable extends GameRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameCanvasRunnable";
    }
    logUtil: LogUtil | null = null;
    gameTickDisplayInfoSingleton: GameTickDisplayInfoSingleton | null = null;
    allBinaryGameCanvas: AllBinaryGameCanvas | null = null;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;

    jfields_GameCanvasRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    this.gameTickDisplayInfoSingleton = GameTickDisplayInfoSingleton.getInstance();
    
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    }
    

    jinit_GameCanvasRunnable_1(allBinaryGameCanvas: AllBinaryGameCanvas | null): GameCanvasRunnable {
        super.jinit_GameRunnable_0();
        this.jfields_GameCanvasRunnable();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
        return this;
    }
    

    run(): void {
        do {
            this.allBinaryGameCanvas!.getLoopTimeHelperP()!.setStartTime(this.gameTickTimeDelayHelper!.setStartTime()); if (JThrowable.pending !== null) break;
            this.gameTickDisplayInfoSingleton!.update(); if (JThrowable.pending !== null) break;
            this.allBinaryGameCanvas!.processGame(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processLoopSleep(): void {
        this.allBinaryGameCanvas!.processLoopSleep(); if (JThrowable.pending !== null) return;
    }
}

