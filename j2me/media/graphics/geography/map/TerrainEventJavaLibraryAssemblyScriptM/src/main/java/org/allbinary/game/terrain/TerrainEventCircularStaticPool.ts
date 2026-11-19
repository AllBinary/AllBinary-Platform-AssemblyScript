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
// import org.allbinary.logic.util.event.AllBinaryEventCircularPool

@global export class TerrainEventCircularStaticPool extends JObject {

    jclassName(): string {
        return "org.allbinary.game.terrain.TerrainEventCircularStaticPool";
    }
    @lazy static jv_instance: TerrainEventCircularStaticPool | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TerrainEventCircularStaticPool | null {
        if (!TerrainEventCircularStaticPool.js_instance) {
            TerrainEventCircularStaticPool.js_instance = true;
            TerrainEventCircularStaticPool.jv_instance = new TerrainEventCircularStaticPool().jinit_TerrainEventCircularStaticPool_0();
        }
        return TerrainEventCircularStaticPool.jv_instance;
    }
    static set instance(value: TerrainEventCircularStaticPool | null) {
        TerrainEventCircularStaticPool.js_instance = true;
        TerrainEventCircularStaticPool.jv_instance = value;
    }
    EVENT_POOL: AllBinaryEventCircularPool | null = null;

    jfields_TerrainEventCircularStaticPool(): void {
    this.EVENT_POOL = new AllBinaryEventCircularPool().jinit_AllBinaryEventCircularPool_1(20);
    }

    jinit_TerrainEventCircularStaticPool_0(): TerrainEventCircularStaticPool {
        super.jinit_JObject_0();
        this.jfields_TerrainEventCircularStaticPool();
        return this;
    }
    

    static getInstance(): TerrainEventCircularStaticPool | null {
        return TerrainEventCircularStaticPool.instance;
    }
    

    init(): void {
        this.EVENT_POOL!.initAllBinaryEventCircularPool(new TerrainEventFactory().jinit_TerrainEventFactory_0()); if (JThrowable.pending !== null) return;
    }
    

    getNext(basicTerrainInfo: BasicTerrainInfo | null): TerrainEvent | null {
        let trackingEvent: TerrainEvent | null = changetype<TerrainEvent | null>(this.EVENT_POOL!.getNextInstance()); if (JThrowable.pending !== null) return null;
        trackingEvent!.setBasicTerrainInfoForCircularStaticPool(basicTerrainInfo); if (JThrowable.pending !== null) return null;
        return trackingEvent;
    }
}

