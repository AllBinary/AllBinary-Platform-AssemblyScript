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
// import org.allbinary.string.CommonStrings

@global export class LayerProcessor extends JObject implements LayerProcessorInterface {

    jclassName(): string {
        return "org.allbinary.layer.LayerProcessor";
    }
    commonStrings: CommonStrings | null = null;
    layerManager: LayerManager | null = null;

    jfields_LayerProcessor(): void {
    this.commonStrings = CommonStrings.getInstance();
    
    }
    

    jinit_LayerProcessor_1(layerManager: LayerManager | null): LayerProcessor {
        super.jinit_JObject_0();
        this.jfields_LayerProcessor();
        this.layerManager = layerManager;
        return this;
    }
    

    processAt(allBinaryLayerManager: AllBinaryLayerManager | null, layerInterface: AllBinaryLayer | null, index: i32): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    isProcessorLayer(layerInterface: AllBinaryLayer | null): bool {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return false; }
        return false;
    }
    

    getLayerManager(): LayerManager | null {
        return this.layerManager;
    }
    

    process(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let layerManager: LayerManager | null = this.getLayerManager(); if (JThrowable.pending !== null) return;
        let size: i32 = layerManager!.getSize(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            this.processAt(allBinaryLayerManager, changetype<AllBinaryLayer | null>(layerManager!.getLayerAt(index)), index); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

