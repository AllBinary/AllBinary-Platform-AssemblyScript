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
// import org.allbinary.game.input.TextNotificationUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.string.CommonStrings

@global export class TextItemUserIdentifierVisitor extends Visitor {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.validation.TextItemUserIdentifierVisitor";
    }
    logUtil: LogUtil | null = null;

    jfields_TextItemUserIdentifierVisitor(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_TextItemUserIdentifierVisitor_0(): TextItemUserIdentifierVisitor {
        super.jinit_Visitor_0();
        this.jfields_TextItemUserIdentifierVisitor();
        return this;
    }
    

    visit_1_Object(anyType: Object | null): Object | null {
        let value: string | null = changetype<string | null>(anyType);
        if (JString.length0(value) < 2) {
            let charValue: u16 = JString.charAt1(value, 0); if (JThrowable.pending !== null) return null;
            let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return null;
            if (stringValidationUtil!.isNumber(value)) {
                return BooleanFactory.getInstance()!.TRUE;
            } else if (this.isLetter(charValue)) {
                return BooleanFactory.getInstance()!.TRUE;
            } else {
                do {
                    TextNotificationUtil.getInstance()!.fireError("Only Letters & Numbers Allowed"); if (JThrowable.pending !== null) break;
                } while (false); if (JThrowable.pending != null) {
                    let e: JException | null = changetype<JException | null>(JThrowable.take());
                    let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.VISIT, e); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
                return BooleanFactory.getInstance()!.FALSE;
            } if (JThrowable.pending !== null) return null;
        } else {
            return BooleanFactory.getInstance()!.FALSE;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    isLetter(charValue: u16): bool {
        let value: i32 = (<i32>(charValue));
        return (value > 64 && value < 91) || (value > 96 && value < 123);
    }
}

