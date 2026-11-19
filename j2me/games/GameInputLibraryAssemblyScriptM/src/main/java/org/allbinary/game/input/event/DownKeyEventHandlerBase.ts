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
// package org.allbinary.game.input.event
// import org.allbinary.game.input.PlayerGameInput
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DownKeyEventHandlerBase extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.input.event.DownKeyEventHandlerBase";
    }
    @lazy static readonly TOTAL_LISTENERS: string | null = " Total PlayerGameInput Listeners: ";
    @lazy static readonly LISTENER_LABEL: string | null = " PlayerGameInput Listener: ";
    list: BasicArrayList | null = null;

    jfields_DownKeyEventHandlerBase(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_DownKeyEventHandlerBase_0(): DownKeyEventHandlerBase {
        super.jinit_BasicEventHandler_0();
        this.jfields_DownKeyEventHandlerBase();
        return this;
    }
    

    addListener(playerGameInput: PlayerGameInput | null): void {
        if (!this.list!.contains(playerGameInput)) {
            this.list!.add(playerGameInput); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeAllListeners(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
    }
    

    removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface | null): void {
        this.list!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
        super.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        this.list!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    fireEventI(eventObject: JInteger | null): void {
        for (let index: i32 = this.list!.size(); --index >= 0; ) {
            do {
                let playerGameInput: PlayerGameInput | null = changetype<PlayerGameInput | null>(this.list!.objectArray![index]);
                playerGameInput!.onDownKey(eventObject); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let index: i32 = 0;
        let eventListenerInterface: EventListenerInterface | null = null;
        while (index < this.eventListenerInterfaceList!.size()) {
            do {
                eventListenerInterface = changetype<EventListenerInterface | null>(this.eventListenerInterfaceList!.get(index)); if (JThrowable.pending !== null) break;
                this.processI(eventObject, eventListenerInterface); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            index++;
        } if (JThrowable.pending !== null) return;
    }
    

    fireEventForGameKeyEvent(eventObject: GameKeyEvent | null): void {
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = size; --index >= 0; ) {
            do {
                let playerGameInput: PlayerGameInput | null = changetype<PlayerGameInput | null>(this.list!.objectArray![index]);
                playerGameInput!.onDownKeyEvent(eventObject); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let index: i32 = 0;
        let eventListenerInterface: EventListenerInterface | null = null;
        while (index < this.eventListenerInterfaceList!.size()) {
            do {
                eventListenerInterface = changetype<EventListenerInterface | null>(this.eventListenerInterfaceList!.get(index)); if (JThrowable.pending !== null) break;
                this.processEvent(eventObject, eventListenerInterface); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            index++;
        } if (JThrowable.pending !== null) return;
    }
    

    processI(eventObject: JInteger | null, eventListenerInterface: EventListenerInterface | null): void {
        let downKeyEventListenerInterface: DownKeyEventListenerInterface | null = changetype<DownKeyEventListenerInterface | null>(eventListenerInterface);
        downKeyEventListenerInterface!.onDownKey(eventObject); if (JThrowable.pending !== null) return;
    }
    

    processEvent(eventObject: GameKeyEvent | null, eventListenerInterface: EventListenerInterface | null): void {
        let downKeyEventListenerInterface: DownKeyEventListenerInterface | null = changetype<DownKeyEventListenerInterface | null>(eventListenerInterface);
        downKeyEventListenerInterface!.onDownKeyEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(super.toString()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(DownKeyEventHandlerBase.TOTAL_LISTENERS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.list!.size()); if (JThrowable.pending !== null) return null;
        let eventListenerInterface: EventListenerInterface | null = null;
        for (let index: i32 = 0; index < this.list!.size(); index++) {
            do {
                eventListenerInterface = changetype<EventListenerInterface | null>(this.list!.get(index)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(DownKeyEventHandlerBase.LISTENER_LABEL); if (JThrowable.pending !== null) break;
                stringBuffer!.append(JObject.jtoString(eventListenerInterface)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.TOSTRING, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

