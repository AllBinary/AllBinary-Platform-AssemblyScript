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
// package org.allbinary.android.input.motion.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AnalogControllerConfigurationEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.android.input.motion.event.AnalogControllerConfigurationEventHandler";
    }
    @lazy static jv_instance: AnalogControllerConfigurationEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnalogControllerConfigurationEventHandler | null {
        if (!AnalogControllerConfigurationEventHandler.js_instance) {
            AnalogControllerConfigurationEventHandler.js_instance = true;
            AnalogControllerConfigurationEventHandler.jv_instance = new AnalogControllerConfigurationEventHandler().jinit_AnalogControllerConfigurationEventHandler_0();
        }
        return AnalogControllerConfigurationEventHandler.jv_instance;
    }
    static set instance(value: AnalogControllerConfigurationEventHandler | null) {
        AnalogControllerConfigurationEventHandler.js_instance = true;
        AnalogControllerConfigurationEventHandler.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_AnalogControllerConfigurationEventHandler(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): AnalogControllerConfigurationEventHandler | null {
        return AnalogControllerConfigurationEventHandler.instance;
    }
    

    jinit_AnalogControllerConfigurationEventHandler_0(): AnalogControllerConfigurationEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_AnalogControllerConfigurationEventHandler();
        return this;
    }
    

    addListener(analogControllerConfigurationEventListenerInterface: AnalogControllerConfigurationEventListenerInterface | null): void {
        if (!this.list!.contains(analogControllerConfigurationEventListenerInterface)) {
            this.list!.add(analogControllerConfigurationEventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeAllListeners(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        this.list!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    fireEvent(eventObject: AllBinaryEventObject | null): void {
        for (let index: i32 = this.list!.size(); --index >= 0; ) {
            do {
                let playerGameInput: AnalogControllerConfigurationEventListenerInterface | null = changetype<AnalogControllerConfigurationEventListenerInterface | null>(this.list!.objectArray![index]);
                playerGameInput!.onAnalogControllerConfigurationEvent(changetype<AnalogControllerConfigurationEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let analogControllerConfigurationEventListenerInterface: AnalogControllerConfigurationEventListenerInterface | null = (changetype<AnalogControllerConfigurationEventListenerInterface | null>(eventListenerInterface));
        analogControllerConfigurationEventListenerInterface!.onAnalogControllerConfigurationEvent(changetype<AnalogControllerConfigurationEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

