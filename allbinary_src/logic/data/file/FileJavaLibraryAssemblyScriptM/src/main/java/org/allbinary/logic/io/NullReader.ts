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
// import java.io.Reader

@global export class NullReader extends JReader {

    jclassName(): string {
        return "org.allbinary.logic.io.NullReader";
    }
    @lazy static jv_NULL_READER: NullReader | null = null;
    @lazy static js_NULL_READER: bool = false;
    static get NULL_READER(): NullReader | null {
        if (!NullReader.js_NULL_READER) {
            NullReader.js_NULL_READER = true;
            NullReader.jv_NULL_READER = new NullReader().jinit_NullReader_0();
        }
        return NullReader.jv_NULL_READER;
    }
    static set NULL_READER(value: NullReader | null) {
        NullReader.js_NULL_READER = true;
        NullReader.jv_NULL_READER = value;
    }

    jinit_NullReader_0(): NullReader {
        super.jinit_JReader_0();
        return this;
    }
    

    read_0(): i32 {
        return -1;
    }
    

    read_3(cbuf: StaticArray<u16> | null, off: i32, len: i32): i32 {
        return -1;
    }
    

    ready(): bool {
        return false;
    }
    

    skip(n: i64): i64 {
        return (<i64>0);
    }
    

    close(): void {
    }
}

