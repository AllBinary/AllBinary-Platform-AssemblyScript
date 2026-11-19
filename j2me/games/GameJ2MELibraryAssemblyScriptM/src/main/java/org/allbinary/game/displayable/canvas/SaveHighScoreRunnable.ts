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
// import org.allbinary.game.score.displayable.HighScoreTextBox
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class SaveHighScoreRunnable extends JObject implements JRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.SaveHighScoreRunnable";
    }
    progressCanvas: ProgressCanvas | null = null;
    isLast: bool = false;
    textBox: HighScoreTextBox | null = null;

    jfields_SaveHighScoreRunnable(): void {
    this.progressCanvas = ProgressCanvasFactory.getInstance();
    
    
    }
    

    jinit_SaveHighScoreRunnable_2(isLast: bool, textBox: HighScoreTextBox | null): SaveHighScoreRunnable {
        super.jinit_JObject_0();
        this.jfields_SaveHighScoreRunnable();
        this.isLast = isLast;
        this.textBox = textBox;
        return this;
    }
    

    run(): void {
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
        do {
            if (this.isLast) {
                this.textBox!.submit(); if (JThrowable.pending !== null) break;
            } else {
                this.textBox!.saveHighScore(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            logUtil!.put(commonStrings!.EXCEPTION, this, "run", e); if (JThrowable.pending !== null) return;
            this.progressCanvas!.end(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

