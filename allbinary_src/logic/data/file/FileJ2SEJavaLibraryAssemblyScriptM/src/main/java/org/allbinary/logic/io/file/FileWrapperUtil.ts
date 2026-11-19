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
// package org.allbinary.logic.io.file
// import java.io.File
// import org.allbinary.logic.communication.log.PreLogUtil

@global export class FileWrapperUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileWrapperUtil";
    }

    jinit_FileWrapperUtil_0(): FileWrapperUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static wrapFiles(files: StaticArray<Object | null> | null): StaticArray<AbFile | null> | null {
        do {
            let abFileArray: StaticArray<AbFile | null> | null = new StaticArray<AbFile | null>(files!.length);
            for (let index: i32 = files!.length - 1; index >= 0; index--) {
                abFileArray![index] = new AbFile().jinit_AbFile_1(changetype<JFile | null>(files![index])); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return abFileArray;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putSE("Exception Wrapping Files", "FileWrapperUtil", "wrapFiles", e); if (JThrowable.pending !== null) return null;
            return changetype<StaticArray<AbFile | null> | null>(new StaticArray<AbFile | null>(0));
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static wrapFile(file: JFile | null): AbFile | null {
        do {
            return new AbFile().jinit_AbFile_1(file);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putSE("Exception Wrapping File", "FileWrapperUtil", "wrapFile", e); if (JThrowable.pending !== null) return null;
            return AbFile.NULL_FILE;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

