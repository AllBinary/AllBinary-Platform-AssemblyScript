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
// package org.allbinary.game.input.event
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class GameKeyEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.input.event.GameKeyEvent";
    }
    @lazy static jv_NONE: GameKeyEvent | null = null;
    @lazy static js_NONE: bool = false;
    static get NONE(): GameKeyEvent | null {
        if (!GameKeyEvent.js_NONE) {
            GameKeyEvent.js_NONE = true;
            GameKeyEvent.jv_NONE = new GameKeyEvent().jinit_GameKeyEvent_6(NullUtil.getInstance()!.NULL_OBJECT, -1, -1, -1, -1, false);
        }
        return GameKeyEvent.jv_NONE;
    }
    static set NONE(value: GameKeyEvent | null) {
        GameKeyEvent.js_NONE = true;
        GameKeyEvent.jv_NONE = value;
    }
    sourceId: i32 = 0;
    repeated: bool = false;
    key: i32 = 0;
    gameActionKey: i32 = 0;
    originalKey: i32 = 0;

    jfields_GameKeyEvent(): void {
    
    this.repeated = false;
    
    this.gameActionKey = 0;
    this.originalKey = 0;
    }
    

    static createEvent(anyType: Object | null, sourceId: i32, key: i32): GameKeyEvent | null {
        return new GameKeyEvent().jinit_GameKeyEvent_6(anyType, sourceId, 0, 0, key, false);
    }
    

    jinit_GameKeyEvent_6(anyType: Object | null, sourceId: i32, originalKey: i32, gameActionKey: i32, key: i32, repeated: bool): GameKeyEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_GameKeyEvent();
        this.sourceId = sourceId;
        this.setOriginalKey(originalKey); if (JThrowable.pending !== null) return this;
        this.key = key;
        this.setGameActionKey(gameActionKey); if (JThrowable.pending !== null) return this;
        this.setRepeatEvents(repeated); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(anyType: Object | null): void {
        this.setSource(anyType); if (JThrowable.pending !== null) return;
    }
    

    setRepeatEvents(repeated: bool): void {
        this.repeated = repeated;
    }
    

    hasRepeatEvents(): bool {
        return this.repeated;
    }
    

    getKey(): i32 {
        return this.key;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("\nKey: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.getKey()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getOriginalKey(): i32 {
        return this.originalKey;
    }
    

    setOriginalKey(originalKey: i32): void {
        this.originalKey = originalKey;
    }
    

    getGameActionKey(): i32 {
        return this.gameActionKey;
    }
    

    setGameActionKey(gameActionKey: i32): void {
        this.gameActionKey = gameActionKey;
    }
    

    getSourceId(): i32 {
        return this.sourceId;
    }
}

