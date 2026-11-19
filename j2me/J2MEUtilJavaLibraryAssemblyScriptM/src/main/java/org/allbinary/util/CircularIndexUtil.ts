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
// package org.allbinary.util
// import jsinterop.annotations.JsType
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class CircularIndexUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.util.CircularIndexUtil";
    }
    @lazy static jv_NULL_CIRCULAR_INDEX_UTIL: CircularIndexUtil | null = null;
    @lazy static js_NULL_CIRCULAR_INDEX_UTIL: bool = false;
    static get NULL_CIRCULAR_INDEX_UTIL(): CircularIndexUtil | null {
        if (!CircularIndexUtil.js_NULL_CIRCULAR_INDEX_UTIL) {
            CircularIndexUtil.js_NULL_CIRCULAR_INDEX_UTIL = true;
            CircularIndexUtil.jv_NULL_CIRCULAR_INDEX_UTIL = new CircularIndexUtil().jinit_CircularIndexUtil_2(0, 0);
        }
        return CircularIndexUtil.jv_NULL_CIRCULAR_INDEX_UTIL;
    }
    static set NULL_CIRCULAR_INDEX_UTIL(value: CircularIndexUtil | null) {
        CircularIndexUtil.js_NULL_CIRCULAR_INDEX_UTIL = true;
        CircularIndexUtil.jv_NULL_CIRCULAR_INDEX_UTIL = value;
    }
    index: i32 = 0;
    lastIndex: i32 = 0;
    size: i32 = 0;

    jfields_CircularIndexUtil(): void {
    this.index = 0;
    this.lastIndex = 0;
    this.size = 0;
    }
    

    jinit_CircularIndexUtil_2(index: i32, size: i32): CircularIndexUtil {
        super.jinit_JObject_0();
        this.jfields_CircularIndexUtil();
        this.setSize(size); if (JThrowable.pending !== null) return this;
        this.setIndex(index); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    next(): i32 {
        if (this.index >= this.lastIndex) {
            this.index = 0;
        } else {
            this.index++;
        }
        return this.index;
    }
    

    previous(): i32 {
        if (this.index < 1) {
            this.index = this.lastIndex;
        } else {
            this.index--;
        }
        return this.index;
    }
    

    setIndex(index: i32): void {
        if (index > this.lastIndex) {
            return;
        }
        this.index = index;
    }
    

    getIndex(): i32 {
        return this.index;
    }
    

    static createInstance(max: i32): CircularIndexUtil | null {
        return new CircularIndexUtil().jinit_CircularIndexUtil_2(0, max);
    }
    

    static createInstanceAt(index: i32, max: i32): CircularIndexUtil | null {
        return new CircularIndexUtil().jinit_CircularIndexUtil_2(index, max);
    }
    

    setSize(size: i32): void {
        this.size = size;
        this.lastIndex = size - 1;
        this.index = 0;
    }
    

    getSize(): i32 {
        return this.size;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.INDEX_LABEL)!.appendint(this.index)!.append("lastIndex: ")!.appendint(this.lastIndex)!.append("size: ")!.appendint(this.size));
    }
}

