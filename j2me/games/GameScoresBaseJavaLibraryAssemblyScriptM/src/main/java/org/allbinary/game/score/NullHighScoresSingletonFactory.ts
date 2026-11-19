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
// import org.allbinary.string.CommonStrings

@global export class NullHighScoresSingletonFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.NullHighScoresSingletonFactory";
    }
    @lazy static jv_SINGLETON: HighScores | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): HighScores | null {
        if (!NullHighScoresSingletonFactory.js_SINGLETON) {
            NullHighScoresSingletonFactory.js_SINGLETON = true;
            NullHighScoresSingletonFactory.jv_SINGLETON = new HighScores().jinit_HighScores_3(CommonStrings.getInstance()!.LOADING, "High Scores Not Loaded", CommonStrings.getInstance()!.PERIODS);
        }
        return NullHighScoresSingletonFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: HighScores | null) {
        NullHighScoresSingletonFactory.js_SINGLETON = true;
        NullHighScoresSingletonFactory.jv_SINGLETON = value;
    }

    jinit_NullHighScoresSingletonFactory_0(): NullHighScoresSingletonFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): HighScores | null {
        return NullHighScoresSingletonFactory.SINGLETON;
    }
}

