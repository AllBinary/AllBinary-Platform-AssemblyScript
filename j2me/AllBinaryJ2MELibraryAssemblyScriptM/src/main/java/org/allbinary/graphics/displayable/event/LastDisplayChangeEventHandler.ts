/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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

@global export class LastDisplayChangeEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.event.LastDisplayChangeEventHandler";
    }
    @lazy static jv_SINGLETON: LastDisplayChangeEventHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): LastDisplayChangeEventHandler | null {
        if (!LastDisplayChangeEventHandler.js_SINGLETON) {
            LastDisplayChangeEventHandler.js_SINGLETON = true;
            LastDisplayChangeEventHandler.jv_SINGLETON = new LastDisplayChangeEventHandler().jinit_LastDisplayChangeEventHandler_0();
        }
        return LastDisplayChangeEventHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: LastDisplayChangeEventHandler | null) {
        LastDisplayChangeEventHandler.js_SINGLETON = true;
        LastDisplayChangeEventHandler.jv_SINGLETON = value;
    }
    

    static getInstance(): LastDisplayChangeEventHandler | null {
        return LastDisplayChangeEventHandler.SINGLETON;
    }
    

    jinit_LastDisplayChangeEventHandler_0(): LastDisplayChangeEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let displayChangeEventListener: DisplayChangeEventListener | null = (changetype<DisplayChangeEventListener | null>(eventListenerInterface));
        displayChangeEventListener!.onDisplayChangeEvent(changetype<DisplayChangeEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

