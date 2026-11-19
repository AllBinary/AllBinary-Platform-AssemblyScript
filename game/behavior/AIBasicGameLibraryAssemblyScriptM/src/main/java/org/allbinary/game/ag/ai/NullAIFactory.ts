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
// import org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.util.ABHashtable

@global export class NullAIFactory extends JObject implements ArtificialIntelligenceInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.NullAIFactory";
    }
    @lazy static jv_NULL_AI: NullAI | null = null;
    @lazy static js_NULL_AI: bool = false;
    static get NULL_AI(): NullAI | null {
        if (!NullAIFactory.js_NULL_AI) {
            NullAIFactory.js_NULL_AI = true;
            NullAIFactory.jv_NULL_AI = new NullAI().jinit_NullAI_0();
        }
        return NullAIFactory.jv_NULL_AI;
    }
    static set NULL_AI(value: NullAI | null) {
        NullAIFactory.js_NULL_AI = true;
        NullAIFactory.jv_NULL_AI = value;
    }

    jinit_NullAIFactory_0(): NullAIFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        return NullAIFactory.NULL_AI;
    }
    

    static getInstance(): ArtificialIntelligenceInterface | null {
        return NullAIFactory.NULL_AI;
    }
}

