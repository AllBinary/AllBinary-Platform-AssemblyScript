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
// package org.allbinary.game.tracking
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class TrackingEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.tracking.TrackingEventHandler";
    }
    @lazy static jv_instance: TrackingEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TrackingEventHandler | null {
        if (!TrackingEventHandler.js_instance) {
            TrackingEventHandler.js_instance = true;
            TrackingEventHandler.jv_instance = new TrackingEventHandler().jinit_TrackingEventHandler_0();
        }
        return TrackingEventHandler.jv_instance;
    }
    static set instance(value: TrackingEventHandler | null) {
        TrackingEventHandler.js_instance = true;
        TrackingEventHandler.jv_instance = value;
    }
    

    static getInstance(): TrackingEventHandler | null {
        return TrackingEventHandler.instance;
    }
    

    jinit_TrackingEventHandler_0(): TrackingEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let trackingEventListenerInterface: TrackingEventListenerInterface | null = changetype<TrackingEventListenerInterface | null>(eventListenerInterface);
        trackingEventListenerInterface!.onMovement(changetype<TrackingEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

