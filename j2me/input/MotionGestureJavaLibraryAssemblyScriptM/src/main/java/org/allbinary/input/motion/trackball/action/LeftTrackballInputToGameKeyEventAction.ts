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
// package org.allbinary.input.motion.trackball.action
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent
// import org.allbinary.input.motion.gesture.TrackballMotionGestureFactory
// import org.allbinary.logic.NullUtil

@global export class LeftTrackballInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {

    jclassName(): string {
        return "org.allbinary.input.motion.trackball.action.LeftTrackballInputToGameKeyEventAction";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!LeftTrackballInputToGameKeyEventAction.js_instance) {
            LeftTrackballInputToGameKeyEventAction.js_instance = true;
            LeftTrackballInputToGameKeyEventAction.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return LeftTrackballInputToGameKeyEventAction.jv_instance;
    }
    static set instance(value: Object | null) {
        LeftTrackballInputToGameKeyEventAction.js_instance = true;
        LeftTrackballInputToGameKeyEventAction.jv_instance = value;
    }
    

    static getInstance(): GameKeyCompleteMotionGestureInputEvent | null {
        if (LeftTrackballInputToGameKeyEventAction.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            LeftTrackballInputToGameKeyEventAction.instance = new LeftTrackballInputToGameKeyEventAction().jinit_LeftTrackballInputToGameKeyEventAction_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameKeyCompleteMotionGestureInputEvent | null>(LeftTrackballInputToGameKeyEventAction.instance);
    }
    

    jinit_LeftTrackballInputToGameKeyEventAction_0(): LeftTrackballInputToGameKeyEventAction {
        super.jinit_GameKeyCompleteMotionGestureInputEvent_3("Left Action", TrackballMotionGestureFactory.getInstance()!.LEFT, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
        return this;
    }
}

