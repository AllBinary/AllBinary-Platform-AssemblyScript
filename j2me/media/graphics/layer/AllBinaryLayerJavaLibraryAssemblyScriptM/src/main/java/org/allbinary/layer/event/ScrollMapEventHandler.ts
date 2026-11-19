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
// package org.allbinary.layer.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class ScrollMapEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.layer.event.ScrollMapEventHandler";
    }
    @lazy static jv_SINGLETON: ScrollMapEventHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): ScrollMapEventHandler | null {
        if (!ScrollMapEventHandler.js_SINGLETON) {
            ScrollMapEventHandler.js_SINGLETON = true;
            ScrollMapEventHandler.jv_SINGLETON = new ScrollMapEventHandler().jinit_ScrollMapEventHandler_0();
        }
        return ScrollMapEventHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: ScrollMapEventHandler | null) {
        ScrollMapEventHandler.js_SINGLETON = true;
        ScrollMapEventHandler.jv_SINGLETON = value;
    }
    

    jinit_ScrollMapEventHandler_0(): ScrollMapEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): ScrollMapEventHandler | null {
        return ScrollMapEventHandler.SINGLETON;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let scrollMapEventListenerInterface: ScrollMapEventListenerInterface | null = (changetype<ScrollMapEventListenerInterface | null>(eventListenerInterface));
        scrollMapEventListenerInterface!.onMoveEvent(changetype<ScrollMapEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

