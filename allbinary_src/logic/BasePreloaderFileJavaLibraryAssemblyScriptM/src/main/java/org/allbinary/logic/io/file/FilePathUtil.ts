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
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringValidationUtil

//Used to correct user input for paths
@global export class FilePathUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FilePathUtil";
    }
    

    jinit_FilePathUtil_0(): FilePathUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static adjust(path: string | null): string | null {
        let abPathData: AbPathData | null = AbPathData.getInstance(); if (JThrowable.pending !== null) return null;
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let filePathData: FilePathData | null = FilePathData.getInstance(); if (JThrowable.pending !== null) return null;
        if (stringValidationUtil!.isEmpty(path)) {
            return filePathData!.PATH_START;
        } if (JThrowable.pending !== null) return null;
        path = JString.replace2(path, abPathData!.SEPARATORCHAR, filePathData!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        return path;
    }
}

