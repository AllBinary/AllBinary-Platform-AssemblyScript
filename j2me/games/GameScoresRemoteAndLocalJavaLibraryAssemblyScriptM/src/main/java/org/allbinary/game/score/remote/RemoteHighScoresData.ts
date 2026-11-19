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

@global export class RemoteHighScoresData extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.remote.RemoteHighScoresData";
    }
    @lazy static jv_SINGLETON: RemoteHighScoresData | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): RemoteHighScoresData | null {
        if (!RemoteHighScoresData.js_SINGLETON) {
            RemoteHighScoresData.js_SINGLETON = true;
            RemoteHighScoresData.jv_SINGLETON = new RemoteHighScoresData().jinit_RemoteHighScoresData_0();
        }
        return RemoteHighScoresData.jv_SINGLETON;
    }
    static set SINGLETON(value: RemoteHighScoresData | null) {
        RemoteHighScoresData.js_SINGLETON = true;
        RemoteHighScoresData.jv_SINGLETON = value;
    }
    HIGH_SCORES: string | null = null;
    CUSTOMER_USER_NAME: string | null = null;
    DISPLAY_NAME: string | null = null;
    SCORE: string | null = null;
    GAME_INFO: string | null = null;
    GAME_CONFIGURATION: string | null = null;

    jfields_RemoteHighScoresData(): void {
    this.HIGH_SCORES = "HIGH_SCORES";
    this.CUSTOMER_USER_NAME = "CUSTOMER_USER_NAME";
    this.DISPLAY_NAME = "DISPLAY_NAME";
    this.SCORE = "SCORE";
    this.GAME_INFO = "GAME_INFO";
    this.GAME_CONFIGURATION = "GAME_CONFIGURATION";
    }

    jinit_RemoteHighScoresData_0(): RemoteHighScoresData {
        super.jinit_JObject_0();
        this.jfields_RemoteHighScoresData();
        return this;
    }
    

    static getInstance(): RemoteHighScoresData | null {
        return RemoteHighScoresData.SINGLETON;
    }
}

