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
// import org.allbinary.game.state.GameState
// import org.allbinary.game.state.GameStateFactory

@global export class IntermissionFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.IntermissionFactory";
    }
    @lazy static jv_instance: IntermissionFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): IntermissionFactory | null {
        if (!IntermissionFactory.js_instance) {
            IntermissionFactory.js_instance = true;
            IntermissionFactory.jv_instance = new IntermissionFactory().jinit_IntermissionFactory_0();
        }
        return IntermissionFactory.jv_instance;
    }
    static set instance(value: IntermissionFactory | null) {
        IntermissionFactory.js_instance = true;
        IntermissionFactory.jv_instance = value;
    }
    START_LEVEL_INTERMISSION_GAME_STATE: GameState | null = null;
    WAIT_LEVEL_INTERMISSION_GAME_STATE: GameState | null = null;
    SHOW_RESULTS_LEVEL_INTERMISSION_GAME_STATE: GameState | null = null;
    SHOW_HIGH_SCORE_LEVEL_INTERMISSION_GAME_STATE: GameState | null = null;

    jfields_IntermissionFactory(): void {
    this.START_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance()!.createGameState("START_LEVEL_INTERMISSION_GAME_STATE");
    this.WAIT_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance()!.createGameState("WAIT_LEVEL_INTERMISSION_GAME_STATE");
    this.SHOW_RESULTS_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance()!.createGameState("SHOW_RESULTS_LEVEL_INTERMISSION_GAME_STATE");
    this.SHOW_HIGH_SCORE_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance()!.createGameState("SHOW_HIGH_SCORE_LEVEL_INTERMISSION_GAME_STATE");
    }

    jinit_IntermissionFactory_0(): IntermissionFactory {
        super.jinit_JObject_0();
        this.jfields_IntermissionFactory();
        return this;
    }
    

    static getInstance(): IntermissionFactory | null {
        return IntermissionFactory.instance;
    }
}

