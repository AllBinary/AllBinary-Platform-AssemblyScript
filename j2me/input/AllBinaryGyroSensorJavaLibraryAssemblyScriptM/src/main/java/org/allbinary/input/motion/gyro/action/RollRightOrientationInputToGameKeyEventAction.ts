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

@global export class RollRightOrientationInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.gyro.action.RollRightOrientationInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!RollRightOrientationInputToGameKeyEventAction.js_instance) {
            RollRightOrientationInputToGameKeyEventAction.js_instance = true;
            RollRightOrientationInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return RollRightOrientationInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        RollRightOrientationInputToGameKeyEventAction.js_instance = true;
        RollRightOrientationInputToGameKeyEventAction.jv_instance = value;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (RollRightOrientationInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            RollRightOrientationInputToGameKeyEventAction.instance = new RollRightOrientationInputToGameKeyEventAction().jinit_RollRightOrientationInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(RollRightOrientationInputToGameKeyEventAction.instance);
    }
    

    jinit_RollRightOrientationInputToGameKeyEventAction_0(): RollRightOrientationInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Roll Right Action", OrientationMotionGestureFactory.getInstance()!.ROLL_RIGHT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        return this;
    }
}

