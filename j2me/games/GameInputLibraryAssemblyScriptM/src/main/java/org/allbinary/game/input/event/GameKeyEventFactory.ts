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
// import org.allbinary.game.input.GameKeyEventSourceInterface
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil

@global export class GameKeyEventFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.event.GameKeyEventFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!GameKeyEventFactory.js_instance) {
            GameKeyEventFactory.js_instance = true;
            GameKeyEventFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GameKeyEventFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        GameKeyEventFactory.js_instance = true;
        GameKeyEventFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    TOUCH_BUTTON_SOURCE_ID: i32 = 0;
    MOTION_GESTURE_SOURCE_ID: i32 = 0;
    MAX_SOURCES: i32 = 0;
    ARRAY: StaticArray<StaticArray<GameKeyEvent | null> | null> | null = null;

    jfields_GameKeyEventFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.TOUCH_BUTTON_SOURCE_ID = 2;
    this.MOTION_GESTURE_SOURCE_ID = 3;
    this.MAX_SOURCES = 4;
    this.ARRAY = JArrays.new2<GameKeyEvent | null>(this.MAX_SOURCES, InputFactory.getInstance()!.MAX);
    }
    

    static getInstance(): GameKeyEventFactory | null {
        if (GameKeyEventFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GameKeyEventFactory.instance = new GameKeyEventFactory().jinit_GameKeyEventFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyEventFactory | null>(GameKeyEventFactory.instance);
    }
    

    jinit_GameKeyEventFactory_0(): GameKeyEventFactory {
        super.jinit_JObject_0();
        this.jfields_GameKeyEventFactory();
        return this;
    }
    

    init(): void {
        let nullUtil: NullUtil | null = NullUtil.getInstance(); if (JThrowable.pending !== null) return;
        let size: i32 = InputFactory.getInstance()!.MAX; if (JThrowable.pending !== null) return;
        for (let index: i32 = this.MAX_SOURCES; --index >= 0; ) {
            for (let index2: i32 = size; --index2 >= 0; ) {
                this.ARRAY![index]![index2] = GameKeyEvent.createEvent(nullUtil!.NULL_OBJECT, index, index2); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getInstanceForKey(anyType: GameKeyEventSourceInterface | null, key: i32): GameKeyEvent | null {
        let gameKeyEvent: GameKeyEvent | null = this.ARRAY![anyType!.getSourceId()]![key]; if (JThrowable.pending !== null) return null;
        return gameKeyEvent;
    }
    

    getInstanceForInput(anyType: GameKeyEventSourceInterface | null, input: Input | null): GameKeyEvent | null {
        let gameKeyEvent: GameKeyEvent | null = this.ARRAY![anyType!.getSourceId()]![input!.getId()]; if (JThrowable.pending !== null) return null;
        return gameKeyEvent;
    }
}

