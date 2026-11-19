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
// import org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.util.ABHashtable

@global export class PacePatrolAIFactory extends JObject implements ArtificialIntelligenceInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.PacePatrolAIFactory";
    }

    jinit_PacePatrolAIFactory_0(): PacePatrolAIFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        hashtable!.put(BasePatrolAI.MAX_DISTANCE, SmallIntegerSingletonFactory.getInstance()!.getAt(220)); if (JThrowable.pending !== null) return null;
        return new PacePatrolAI().jinit_PacePatrolAI_3(hashtable, ownerLayerInterface, gameInput);
    }
}

