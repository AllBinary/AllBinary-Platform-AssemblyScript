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
// package org.allbinary.game.input.motion.action
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GameKeyCompleteMotionGestureInputEventFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEventFactory";
    }
    @lazy static jv_SINGLETON: GameKeyCompleteMotionGestureInputEventFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): GameKeyCompleteMotionGestureInputEventFactory | null {
        if (!GameKeyCompleteMotionGestureInputEventFactory.js_SINGLETON) {
            GameKeyCompleteMotionGestureInputEventFactory.js_SINGLETON = true;
            GameKeyCompleteMotionGestureInputEventFactory.jv_SINGLETON = new GameKeyCompleteMotionGestureInputEventFactory().jinit_GameKeyCompleteMotionGestureInputEventFactory_0();
        }
        return GameKeyCompleteMotionGestureInputEventFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: GameKeyCompleteMotionGestureInputEventFactory | null) {
        GameKeyCompleteMotionGestureInputEventFactory.js_SINGLETON = true;
        GameKeyCompleteMotionGestureInputEventFactory.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    eventList: BasicArrayList | null = null;

    jfields_GameKeyCompleteMotionGestureInputEventFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.eventList = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_GameKeyCompleteMotionGestureInputEventFactory_0(): GameKeyCompleteMotionGestureInputEventFactory {
        super.jinit_JObject_0();
        this.jfields_GameKeyCompleteMotionGestureInputEventFactory();
        return this;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEventFactory | null {
        return GameKeyCompleteMotionGestureInputEventFactory.SINGLETON;
    }
    

    add(gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent | null): void {
        this.eventList!.add(gameKeyCompleteMotionGestureInputEvent); if (JThrowable.pending !== null) return;
    }
    

    updateAll(): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.appendint(this.eventList!.size())), this, "updateAll"); if (JThrowable.pending !== null) return;
        for (let index: i32 = this.eventList!.size() - 1; index >= 0; index--) {
            let gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent | null = changetype<GameKeyCompleteMotionGestureInputEvent | null>(this.eventList!.objectArray![index]);
            gameKeyCompleteMotionGestureInputEvent!.update(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

