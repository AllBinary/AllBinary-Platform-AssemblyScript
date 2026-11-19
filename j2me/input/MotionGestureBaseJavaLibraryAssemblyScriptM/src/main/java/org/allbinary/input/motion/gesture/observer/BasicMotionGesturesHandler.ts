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

@global export class BasicMotionGesturesHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler";
    }
    @lazy static jv_SINGLETON: BasicMotionGesturesHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): BasicMotionGesturesHandler | null {
        if (!BasicMotionGesturesHandler.js_SINGLETON) {
            BasicMotionGesturesHandler.js_SINGLETON = true;
            BasicMotionGesturesHandler.jv_SINGLETON = new BasicMotionGesturesHandler().jinit_BasicMotionGesturesHandler_0();
        }
        return BasicMotionGesturesHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: BasicMotionGesturesHandler | null) {
        BasicMotionGesturesHandler.js_SINGLETON = true;
        BasicMotionGesturesHandler.jv_SINGLETON = value;
    }
    

    static getInstance(): BasicMotionGesturesHandler | null {
        return BasicMotionGesturesHandler.SINGLETON;
    }
    

    jinit_BasicMotionGesturesHandler_0(): BasicMotionGesturesHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let baseMotionGestureEventListener: BaseMotionGestureEventListener | null = changetype<BaseMotionGestureEventListener | null>(eventListenerInterface);
        baseMotionGestureEventListener!.onMotionGestureEvent(changetype<MotionGestureEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

