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
// package org.allbinary.game.score
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class HighScoresHelperBase extends JObject implements HighScoresHelperBaseInterface {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresHelperBase";
    }
    logUtil: LogUtil | null = null;
    highScoresArrayP: StaticArray<HighScores | null> | null = null;

    jfields_HighScoresHelperBase(): void {
    this.logUtil = LogUtil.getInstance();
    this.highScoresArrayP = LastFetchHighScoresFactory.getInstance()!.highScoresArray;
    }

    jinit_HighScoresHelperBase_0(): HighScoresHelperBase {
        super.jinit_JObject_0();
        this.jfields_HighScoresHelperBase();
        return this;
    }
    

    setHighScoresArray(highScoresArrayP: StaticArray<HighScores | null> | null): void {
        if (highScoresArrayP != null) {
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(commonStrings!.START)!.appendint(highScoresArrayP!.length)), this, "setHighScoresArray"); if (JThrowable.pending !== null) return;
        } else {
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(commonStrings!.START, this, "setHighScoresArray"); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.highScoresArrayP = highScoresArrayP;
    }
    

    getNextHighScores(): HighScores | null {
        return NullHighScoresSingletonFactory.getInstance();
    }
    

    isAnyHighScores(): bool {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return false; }
        return false;
    }
    

    setSelectedHighScores(selectedHighScores: HighScores | null): void {
    }
    

    getSelectedHighScores(): HighScores | null {
        return NullHighScoresSingletonFactory.getInstance();
    }
    

    getHighScoresArray(): StaticArray<HighScores | null> | null {
        return this.highScoresArrayP;
    }
    

    selectHighScores(): void {
    }
}

