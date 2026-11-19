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
// package org.allbinary.graphics.form.item.validation
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.util.visitor.Visitor

@global export class TextItemVisitor extends Visitor {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.validation.TextItemVisitor";
    }
    

    jinit_TextItemVisitor_0(): TextItemVisitor {
        super.jinit_Visitor_0();
        return this;
    }
    

    visit(anyType: Object | null): Object | null {
        let value: string | null = changetype<string | null>(anyType);
        if (JString.length0(value) < 2) {
            return BooleanFactory.getInstance()!.TRUE;
        } else {
            return BooleanFactory.getInstance()!.FALSE;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

