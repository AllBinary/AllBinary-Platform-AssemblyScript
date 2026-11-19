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
// import java.io.FileNotFoundException
// import java.io.FileOutputStream
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.AbFileNativeUtil

@global export class AbFileOutputStream extends JFileOutputStream {

    jclassName(): string {
        return "org.allbinary.logic.io.AbFileOutputStream";
    }
    

    static createFromAbFile(file: AbFile | null): AbFileOutputStream | null {
        return new AbFileOutputStream().jinit_AbFileOutputStream_2(file!.getPath(), false);
    }
    

    static createFromAbFileAppend(file: AbFile | null, append: bool): AbFileOutputStream | null {
        return new AbFileOutputStream().jinit_AbFileOutputStream_2(file!.getPath(), append);
    }
    

    static createFromFilePath(name: string | null): AbFileOutputStream | null {
        return new AbFileOutputStream().jinit_AbFileOutputStream_2(name, false);
    }
    

    static createFromFilePathAppend(name: string | null, append: bool): AbFileOutputStream | null {
        return new AbFileOutputStream().jinit_AbFileOutputStream_2(name, append);
    }
    

    jinit_AbFileOutputStream_2(name: string | null, append: bool): AbFileOutputStream {
        super.jinit_JFileOutputStream_2(name, append);
        return this;
    }
}

