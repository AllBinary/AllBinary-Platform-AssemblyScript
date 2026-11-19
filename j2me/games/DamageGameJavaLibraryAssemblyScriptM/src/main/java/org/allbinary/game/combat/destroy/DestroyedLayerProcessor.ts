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
// package org.allbinary.game.combat.destroy
// import org.allbinary.game.combat.destroy.event.DestroyEventCircularStaticPool
// import org.allbinary.game.combat.destroy.event.DestroyedEvent
// import org.allbinary.game.combat.destroy.event.DestroyedEventHandler
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.BasicLayerProcessor
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class DestroyedLayerProcessor extends BasicLayerProcessor {

    jclassName(): string {
        return "org.allbinary.game.combat.destroy.DestroyedLayerProcessor";
    }
    @lazy static jv_DESTROYED_LAYER_PROCESSOR: BasicLayerProcessor | null = null;
    @lazy static js_DESTROYED_LAYER_PROCESSOR: bool = false;
    static get DESTROYED_LAYER_PROCESSOR(): BasicLayerProcessor | null {
        if (!DestroyedLayerProcessor.js_DESTROYED_LAYER_PROCESSOR) {
            DestroyedLayerProcessor.js_DESTROYED_LAYER_PROCESSOR = true;
            DestroyedLayerProcessor.jv_DESTROYED_LAYER_PROCESSOR = BasicLayerProcessor.NULL_LAYER_PROCESSOR;
        }
        return DestroyedLayerProcessor.jv_DESTROYED_LAYER_PROCESSOR;
    }
    static set DESTROYED_LAYER_PROCESSOR(value: BasicLayerProcessor | null) {
        DestroyedLayerProcessor.js_DESTROYED_LAYER_PROCESSOR = true;
        DestroyedLayerProcessor.jv_DESTROYED_LAYER_PROCESSOR = value;
    }
    

    jinit_DestroyedLayerProcessor_0(): DestroyedLayerProcessor {
        super.jinit_BasicLayerProcessor_0();
        return this;
    }
    

    static init(): void {
        DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR = new DestroyedLayerProcessor().jinit_DestroyedLayerProcessor_0(); if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): BasicLayerProcessor | null {
        return DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR;
    }
    

    process(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let list: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) return;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let destroyedEventHandler: DestroyedEventHandler | null = DestroyedEventHandler.getInstance(); if (JThrowable.pending !== null) return;
        let destroyEventCircularStaticPool: DestroyEventCircularStaticPool | null = DestroyEventCircularStaticPool.getInstance(); if (JThrowable.pending !== null) return;
        let destroyedEvent: DestroyedEvent | null = null;
        let layerInterface: AllBinaryLayer | null = null;
        for (let index: i32 = 0; index < size; index++) {
            let layerInterfaceCanBeNull: Object | null = list!.objectArray![index];
            if (layerInterfaceCanBeNull != null) {
                layerInterface = changetype<AllBinaryLayer | null>(layerInterfaceCanBeNull);
                allBinaryLayerManager!.remove(layerInterface); if (JThrowable.pending !== null) return;
                destroyedEvent = destroyEventCircularStaticPool!.getInstanceForLayer(layerInterface); if (JThrowable.pending !== null) return;
                destroyedEventHandler!.fireEvent(destroyedEvent); if (JThrowable.pending !== null) return;
            } else {
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        list!.clear(); if (JThrowable.pending !== null) return;
    }
}

