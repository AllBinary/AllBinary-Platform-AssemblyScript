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
// package org.allbinary.graphics.displayable.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class DisplayChangeEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.event.DisplayChangeEventHandler";
    }
    @lazy static jv_SINGLETON: DisplayChangeEventHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): DisplayChangeEventHandler | null {
        if (!DisplayChangeEventHandler.js_SINGLETON) {
            DisplayChangeEventHandler.js_SINGLETON = true;
            DisplayChangeEventHandler.jv_SINGLETON = new DisplayChangeEventHandler().jinit_DisplayChangeEventHandler_0();
        }
        return DisplayChangeEventHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: DisplayChangeEventHandler | null) {
        DisplayChangeEventHandler.js_SINGLETON = true;
        DisplayChangeEventHandler.jv_SINGLETON = value;
    }
    

    static getInstance(): DisplayChangeEventHandler | null {
        return DisplayChangeEventHandler.SINGLETON;
    }
    

    jinit_DisplayChangeEventHandler_0(): DisplayChangeEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let displayChangeEventListener: DisplayChangeEventListener | null = (changetype<DisplayChangeEventListener | null>(eventListenerInterface));
        displayChangeEventListener!.onDisplayChangeEvent(changetype<DisplayChangeEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

