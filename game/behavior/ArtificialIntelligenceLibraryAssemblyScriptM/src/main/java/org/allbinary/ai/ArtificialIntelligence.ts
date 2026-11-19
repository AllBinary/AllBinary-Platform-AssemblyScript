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
// package org.allbinary.ai
// import org.allbinary.layer.AllBinaryLayerManager

@global export class ArtificialIntelligence extends JObject implements ArtificialIntelligenceInterface {

    jclassName(): string {
        return "org.allbinary.ai.ArtificialIntelligence";
    }
    static readonly AI_ID: i32 = 2;
    @lazy static jv_instance: ArtificialIntelligence | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ArtificialIntelligence | null {
        if (!ArtificialIntelligence.js_instance) {
            ArtificialIntelligence.js_instance = true;
            ArtificialIntelligence.jv_instance = new ArtificialIntelligence().jinit_ArtificialIntelligence_0();
        }
        return ArtificialIntelligence.jv_instance;
    }
    static set instance(value: ArtificialIntelligence | null) {
        ArtificialIntelligence.js_instance = true;
        ArtificialIntelligence.jv_instance = value;
    }
    

    static getInstance(): ArtificialIntelligence | null {
        return ArtificialIntelligence.instance;
    }
    

    jinit_ArtificialIntelligence_0(): ArtificialIntelligence {
        super.jinit_JObject_0();
        return this;
    }
    

    processAI(layerManager: AllBinaryLayerManager | null): void {
    }
    

    getId(): i32 {
        return 1;
    }
}

