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
// package org.allbinary.midlet
// import javax.microedition.lcdui.NullCanvas
// import org.allbinary.canvas.Processor
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class ExitRunnable extends JObject implements JRunnable {

    jclassName(): string {
        return "org.allbinary.midlet.ExitRunnable";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    midlet: AllBinaryMidlet | null = null;
    processor: Processor | null = null;
    isProgress: bool = false;

    jfields_ExitRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    
    }
    

    jinit_ExitRunnable_3(midlet: AllBinaryMidlet | null, processor: Processor | null, isProgress: bool): ExitRunnable {
        super.jinit_JObject_0();
        this.jfields_ExitRunnable();
        this.midlet = midlet;
        this.isProgress = isProgress;
        this.processor = processor;
        return this;
    }
    

    run(): void {
        do {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
            this.midlet!.destroyAppInRunnable(false, this.isProgress); if (JThrowable.pending !== null) break;
            this.midlet!.setDisplay(NullCanvas.NULL_CANVAS); if (JThrowable.pending !== null) break;
            this.midlet!.notifyDestroyed(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
            this.processor!.process(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
            do {
                this.processor!.process(); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e2: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

