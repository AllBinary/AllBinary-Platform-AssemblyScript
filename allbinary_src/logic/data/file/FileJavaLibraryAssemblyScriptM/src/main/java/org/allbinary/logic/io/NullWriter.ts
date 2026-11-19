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
// import java.io.Writer

@global export class NullWriter extends JWriter {

    jclassName(): string {
        return "org.allbinary.logic.io.NullWriter";
    }
    @lazy static jv_NULL_WRITER: NullWriter | null = null;
    @lazy static js_NULL_WRITER: bool = false;
    static get NULL_WRITER(): NullWriter | null {
        if (!NullWriter.js_NULL_WRITER) {
            NullWriter.js_NULL_WRITER = true;
            NullWriter.jv_NULL_WRITER = new NullWriter().jinit_NullWriter_0();
        }
        return NullWriter.jv_NULL_WRITER;
    }
    static set NULL_WRITER(value: NullWriter | null) {
        NullWriter.js_NULL_WRITER = true;
        NullWriter.jv_NULL_WRITER = value;
    }

    jinit_NullWriter_0(): NullWriter {
        super.jinit_JWriter_0();
        return this;
    }
    

    write_1_int(c: i32): void {
    }
    

    write_3_charAintint(cbuf: StaticArray<u16> | null, off: i32, len: i32): void {
    }
    

    write_1_String(str: string | null): void {
    }
    

    write_3_Stringintint(str: string | null, off: i32, len: i32): void {
    }
    

    flush(): void {
    }
    

    close(): void {
    }
}

