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
// package org.allbinary.bounds.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class BoundsChangeEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.bounds.event.BoundsChangeEventHandler";
    }
    @lazy static jv_SINGLETON: BasicEventHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): BasicEventHandler | null {
        if (!BoundsChangeEventHandler.js_SINGLETON) {
            BoundsChangeEventHandler.js_SINGLETON = true;
            BoundsChangeEventHandler.jv_SINGLETON = new BoundsChangeEventHandler().jinit_BoundsChangeEventHandler_0();
        }
        return BoundsChangeEventHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: BasicEventHandler | null) {
        BoundsChangeEventHandler.js_SINGLETON = true;
        BoundsChangeEventHandler.jv_SINGLETON = value;
    }
    

    jinit_BoundsChangeEventHandler_0(): BoundsChangeEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): BasicEventHandler | null {
        return BoundsChangeEventHandler.SINGLETON;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let boundsChangeEventListener: BoundsChangeEventListener | null = changetype<BoundsChangeEventListener | null>(eventListenerInterface);
        boundsChangeEventListener!.onBoundsChangeEvent(changetype<BoundsChangeEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

