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
// package org.allbinary.game.input.mapping.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class InputMappingEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.input.mapping.event.InputMappingEventHandler";
    }
    @lazy static jv_gameKeyEventHandler: InputMappingEventHandler | null = null;
    @lazy static js_gameKeyEventHandler: bool = false;
    static get gameKeyEventHandler(): InputMappingEventHandler | null {
        if (!InputMappingEventHandler.js_gameKeyEventHandler) {
            InputMappingEventHandler.js_gameKeyEventHandler = true;
            InputMappingEventHandler.jv_gameKeyEventHandler = new InputMappingEventHandler().jinit_InputMappingEventHandler_0();
        }
        return InputMappingEventHandler.jv_gameKeyEventHandler;
    }
    static set gameKeyEventHandler(value: InputMappingEventHandler | null) {
        InputMappingEventHandler.js_gameKeyEventHandler = true;
        InputMappingEventHandler.jv_gameKeyEventHandler = value;
    }
    

    jinit_InputMappingEventHandler_0(): InputMappingEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): InputMappingEventHandler | null {
        return InputMappingEventHandler.gameKeyEventHandler;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let inputMappingEventListenerInterface: InputMappingEventListenerInterface | null = changetype<InputMappingEventListenerInterface | null>(eventListenerInterface);
        inputMappingEventListenerInterface!.onInputMappingEvent(changetype<InputMappingEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

