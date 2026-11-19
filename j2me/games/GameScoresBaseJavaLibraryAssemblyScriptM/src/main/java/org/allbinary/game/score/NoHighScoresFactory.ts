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
// package org.allbinary.game.score
// import org.allbinary.game.GameInfo
// import org.allbinary.logic.communication.log.LogUtil

@global export class NoHighScoresFactory extends HighScoresBase {

    jclassName(): string {
        return "org.allbinary.game.score.NoHighScoresFactory";
    }
    @lazy static jv_instance: NoHighScoresFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoHighScoresFactory | null {
        if (!NoHighScoresFactory.js_instance) {
            NoHighScoresFactory.js_instance = true;
            NoHighScoresFactory.jv_instance = new NoHighScoresFactory().jinit_NoHighScoresFactory_0();
        }
        return NoHighScoresFactory.jv_instance;
    }
    static set instance(value: NoHighScoresFactory | null) {
        NoHighScoresFactory.js_instance = true;
        NoHighScoresFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    NO_HIGH_SCORES: StaticArray<HighScores | null> | null = null;

    jfields_NoHighScoresFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.NO_HIGH_SCORES = new StaticArray<HighScores | null>(0);
    }
    

    static getInstance(): NoHighScoresFactory | null {
        return NoHighScoresFactory.instance;
    }
    

    jinit_NoHighScoresFactory_0(): NoHighScoresFactory {
        super.jinit_HighScoresBase_0();
        this.jfields_NoHighScoresFactory();
        return this;
    }
    

    fetchHighScores(gameInfo: GameInfo | null, highScoresResultsListener: HighScoresResultsListener | null): void {
        this.logUtil!.putF("Getting No HighScores", this, "fetchHighScores"); if (JThrowable.pending !== null) return;
        highScoresResultsListener!.setHighScoresArray(this.NO_HIGH_SCORES); if (JThrowable.pending !== null) return;
    }
    

    createHighScoresHelper(): HighScoresHelperBaseInterface | null {
        return new HighScoresHelperBase().jinit_HighScoresHelperBase_0();
    }
}

