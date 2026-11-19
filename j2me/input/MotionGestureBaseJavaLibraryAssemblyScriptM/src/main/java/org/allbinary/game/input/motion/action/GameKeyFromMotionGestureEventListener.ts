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
// import org.allbinary.game.input.CompleteMotionGestureInputEventListener
// import org.allbinary.game.input.event.DownGameKeyEventHandler
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.UpGameKeyEventHandler
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonStrings

@global export class GameKeyFromMotionGestureEventListener extends CompleteMotionGestureInputEventListener {

    jclassName(): string {
        return "org.allbinary.game.input.motion.action.GameKeyFromMotionGestureEventListener";
    }
    logUtil: LogUtil | null = null;
    previousGameKeyEvent: GameKeyEvent | null = null;

    jfields_GameKeyFromMotionGestureEventListener(): void {
    this.logUtil = LogUtil.getInstance();
    this.previousGameKeyEvent = GameKeyEvent.NONE;
    }

    jinit_GameKeyFromMotionGestureEventListener_0(): GameKeyFromMotionGestureEventListener {
        super.jinit_CompleteMotionGestureInputEventListener_0();
        this.jfields_GameKeyFromMotionGestureEventListener();
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent | null): void {
        do {
            let gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent | null = changetype<GameKeyCompleteMotionGestureInputEvent | null>(completeMotionGestureInputEvent);
            let gameKeyEvent: GameKeyEvent | null = gameKeyCompleteMotionGestureInputEvent!.getGameKeyEvent(); if (JThrowable.pending !== null) break;
            if (gameKeyEvent != this.previousGameKeyEvent) {
                if (this.previousGameKeyEvent != GameKeyEvent.NONE) {
                    UpGameKeyEventHandler.getInstance()!.fireEvent(this.previousGameKeyEvent); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.previousGameKeyEvent = gameKeyEvent;
                if (gameKeyEvent != null && gameKeyEvent != GameKeyEvent.NONE) {
                    DownGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "onCompleteMotionGestureInputEvent", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

