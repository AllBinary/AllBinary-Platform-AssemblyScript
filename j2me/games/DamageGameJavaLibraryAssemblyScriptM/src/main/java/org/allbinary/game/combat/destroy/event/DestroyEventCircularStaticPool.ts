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
// package org.allbinary.game.combat.destroy.event
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.util.event.AllBinaryEventCircularPool

@global export class DestroyEventCircularStaticPool extends JObject {

    jclassName(): string {
        return "org.allbinary.game.combat.destroy.event.DestroyEventCircularStaticPool";
    }
    @lazy static jv_instance: DestroyEventCircularStaticPool | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DestroyEventCircularStaticPool | null {
        if (!DestroyEventCircularStaticPool.js_instance) {
            DestroyEventCircularStaticPool.js_instance = true;
            DestroyEventCircularStaticPool.jv_instance = new DestroyEventCircularStaticPool().jinit_DestroyEventCircularStaticPool_0();
        }
        return DestroyEventCircularStaticPool.jv_instance;
    }
    static set instance(value: DestroyEventCircularStaticPool | null) {
        DestroyEventCircularStaticPool.js_instance = true;
        DestroyEventCircularStaticPool.jv_instance = value;
    }
    EVENT_POOL: AllBinaryEventCircularPool | null = null;

    jfields_DestroyEventCircularStaticPool(): void {
    this.EVENT_POOL = new AllBinaryEventCircularPool().jinit_AllBinaryEventCircularPool_1(20);
    }
    

    static getInstance(): DestroyEventCircularStaticPool | null {
        return DestroyEventCircularStaticPool.instance;
    }
    

    jinit_DestroyEventCircularStaticPool_0(): DestroyEventCircularStaticPool {
        super.jinit_JObject_0();
        this.jfields_DestroyEventCircularStaticPool();
        return this;
    }
    

    init(combatGameCanvas: AllBinaryGameCanvas | null): void {
        this.EVENT_POOL!.initAllBinaryEventCircularPool(new DestroyEventFactory().jinit_DestroyEventFactory_1(combatGameCanvas)); if (JThrowable.pending !== null) return;
    }
    

    getInstanceForLayer(layerInterface: AllBinaryLayer | null): DestroyedEvent | null {
        let destroyedEvent: DestroyedEvent | null = changetype<DestroyedEvent | null>(this.EVENT_POOL!.getNextInstance()); if (JThrowable.pending !== null) return null;
        destroyedEvent!.setLayerInterfaceForCircularStaticPool(layerInterface); if (JThrowable.pending !== null) return null;
        return destroyedEvent;
    }
}

