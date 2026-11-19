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
// package org.allbinary.logic.util.event.handler
// import jsinterop.annotations.JsType
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class BasicEventHandler extends JObject implements BasicEventHandlerInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.event.handler.BasicEventHandler";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    eventStrings: EventStrings | null = null;
    eventListenerInterfaceList: BasicArrayList | null = null;

    jfields_BasicEventHandler(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.eventStrings = EventStrings.getInstance();
    
    }
    

    jinit_BasicEventHandler_0(): BasicEventHandler {
        super.jinit_JObject_0();
        this.jfields_BasicEventHandler();
        this.eventListenerInterfaceList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    removeAllListeners(): void {
        this.eventListenerInterfaceList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
    }
    

    addListeners(vector: BasicArrayList | null): void {
        let eventListenerInterface: EventListenerInterface | null = null;
        let size: i32 = vector!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            eventListenerInterface = changetype<EventListenerInterface | null>(vector!.get(index)); if (JThrowable.pending !== null) return;
            this.addListenerInterface(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListeners(vector: BasicArrayList | null): void {
        let eventListenerInterface: EventListenerInterface | null = null;
        let size: i32 = vector!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            eventListenerInterface = changetype<EventListenerInterface | null>(vector!.get(index)); if (JThrowable.pending !== null) return;
            this.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addListenerSingleThreaded(eventListenerInterface: EventListenerInterface | null): void {
        if (!this.eventListenerInterfaceList!.contains(eventListenerInterface)) {
            this.eventListenerInterfaceList!.add(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addListenerInterface(eventListenerInterface: EventListenerInterface | null): void {
        if (!this.eventListenerInterfaceList!.contains(eventListenerInterface)) {
            this.eventListenerInterfaceList!.add(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface | null): void {
        this.eventListenerInterfaceList!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        this.eventListenerInterfaceList!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    fireEvent(eventObject: AllBinaryEventObject | null): void {
        let eventListenerInterface: EventListenerInterface | null = null;
        let index: i32 = 0;
        while (index < this.eventListenerInterfaceList!.size()) {
            do {
                eventListenerInterface = changetype<EventListenerInterface | null>(this.eventListenerInterfaceList!.get(index)); if (JThrowable.pending !== null) break;
                this.process(eventObject, eventListenerInterface); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.eventStrings!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            index++;
        } if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        eventListenerInterface!.onEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    getEventListenerInterfaceListP(): BasicArrayList | null {
        return this.eventListenerInterfaceList;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.eventStrings!.TOTAL_LISTENERS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.eventListenerInterfaceList!.size()); if (JThrowable.pending !== null) return null;
        let eventListenerInterface: EventListenerInterface | null = null;
        let index: i32 = 0;
        while (index < this.eventListenerInterfaceList!.size()) {
            do {
                eventListenerInterface = changetype<EventListenerInterface | null>(this.eventListenerInterfaceList!.get(index)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.eventStrings!.LISTENER_LABEL); if (JThrowable.pending !== null) break;
                stringBuffer!.append(JObject.jtoString(eventListenerInterface)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.TOSTRING, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            index++;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

