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
// package org.allbinary.game.input
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CompleteMotionGestureInputEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.input.CompleteMotionGestureInputEventHandler";
    }
    @lazy static jv_SINGLETON: CompleteMotionGestureInputEventHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): CompleteMotionGestureInputEventHandler | null {
        if (!CompleteMotionGestureInputEventHandler.js_SINGLETON) {
            CompleteMotionGestureInputEventHandler.js_SINGLETON = true;
            CompleteMotionGestureInputEventHandler.jv_SINGLETON = new CompleteMotionGestureInputEventHandler().jinit_CompleteMotionGestureInputEventHandler_0();
        }
        return CompleteMotionGestureInputEventHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: CompleteMotionGestureInputEventHandler | null) {
        CompleteMotionGestureInputEventHandler.js_SINGLETON = true;
        CompleteMotionGestureInputEventHandler.jv_SINGLETON = value;
    }
    list: BasicArrayList | null = null;

    jfields_CompleteMotionGestureInputEventHandler(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): CompleteMotionGestureInputEventHandler | null {
        return CompleteMotionGestureInputEventHandler.SINGLETON;
    }
    

    jinit_CompleteMotionGestureInputEventHandler_0(): CompleteMotionGestureInputEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_CompleteMotionGestureInputEventHandler();
        return this;
    }
    

    addListener(completeMotionGestureInputEventListener: CompleteMotionGestureInputEventListener | null): void {
        if (!this.list!.contains(completeMotionGestureInputEventListener)) {
            this.list!.add(completeMotionGestureInputEventListener); if (JThrowable.pending !== null) return;
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
                let completeMotionGestureInputEventListener: CompleteMotionGestureInputEventListener | null = changetype<CompleteMotionGestureInputEventListener | null>(this.list!.objectArray![index]);
                completeMotionGestureInputEventListener!.onCompleteMotionGestureInputEvent(changetype<CompleteMotionGestureInputEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let completeMotionGestureInputEventListenerInterface: CompleteMotionGestureInputEventListenerInterface | null = changetype<CompleteMotionGestureInputEventListenerInterface | null>(eventListenerInterface);
        completeMotionGestureInputEventListenerInterface!.onCompleteMotionGestureInputEvent(changetype<CompleteMotionGestureInputEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

