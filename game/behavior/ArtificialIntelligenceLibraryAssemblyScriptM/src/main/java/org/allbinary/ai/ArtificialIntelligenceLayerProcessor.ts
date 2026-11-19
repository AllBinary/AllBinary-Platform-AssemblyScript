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
// package org.allbinary.ai
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.LayerProcessor

@global export class ArtificialIntelligenceLayerProcessor extends LayerProcessor {

    jclassName(): string {
        return "org.allbinary.ai.ArtificialIntelligenceLayerProcessor";
    }
    

    jinit_ArtificialIntelligenceLayerProcessor_0(): ArtificialIntelligenceLayerProcessor {
        super.jinit_LayerProcessor_1(new ArtificialIntelligenceLayerManager().jinit_ArtificialIntelligenceLayerManager_0());
        return this;
    }
    

    processAt(allBinaryLayerManager: AllBinaryLayerManager | null, layerInterface: AllBinaryLayer | null, index: i32): void {
        let artificialIntelligenceCompositeInterface: ArtificialIntelligenceCompositeInterface | null = changetype<ArtificialIntelligenceCompositeInterface | null>(layerInterface);
        artificialIntelligenceCompositeInterface!.getArtificialIntelligenceInterface()!.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
    }
    

    isProcessorLayer(layerInterface: AllBinaryLayer | null): bool {
        if (layerInterface!.implmentsArtificialIntelligenceCompositeInterface()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

