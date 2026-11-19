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
// package org.allbinary.game.score.displayable
// import org.allbinary.J2MEUtil
// import org.allbinary.logic.ABSystemWrapper
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.ARunnable

@global export class HighScoreRunnable extends ARunnable {

    jclassName(): string {
        return "org.allbinary.game.score.displayable.HighScoreRunnable";
    }
    highScoresCanvas: HighScoresCanvas | null = null;

    jfields_HighScoreRunnable(): void {
    
    }
    

    jinit_HighScoreRunnable_1(highScoresCanvas: HighScoresCanvas | null): HighScoreRunnable {
        super.jinit_ARunnable_0();
        this.jfields_HighScoreRunnable();
        this.highScoresCanvas = highScoresCanvas;
        return this;
    }
    

    run(): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
        let highScoresCanvas: HighScoresCanvas | null = this.highScoresCanvas;
        do {
            let isHTML: bool = J2MEUtil.isHTML(); if (JThrowable.pending !== null) break;
            if (!isHTML) {
                while (!highScoresCanvas!.hasPainted) {
                }
                highScoresCanvas!.hasPainted = false;
            }
            let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            let systemWrapper: ABSystemWrapper | null = ABSystemWrapper.getInstance(); if (JThrowable.pending !== null) break;
            let currentTimeMillis: i64 = systemWrapper!.currentTimeMillis(); if (JThrowable.pending !== null) break;
            logUtil!.putF(JObject.jtoString(stringMaker!.append("HighScoresCanvas - Request repaint to be sure: ")!.appendlong(currentTimeMillis)), this, commonStrings!.RUN); if (JThrowable.pending !== null) break;
            highScoresCanvas!.repaintBehavior!.onChangeRepaint(highScoresCanvas); if (JThrowable.pending !== null) break;
            if (!isHTML) {
                while (!highScoresCanvas!.hasPainted) {
                }
            }
            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) break;
            logUtil!.putF(JObject.jtoString(stringMaker!.append("HighScoresCanvas - Now that the canvas has completed repaint go ahead and fetch the scores: ")!.appendlong(currentTimeMillis)), this, commonStrings!.RUN); if (JThrowable.pending !== null) break;
            highScoresCanvas!.executeUpdate(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

