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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class PressGameKeyEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.input.event.PressGameKeyEventHandler";
    }
    @lazy static jv_instance: PressGameKeyEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PressGameKeyEventHandler | null {
        if (!PressGameKeyEventHandler.js_instance) {
            PressGameKeyEventHandler.js_instance = true;
            PressGameKeyEventHandler.jv_instance = new PressGameKeyEventHandler().jinit_PressGameKeyEventHandler_0();
        }
        return PressGameKeyEventHandler.jv_instance;
    }
    static set instance(value: PressGameKeyEventHandler | null) {
        PressGameKeyEventHandler.js_instance = true;
        PressGameKeyEventHandler.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_PressGameKeyEventHandler(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): PressGameKeyEventHandler | null {
        return PressGameKeyEventHandler.instance;
    }
    

    jinit_PressGameKeyEventHandler_0(): PressGameKeyEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_PressGameKeyEventHandler();
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
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        this.list!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    fireEvent(eventObject: AllBinaryEventObject | null): void {
        for (let index: i32 = this.list!.size(); --index >= 0; ) {
            do {
                let playerGameInput: PlayerGameInput | null = changetype<PlayerGameInput | null>(this.list!.objectArray![index]);
                playerGameInput!.onPressGameKeyEvent(changetype<GameKeyEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let pressGameKeyEventListenerInterface: PressGameKeyEventListenerInterface | null = (changetype<PressGameKeyEventListenerInterface | null>(eventListenerInterface));
        pressGameKeyEventListenerInterface!.onPressGameKeyEvent(changetype<GameKeyEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

