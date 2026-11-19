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
// package org.allbinary.game.ag.ai.tactical
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.ag.ai.InputProbability
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.util.ABHashtable

@global export class BasicRandomAIFactory extends JObject implements ArtificialIntelligenceInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.tactical.BasicRandomAIFactory";
    }

    jinit_BasicRandomAIFactory_0(): BasicRandomAIFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        let visitor: Visitor | null = changetype<Visitor | null>(hashtable!.get(changetype<Object | null>(BasicAI.AI_VISITOR))); if (JThrowable.pending !== null) return null;
        if (visitor == null) {
            { JThrowable.raise(new JException().jinit_JException_1("No Visitor Provided")); return null; }
        } if (JThrowable.pending !== null) return null;
        let inputProbability: InputProbability | null = changetype<InputProbability | null>(hashtable!.get(changetype<Object | null>(InputProbability.INPUT_PROBABILITY))); if (JThrowable.pending !== null) return null;
        return new BasicRandomAI().jinit_BasicRandomAI_4(ownerLayerInterface, gameInput, inputProbability, visitor);
    }
}

