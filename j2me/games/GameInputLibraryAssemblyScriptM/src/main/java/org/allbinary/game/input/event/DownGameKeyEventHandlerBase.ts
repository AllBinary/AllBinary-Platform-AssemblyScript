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
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DownGameKeyEventHandlerBase extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.input.event.DownGameKeyEventHandlerBase";
    }
    @lazy static readonly TOTAL_LISTENERS: string | null = " Total PlayerGameInput Listeners: ";
    @lazy static readonly LISTENER_LABEL: string | null = " PlayerGameInput Listener: ";
    list: BasicArrayList | null = null;

    jfields_DownGameKeyEventHandlerBase(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_DownGameKeyEventHandlerBase_0(): DownGameKeyEventHandlerBase {
        super.jinit_BasicEventHandler_0();
        this.jfields_DownGameKeyEventHandlerBase();
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
    

    fireEvent(eventObject: AllBinaryEventObject | null): void {
        for (let index: i32 = this.list!.size(); --index >= 0; ) {
            do {
                let playerGameInput: PlayerGameInput | null = changetype<PlayerGameInput | null>(this.list!.objectArray![index]);
                playerGameInput!.onDownGameKeyEvent(changetype<GameKeyEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let downGameKeyEventListenerInterface: DownGameKeyEventListenerInterface | null = changetype<DownGameKeyEventListenerInterface | null>(eventListenerInterface);
        downGameKeyEventListenerInterface!.onDownGameKeyEvent(changetype<GameKeyEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(super.toString()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(DownGameKeyEventHandlerBase.TOTAL_LISTENERS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.list!.size()); if (JThrowable.pending !== null) return null;
        let eventListenerInterface: EventListenerInterface | null = null;
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return null;
        let index: i32 = 0;
        while (index < size) {
            do {
                eventListenerInterface = changetype<EventListenerInterface | null>(this.list!.get(index)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(DownGameKeyEventHandlerBase.LISTENER_LABEL); if (JThrowable.pending !== null) break;
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

