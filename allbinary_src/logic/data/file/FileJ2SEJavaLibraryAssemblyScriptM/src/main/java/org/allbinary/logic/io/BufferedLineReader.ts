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
// package org.allbinary.logic.io
// import java.io.BufferedReader
// import java.io.FileReader
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.AbFileNativeUtil

@global export class BufferedLineReader extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.BufferedLineReader";
    }
    tmpIn: JBufferedReader | null = null;

    jfields_BufferedLineReader(): void {
    
    }
    

    jinit_BufferedLineReader_1(file: AbFile | null): BufferedLineReader {
        super.jinit_JObject_0();
        this.jfields_BufferedLineReader();
        this.tmpIn = new JBufferedReader().jinit_JBufferedReader_1(new JFileReader().jinit_JFileReader_1(AbFileNativeUtil.get(file))); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    readUpToLines(readAheadIndex: i64): void {
    }
    

    readLine(): string | null {
        return this.tmpIn!.readLine();
    }
    

    ready(): bool {
        return this.tmpIn!.ready();
    }
    

    getSize(): i64 {
        return (<i64>0);
    }
    

    getCurrent(): i32 {
        return 0;
    }
}

