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
// import org.allbinary.logic.string.StringUtil

@global export class GameTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.GameTypeFactory";
    }
    @lazy static jv_instance: GameTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameTypeFactory | null {
        if (!GameTypeFactory.js_instance) {
            GameTypeFactory.js_instance = true;
            GameTypeFactory.jv_instance = new GameTypeFactory().jinit_GameTypeFactory_0();
        }
        return GameTypeFactory.jv_instance;
    }
    static set instance(value: GameTypeFactory | null) {
        GameTypeFactory.js_instance = true;
        GameTypeFactory.jv_instance = value;
    }
    NULL_GAME_TYPE_ARRAY: StaticArray<GameType | null> | null = null;
    NONE: GameType | null = null;
    SINGLE_PLAYER: GameType | null = null;
    MULTI_PLAYER: GameType | null = null;
    BOT: GameType | null = null;

    jfields_GameTypeFactory(): void {
    this.NULL_GAME_TYPE_ARRAY = new StaticArray<GameType | null>(0);
    this.NONE = new GameType().jinit_GameType_1(StringUtil.getInstance()!.NULL_STRING);
    this.SINGLE_PLAYER = new GameType().jinit_GameType_1("Single Player");
    this.MULTI_PLAYER = new GameType().jinit_GameType_1("Multi Player");
    this.BOT = new GameType().jinit_GameType_1("Artificial Player");
    }

    jinit_GameTypeFactory_0(): GameTypeFactory {
        super.jinit_JObject_0();
        this.jfields_GameTypeFactory();
        return this;
    }
    

    static getInstance(): GameTypeFactory | null {
        return GameTypeFactory.instance;
    }
}

