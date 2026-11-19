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
// import org.allbinary.logic.NullUtil

@global export class LastFetchHighScoresFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.LastFetchHighScoresFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!LastFetchHighScoresFactory.js_instance) {
            LastFetchHighScoresFactory.js_instance = true;
            LastFetchHighScoresFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return LastFetchHighScoresFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        LastFetchHighScoresFactory.js_instance = true;
        LastFetchHighScoresFactory.jv_instance = value;
    }
    highScoresArray: StaticArray<HighScores | null> | null = null;

    jfields_LastFetchHighScoresFactory(): void {
    this.highScoresArray = NoHighScoresFactory.getInstance()!.NO_HIGH_SCORES;
    }

    jinit_LastFetchHighScoresFactory_0(): LastFetchHighScoresFactory {
        super.jinit_JObject_0();
        this.jfields_LastFetchHighScoresFactory();
        return this;
    }
    

    static getInstance(): LastFetchHighScoresFactory | null {
        if (LastFetchHighScoresFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            LastFetchHighScoresFactory.instance = new LastFetchHighScoresFactory().jinit_LastFetchHighScoresFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<LastFetchHighScoresFactory | null>(LastFetchHighScoresFactory.instance);
    }
}

