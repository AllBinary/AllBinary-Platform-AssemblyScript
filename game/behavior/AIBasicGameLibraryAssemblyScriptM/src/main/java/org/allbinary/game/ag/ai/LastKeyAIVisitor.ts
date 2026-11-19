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
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.string.CommonStrings

@global export class LastKeyAIVisitor extends Visitor {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.LastKeyAIVisitor";
    }
    logUtil: LogUtil | null = null;
    TRUE: JBoolean | null = null;

    jfields_LastKeyAIVisitor(): void {
    this.logUtil = LogUtil.getInstance();
    this.TRUE = BooleanFactory.getInstance()!.TRUE;
    }
    

    jinit_LastKeyAIVisitor_0(): LastKeyAIVisitor {
        super.jinit_Visitor_0();
        this.jfields_LastKeyAIVisitor();
        return this;
    }
    

    visit(anyType: Object | null): Object | null {
        do {
            let basicAI: BasicAI | null = changetype<BasicAI | null>(anyType);
            let key: i32 = basicAI!.getLastKey(); if (JThrowable.pending !== null) break;
            if (key != -1) {
                basicAI!.processKeyAI(key); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.VISIT, e); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.TRUE;
    }
}

