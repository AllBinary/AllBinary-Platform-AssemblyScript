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
// import org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings

@global export class NoCompleteMotionGestureInputEventListener extends JObject implements CompleteMotionGestureInputEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.input.motion.action.NoCompleteMotionGestureInputEventListener";
    }
    @lazy static jv_instance: NoCompleteMotionGestureInputEventListener | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoCompleteMotionGestureInputEventListener | null {
        if (!NoCompleteMotionGestureInputEventListener.js_instance) {
            NoCompleteMotionGestureInputEventListener.js_instance = true;
            NoCompleteMotionGestureInputEventListener.jv_instance = new NoCompleteMotionGestureInputEventListener().jinit_NoCompleteMotionGestureInputEventListener_0();
        }
        return NoCompleteMotionGestureInputEventListener.jv_instance;
    }
    static set instance(value: NoCompleteMotionGestureInputEventListener | null) {
        NoCompleteMotionGestureInputEventListener.js_instance = true;
        NoCompleteMotionGestureInputEventListener.jv_instance = value;
    }
    

    jinit_NoCompleteMotionGestureInputEventListener_0(): NoCompleteMotionGestureInputEventListener {
        super.jinit_JObject_0();
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent | null): void {
    }
    

    static getInstance(): NoCompleteMotionGestureInputEventListener | null {
        return NoCompleteMotionGestureInputEventListener.instance;
    }
}

