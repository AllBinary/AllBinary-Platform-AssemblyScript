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

@global export class LastKeyAIVisitorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.LastKeyAIVisitorFactory";
    }
    @lazy static jv_instance: LastKeyAIVisitor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LastKeyAIVisitor | null {
        if (!LastKeyAIVisitorFactory.js_instance) {
            LastKeyAIVisitorFactory.js_instance = true;
            LastKeyAIVisitorFactory.jv_instance = new LastKeyAIVisitor().jinit_LastKeyAIVisitor_0();
        }
        return LastKeyAIVisitorFactory.jv_instance;
    }
    static set instance(value: LastKeyAIVisitor | null) {
        LastKeyAIVisitorFactory.js_instance = true;
        LastKeyAIVisitorFactory.jv_instance = value;
    }

    jinit_LastKeyAIVisitorFactory_0(): LastKeyAIVisitorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): LastKeyAIVisitor | null {
        return LastKeyAIVisitorFactory.instance;
    }
}

