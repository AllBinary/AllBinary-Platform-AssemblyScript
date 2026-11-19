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
// import java.io.BufferedWriter
// import java.io.FileReader
// import java.io.FileWriter
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.AbFileNativeUtil
// import org.allbinary.logic.string.StringUtil

@global export class BufferedIOUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.BufferedIOUtil";
    }

    jinit_BufferedIOUtil_0(): BufferedIOUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static copy(backupFile: AbFile | null, backupFileBak: AbFile | null): void {
        let line: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return;
        let tmpOut: JBufferedWriter | null = new JBufferedWriter().jinit_JBufferedWriter_1(new JFileWriter().jinit_JFileWriter_1(AbFileNativeUtil.get(backupFileBak))); if (JThrowable.pending !== null) return;
        let tmpIn: JBufferedReader | null = new JBufferedReader().jinit_JBufferedReader_1(new JFileReader().jinit_JFileReader_1(AbFileNativeUtil.get(backupFile))); if (JThrowable.pending !== null) return;
        while (tmpIn!.ready()) {
            line = tmpIn!.readLine(); if (JThrowable.pending !== null) return;
            tmpOut!.write3(line, 0, JString.length0(line)); if (JThrowable.pending !== null) return;
            tmpOut!.newLine(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        tmpOut!.flush(); if (JThrowable.pending !== null) return;
    }
}

