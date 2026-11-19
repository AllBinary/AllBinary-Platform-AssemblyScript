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

@global export class DiagonalDownRightTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.touch.action.DiagonalDownRightTouchInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!DiagonalDownRightTouchInputToGameKeyEventAction.js_instance) {
            DiagonalDownRightTouchInputToGameKeyEventAction.js_instance = true;
            DiagonalDownRightTouchInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return DiagonalDownRightTouchInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        DiagonalDownRightTouchInputToGameKeyEventAction.js_instance = true;
        DiagonalDownRightTouchInputToGameKeyEventAction.jv_instance = value;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (DiagonalDownRightTouchInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            DiagonalDownRightTouchInputToGameKeyEventAction.instance = new DiagonalDownRightTouchInputToGameKeyEventAction().jinit_DiagonalDownRightTouchInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(DiagonalDownRightTouchInputToGameKeyEventAction.instance);
    }
    

    jinit_DiagonalDownRightTouchInputToGameKeyEventAction_0(): DiagonalDownRightTouchInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Diagonal Down Right Action", TouchMotionGestureFactory.getInstance()!.DIAGONAL_DOWN_RIGHT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        return this;
    }
}

