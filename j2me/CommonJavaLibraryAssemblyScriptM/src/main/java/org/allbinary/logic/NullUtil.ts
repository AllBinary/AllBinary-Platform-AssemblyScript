/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.logic
// import jsinterop.annotations.JsType

//ActualPlatform
@global export class NullUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.NullUtil";
    }
    @lazy static jv_instance: NullUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NullUtil | null {
        if (!NullUtil.js_instance) {
            NullUtil.js_instance = true;
            NullUtil.jv_instance = new NullUtil().jinit_NullUtil_0();
        }
        return NullUtil.jv_instance;
    }
    static set instance(value: NullUtil | null) {
        NullUtil.js_instance = true;
        NullUtil.jv_instance = value;
    }
    NULL_OBJECT: Object | null = null;
    NULL_CLASS: JClass | null = null;
    NULL_OBJECT_ARRAY: StaticArray<Object | null> | null = null;
    NULL_CHAR_ARRAY: StaticArray<u16> | null = null;
    NULL_BYTE_ARRAY: StaticArray<i8> | null = null;
    NULL_SHORT_ARRAY_ARRAY: StaticArray<StaticArray<i16> | null> | null = null;
    NULL_INT_ARRAY: StaticArray<i32> | null = null;
    NULL_INT_ARRAY_ARRAY: StaticArray<StaticArray<i32> | null> | null = null;
    NULL_INT_ARRAY_ARRAY_ARRAY: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;
    NULL_FLOAT_ARRAY: StaticArray<f32> | null = null;

    jfields_NullUtil(): void {
    this.NULL_OBJECT = new JObject();
    this.NULL_CLASS = JObject.jclassOf(this.NULL_OBJECT);
    this.NULL_OBJECT_ARRAY = new StaticArray<Object | null>(0);
    this.NULL_CHAR_ARRAY = new StaticArray<u16>(0);
    this.NULL_BYTE_ARRAY = new StaticArray<i8>(0);
    this.NULL_SHORT_ARRAY_ARRAY = JArrays.new2<i16>(0, 0);
    this.NULL_INT_ARRAY = new StaticArray<i32>(0);
    this.NULL_INT_ARRAY_ARRAY = JArrays.new2<i32>(0, 0);
    this.NULL_INT_ARRAY_ARRAY_ARRAY = JArrays.new3<i32>(0, 0, 0);
    this.NULL_FLOAT_ARRAY = new StaticArray<f32>(0);
    }

    jinit_NullUtil_0(): NullUtil {
        super.jinit_JObject_0();
        this.jfields_NullUtil();
        return this;
    }
    

    static getInstance(): NullUtil | null {
        return NullUtil.instance;
    }
}

