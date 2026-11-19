/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.game.displayable
// import javax.microedition.lcdui.Canvas
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.ARunnable

@global export class RepaintRunnable extends ARunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.RepaintRunnable";
    }
    canvas: Canvas | null = null;

    jfields_RepaintRunnable(): void {
    
    }
    

    jinit_RepaintRunnable_1(canvas: Canvas | null): RepaintRunnable {
        super.jinit_ARunnable_0();
        this.jfields_RepaintRunnable();
        this.canvas = canvas;
        return this;
    }
    

    run(): void {
        do {
            this.canvas!.repaint(); if (JThrowable.pending !== null) break;
            DisplayInfoSingleton.getInstance()!.process(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
            logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

