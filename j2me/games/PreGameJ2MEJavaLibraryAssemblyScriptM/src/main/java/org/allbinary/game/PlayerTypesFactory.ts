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
// package org.allbinary.game

@global export class PlayerTypesFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.PlayerTypesFactory";
    }
    @lazy static jv_SINGLETON: PlayerTypesFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): PlayerTypesFactory | null {
        if (!PlayerTypesFactory.js_SINGLETON) {
            PlayerTypesFactory.js_SINGLETON = true;
            PlayerTypesFactory.jv_SINGLETON = new PlayerTypesFactory().jinit_PlayerTypesFactory_0();
        }
        return PlayerTypesFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: PlayerTypesFactory | null) {
        PlayerTypesFactory.js_SINGLETON = true;
        PlayerTypesFactory.jv_SINGLETON = value;
    }
    PLAYER_TYPE_ONE: PlayerType | null = null;
    PLAYER_TYPE_TWO: PlayerType | null = null;
    PLAYER_TYPE_THREE: PlayerType | null = null;

    jfields_PlayerTypesFactory(): void {
    this.PLAYER_TYPE_ONE = new PlayerType().jinit_PlayerType_2("Player Type One", 0);
    this.PLAYER_TYPE_TWO = new PlayerType().jinit_PlayerType_2("Player Type Two", 1);
    this.PLAYER_TYPE_THREE = new PlayerType().jinit_PlayerType_2("Player Type Three", 2);
    }

    jinit_PlayerTypesFactory_0(): PlayerTypesFactory {
        super.jinit_JObject_0();
        this.jfields_PlayerTypesFactory();
        return this;
    }
    

    static getInstance(): PlayerTypesFactory | null {
        return PlayerTypesFactory.SINGLETON;
    }
}

