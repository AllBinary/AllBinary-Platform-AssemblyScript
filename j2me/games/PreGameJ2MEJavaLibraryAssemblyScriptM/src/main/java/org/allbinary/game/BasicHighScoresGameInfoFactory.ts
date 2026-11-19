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

@global export class BasicHighScoresGameInfoFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.BasicHighScoresGameInfoFactory";
    }
    @lazy static jv_SINGLETON: BasicHighScoresGameInfoFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): BasicHighScoresGameInfoFactory | null {
        if (!BasicHighScoresGameInfoFactory.js_SINGLETON) {
            BasicHighScoresGameInfoFactory.js_SINGLETON = true;
            BasicHighScoresGameInfoFactory.jv_SINGLETON = new BasicHighScoresGameInfoFactory().jinit_BasicHighScoresGameInfoFactory_0();
        }
        return BasicHighScoresGameInfoFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: BasicHighScoresGameInfoFactory | null) {
        BasicHighScoresGameInfoFactory.js_SINGLETON = true;
        BasicHighScoresGameInfoFactory.jv_SINGLETON = value;
    }
    MULTI_PLAYER_SERVER: GameInfo | null = null;
    SINGLE_PLAYER_SERVER: GameInfo | null = null;

    jfields_BasicHighScoresGameInfoFactory(): void {
    this.MULTI_PLAYER_SERVER = new GameInfo().jinit_GameInfo_5(GameTypeFactory.getInstance()!.MULTI_PLAYER, GameMode.SERVER, PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE, 0, 0);
    this.SINGLE_PLAYER_SERVER = new GameInfo().jinit_GameInfo_5(GameTypeFactory.getInstance()!.SINGLE_PLAYER, GameMode.SERVER, PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE, 0, 0);
    }

    jinit_BasicHighScoresGameInfoFactory_0(): BasicHighScoresGameInfoFactory {
        super.jinit_JObject_0();
        this.jfields_BasicHighScoresGameInfoFactory();
        return this;
    }
    

    static getInstance(): BasicHighScoresGameInfoFactory | null {
        return BasicHighScoresGameInfoFactory.SINGLETON;
    }
}

