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
// package org.allbinary.game.state
// import org.allbinary.logic.NullUtil

@global export class GameStateFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.state.GameStateFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!GameStateFactory.js_instance) {
            GameStateFactory.js_instance = true;
            GameStateFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GameStateFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        GameStateFactory.js_instance = true;
        GameStateFactory.jv_instance = value;
    }
    index: i32 = 0;
    NO_GAME_STATE: GameState | null = null;
    PLAYING_GAME_STATE: GameState | null = null;
    SHOW_END_RESULT_GAME_STATE: GameState | null = null;
    SHOW_HIGH_SCORE_GAME_STATE: GameState | null = null;

    jfields_GameStateFactory(): void {
    this.index = 0;
    this.NO_GAME_STATE = this.createGameState("NO_GAME_STATE");
    this.PLAYING_GAME_STATE = this.createGameState("PLAYING_GAME_STATE");
    this.SHOW_END_RESULT_GAME_STATE = this.createGameState("SHOW_END_RESULT_GAME_STATE");
    this.SHOW_HIGH_SCORE_GAME_STATE = this.createGameState("SHOW_HIGH_SCORE_GAME_STATE");
    }
    

    static getInstance(): GameStateFactory | null {
        if (GameStateFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GameStateFactory.instance = new GameStateFactory().jinit_GameStateFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameStateFactory | null>(GameStateFactory.instance);
    }
    

    jinit_GameStateFactory_0(): GameStateFactory {
        super.jinit_JObject_0();
        this.jfields_GameStateFactory();
        return this;
    }
    

    createGameState(name: string | null): GameState | null {
        return new GameState().jinit_GameState_2(name, this.index++);
    }
}

