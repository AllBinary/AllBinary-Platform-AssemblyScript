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
// package org.allbinary.logic.util.event

@global export class EventStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.event.EventStrings";
    }
    @lazy static jv_instance: EventStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): EventStrings | null {
        if (!EventStrings.js_instance) {
            EventStrings.js_instance = true;
            EventStrings.jv_instance = new EventStrings().jinit_EventStrings_0();
        }
        return EventStrings.jv_instance;
    }
    static set instance(value: EventStrings | null) {
        EventStrings.js_instance = true;
        EventStrings.jv_instance = value;
    }
    PERFORMANCE_MESSAGE: string | null = null;
    TOTAL_LISTENERS: string | null = null;
    LISTENER_LABEL: string | null = null;
    FIRE_EVENT: string | null = null;

    jfields_EventStrings(): void {
    this.PERFORMANCE_MESSAGE = "Use Custom onEvent Methods for needed optimization";
    this.TOTAL_LISTENERS = "Total Listeners: ";
    this.LISTENER_LABEL = " Listener: ";
    this.FIRE_EVENT = "fireEvent";
    }

    jinit_EventStrings_0(): EventStrings {
        super.jinit_JObject_0();
        this.jfields_EventStrings();
        return this;
    }
    

    static getInstance(): EventStrings | null {
        return EventStrings.instance;
    }
}

