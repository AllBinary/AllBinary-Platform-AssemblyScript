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
// package org.allbinary.input.event
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class VirtualKeyboardEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.input.event.VirtualKeyboardEventHandler";
    }
    @lazy static jv_gameKeyEventHandler: VirtualKeyboardEventHandler | null = null;
    @lazy static js_gameKeyEventHandler: bool = false;
    static get gameKeyEventHandler(): VirtualKeyboardEventHandler | null {
        if (!VirtualKeyboardEventHandler.js_gameKeyEventHandler) {
            VirtualKeyboardEventHandler.js_gameKeyEventHandler = true;
            VirtualKeyboardEventHandler.jv_gameKeyEventHandler = new VirtualKeyboardEventHandler().jinit_VirtualKeyboardEventHandler_0();
        }
        return VirtualKeyboardEventHandler.jv_gameKeyEventHandler;
    }
    static set gameKeyEventHandler(value: VirtualKeyboardEventHandler | null) {
        VirtualKeyboardEventHandler.js_gameKeyEventHandler = true;
        VirtualKeyboardEventHandler.jv_gameKeyEventHandler = value;
    }
    SHOW_EVENT: VirtualKeyboardEvent | null = null;
    HIDE_EVENT: VirtualKeyboardEvent | null = null;

    jfields_VirtualKeyboardEventHandler(): void {
    this.SHOW_EVENT = new VirtualKeyboardEvent().jinit_VirtualKeyboardEvent_1(BooleanFactory.getInstance()!.TRUE);
    this.HIDE_EVENT = new VirtualKeyboardEvent().jinit_VirtualKeyboardEvent_1(BooleanFactory.getInstance()!.FALSE);
    }
    

    jinit_VirtualKeyboardEventHandler_0(): VirtualKeyboardEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_VirtualKeyboardEventHandler();
        return this;
    }
    

    static getInstance(): VirtualKeyboardEventHandler | null {
        return VirtualKeyboardEventHandler.gameKeyEventHandler;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let virtualKeyboardEventListenerInterface: VirtualKeyboardEventListenerInterface | null = changetype<VirtualKeyboardEventListenerInterface | null>(eventListenerInterface);
        virtualKeyboardEventListenerInterface!.onVirtualKeyboardEvent(changetype<VirtualKeyboardEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
    

    open(): void {
        do {
            JThread.sleep(120); if (JThrowable.pending !== null) break;
            this.fireEvent(this.SHOW_EVENT); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "open", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        do {
            JThread.sleep(120); if (JThrowable.pending !== null) break;
            this.fireEvent(this.HIDE_EVENT); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CLOSE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

