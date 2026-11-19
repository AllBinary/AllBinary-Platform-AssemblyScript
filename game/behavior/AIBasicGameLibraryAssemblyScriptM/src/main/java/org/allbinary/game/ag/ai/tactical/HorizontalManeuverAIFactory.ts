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
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.util.ABHashtable

@global export class HorizontalManeuverAIFactory extends JObject implements ArtificialIntelligenceInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.tactical.HorizontalManeuverAIFactory";
    }

    jinit_HorizontalManeuverAIFactory_0(): HorizontalManeuverAIFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        return new HorizontalManeuverAI().jinit_HorizontalManeuverAI_2(ownerLayerInterface, gameInput);
    }
}

