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

@global export class GameMode extends JObject {

    jclassName(): string {
        return "org.allbinary.game.GameMode";
    }
    @lazy static jv_NONE: GameMode | null = null;
    @lazy static js_NONE: bool = false;
    static get NONE(): GameMode | null {
        if (!GameMode.js_NONE) {
            GameMode.js_NONE = true;
            GameMode.jv_NONE = new GameMode().jinit_GameMode_1(StringUtil.getInstance()!.NULL_STRING);
        }
        return GameMode.jv_NONE;
    }
    static set NONE(value: GameMode | null) {
        GameMode.js_NONE = true;
        GameMode.jv_NONE = value;
    }
    @lazy static jv_SERVER: GameMode | null = null;
    @lazy static js_SERVER: bool = false;
    static get SERVER(): GameMode | null {
        if (!GameMode.js_SERVER) {
            GameMode.js_SERVER = true;
            GameMode.jv_SERVER = new GameMode().jinit_GameMode_1("Server");
        }
        return GameMode.jv_SERVER;
    }
    static set SERVER(value: GameMode | null) {
        GameMode.js_SERVER = true;
        GameMode.jv_SERVER = value;
    }
    @lazy static jv_CLIENT: GameMode | null = null;
    @lazy static js_CLIENT: bool = false;
    static get CLIENT(): GameMode | null {
        if (!GameMode.js_CLIENT) {
            GameMode.js_CLIENT = true;
            GameMode.jv_CLIENT = new GameMode().jinit_GameMode_1("Client");
        }
        return GameMode.jv_CLIENT;
    }
    static set CLIENT(value: GameMode | null) {
        GameMode.js_CLIENT = true;
        GameMode.jv_CLIENT = value;
    }
    name: string | null = null;

    jfields_GameMode(): void {
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_GameMode_1(name: string | null): GameMode {
        super.jinit_JObject_0();
        this.jfields_GameMode();
        this.setName(name); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setName(name: string | null): void {
        this.name = name;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    toString(): string | null {
        return this.getName();
    }
}

