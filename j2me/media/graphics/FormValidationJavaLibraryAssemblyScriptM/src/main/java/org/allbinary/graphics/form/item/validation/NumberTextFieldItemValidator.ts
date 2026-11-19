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
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class NumberTextFieldItemValidator extends ValidatorBase {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.validation.NumberTextFieldItemValidator";
    }
    textFieldItem: ABTextFieldItem | null = null;
    min: i32 = 0;
    max: i32 = 0;
    maxChars: i32 = 0;

    jfields_NumberTextFieldItemValidator(): void {
    
    
    
    
    }
    

    jinit_NumberTextFieldItemValidator_4(textFieldItem: ABTextFieldItem | null, maxChars: i32, min: i32, max: i32): NumberTextFieldItemValidator {
        super.jinit_ValidatorBase_0();
        this.jfields_NumberTextFieldItemValidator();
        this.textFieldItem = textFieldItem;
        this.min = min;
        this.max = max;
        this.maxChars = maxChars;
        return this;
    }
    

    isNumberValid(value: JInteger | null): JBoolean | null {
        return BooleanFactory.getInstance()!.TRUE;
    }
    

    toNumberVector(value: JInteger | null): BasicArrayList | null {
        return new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    isValid(): JBoolean | null {
        let result: JBoolean | null = BooleanFactory.getInstance()!.TRUE; if (JThrowable.pending !== null) return null;
        let string: string | null = this.textFieldItem!.getString(); if (JThrowable.pending !== null) return null;
        let textLength: i32 = JString.length0(string); if (JThrowable.pending !== null) return null;
        if (textLength > 0 && textLength < this.maxChars) {
            do {
                JInteger.parseInt1(this.textFieldItem!.getString()); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JNumberFormatException) {
                let e: JNumberFormatException | null = changetype<JNumberFormatException | null>(JThrowable.take());
                result = BooleanFactory.getInstance()!.FALSE; if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } else {
            if (textLength < 1) {
                result = BooleanFactory.getInstance()!.FALSE; if (JThrowable.pending !== null) return null;
            } else if (textLength > this.maxChars) {
                result = BooleanFactory.getInstance()!.FALSE; if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return result;
    }
    

    toList(): BasicArrayList | null {
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let string: string | null = this.textFieldItem!.getString(); if (JThrowable.pending !== null) return null;
        let textLength: i32 = JString.length0(string); if (JThrowable.pending !== null) return null;
        let label: string | null = this.textFieldItem!.getLabel(); if (JThrowable.pending !== null) return null;
        let name: string | null = JString.substring2(label, 0, JString.length0(label) - 2); if (JThrowable.pending !== null) return null;
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        if (textLength > 0 && textLength < this.maxChars) {
            do {
                let number: JInteger | null = smallIntegerSingletonFactory!.createInstance(JInteger.parseInt1(this.textFieldItem!.getString())); if (JThrowable.pending !== null) break;
                if (number!.intValue() > this.min) {
                    stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) break;
                    list!.add(JObject.jtoString(stringMaker!.append(name)!.append(" is to small"))); if (JThrowable.pending !== null) break;
                } else if (number!.intValue() > this.max) {
                    stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) break;
                    list!.add(JObject.jtoString(stringMaker!.append(name)!.append(" is to large"))); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JNumberFormatException) {
                let e: JNumberFormatException | null = changetype<JNumberFormatException | null>(JThrowable.take());
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                list!.add(JObject.jtoString(stringMaker!.append(name)!.append(" is not a number"))); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } else {
            if (textLength < 1) {
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                list!.add(JObject.jtoString(stringMaker!.append(name)!.append(" is to short"))); if (JThrowable.pending !== null) return null;
            } else if (textLength > this.maxChars) {
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                list!.add(JObject.jtoString(stringMaker!.append(name)!.append(" is to long"))); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return list;
    }
}

