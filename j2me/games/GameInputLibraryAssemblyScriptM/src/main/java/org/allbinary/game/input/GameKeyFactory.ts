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
// import org.allbinary.logic.NullUtil
// import org.allbinary.string.CommonPhoneStrings

@global export class GameKeyFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.GameKeyFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!GameKeyFactory.js_instance) {
            GameKeyFactory.js_instance = true;
            GameKeyFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GameKeyFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        GameKeyFactory.js_instance = true;
        GameKeyFactory.jv_instance = value;
    }
    NONE: GameKey | null = null;
    UP: GameKey | null = null;
    DOWN: GameKey | null = null;
    LEFT: GameKey | null = null;
    RIGHT: GameKey | null = null;
    KEY_POUND: GameKey | null = null;
    KEY_STAR: GameKey | null = null;
    KEY_NUM0: GameKey | null = null;
    KEY_NUM1: GameKey | null = null;
    KEY_NUM2: GameKey | null = null;
    KEY_NUM3: GameKey | null = null;
    KEY_NUM4: GameKey | null = null;
    KEY_NUM5: GameKey | null = null;
    KEY_NUM6: GameKey | null = null;
    KEY_NUM7: GameKey | null = null;
    KEY_NUM8: GameKey | null = null;
    KEY_NUM9: GameKey | null = null;
    GAME_A: GameKey | null = null;
    GAME_B: GameKey | null = null;
    GAME_C: GameKey | null = null;
    GAME_D: GameKey | null = null;
    FIRE: GameKey | null = null;
    LEVEL_DOWN: GameKey | null = null;
    LEVEL_UP: GameKey | null = null;

    jfields_GameKeyFactory(): void {
    this.NONE = new GameKey().jinit_GameKey_2(InputFactory.getInstance()!.MAX - 1, "None");
    this.UP = new GameKey().jinit_GameKey_2(Canvas.UP, CommonPhoneStrings.getInstance()!.UP);
    this.DOWN = new GameKey().jinit_GameKey_2(Canvas.DOWN, CommonPhoneStrings.getInstance()!.DOWN);
    this.LEFT = new GameKey().jinit_GameKey_2(Canvas.LEFT, CommonPhoneStrings.getInstance()!.LEFT);
    this.RIGHT = new GameKey().jinit_GameKey_2(Canvas.RIGHT, CommonPhoneStrings.getInstance()!.RIGHT);
    this.KEY_POUND = new GameKey().jinit_GameKey_2(Canvas.KEY_POUND, "POUND");
    this.KEY_STAR = new GameKey().jinit_GameKey_2(Canvas.KEY_STAR, "STAR");
    this.KEY_NUM0 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM0, CommonPhoneStrings.getInstance()!.ZERO);
    this.KEY_NUM1 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM1, CommonPhoneStrings.getInstance()!.ONE);
    this.KEY_NUM2 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM2, CommonPhoneStrings.getInstance()!.TWO);
    this.KEY_NUM3 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM3, CommonPhoneStrings.getInstance()!.THREE);
    this.KEY_NUM4 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM4, CommonPhoneStrings.getInstance()!.FOUR);
    this.KEY_NUM5 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM5, CommonPhoneStrings.getInstance()!.FIVE);
    this.KEY_NUM6 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM6, CommonPhoneStrings.getInstance()!.SIX);
    this.KEY_NUM7 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM7, CommonPhoneStrings.getInstance()!.SEVEN);
    this.KEY_NUM8 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM8, CommonPhoneStrings.getInstance()!.EIGHT);
    this.KEY_NUM9 = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM9, CommonPhoneStrings.getInstance()!.NINE);
    this.GAME_A = new GameKey().jinit_GameKey_2(Canvas.GAME_A, "Game A");
    this.GAME_B = new GameKey().jinit_GameKey_2(Canvas.GAME_B, "Game B");
    this.GAME_C = new GameKey().jinit_GameKey_2(Canvas.GAME_C, "Game C");
    this.GAME_D = new GameKey().jinit_GameKey_2(Canvas.GAME_D, "Game D");
    this.FIRE = new GameKey().jinit_GameKey_2(Canvas.FIRE, CommonPhoneStrings.getInstance()!.FIRE);
    this.LEVEL_DOWN = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM9 + 1, "Cheat Level Up");
    this.LEVEL_UP = new GameKey().jinit_GameKey_2(Canvas.KEY_NUM9 + 2, "Cheat Level Down");
    }

    jinit_GameKeyFactory_0(): GameKeyFactory {
        super.jinit_JObject_0();
        this.jfields_GameKeyFactory();
        return this;
    }
    

    static getInstance(): GameKeyFactory | null {
        if (GameKeyFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GameKeyFactory.instance = new GameKeyFactory().jinit_GameKeyFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyFactory | null>(GameKeyFactory.instance);
    }
}

