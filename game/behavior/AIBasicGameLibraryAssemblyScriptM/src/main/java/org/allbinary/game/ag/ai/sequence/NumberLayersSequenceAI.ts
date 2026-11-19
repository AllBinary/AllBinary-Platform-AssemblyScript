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
// package org.allbinary.game.ag.ai.sequence
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager

@global export class NumberLayersSequenceAI extends SequenceAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.sequence.NumberLayersSequenceAI";
    }
    numberOfLayersLeft: i32 = 0;

    jfields_NumberLayersSequenceAI(): void {
    
    }
    

    jinit_NumberLayersSequenceAI_4(numberOfEnemiesLeft: i32, artificialIntelligenceInterface: StaticArray<ArtificialIntelligenceInterface | null> | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): NumberLayersSequenceAI {
        super.jinit_SequenceAI_3(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
        this.jfields_NumberLayersSequenceAI();
        this.numberOfLayersLeft = numberOfEnemiesLeft;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.getIndex() == 0) {
            if (allBinaryLayerManager!.getSize() < this.numberOfLayersLeft) {
                this.setIndex(1); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
    }
}

