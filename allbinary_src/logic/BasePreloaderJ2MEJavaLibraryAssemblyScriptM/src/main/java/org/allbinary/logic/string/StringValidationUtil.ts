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
// package org.allbinary.logic.string
// import org.allbinary.TsUtil

@global export class StringValidationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.StringValidationUtil";
    }
    @lazy static jv_instance: StringValidationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StringValidationUtil | null {
        if (!StringValidationUtil.js_instance) {
            StringValidationUtil.js_instance = true;
            StringValidationUtil.jv_instance = new StringValidationUtil().jinit_StringValidationUtil_0();
        }
        return StringValidationUtil.jv_instance;
    }
    static set instance(value: StringValidationUtil | null) {
        StringValidationUtil.js_instance = true;
        StringValidationUtil.jv_instance = value;
    }
    stringUtil: StringUtil | null = null;
    tsUtil: TsUtil | null = null;

    jfields_StringValidationUtil(): void {
    this.stringUtil = StringUtil.getInstance();
    this.tsUtil = TsUtil.getInstance();
    }
    

    static getInstance(): StringValidationUtil | null {
        return StringValidationUtil.instance;
    }
    

    jinit_StringValidationUtil_0(): StringValidationUtil {
        super.jinit_JObject_0();
        this.jfields_StringValidationUtil();
        return this;
    }
    

    containsSpaces(value: string | null): bool {
        if (JString.indexOf1(value, (<u16>0x20)) >= 0) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isNumber(value: string | null): bool {
        let numberOfDecimalPoints: i32 = 0;
        for (let index: i32 = 0; index < JString.length0(value); index++) {
            let digit: u16 = JString.charAt1(value, index); if (JThrowable.pending !== null) return false;
            if (!this.isNumberFromChar(digit) && digit != (<u16>0x2E)) {
                return false;
            } if (JThrowable.pending !== null) return false;
            if (digit == (<u16>0x2E)) {
                numberOfDecimalPoints++;
                if (numberOfDecimalPoints > 1) {
                    return false;
                }
            }
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    isNumberFromChar(digit: u16): bool {
        if (digit != (<u16>0x30) && digit != (<u16>0x31) && digit != (<u16>0x32) && digit != (<u16>0x33) && digit != (<u16>0x34) && digit != (<u16>0x35) && digit != (<u16>0x36) && digit != (<u16>0x37) && digit != (<u16>0x38) && digit != (<u16>0x39)) {
            return false;
        }
        return true;
    }
    

    isValidRequired(value: string | null, min: i32, max: i32): bool {
        if (JString.length0(value) < min || JString.length0(value) > max) {
            return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    isValidRequiredNumber(value: string | null, min: i32, max: i32): bool {
        if (this.isEmpty(value) || JString.length0(value) < min || JString.length0(value) > max) {
            return false;
        } if (JThrowable.pending !== null) return false;
        if (!this.isNumber(value)) {
            return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    isValidNotRequired(value: string | null, min: i32, max: i32): bool {
        if (JString.length0(value) > 0) {
            if (JString.length0(value) < min || JString.length0(value) > max) {
                return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    isValidNotRequiredNumber(value: string | null, min: i32, max: i32): bool {
        if (JString.length0(value) > 0) {
            if (this.tsUtil!.compareTo(value, this.stringUtil!.NULL_STRING) == 0 || JString.length0(value) < min || JString.length0(value) > max) {
                return false;
            } if (JThrowable.pending !== null) return false;
            if (!this.isNumber(value)) {
                return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    isEmpty(string: string | null): bool {
        if (this.tsUtil!.compareTo(string, this.stringUtil!.NULL_STRING) != 0 && this.tsUtil!.compareTo(string, this.stringUtil!.EMPTY_STRING) != 0) {
            return false;
        } else {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

