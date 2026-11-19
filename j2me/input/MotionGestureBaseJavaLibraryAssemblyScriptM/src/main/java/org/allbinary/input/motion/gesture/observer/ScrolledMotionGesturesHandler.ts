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

@global export class ScrolledMotionGesturesHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.ScrolledMotionGesturesHandler";
    }
    @lazy static jv_SINGLETON: ScrolledMotionGesturesHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): ScrolledMotionGesturesHandler | null {
        if (!ScrolledMotionGesturesHandler.js_SINGLETON) {
            ScrolledMotionGesturesHandler.js_SINGLETON = true;
            ScrolledMotionGesturesHandler.jv_SINGLETON = new ScrolledMotionGesturesHandler().jinit_ScrolledMotionGesturesHandler_0();
        }
        return ScrolledMotionGesturesHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: ScrolledMotionGesturesHandler | null) {
        ScrolledMotionGesturesHandler.js_SINGLETON = true;
        ScrolledMotionGesturesHandler.jv_SINGLETON = value;
    }
    

    static getInstance(): ScrolledMotionGesturesHandler | null {
        return ScrolledMotionGesturesHandler.SINGLETON;
    }
    

    jinit_ScrolledMotionGesturesHandler_0(): ScrolledMotionGesturesHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let baseMotionGestureEventListener: BaseMotionGestureEventListener | null = changetype<BaseMotionGestureEventListener | null>(eventListenerInterface);
        baseMotionGestureEventListener!.onScrolledMotionGestureEvent(changetype<MotionGestureEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

