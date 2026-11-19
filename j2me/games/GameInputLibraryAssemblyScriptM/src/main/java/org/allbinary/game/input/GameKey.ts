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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class GameKey extends Input {

    jclassName(): string {
        return "org.allbinary.game.input.GameKey";
    }
    @lazy static jv_NULL_GAME_KEY: GameKey | null = null;
    @lazy static js_NULL_GAME_KEY: bool = false;
    static get NULL_GAME_KEY(): GameKey | null {
        if (!GameKey.js_NULL_GAME_KEY) {
            GameKey.js_NULL_GAME_KEY = true;
            GameKey.jv_NULL_GAME_KEY = new GameKey().jinit_GameKey_2(-1, StringUtil.getInstance()!.NULL_STRING);
        }
        return GameKey.jv_NULL_GAME_KEY;
    }
    static set NULL_GAME_KEY(value: GameKey | null) {
        GameKey.js_NULL_GAME_KEY = true;
        GameKey.jv_NULL_GAME_KEY = value;
    }
    

    jinit_GameKey_2(key: i32, name: string | null): GameKey {
        super.jinit_Input_2(key, name);
        return this;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("GameKey ")!.append(super.toString()));
    }
}

