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
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class StringUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.StringUtil";
    }
    @lazy static jv_instance: StringUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StringUtil | null {
        if (!StringUtil.js_instance) {
            StringUtil.js_instance = true;
            StringUtil.jv_instance = new StringUtil().jinit_StringUtil_0();
        }
        return StringUtil.jv_instance;
    }
    static set instance(value: StringUtil | null) {
        StringUtil.js_instance = true;
        StringUtil.jv_instance = value;
    }
    INIT_STRING: string | null = null;
    NULL_STRING: string | null = null;
    EMPTY_STRING: string | null = null;
    ONE_EMPTY_STRING_ARRAY: StaticArray<string | null> | null = null;
    ONE_EMPTY_STRING_ARRAY_OF_ARRAYS: StaticArray<StaticArray<string | null> | null> | null = null;
    stringArray: StaticArray<string | null> | null = null;

    jfields_StringUtil(): void {
    this.INIT_STRING = JString.new1("");
    this.NULL_STRING = "null";
    this.EMPTY_STRING = "";
    this.ONE_EMPTY_STRING_ARRAY = StaticArray.fromArray<string | null>([this.EMPTY_STRING]);
    this.ONE_EMPTY_STRING_ARRAY_OF_ARRAYS = JArrays.new2<string | null>(0, 0);
    this.stringArray = new StaticArray<string | null>(0);
    }
    

    static getInstance(): StringUtil | null {
        return StringUtil.instance;
    }
    

    jinit_StringUtil_0(): StringUtil {
        super.jinit_JObject_0();
        this.jfields_StringUtil();
        return this;
    }
    

    getNonNull(string: string | null): string | null {
        return string;
    }
    

    getArrayInstance(): StaticArray<string | null> | null {
        return this.stringArray;
    }
    

    count(string: string | null, aChar: u16): i32 {
        let count: i32 = 0;
        let size: i32 = JString.length0(string); if (JThrowable.pending !== null) return 0;
        for (let index: i32 = 0; index < size; index++) {
            if (JString.charAt1(string, index) == aChar) {
                count++;
            } if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        return count;
    }
    

    toString1(anyType: Object | null): string | null {
        if (anyType != null) {
            return JObject.jtoString(anyType);
        } else {
            return this.NULL_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

