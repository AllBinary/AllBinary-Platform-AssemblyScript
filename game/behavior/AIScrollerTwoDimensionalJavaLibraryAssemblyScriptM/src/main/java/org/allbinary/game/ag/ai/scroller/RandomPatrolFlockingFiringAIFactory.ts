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
// package org.allbinary.game.ag.ai.scroller
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.game.ag.ai.ArrayAI
// import org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.util.ABHashtable

@global export class RandomPatrolFlockingFiringAIFactory extends JObject implements ArtificialIntelligenceInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.RandomPatrolFlockingFiringAIFactory";
    }

    jinit_RandomPatrolFlockingFiringAIFactory_0(): RandomPatrolFlockingFiringAIFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        let artificialIntelligenceInterface: StaticArray<ArtificialIntelligenceInterface | null> | null = new StaticArray<ArtificialIntelligenceInterface | null>(2);
        artificialIntelligenceInterface![0] = new RandomPatrolAI().jinit_RandomPatrolAI_3(hashtable, ownerLayerInterface, gameInput); if (JThrowable.pending !== null) return null;
        artificialIntelligenceInterface![1] = new TimedFireAI().jinit_TimedFireAI_3(1800, ownerLayerInterface, gameInput); if (JThrowable.pending !== null) return null;
        return new ArrayAI().jinit_ArrayAI_3(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    }
}

