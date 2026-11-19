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
// package org.allbinary.layer

@global export class SingleLayerLayerProcessor extends LayerProcessor {

    jclassName(): string {
        return "org.allbinary.layer.SingleLayerLayerProcessor";
    }
    

    jinit_SingleLayerLayerProcessor_0(): SingleLayerLayerProcessor {
        super.jinit_LayerProcessor_1(new SingleLayerLayerManager().jinit_SingleLayerLayerManager_0());
        return this;
    }
    

    process(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let layerManager: LayerManager | null = this.getLayerManager(); if (JThrowable.pending !== null) return;
        this.processAt(allBinaryLayerManager, changetype<AllBinaryLayer | null>(layerManager!.getLayerAt(0)), 0); if (JThrowable.pending !== null) return;
    }
}

