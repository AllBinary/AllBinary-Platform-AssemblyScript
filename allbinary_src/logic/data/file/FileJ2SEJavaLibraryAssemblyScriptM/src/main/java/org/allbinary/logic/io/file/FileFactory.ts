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

@global export class FileFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileFactory";
    }
    @lazy static jv_instance: FileFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileFactory | null {
        if (!FileFactory.js_instance) {
            FileFactory.js_instance = true;
            FileFactory.jv_instance = new FileFactory().jinit_FileFactory_0();
        }
        return FileFactory.jv_instance;
    }
    static set instance(value: FileFactory | null) {
        FileFactory.js_instance = true;
        FileFactory.jv_instance = value;
    }

    jinit_FileFactory_0(): FileFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): FileFactory | null {
        return FileFactory.instance;
    }
    

    getInstance1(filePath: string | null): AbFile | null {
        return AbFile.createAbFileFromRawPath(filePath);
    }
    

    getInstance2(file: AbFile | null, childFilePath: string | null): AbFile | null {
        return AbFile.createAbFileWithChild(file, childFilePath);
    }
    

    isFile(path: string | null): bool {
        let file: AbFile | null = AbFile.createAbFile(path); if (JThrowable.pending !== null) return false;
        if (file!.exists()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

