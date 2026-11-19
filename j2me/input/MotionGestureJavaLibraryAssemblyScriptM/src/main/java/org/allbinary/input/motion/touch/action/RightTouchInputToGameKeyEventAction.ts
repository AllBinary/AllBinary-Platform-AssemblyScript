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
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.logic.NullUtil

@global export class RightTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.touch.action.RightTouchInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!RightTouchInputToGameKeyEventAction.js_instance) {
            RightTouchInputToGameKeyEventAction.js_instance = true;
            RightTouchInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return RightTouchInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        RightTouchInputToGameKeyEventAction.js_instance = true;
        RightTouchInputToGameKeyEventAction.jv_instance = value;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (RightTouchInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            RightTouchInputToGameKeyEventAction.instance = new RightTouchInputToGameKeyEventAction().jinit_RightTouchInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(RightTouchInputToGameKeyEventAction.instance);
    }
    

    jinit_RightTouchInputToGameKeyEventAction_0(): RightTouchInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Right Action", TouchMotionGestureFactory.getInstance()!.RIGHT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        return this;
    }
}

