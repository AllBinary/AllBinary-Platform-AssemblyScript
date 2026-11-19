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
// import org.allbinary.game.ag.ai.tactical.BasicRandomAIFactory
// import org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.util.ABHashtable

@global export class DiveAndDirectionalTrackingAIFactory extends JObject implements ArtificialIntelligenceInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.DiveAndDirectionalTrackingAIFactory";
    }

    jinit_DiveAndDirectionalTrackingAIFactory_0(): DiveAndDirectionalTrackingAIFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        let visitorCanBeNull: Object | null = hashtable!.get(changetype<Object | null>(BasicAI.AI_VISITOR)); if (JThrowable.pending !== null) return null;
        if (visitorCanBeNull == null) {
            visitorCanBeNull = ThrustAIVisitorFactory.getInstance(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let hashtable2: ABHashtable | null = new BasicProbabilityAIDataFactory().jinit_BasicProbabilityAIDataFactory_0()!.getInstance(); if (JThrowable.pending !== null) return null;
        hashtable2!.put(BasicAI.AI_VISITOR, LastKeyAIVisitorFactory.getInstance()); if (JThrowable.pending !== null) return null;
        let artificialIntelligenceInterface: ArtificialIntelligenceInterface | null = new BasicRandomAIFactory().jinit_BasicRandomAIFactory_0()!.getInstance3(hashtable2, ownerLayerInterface, gameInput); if (JThrowable.pending !== null) return null;
        return new DiveAndDirectionalTrackingAI().jinit_DiveAndDirectionalTrackingAI_4(ownerLayerInterface, artificialIntelligenceInterface, gameInput, changetype<Visitor | null>(visitorCanBeNull));
    }
}

