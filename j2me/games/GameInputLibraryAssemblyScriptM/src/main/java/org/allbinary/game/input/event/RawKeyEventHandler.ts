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
// package org.allbinary.game.input.event
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class RawKeyEventHandler extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.event.RawKeyEventHandler";
    }
    @lazy static jv_instance: RawKeyEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): RawKeyEventHandler | null {
        if (!RawKeyEventHandler.js_instance) {
            RawKeyEventHandler.js_instance = true;
            RawKeyEventHandler.jv_instance = new RawKeyEventHandler().jinit_RawKeyEventHandler_0();
        }
        return RawKeyEventHandler.jv_instance;
    }
    static set instance(value: RawKeyEventHandler | null) {
        RawKeyEventHandler.js_instance = true;
        RawKeyEventHandler.jv_instance = value;
    }
    @lazy static readonly TOTAL_LISTENERS: string | null = "Total Listeners: ";
    @lazy static readonly LISTENER_LABEL: string | null = " Listener: ";
    logUtil: LogUtil | null = null;
    eventListenerInterfaceList: BasicArrayList | null = null;

    jfields_RawKeyEventHandler(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    static getInstance(): RawKeyEventHandler | null {
        return RawKeyEventHandler.instance;
    }
    

    jinit_RawKeyEventHandler_0(): RawKeyEventHandler {
        super.jinit_JObject_0();
        this.jfields_RawKeyEventHandler();
        this.eventListenerInterfaceList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    removeAllListeners(): void {
        this.eventListenerInterfaceList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
    }
    

    addListeners(vector: BasicArrayList | null): void {
        let eventListenerInterface: RawKeyEventListener | null = null;
        let size: i32 = vector!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            eventListenerInterface = changetype<RawKeyEventListener | null>(vector!.get(index)); if (JThrowable.pending !== null) return;
            this.addListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addListenerSingleThreaded(eventListenerInterface: RawKeyEventListener | null): void {
        if (!this.eventListenerInterfaceList!.contains(eventListenerInterface)) {
            this.eventListenerInterfaceList!.add(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addListener(eventListenerInterface: RawKeyEventListener | null): void {
        if (!this.eventListenerInterfaceList!.contains(eventListenerInterface)) {
            this.eventListenerInterfaceList!.add(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListenerSingleThreaded(eventListenerInterface: RawKeyEventListener | null): void {
        this.eventListenerInterfaceList!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: RawKeyEventListener | null): void {
        this.eventListenerInterfaceList!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    fireEvent(keyCode: i32, deviceId: i32, repeated: bool): void {
        let eventListenerInterface: RawKeyEventListener | null = null;
        let index: i32 = 0;
        while (index < this.eventListenerInterfaceList!.size()) {
            do {
                eventListenerInterface = changetype<RawKeyEventListener | null>(this.eventListenerInterfaceList!.get(index)); if (JThrowable.pending !== null) break;
                this.process(keyCode, deviceId, repeated, eventListenerInterface); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
                this.logUtil!.put(commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            index++;
        } if (JThrowable.pending !== null) return;
    }
    

    process(keyCode: i32, deviceId: i32, repeated: bool, eventListenerInterface: RawKeyEventListener | null): void {
        eventListenerInterface!.onEventRaw(keyCode, deviceId, repeated); if (JThrowable.pending !== null) return;
    }
    

    getEventListenerInterfaceListP(): BasicArrayList | null {
        return this.eventListenerInterfaceList;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(RawKeyEventHandler.TOTAL_LISTENERS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.eventListenerInterfaceList!.size()); if (JThrowable.pending !== null) return null;
        let eventListenerInterface: RawKeyEventListener | null = null;
        let index: i32 = 0;
        while (index < this.eventListenerInterfaceList!.size()) {
            do {
                eventListenerInterface = changetype<RawKeyEventListener | null>(this.eventListenerInterfaceList!.get(index)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(RawKeyEventHandler.LISTENER_LABEL); if (JThrowable.pending !== null) break;
                stringBuffer!.append(JObject.jtoString(eventListenerInterface)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
                this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.TOSTRING, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            index++;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

