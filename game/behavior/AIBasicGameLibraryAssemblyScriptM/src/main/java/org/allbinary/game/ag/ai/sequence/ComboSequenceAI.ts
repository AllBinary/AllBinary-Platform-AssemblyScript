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

@global export class ComboSequenceAI extends SequenceAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.sequence.ComboSequenceAI";
    }
    

    jinit_ComboSequenceAI_3(artificialIntelligenceInterface: StaticArray<ArtificialIntelligenceInterface | null> | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ComboSequenceAI {
        super.jinit_SequenceAI_3(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let artificialIntelligenceInterfaceArray: StaticArray<ArtificialIntelligenceInterface | null> | null = this.getArtificialIntelligenceInterface(); if (JThrowable.pending !== null) return;
        let size: i32 = artificialIntelligenceInterfaceArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.setIndex(index); if (JThrowable.pending !== null) return;
            super.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

