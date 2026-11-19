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
// package org.allbinary.game.layer.drop
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.BasicLayerProcessor
// import org.allbinary.util.BasicArrayList

@global export class DropLayerProcessor extends BasicLayerProcessor {

    jclassName(): string {
        return "org.allbinary.game.layer.drop.DropLayerProcessor";
    }
    @lazy static jv_LAYER_PROCESSOR: BasicLayerProcessor | null = null;
    @lazy static js_LAYER_PROCESSOR: bool = false;
    static get LAYER_PROCESSOR(): BasicLayerProcessor | null {
        if (!DropLayerProcessor.js_LAYER_PROCESSOR) {
            DropLayerProcessor.js_LAYER_PROCESSOR = true;
            DropLayerProcessor.jv_LAYER_PROCESSOR = new DropLayerProcessor().jinit_DropLayerProcessor_0();
        }
        return DropLayerProcessor.jv_LAYER_PROCESSOR;
    }
    static set LAYER_PROCESSOR(value: BasicLayerProcessor | null) {
        DropLayerProcessor.js_LAYER_PROCESSOR = true;
        DropLayerProcessor.jv_LAYER_PROCESSOR = value;
    }
    

    jinit_DropLayerProcessor_0(): DropLayerProcessor {
        super.jinit_BasicLayerProcessor_0();
        return this;
    }
    

    static getInstance(): BasicLayerProcessor | null {
        return DropLayerProcessor.LAYER_PROCESSOR;
    }
    

    process(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let list: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) return;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let layerInterface: AllBinaryLayer | null = null;
        let dropLayerInterface: DropLayerInterface | null = null;
        for (let index: i32 = 0; index < size; index++) {
            layerInterface = changetype<AllBinaryLayer | null>(list!.objectArray![index]);
            dropLayerInterface = changetype<DropLayerInterface | null>(layerInterface);
            layerInterface = changetype<AllBinaryLayer | null>(dropLayerInterface!.getDroppedLayer()); if (JThrowable.pending !== null) return;
            allBinaryLayerManager!.append(layerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        list!.clear(); if (JThrowable.pending !== null) return;
    }
}

