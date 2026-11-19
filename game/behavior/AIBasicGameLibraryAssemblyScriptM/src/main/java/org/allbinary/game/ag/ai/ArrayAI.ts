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
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.game.ai.BasicAI

@global export class ArrayAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.ArrayAI";
    }
    artificialIntelligenceInterfaceArray: StaticArray<ArtificialIntelligenceInterface | null> | null = null;

    jfields_ArrayAI(): void {
    
    }
    

    jinit_ArrayAI_3(artificialIntelligenceInterface: StaticArray<ArtificialIntelligenceInterface | null> | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArrayAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_ArrayAI();
        this.artificialIntelligenceInterfaceArray = artificialIntelligenceInterface;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let size: i32 = this.artificialIntelligenceInterfaceArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.artificialIntelligenceInterfaceArray![index]!.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getArtificialIntelligenceInterface(): StaticArray<ArtificialIntelligenceInterface | null> | null {
        return this.artificialIntelligenceInterfaceArray;
    }
}

