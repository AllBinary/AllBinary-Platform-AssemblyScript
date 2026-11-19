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
// import org.allbinary.game.input.CompleteMotionGestureInputEvent
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyEventSourceInterface
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.string.CommonStrings

@global export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent implements GameKeyEventSourceInterface {

    jclassName(): string {
        return "org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent";
    }
    gameKeyEventFactory: GameKeyEventFactory | null = null;
    SOURCE_ID: i32 = 0;
    gameKey: GameKey | null = null;
    gameKeyEvent: GameKeyEvent | null = null;
    inputToGameKeyMapping: InputToGameKeyMapping | null = null;

    jfields_GameKeyCompleteMotionGestureInputEvent(): void {
    this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
    this.SOURCE_ID = this.gameKeyEventFactory!.MOTION_GESTURE_SOURCE_ID;
    this.gameKey = GameKey.NULL_GAME_KEY;
    this.gameKeyEvent = GameKeyEvent.NONE;
    
    }
    

    jinit_GameKeyCompleteMotionGestureInputEvent_3(name: string | null, motionGestureInput: MotionGestureInput | null, inputToGameKeyMapping: InputToGameKeyMapping | null): GameKeyCompleteMotionGestureInputEvent {
        super.jinit_CompleteMotionGestureInputEvent_2(name, motionGestureInput);
        this.jfields_GameKeyCompleteMotionGestureInputEvent();
        this.inputToGameKeyMapping = inputToGameKeyMapping;
        GameKeyCompleteMotionGestureInputEventFactory.getInstance()!.add(this); if (JThrowable.pending !== null) return this;
        this.update(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getSourceId(): i32 {
        return this.SOURCE_ID;
    }
    

    update(): void {
        do {
            this.setGameKey(this.inputToGameKeyMapping!.getInstance1(this.getMotionGestureInput()!.getId())); if (JThrowable.pending !== null) break;
            this.setGameKeyEvent(this.gameKeyEventFactory!.getInstanceForInput(this, this.getGameKey())); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        this.gameKeyEvent = gameKeyEvent;
    }
    

    getGameKeyEvent(): GameKeyEvent | null {
        return this.gameKeyEvent;
    }
    

    setGameKey(gameKey: GameKey | null): void {
        this.gameKey = gameKey;
    }
    

    getGameKey(): GameKey | null {
        return this.gameKey;
    }
}

