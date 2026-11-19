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

@global export class GameStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.game.GameStrings";
    }
    @lazy static jv_instance: GameStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameStrings | null {
        if (!GameStrings.js_instance) {
            GameStrings.js_instance = true;
            GameStrings.jv_instance = new GameStrings().jinit_GameStrings_0();
        }
        return GameStrings.jv_instance;
    }
    static set instance(value: GameStrings | null) {
        GameStrings.js_instance = true;
        GameStrings.jv_instance = value;
    }
    PROCESS_TICK: string | null = null;
    ON_GAME_INITIALIZED: string | null = null;
    UPDATESURFACE: string | null = null;
    ON_SET_DISPLAYABLE: string | null = null;
    UNPAUSE: string | null = null;
    TOGGLE_MENU: string | null = null;
    SET_GAME_OVER: string | null = null;
    GAME_STATE: string | null = null;
    SET_GAME_STATE: string | null = null;
    STOP_GAME_CANVAS_RUNNABLE_INTERFACE: string | null = null;

    jfields_GameStrings(): void {
    this.PROCESS_TICK = "processTick";
    this.ON_GAME_INITIALIZED = "onGameInitialized";
    this.UPDATESURFACE = "updateSurface";
    this.ON_SET_DISPLAYABLE = "onSetDisplayable";
    this.UNPAUSE = "unPause";
    this.TOGGLE_MENU = "toggleMenu";
    this.SET_GAME_OVER = "setGameOver";
    this.GAME_STATE = "Game State: ";
    this.SET_GAME_STATE = "setGameState";
    this.STOP_GAME_CANVAS_RUNNABLE_INTERFACE = "stopGameCanvasRunnableInterface";
    }

    jinit_GameStrings_0(): GameStrings {
        super.jinit_JObject_0();
        this.jfields_GameStrings();
        return this;
    }
    

    static getInstance(): GameStrings | null {
        return GameStrings.instance;
    }
}

