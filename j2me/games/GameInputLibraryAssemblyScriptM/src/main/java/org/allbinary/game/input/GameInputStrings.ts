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

@global export class GameInputStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.GameInputStrings";
    }
    @lazy static jv_instance: GameInputStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameInputStrings | null {
        if (!GameInputStrings.js_instance) {
            GameInputStrings.js_instance = true;
            GameInputStrings.jv_instance = new GameInputStrings().jinit_GameInputStrings_0();
        }
        return GameInputStrings.jv_instance;
    }
    static set instance(value: GameInputStrings | null) {
        GameInputStrings.js_instance = true;
        GameInputStrings.jv_instance = value;
    }
    PROCESS_INPUT: string | null = null;
    KEY_PRESSED: string | null = null;
    KEY_RELEASED: string | null = null;
    KEY_REPEATED: string | null = null;
    ON_PRESS_GAME_KEY: string | null = null;
    ON_DOWN_GAME_KEY: string | null = null;
    ON_UP_GAME_KEY: string | null = null;
    NO_KEY: string | null = null;
    ADD_KEY_EVENT: string | null = null;
    REMOVE_KEY_EVENT: string | null = null;
    STRAFE_LEFT: string | null = null;
    STRAFE_RIGHT: string | null = null;
    PROCESS_MOTION_INPUT: string | null = null;
    UDPATE_CURRENT_TOUCH_INPUT_FACTORY: string | null = null;
    ENABLE_PLAYER_GAME_INPUTS: string | null = null;
    ENABLE_PLAYER_GAME_INPUT: string | null = null;

    jfields_GameInputStrings(): void {
    this.PROCESS_INPUT = "processInput";
    this.KEY_PRESSED = "keyPressed";
    this.KEY_RELEASED = "keyReleased";
    this.KEY_REPEATED = "keyRepeated";
    this.ON_PRESS_GAME_KEY = "onPressGameKeyEvent";
    this.ON_DOWN_GAME_KEY = "onDownGameKeyEvent";
    this.ON_UP_GAME_KEY = "onUpGameKeyEvent";
    this.NO_KEY = "Key Code Not Mapped For Game: ";
    this.ADD_KEY_EVENT = "addGameKeyEvent";
    this.REMOVE_KEY_EVENT = "removeGameKeyEvent";
    this.STRAFE_LEFT = "strafeLeft";
    this.STRAFE_RIGHT = "strafeRight";
    this.PROCESS_MOTION_INPUT = "processMotionInput";
    this.UDPATE_CURRENT_TOUCH_INPUT_FACTORY = "updateCurrentTouchInputFactory";
    this.ENABLE_PLAYER_GAME_INPUTS = "Enabling PlayerGameInputs: ";
    this.ENABLE_PLAYER_GAME_INPUT = "Enabling PlayerGameInput: ";
    }

    jinit_GameInputStrings_0(): GameInputStrings {
        super.jinit_JObject_0();
        this.jfields_GameInputStrings();
        return this;
    }
    

    static getInstance(): GameInputStrings | null {
        return GameInputStrings.instance;
    }
}

