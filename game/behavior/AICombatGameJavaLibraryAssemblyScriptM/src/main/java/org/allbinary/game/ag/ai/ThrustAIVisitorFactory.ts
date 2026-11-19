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

@global export class ThrustAIVisitorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.ThrustAIVisitorFactory";
    }
    @lazy static jv_instance: ThrustAIVisitor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThrustAIVisitor | null {
        if (!ThrustAIVisitorFactory.js_instance) {
            ThrustAIVisitorFactory.js_instance = true;
            ThrustAIVisitorFactory.jv_instance = new ThrustAIVisitor().jinit_ThrustAIVisitor_0();
        }
        return ThrustAIVisitorFactory.jv_instance;
    }
    static set instance(value: ThrustAIVisitor | null) {
        ThrustAIVisitorFactory.js_instance = true;
        ThrustAIVisitorFactory.jv_instance = value;
    }

    jinit_ThrustAIVisitorFactory_0(): ThrustAIVisitorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ThrustAIVisitor | null {
        return ThrustAIVisitorFactory.instance;
    }
}

