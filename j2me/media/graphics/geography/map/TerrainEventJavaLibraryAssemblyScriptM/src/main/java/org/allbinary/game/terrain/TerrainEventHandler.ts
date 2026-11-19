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
// package org.allbinary.game.terrain
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class TerrainEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.terrain.TerrainEventHandler";
    }
    @lazy static jv_hashtable: ABHashtable | null = null;
    @lazy static js_hashtable: bool = false;
    static get hashtable(): ABHashtable | null {
        if (!TerrainEventHandler.js_hashtable) {
            TerrainEventHandler.js_hashtable = true;
            TerrainEventHandler.jv_hashtable = StdUtil.getInstance()!.NULL_TABLE;
        }
        return TerrainEventHandler.jv_hashtable;
    }
    static set hashtable(value: ABHashtable | null) {
        TerrainEventHandler.js_hashtable = true;
        TerrainEventHandler.jv_hashtable = value;
    }
    list: BasicArrayList | null = null;

    jfields_TerrainEventHandler(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static init(): void {
        TerrainEventHandler.hashtable = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return;
    }
    

    static getInstance1(anyType: Object | null): TerrainEventHandler | null {
        let eventHandlerCanBeNull: Object | null = TerrainEventHandler.hashtable!.get(anyType); if (JThrowable.pending !== null) return null;
        if (eventHandlerCanBeNull == null) {
            eventHandlerCanBeNull = new TerrainEventHandler().jinit_TerrainEventHandler_0(); if (JThrowable.pending !== null) return null;
            TerrainEventHandler.hashtable!.put(anyType, eventHandlerCanBeNull); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<TerrainEventHandler | null>(eventHandlerCanBeNull);
    }
    

    jinit_TerrainEventHandler_0(): TerrainEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_TerrainEventHandler();
        return this;
    }
    

    addListener(terrainEventListener: TerrainEventListener | null): void {
        if (!this.list!.contains(terrainEventListener)) {
            this.list!.add(terrainEventListener); if (JThrowable.pending !== null) return;
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
                let terrainEventListener: TerrainEventListener | null = changetype<TerrainEventListener | null>(this.list!.get(index)); if (JThrowable.pending !== null) break;
                terrainEventListener!.onTerrainEvent(changetype<TerrainEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let terrainEventListenerInterface: TerrainEventListenerInterface | null = changetype<TerrainEventListenerInterface | null>(eventListenerInterface);
        terrainEventListenerInterface!.onTerrainEvent(changetype<TerrainEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

