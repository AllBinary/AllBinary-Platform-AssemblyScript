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
// package org.allbinary.game.input
// import org.allbinary.logic.NullUtil

@global export class GameKeyMappingFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.GameKeyMappingFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!GameKeyMappingFactory.js_instance) {
            GameKeyMappingFactory.js_instance = true;
            GameKeyMappingFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GameKeyMappingFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        GameKeyMappingFactory.js_instance = true;
        GameKeyMappingFactory.jv_instance = value;
    }
    intKeyToGameKey: StaticArray<GameKey | null> | null = null;

    jfields_GameKeyMappingFactory(): void {
    this.intKeyToGameKey = new StaticArray<GameKey | null>(InputFactory.getInstance()!.MAX);
    }
    

    static getInstance(): GameKeyMappingFactory | null {
        if (GameKeyMappingFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GameKeyMappingFactory.instance = new GameKeyMappingFactory().jinit_GameKeyMappingFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyMappingFactory | null>(GameKeyMappingFactory.instance);
    }
    

    jinit_GameKeyMappingFactory_0(): GameKeyMappingFactory {
        super.jinit_JObject_0();
        this.jfields_GameKeyMappingFactory();
        let gameKeyFactory: GameKeyFactory | null = GameKeyFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.NONE); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.UP); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.DOWN); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.LEFT); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.RIGHT); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_POUND); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_STAR); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM0); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM1); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM2); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM3); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM4); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM5); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM6); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM7); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM8); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.KEY_NUM9); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.GAME_A); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.GAME_B); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.GAME_C); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.GAME_D); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.FIRE); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.LEVEL_DOWN); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKeyFactory!.LEVEL_UP); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getGameKey(key: i32): GameKey | null {
        return this.intKeyToGameKey![key];
    }
    

    setGameKey(gameKey: GameKey | null): void {
        this.intKeyToGameKey![gameKey!.getId()] = gameKey; if (JThrowable.pending !== null) return;
    }
}

