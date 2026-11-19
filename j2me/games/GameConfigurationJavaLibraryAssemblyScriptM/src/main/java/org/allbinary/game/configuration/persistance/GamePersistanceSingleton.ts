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
// package org.allbinary.game.configuration.persistance

@global export class GamePersistanceSingleton extends KeyValuePersistance {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.GamePersistanceSingleton";
    }
    @lazy static jv_GAME_PERSISTANCE: GamePersistanceSingleton | null = null;
    @lazy static js_GAME_PERSISTANCE: bool = false;
    static get GAME_PERSISTANCE(): GamePersistanceSingleton | null {
        if (!GamePersistanceSingleton.js_GAME_PERSISTANCE) {
            GamePersistanceSingleton.js_GAME_PERSISTANCE = true;
            GamePersistanceSingleton.jv_GAME_PERSISTANCE = new GamePersistanceSingleton().jinit_GamePersistanceSingleton_0();
        }
        return GamePersistanceSingleton.jv_GAME_PERSISTANCE;
    }
    static set GAME_PERSISTANCE(value: GamePersistanceSingleton | null) {
        GamePersistanceSingleton.js_GAME_PERSISTANCE = true;
        GamePersistanceSingleton.jv_GAME_PERSISTANCE = value;
    }
    

    static getInstance(): GamePersistanceSingleton | null {
        return GamePersistanceSingleton.GAME_PERSISTANCE;
    }
    

    jinit_GamePersistanceSingleton_0(): GamePersistanceSingleton {
        super.jinit_KeyValuePersistance_1(GamePersistanceStrings.getInstance()!.SAVED_GAME_RECORD_ID);
        return this;
    }
}

