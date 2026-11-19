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
// import org.allbinary.ai.ArtificialIntelligence
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.ai.ArtificialIntelligenceTransitionInterface
// import org.allbinary.game.ag.ai.ArrayAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class SequenceAI extends ArrayAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.sequence.SequenceAI";
    }
    @lazy static readonly SEQUENCE_AI: string | null = "Sequence AI";
    index: i32 = 0;

    jfields_SequenceAI(): void {
    this.index = 0;
    }
    

    jinit_SequenceAI_3(artificialIntelligenceInterfaceArray: StaticArray<ArtificialIntelligenceInterface | null> | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): SequenceAI {
        super.jinit_ArrayAI_3(artificialIntelligenceInterfaceArray, ownerLayerInterface, gameInput);
        this.jfields_SequenceAI();
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        this.getArtificialIntelligenceInterface()![this.index]!.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
    }
    

    next(): void {
        this.index++;
        let artificialIntelligenceInterface: ArtificialIntelligenceInterface | null = this.getSelectedArtificialIntelligenceInterface(); if (JThrowable.pending !== null) return;
        if (artificialIntelligenceInterface!.getId() == ArtificialIntelligence.AI_ID) {
            let artificialIntelligenceTransitionInterface: ArtificialIntelligenceTransitionInterface | null = changetype<ArtificialIntelligenceTransitionInterface | null>(artificialIntelligenceInterface);
            artificialIntelligenceTransitionInterface!.transition(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getIndex(): i32 {
        return this.index;
    }
    

    setIndex(index: i32): void {
        this.index = index;
    }
    

    getSelectedArtificialIntelligenceInterface(): ArtificialIntelligenceInterface | null {
        return this.getArtificialIntelligenceInterface()![this.index];
    }
    

    getName(): string | null {
        return SequenceAI.SEQUENCE_AI;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(super.toString()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Selected AI: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(this.getSelectedArtificialIntelligenceInterface())); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

