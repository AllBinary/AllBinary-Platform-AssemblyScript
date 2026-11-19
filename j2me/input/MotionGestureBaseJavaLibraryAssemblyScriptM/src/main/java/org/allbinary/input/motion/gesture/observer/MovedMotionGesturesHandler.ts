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
// package org.allbinary.input.motion.gesture.observer
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class MovedMotionGesturesHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.MovedMotionGesturesHandler";
    }
    @lazy static jv_SINGLETON: MovedMotionGesturesHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): MovedMotionGesturesHandler | null {
        if (!MovedMotionGesturesHandler.js_SINGLETON) {
            MovedMotionGesturesHandler.js_SINGLETON = true;
            MovedMotionGesturesHandler.jv_SINGLETON = new MovedMotionGesturesHandler().jinit_MovedMotionGesturesHandler_0();
        }
        return MovedMotionGesturesHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: MovedMotionGesturesHandler | null) {
        MovedMotionGesturesHandler.js_SINGLETON = true;
        MovedMotionGesturesHandler.jv_SINGLETON = value;
    }
    

    static getInstance(): MovedMotionGesturesHandler | null {
        return MovedMotionGesturesHandler.SINGLETON;
    }
    

    jinit_MovedMotionGesturesHandler_0(): MovedMotionGesturesHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let baseMotionGestureEventListener: BaseMotionGestureEventListener | null = changetype<BaseMotionGestureEventListener | null>(eventListenerInterface);
        baseMotionGestureEventListener!.onMotionGestureEvent(changetype<MotionGestureEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

