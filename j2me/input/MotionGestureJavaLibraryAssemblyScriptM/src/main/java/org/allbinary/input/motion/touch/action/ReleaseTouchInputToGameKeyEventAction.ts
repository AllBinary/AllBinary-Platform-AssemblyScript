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
// package org.allbinary.input.motion.touch.action
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.string.CommonStrings

@global export class ReleaseTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.touch.action.ReleaseTouchInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!ReleaseTouchInputToGameKeyEventAction.js_instance) {
            ReleaseTouchInputToGameKeyEventAction.js_instance = true;
            ReleaseTouchInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return ReleaseTouchInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        ReleaseTouchInputToGameKeyEventAction.js_instance = true;
        ReleaseTouchInputToGameKeyEventAction.jv_instance = value;
    }
    NONE: GameKey | null = null;

    jfields_ReleaseTouchInputToGameKeyEventAction(): void {
    this.NONE = GameKeyFactory.getInstance()!.NONE;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (ReleaseTouchInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            ReleaseTouchInputToGameKeyEventAction.instance = new ReleaseTouchInputToGameKeyEventAction().jinit_ReleaseTouchInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(ReleaseTouchInputToGameKeyEventAction.instance);
    }
    

    jinit_ReleaseTouchInputToGameKeyEventAction_0(): ReleaseTouchInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Release Action", TouchMotionGestureFactory.getInstance()!.RELEASED, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        this.jfields_ReleaseTouchInputToGameKeyEventAction();
        do {
            this.setGameKey(this.NONE); if (JThrowable.pending !== null) break;
            this.setGameKeyEvent(GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.NONE)); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    update(): void {
    }
}

