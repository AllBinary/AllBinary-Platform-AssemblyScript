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
// package org.allbinary.util
// import jsinterop.annotations.JsType
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringMaker
// import jsinterop.annotations.JsConstructor

@global export class BasicArrayListS extends BasicArrayList {

    jclassName(): string {
        return "org.allbinary.util.BasicArrayListS";
    }
    

    jinit_BasicArrayListS_1(size: i32): BasicArrayListS {
        super.jinit_BasicArrayList_1(NullUtil.getInstance()!.NULL_OBJECT_ARRAY);
        if (size < 0) {
            { JThrowable.raise(new JIllegalArgumentException().jinit_JIllegalArgumentException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Init Size Exception: ")!.appendint(size)))); return this; }
        } if (JThrowable.pending !== null) return this;
        this.objectArray = new StaticArray<Object | null>(size);
        return this;
    }
}

