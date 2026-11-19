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
// import java.io.IOException
// import java.io.OutputStream

@global export class NullOutputStream extends JOutputStream {

    jclassName(): string {
        return "org.allbinary.logic.io.NullOutputStream";
    }
    @lazy static jv_NULL_OUTPUT_STREAM: NullOutputStream | null = null;
    @lazy static js_NULL_OUTPUT_STREAM: bool = false;
    static get NULL_OUTPUT_STREAM(): NullOutputStream | null {
        if (!NullOutputStream.js_NULL_OUTPUT_STREAM) {
            NullOutputStream.js_NULL_OUTPUT_STREAM = true;
            NullOutputStream.jv_NULL_OUTPUT_STREAM = new NullOutputStream().jinit_NullOutputStream_0();
        }
        return NullOutputStream.jv_NULL_OUTPUT_STREAM;
    }
    static set NULL_OUTPUT_STREAM(value: NullOutputStream | null) {
        NullOutputStream.js_NULL_OUTPUT_STREAM = true;
        NullOutputStream.jv_NULL_OUTPUT_STREAM = value;
    }

    jinit_NullOutputStream_0(): NullOutputStream {
        super.jinit_JOutputStream_0();
        return this;
    }
    

    write_1(b: i32): void {
    }
    

    write_3(b: StaticArray<i8> | null, off: i32, len: i32): void {
    }
    

    close(): void {
    }
}

