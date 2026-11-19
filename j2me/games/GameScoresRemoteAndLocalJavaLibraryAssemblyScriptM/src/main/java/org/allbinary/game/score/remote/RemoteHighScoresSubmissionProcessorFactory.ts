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
// package org.allbinary.game.score.remote

@global export class RemoteHighScoresSubmissionProcessorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.remote.RemoteHighScoresSubmissionProcessorFactory";
    }
    @lazy static jv_SINGLETON: RemoteHighScoresSubmissionProcessorInterface | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): RemoteHighScoresSubmissionProcessorInterface | null {
        if (!RemoteHighScoresSubmissionProcessorFactory.js_SINGLETON) {
            RemoteHighScoresSubmissionProcessorFactory.js_SINGLETON = true;
            RemoteHighScoresSubmissionProcessorFactory.jv_SINGLETON = new RemoteHighScoresSubmissionProcessor().jinit_RemoteHighScoresSubmissionProcessor_0();
        }
        return RemoteHighScoresSubmissionProcessorFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: RemoteHighScoresSubmissionProcessorInterface | null) {
        RemoteHighScoresSubmissionProcessorFactory.js_SINGLETON = true;
        RemoteHighScoresSubmissionProcessorFactory.jv_SINGLETON = value;
    }

    jinit_RemoteHighScoresSubmissionProcessorFactory_0(): RemoteHighScoresSubmissionProcessorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): RemoteHighScoresSubmissionProcessorInterface | null {
        return RemoteHighScoresSubmissionProcessorFactory.SINGLETON;
    }
}

