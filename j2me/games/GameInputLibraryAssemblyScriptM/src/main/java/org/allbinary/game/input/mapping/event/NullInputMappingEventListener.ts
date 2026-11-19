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
// package org.allbinary.game.input.mapping.event
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class NullInputMappingEventListener extends JObject implements InputMappingEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.input.mapping.event.NullInputMappingEventListener";
    }
    @lazy static jv_NULL_INPUT_MAPPING_EVENT_LISTENER: NullInputMappingEventListener | null = null;
    @lazy static js_NULL_INPUT_MAPPING_EVENT_LISTENER: bool = false;
    static get NULL_INPUT_MAPPING_EVENT_LISTENER(): NullInputMappingEventListener | null {
        if (!NullInputMappingEventListener.js_NULL_INPUT_MAPPING_EVENT_LISTENER) {
            NullInputMappingEventListener.js_NULL_INPUT_MAPPING_EVENT_LISTENER = true;
            NullInputMappingEventListener.jv_NULL_INPUT_MAPPING_EVENT_LISTENER = new NullInputMappingEventListener().jinit_NullInputMappingEventListener_0();
        }
        return NullInputMappingEventListener.jv_NULL_INPUT_MAPPING_EVENT_LISTENER;
    }
    static set NULL_INPUT_MAPPING_EVENT_LISTENER(value: NullInputMappingEventListener | null) {
        NullInputMappingEventListener.js_NULL_INPUT_MAPPING_EVENT_LISTENER = true;
        NullInputMappingEventListener.jv_NULL_INPUT_MAPPING_EVENT_LISTENER = value;
    }

    jinit_NullInputMappingEventListener_0(): NullInputMappingEventListener {
        super.jinit_JObject_0();
        return this;
    }
    

    onInputMappingEvent(inputMappingEvent: InputMappingEvent | null): void {
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
    }
}

