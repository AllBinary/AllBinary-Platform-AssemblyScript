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
// import javax.microedition.lcdui.Canvas

@global export class GameKeyUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.GameKeyUtil";
    }
    @lazy static jv_instance: GameKeyUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameKeyUtil | null {
        if (!GameKeyUtil.js_instance) {
            GameKeyUtil.js_instance = true;
            GameKeyUtil.jv_instance = new GameKeyUtil().jinit_GameKeyUtil_0();
        }
        return GameKeyUtil.jv_instance;
    }
    static set instance(value: GameKeyUtil | null) {
        GameKeyUtil.js_instance = true;
        GameKeyUtil.jv_instance = value;
    }

    jinit_GameKeyUtil_0(): GameKeyUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    isDirectionKey(key: i32): bool {
        if (key == Canvas.UP || key == Canvas.DOWN || key == Canvas.LEFT || key == Canvas.RIGHT) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    

    static getInstance(): GameKeyUtil | null {
        return GameKeyUtil.instance;
    }
}

