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
// import org.allbinary.graphics.form.item.ABTextFieldItem
// import org.allbinary.logic.control.validate.ValidatorBase
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class TextFieldItemValidator extends ValidatorBase {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.validation.TextFieldItemValidator";
    }
    textFieldItem: ABTextFieldItem | null = null;
    min: i32 = 0;
    max: i32 = 0;
    allowOnEmpty: bool = false;

    jfields_TextFieldItemValidator(): void {
    
    
    
    
    }
    

    jinit_TextFieldItemValidator_4(textFieldItem: ABTextFieldItem | null, min: i32, max: i32, allowOnEmpty: bool): TextFieldItemValidator {
        super.jinit_ValidatorBase_0();
        this.jfields_TextFieldItemValidator();
        this.textFieldItem = textFieldItem;
        this.min = min;
        this.max = max;
        this.allowOnEmpty = allowOnEmpty;
        return this;
    }
    

    isValid(): JBoolean | null {
        let booleanFactory: BooleanFactory | null = BooleanFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let result: JBoolean | null = booleanFactory!.TRUE;
        let string: string | null = this.textFieldItem!.getString(); if (JThrowable.pending !== null) return null;
        let textLength: i32 = JString.length0(string); if (JThrowable.pending !== null) return null;
        if ((textLength == 0 && this.allowOnEmpty) || textLength > this.min && textLength < this.max) {
        } else {
            if (textLength < this.min) {
                result = booleanFactory!.FALSE;
            } else if (textLength > this.max) {
                result = booleanFactory!.FALSE;
            }
        }
        return result;
    }
    

    toList(): BasicArrayList | null {
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let string: string | null = this.textFieldItem!.getString(); if (JThrowable.pending !== null) return null;
        let textLength: i32 = JString.length0(string); if (JThrowable.pending !== null) return null;
        if (textLength > this.min && textLength < this.max) {
        } else {
            let label: string | null = this.textFieldItem!.getLabel(); if (JThrowable.pending !== null) return null;
            let name: string | null = JString.substring2(label, 0, JString.length0(label) - 2); if (JThrowable.pending !== null) return null;
            if (textLength < this.min) {
                list!.add(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(name)!.append(" is to short"))); if (JThrowable.pending !== null) return null;
            } else if (textLength > this.max) {
                list!.add(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(name)!.append(" is to long"))); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return list;
    }
}

