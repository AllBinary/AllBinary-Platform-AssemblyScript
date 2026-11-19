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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.ABRunnable

@global export class DemoGameStartupRunnable extends ABRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.DemoGameStartupRunnable";
    }
    static readonly TYPE: i32 = 4;
    logUtil: LogUtil | null = null;
    demoCanvas: DemoCanvas | null = null;

    jfields_DemoGameStartupRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_DemoGameStartupRunnable_1(demoCanvas: DemoCanvas | null): DemoGameStartupRunnable {
        super.jinit_ABRunnable_0();
        this.jfields_DemoGameStartupRunnable();
        this.demoCanvas = demoCanvas;
        return this;
    }
    

    run(): void {
        do {
            this.setRunning(true); if (JThrowable.pending !== null) break;
            this.demoCanvas!.stopGameDemo(); if (JThrowable.pending !== null) break;
            this.demoCanvas!.create(); if (JThrowable.pending !== null) break;
            this.demoCanvas!.start(); if (JThrowable.pending !== null) break;
            this.setRunning(false); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.setRunning(false); if (JThrowable.pending !== null) return;
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getType(): i32 {
        return DemoGameStartupRunnable.TYPE;
    }
}

