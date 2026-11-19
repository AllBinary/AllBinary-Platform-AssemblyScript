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
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.LayerProcessor

@global export class OptimizedArtificialIntelligenceLayerProcessorForCollidableLayer extends LayerProcessor {

    jclassName(): string {
        return "org.allbinary.ai.OptimizedArtificialIntelligenceLayerProcessorForCollidableLayer";
    }
    

    jinit_OptimizedArtificialIntelligenceLayerProcessorForCollidableLayer_0(): OptimizedArtificialIntelligenceLayerProcessorForCollidableLayer {
        super.jinit_LayerProcessor_1(new OptimizedArtificialIntelligenceLayerManager().jinit_OptimizedArtificialIntelligenceLayerManager_0());
        return this;
    }
    

    processAt(allBinaryLayerManager: AllBinaryLayerManager | null, layerInterface: AllBinaryLayer | null, index: i32): void {
        let artificialIntelligenceCompositeInterface: CollidableCompositeLayer | null = changetype<CollidableCompositeLayer | null>(layerInterface);
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

