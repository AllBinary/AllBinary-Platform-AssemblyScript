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
// import org.allbinary.AndroidUtil
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class GameCanvasPauseRunnable extends GameRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameCanvasPauseRunnable";
    }
    logUtil: LogUtil | null = null;
    allBinaryGameCanvas: AllBinaryGameCanvas | null = null;

    jfields_GameCanvasPauseRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_GameCanvasPauseRunnable_1(allBinaryGameCanvas: AllBinaryGameCanvas | null): GameCanvasPauseRunnable {
        super.jinit_GameRunnable_0();
        this.jfields_GameCanvasPauseRunnable();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
        return this;
    }
    

    run(): void {
    }
    

    processLoopSleep(): void {
        do {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) break;
            let isOpenGL: bool = features!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL); if (JThrowable.pending !== null) break;
            if (isOpenGL) {
                this.allBinaryGameCanvas!.processSleep(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

