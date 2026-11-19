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

@global export class DiagonalUpRightTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.touch.action.DiagonalUpRightTouchInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!DiagonalUpRightTouchInputToGameKeyEventAction.js_instance) {
            DiagonalUpRightTouchInputToGameKeyEventAction.js_instance = true;
            DiagonalUpRightTouchInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return DiagonalUpRightTouchInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        DiagonalUpRightTouchInputToGameKeyEventAction.js_instance = true;
        DiagonalUpRightTouchInputToGameKeyEventAction.jv_instance = value;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (DiagonalUpRightTouchInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            DiagonalUpRightTouchInputToGameKeyEventAction.instance = new DiagonalUpRightTouchInputToGameKeyEventAction().jinit_DiagonalUpRightTouchInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(DiagonalUpRightTouchInputToGameKeyEventAction.instance);
    }
    

    jinit_DiagonalUpRightTouchInputToGameKeyEventAction_0(): DiagonalUpRightTouchInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Diagonal Up Right Action", TouchMotionGestureFactory.getInstance()!.DIAGONAL_UP_RIGHT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        return this;
    }
}

