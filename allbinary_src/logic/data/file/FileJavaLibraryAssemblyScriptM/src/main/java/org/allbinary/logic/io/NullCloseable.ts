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
// package org.allbinary.logic.io
// import java.io.Closeable
// import java.io.IOException

@global export class NullCloseable extends JObject implements JCloseable {

    jclassName(): string {
        return "org.allbinary.logic.io.NullCloseable";
    }
    @lazy static jv_NULL_CLOSEABLE: NullCloseable | null = null;
    @lazy static js_NULL_CLOSEABLE: bool = false;
    static get NULL_CLOSEABLE(): NullCloseable | null {
        if (!NullCloseable.js_NULL_CLOSEABLE) {
            NullCloseable.js_NULL_CLOSEABLE = true;
            NullCloseable.jv_NULL_CLOSEABLE = new NullCloseable().jinit_NullCloseable_0();
        }
        return NullCloseable.jv_NULL_CLOSEABLE;
    }
    static set NULL_CLOSEABLE(value: NullCloseable | null) {
        NullCloseable.js_NULL_CLOSEABLE = true;
        NullCloseable.jv_NULL_CLOSEABLE = value;
    }

    jinit_NullCloseable_0(): NullCloseable {
        super.jinit_JObject_0();
        return this;
    }
    

    close(): void {
    }
}

