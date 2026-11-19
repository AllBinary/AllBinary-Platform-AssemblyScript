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

@global export class RemoteHighScoresProcessorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.remote.RemoteHighScoresProcessorFactory";
    }
    @lazy static jv_SINGLETON: RemoteHighScoresProcessorInterface | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): RemoteHighScoresProcessorInterface | null {
        if (!RemoteHighScoresProcessorFactory.js_SINGLETON) {
            RemoteHighScoresProcessorFactory.js_SINGLETON = true;
            RemoteHighScoresProcessorFactory.jv_SINGLETON = new RemoteHighScoresProcessor().jinit_RemoteHighScoresProcessor_0();
        }
        return RemoteHighScoresProcessorFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: RemoteHighScoresProcessorInterface | null) {
        RemoteHighScoresProcessorFactory.js_SINGLETON = true;
        RemoteHighScoresProcessorFactory.jv_SINGLETON = value;
    }

    jinit_RemoteHighScoresProcessorFactory_0(): RemoteHighScoresProcessorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): RemoteHighScoresProcessorInterface | null {
        return RemoteHighScoresProcessorFactory.SINGLETON;
    }
}

