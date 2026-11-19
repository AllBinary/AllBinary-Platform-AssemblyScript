/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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

@global export class NullEventListener extends JObject implements EventListenerInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.event.NullEventListener";
    }
    @lazy static jv_NULL_EVENT_LISTENER: NullEventListener | null = null;
    @lazy static js_NULL_EVENT_LISTENER: bool = false;
    static get NULL_EVENT_LISTENER(): NullEventListener | null {
        if (!NullEventListener.js_NULL_EVENT_LISTENER) {
            NullEventListener.js_NULL_EVENT_LISTENER = true;
            NullEventListener.jv_NULL_EVENT_LISTENER = new NullEventListener().jinit_NullEventListener_0();
        }
        return NullEventListener.jv_NULL_EVENT_LISTENER;
    }
    static set NULL_EVENT_LISTENER(value: NullEventListener | null) {
        NullEventListener.js_NULL_EVENT_LISTENER = true;
        NullEventListener.jv_NULL_EVENT_LISTENER = value;
    }

    jinit_NullEventListener_0(): NullEventListener {
        super.jinit_JObject_0();
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
    }
}

