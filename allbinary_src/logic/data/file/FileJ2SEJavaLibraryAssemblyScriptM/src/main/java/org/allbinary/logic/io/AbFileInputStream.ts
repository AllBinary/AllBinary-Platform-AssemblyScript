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
// import java.io.File
// import java.io.FileInputStream
// import java.io.FileNotFoundException
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.AbFileNativeUtil

@global export class AbFileInputStream extends JFileInputStream {

    jclassName(): string {
        return "org.allbinary.logic.io.AbFileInputStream";
    }
    

    jinit_AbFileInputStream_1(name: string | null): AbFileInputStream {
        super.jinit_JFileInputStream_1(name);
        return this;
    }
    

    static createFromAbFile(file: AbFile | null): AbFileInputStream | null {
        return new AbFileInputStream().jinit_AbFileInputStream_1(AbFileNativeUtil.get(file)!.getPath());
    }
    

    static createFromFile(file: JFile | null): AbFileInputStream | null {
        return new AbFileInputStream().jinit_AbFileInputStream_1(file!.getPath());
    }
}

