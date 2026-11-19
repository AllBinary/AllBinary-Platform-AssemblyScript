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
// import org.allbinary.logic.util.visitor.Visitor

@global export class DiveAndDirectionalTrackingAICompositeVisitorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.DiveAndDirectionalTrackingAICompositeVisitorFactory";
    }

    jinit_DiveAndDirectionalTrackingAICompositeVisitorFactory_0(): DiveAndDirectionalTrackingAICompositeVisitorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance1(diveBombAI: DiveAndDirectionalTrackingAI | null): Visitor | null {
        return Visitor.getInstance();
    }
}

