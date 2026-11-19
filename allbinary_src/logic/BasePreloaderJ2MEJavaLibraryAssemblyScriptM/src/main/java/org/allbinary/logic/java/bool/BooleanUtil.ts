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
// package org.allbinary.logic.java.bool
// import org.allbinary.TsUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringValidationUtil

@global export class BooleanUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.bool.BooleanUtil";
    }
    @lazy static jv_instance: BooleanUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BooleanUtil | null {
        if (!BooleanUtil.js_instance) {
            BooleanUtil.js_instance = true;
            BooleanUtil.jv_instance = new BooleanUtil().jinit_BooleanUtil_0();
        }
        return BooleanUtil.jv_instance;
    }
    static set instance(value: BooleanUtil | null) {
        BooleanUtil.js_instance = true;
        BooleanUtil.jv_instance = value;
    }
    tsUtil: TsUtil | null = null;

    jfields_BooleanUtil(): void {
    this.tsUtil = TsUtil.getInstance();
    }
    

    static getInstance(): BooleanUtil | null {
        return BooleanUtil.instance;
    }
    

    jinit_BooleanUtil_0(): BooleanUtil {
        super.jinit_JObject_0();
        this.jfields_BooleanUtil();
        return this;
    }
    

    getFromString(booleanString: string | null): bool {
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return false;
        let booleanFactory: BooleanFactory | null = BooleanFactory.getInstance(); if (JThrowable.pending !== null) return false;
        if (stringValidationUtil!.isEmpty(booleanString)) {
            return false;
        } if (JThrowable.pending !== null) return false;
        let booleanStringLowerCase: string | null = JString.toLowerCase0(booleanString); if (JThrowable.pending !== null) return false;
        if (this.tsUtil!.compareTo(booleanStringLowerCase, booleanFactory!.TRUE_STRING) == 0) {
            return true;
        } else if (this.tsUtil!.compareTo(booleanStringLowerCase, booleanFactory!.FALSE_STRING) == 0) {
            return false;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Invalid booleanString - Must be true or false")); return false; }
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isStringBoolean(booleanString: string | null): bool {
        let booleanFactory: BooleanFactory | null = BooleanFactory.getInstance(); if (JThrowable.pending !== null) return false;
        let booleanStringLowerCase: string | null = JString.toLowerCase0(booleanString); if (JThrowable.pending !== null) return false;
        if (JString.compareTo1(booleanStringLowerCase, booleanFactory!.TRUE_STRING) == 0 || JString.compareTo1(booleanStringLowerCase, booleanFactory!.FALSE_STRING) == 0) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toStringFromBooleanArray(booleanArray: StaticArray<bool> | null): string | null {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = booleanArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            stringMaker!.appendboolean(booleanArray![index]); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringMaker);
    }
}

