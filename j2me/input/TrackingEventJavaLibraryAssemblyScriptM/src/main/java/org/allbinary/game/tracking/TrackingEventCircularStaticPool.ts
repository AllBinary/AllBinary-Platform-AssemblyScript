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
// package org.allbinary.game.tracking
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.util.event.AllBinaryEventCircularPool

@global export class TrackingEventCircularStaticPool extends JObject {

    jclassName(): string {
        return "org.allbinary.game.tracking.TrackingEventCircularStaticPool";
    }
    @lazy static jv_instance: TrackingEventCircularStaticPool | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TrackingEventCircularStaticPool | null {
        if (!TrackingEventCircularStaticPool.js_instance) {
            TrackingEventCircularStaticPool.js_instance = true;
            TrackingEventCircularStaticPool.jv_instance = new TrackingEventCircularStaticPool().jinit_TrackingEventCircularStaticPool_0();
        }
        return TrackingEventCircularStaticPool.jv_instance;
    }
    static set instance(value: TrackingEventCircularStaticPool | null) {
        TrackingEventCircularStaticPool.js_instance = true;
        TrackingEventCircularStaticPool.jv_instance = value;
    }
    EVENT_POOL: AllBinaryEventCircularPool | null = null;

    jfields_TrackingEventCircularStaticPool(): void {
    this.EVENT_POOL = new AllBinaryEventCircularPool().jinit_AllBinaryEventCircularPool_1(20);
    }

    jinit_TrackingEventCircularStaticPool_0(): TrackingEventCircularStaticPool {
        super.jinit_JObject_0();
        this.jfields_TrackingEventCircularStaticPool();
        return this;
    }
    

    static getInstance(): TrackingEventCircularStaticPool | null {
        return TrackingEventCircularStaticPool.instance;
    }
    

    init(): void {
        this.EVENT_POOL!.initAllBinaryEventCircularPool(new TrackingEventFactory().jinit_TrackingEventFactory_0()); if (JThrowable.pending !== null) return;
    }
    

    getNextInstance(layerInterface: AllBinaryLayer | null): TrackingEvent | null {
        let trackingEvent: TrackingEvent | null = changetype<TrackingEvent | null>(this.EVENT_POOL!.getNextInstance()); if (JThrowable.pending !== null) return null;
        trackingEvent!.setLayerInterfaceForCircularStaticPool(layerInterface); if (JThrowable.pending !== null) return null;
        return trackingEvent;
    }
}

