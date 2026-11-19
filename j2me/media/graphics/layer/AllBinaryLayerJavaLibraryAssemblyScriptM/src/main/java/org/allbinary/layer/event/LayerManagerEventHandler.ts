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
// package org.allbinary.layer.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class LayerManagerEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.layer.event.LayerManagerEventHandler";
    }
    @lazy static jv_instance: LayerManagerEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LayerManagerEventHandler | null {
        if (!LayerManagerEventHandler.js_instance) {
            LayerManagerEventHandler.js_instance = true;
            LayerManagerEventHandler.jv_instance = new LayerManagerEventHandler().jinit_LayerManagerEventHandler_0();
        }
        return LayerManagerEventHandler.jv_instance;
    }
    static set instance(value: LayerManagerEventHandler | null) {
        LayerManagerEventHandler.js_instance = true;
        LayerManagerEventHandler.jv_instance = value;
    }
    list: BasicArrayList | null = null;
    CREATE: string | null = null;
    DELETE: string | null = null;

    jfields_LayerManagerEventHandler(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.CREATE = "Create";
    this.DELETE = "Delete";
    }
    

    static getInstance(): LayerManagerEventHandler | null {
        return LayerManagerEventHandler.instance;
    }
    

    jinit_LayerManagerEventHandler_0(): LayerManagerEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_LayerManagerEventHandler();
        return this;
    }
    

    addListener(layerManagerEventListener: LayerManagerEventListener | null): void {
        if (!this.list!.contains(layerManagerEventListener)) {
            this.list!.add(layerManagerEventListener); if (JThrowable.pending !== null) return;
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
                let layerManagerEventListener: LayerManagerEventListener | null = changetype<LayerManagerEventListener | null>(this.list!.objectArray![index]);
                layerManagerEventListener!.onCreateLayerManagerEvent(changetype<LayerManagerEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    fireDeleteEvent(eventObject: AllBinaryEventObject | null): void {
        for (let index: i32 = this.list!.size(); --index >= 0; ) {
            do {
                let layerManagerEventListener: LayerManagerEventListener | null = changetype<LayerManagerEventListener | null>(this.list!.objectArray![index]);
                layerManagerEventListener!.onDeleteLayerManagerEvent(changetype<LayerManagerEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let eventListenerInterfaceList: BasicArrayList | null = this.eventListenerInterfaceList;
        let eventListenerInterface: EventListenerInterface | null = null;
        let layerManagerEventListenerInterface: LayerManagerEventListenerInterface | null = null;
        let listenerIndex: i32 = 0;
        while (listenerIndex < eventListenerInterfaceList!.size()) {
            do {
                eventListenerInterface = changetype<EventListenerInterface | null>(eventListenerInterfaceList!.objectArray![listenerIndex]);
                layerManagerEventListenerInterface = (changetype<LayerManagerEventListenerInterface | null>(eventListenerInterface));
                layerManagerEventListenerInterface!.onDeleteLayerManagerEvent(changetype<LayerManagerEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            listenerIndex++;
        } if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let layerManagerEventListenerInterface: LayerManagerEventListenerInterface | null = (changetype<LayerManagerEventListenerInterface | null>(eventListenerInterface));
        layerManagerEventListenerInterface!.onCreateLayerManagerEvent(changetype<LayerManagerEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

