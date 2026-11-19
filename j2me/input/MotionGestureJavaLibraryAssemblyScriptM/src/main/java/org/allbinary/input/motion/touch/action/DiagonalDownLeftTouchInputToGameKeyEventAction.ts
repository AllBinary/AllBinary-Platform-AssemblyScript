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

@global export class DiagonalDownLeftTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.touch.action.DiagonalDownLeftTouchInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!DiagonalDownLeftTouchInputToGameKeyEventAction.js_instance) {
            DiagonalDownLeftTouchInputToGameKeyEventAction.js_instance = true;
            DiagonalDownLeftTouchInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return DiagonalDownLeftTouchInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        DiagonalDownLeftTouchInputToGameKeyEventAction.js_instance = true;
        DiagonalDownLeftTouchInputToGameKeyEventAction.jv_instance = value;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (DiagonalDownLeftTouchInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            DiagonalDownLeftTouchInputToGameKeyEventAction.instance = new DiagonalDownLeftTouchInputToGameKeyEventAction().jinit_DiagonalDownLeftTouchInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(DiagonalDownLeftTouchInputToGameKeyEventAction.instance);
    }
    

    jinit_DiagonalDownLeftTouchInputToGameKeyEventAction_0(): DiagonalDownLeftTouchInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Diagonal Down Left Action", TouchMotionGestureFactory.getInstance()!.DIAGONAL_DOWN_LEFT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        return this;
    }
}

