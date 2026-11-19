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
// package org.allbinary.input.motion.gyro.action
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent
// import org.allbinary.input.gyro.OrientationMotionGestureFactory
// import org.allbinary.logic.NullUtil

@global export class RollLeftOrientationInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.gyro.action.RollLeftOrientationInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!RollLeftOrientationInputToGameKeyEventAction.js_instance) {
            RollLeftOrientationInputToGameKeyEventAction.js_instance = true;
            RollLeftOrientationInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return RollLeftOrientationInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        RollLeftOrientationInputToGameKeyEventAction.js_instance = true;
        RollLeftOrientationInputToGameKeyEventAction.jv_instance = value;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (RollLeftOrientationInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            RollLeftOrientationInputToGameKeyEventAction.instance = new RollLeftOrientationInputToGameKeyEventAction().jinit_RollLeftOrientationInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(RollLeftOrientationInputToGameKeyEventAction.instance);
    }
    

    jinit_RollLeftOrientationInputToGameKeyEventAction_0(): RollLeftOrientationInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Roll Left Action", OrientationMotionGestureFactory.getInstance()!.ROLL_LEFT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        return this;
    }
}

