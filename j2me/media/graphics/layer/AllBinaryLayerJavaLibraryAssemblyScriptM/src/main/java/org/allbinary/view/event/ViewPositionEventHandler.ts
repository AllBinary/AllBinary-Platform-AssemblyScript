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
// package org.allbinary.view.event
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class ViewPositionEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.view.event.ViewPositionEventHandler";
    }
    @lazy static jv_SINGLETON: ViewPositionEventHandler | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): ViewPositionEventHandler | null {
        if (!ViewPositionEventHandler.js_SINGLETON) {
            ViewPositionEventHandler.js_SINGLETON = true;
            ViewPositionEventHandler.jv_SINGLETON = new ViewPositionEventHandler().jinit_ViewPositionEventHandler_0();
        }
        return ViewPositionEventHandler.jv_SINGLETON;
    }
    static set SINGLETON(value: ViewPositionEventHandler | null) {
        ViewPositionEventHandler.js_SINGLETON = true;
        ViewPositionEventHandler.jv_SINGLETON = value;
    }
    list: BasicArrayList | null = null;

    jfields_ViewPositionEventHandler(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): ViewPositionEventHandler | null {
        return ViewPositionEventHandler.SINGLETON;
    }
    

    jinit_ViewPositionEventHandler_0(): ViewPositionEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_ViewPositionEventHandler();
        return this;
    }
    

    addListener(layerInterface: AllBinaryLayer | null): void {
        if (!this.list!.contains(layerInterface)) {
            this.list!.add(layerInterface); if (JThrowable.pending !== null) return;
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
                let layerInterface: AllBinaryLayer | null = changetype<AllBinaryLayer | null>(this.list!.objectArray![index]);
                layerInterface!.onChangeEvent(changetype<ViewPositionEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let viewPositionEventListenerInterface: ViewPositionEventListenerInterface | null = (changetype<ViewPositionEventListenerInterface | null>(eventListenerInterface));
        viewPositionEventListenerInterface!.onChangeEvent(changetype<ViewPositionEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

