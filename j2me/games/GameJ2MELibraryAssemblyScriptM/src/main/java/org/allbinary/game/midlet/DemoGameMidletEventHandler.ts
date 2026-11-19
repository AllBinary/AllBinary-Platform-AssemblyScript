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
// package org.allbinary.game.midlet
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class DemoGameMidletEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.midlet.DemoGameMidletEventHandler";
    }
    @lazy static jv_gameKeyEventHandler: DemoGameMidletEventHandler | null = null;
    @lazy static js_gameKeyEventHandler: bool = false;
    static get gameKeyEventHandler(): DemoGameMidletEventHandler | null {
        if (!DemoGameMidletEventHandler.js_gameKeyEventHandler) {
            DemoGameMidletEventHandler.js_gameKeyEventHandler = true;
            DemoGameMidletEventHandler.jv_gameKeyEventHandler = new DemoGameMidletEventHandler().jinit_DemoGameMidletEventHandler_0();
        }
        return DemoGameMidletEventHandler.jv_gameKeyEventHandler;
    }
    static set gameKeyEventHandler(value: DemoGameMidletEventHandler | null) {
        DemoGameMidletEventHandler.js_gameKeyEventHandler = true;
        DemoGameMidletEventHandler.jv_gameKeyEventHandler = value;
    }
    

    jinit_DemoGameMidletEventHandler_0(): DemoGameMidletEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): DemoGameMidletEventHandler | null {
        return DemoGameMidletEventHandler.gameKeyEventHandler;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let demoGameMidletEventListener: DemoGameMidletEventListener | null = changetype<DemoGameMidletEventListener | null>(eventListenerInterface);
        demoGameMidletEventListener!.onDemoGameMidletEvent(changetype<DemoGameMidletEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

