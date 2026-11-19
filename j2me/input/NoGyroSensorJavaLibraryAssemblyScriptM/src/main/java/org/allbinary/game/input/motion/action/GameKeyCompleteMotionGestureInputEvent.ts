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
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.input.motion.gesture.MotionGestureInput

@global export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent implements GameKeyEventSourceInterface {

    jclassName(): string {
        return "org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent";
    }
    gameKey: GameKey | null = null;
    gameKeyEvent: GameKeyEvent | null = null;

    jfields_GameKeyCompleteMotionGestureInputEvent(): void {
    this.gameKey = GameKey.NULL_GAME_KEY;
    this.gameKeyEvent = GameKeyEvent.NONE;
    }
    

    jinit_GameKeyCompleteMotionGestureInputEvent_3(name: string | null, motionGestureInput: MotionGestureInput | null, inputToGameKeyMapping: InputToGameKeyMapping | null): GameKeyCompleteMotionGestureInputEvent {
        super.jinit_CompleteMotionGestureInputEvent_2(name, motionGestureInput);
        this.jfields_GameKeyCompleteMotionGestureInputEvent();
        return this;
    }
    

    getSourceId(): i32 {
        return 0;
    }
    

    update(): void {
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

