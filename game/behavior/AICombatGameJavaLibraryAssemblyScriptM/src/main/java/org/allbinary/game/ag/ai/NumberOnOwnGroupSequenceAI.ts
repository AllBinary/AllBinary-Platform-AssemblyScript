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
// package org.allbinary.game.ag.ai
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.game.ag.ai.sequence.SequenceAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.layer.identification.GroupLayerManagerListener
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager

@global export class NumberOnOwnGroupSequenceAI extends SequenceAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.NumberOnOwnGroupSequenceAI";
    }
    numberOnSameTeam: StaticArray<JInteger | null> | null = null;

    jfields_NumberOnOwnGroupSequenceAI(): void {
    
    }
    

    jinit_NumberOnOwnGroupSequenceAI_4(numberOnSameTeam: StaticArray<JInteger | null> | null, artificialIntelligenceInterface: StaticArray<ArtificialIntelligenceInterface | null> | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): NumberOnOwnGroupSequenceAI {
        super.jinit_SequenceAI_3(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
        this.jfields_NumberOnOwnGroupSequenceAI();
        this.numberOnSameTeam = numberOnSameTeam;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let layerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let index: i32 = this.getIndex(); if (JThrowable.pending !== null) return;
        if (this.numberOnSameTeam!.length > index) {
            let size: i32 = GroupLayerManagerListener.getInstance()!.getGroupSizeFromInterface(layerInterface); if (JThrowable.pending !== null) return;
            if (this.numberOnSameTeam![index]!.intValue() > size) {
                this.next(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
    }
}

