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
// import org.allbinary.string.CommonStrings

@global export class HighScoresBase extends JObject implements HighScoresFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresBase";
    }
    commonStrings: CommonStrings | null = null;

    jfields_HighScoresBase(): void {
    this.commonStrings = CommonStrings.getInstance();
    }
    

    jinit_HighScoresBase_0(): HighScoresBase {
        super.jinit_JObject_0();
        this.jfields_HighScoresBase();
        return this;
    }
    

    fetchHighScores(gameInfo: GameInfo | null, highScoresResultsListener: HighScoresResultsListener | null): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
    

    fetchHighScoresPreload(gameInfo: GameInfo | null, highScoresResultsListener: HighScoresResultsListener | null, preload: bool): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
    

    createHighScoresHelper(): HighScoresHelperBaseInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
}

