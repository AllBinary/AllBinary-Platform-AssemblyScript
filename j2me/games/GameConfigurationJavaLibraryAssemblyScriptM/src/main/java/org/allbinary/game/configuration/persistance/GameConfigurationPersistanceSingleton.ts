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

@global export class GameConfigurationPersistanceSingleton extends KeyValuePersistance {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.GameConfigurationPersistanceSingleton";
    }
    @lazy static jv_GAME_PERSISTANCE: GameConfigurationPersistanceSingleton | null = null;
    @lazy static js_GAME_PERSISTANCE: bool = false;
    static get GAME_PERSISTANCE(): GameConfigurationPersistanceSingleton | null {
        if (!GameConfigurationPersistanceSingleton.js_GAME_PERSISTANCE) {
            GameConfigurationPersistanceSingleton.js_GAME_PERSISTANCE = true;
            GameConfigurationPersistanceSingleton.jv_GAME_PERSISTANCE = new GameConfigurationPersistanceSingleton().jinit_GameConfigurationPersistanceSingleton_0();
        }
        return GameConfigurationPersistanceSingleton.jv_GAME_PERSISTANCE;
    }
    static set GAME_PERSISTANCE(value: GameConfigurationPersistanceSingleton | null) {
        GameConfigurationPersistanceSingleton.js_GAME_PERSISTANCE = true;
        GameConfigurationPersistanceSingleton.jv_GAME_PERSISTANCE = value;
    }
    

    static getInstance(): GameConfigurationPersistanceSingleton | null {
        return GameConfigurationPersistanceSingleton.GAME_PERSISTANCE;
    }
    

    jinit_GameConfigurationPersistanceSingleton_0(): GameConfigurationPersistanceSingleton {
        super.jinit_KeyValuePersistance_1(GamePersistanceStrings.getInstance()!.SAVED_GAME_CONFIGURATION_RECORD_ID);
        return this;
    }
}

