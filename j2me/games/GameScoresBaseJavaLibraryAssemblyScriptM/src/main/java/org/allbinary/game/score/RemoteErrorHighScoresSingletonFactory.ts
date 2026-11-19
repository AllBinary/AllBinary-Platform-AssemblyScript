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

@global export class RemoteErrorHighScoresSingletonFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.RemoteErrorHighScoresSingletonFactory";
    }
    @lazy static jv_SINGLETON: HighScores | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): HighScores | null {
        if (!RemoteErrorHighScoresSingletonFactory.js_SINGLETON) {
            RemoteErrorHighScoresSingletonFactory.js_SINGLETON = true;
            RemoteErrorHighScoresSingletonFactory.jv_SINGLETON = new HighScores().jinit_HighScores_3(CommonStrings.getInstance()!.LOADING, "Remote High Scores Did Not Load", CommonStrings.getInstance()!.PERIODS);
        }
        return RemoteErrorHighScoresSingletonFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: HighScores | null) {
        RemoteErrorHighScoresSingletonFactory.js_SINGLETON = true;
        RemoteErrorHighScoresSingletonFactory.jv_SINGLETON = value;
    }

    jinit_RemoteErrorHighScoresSingletonFactory_0(): RemoteErrorHighScoresSingletonFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): HighScores | null {
        return RemoteErrorHighScoresSingletonFactory.SINGLETON;
    }
}

