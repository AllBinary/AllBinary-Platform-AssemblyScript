/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2026 AllBinary 
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
// import java.io.InputStream
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

//J2MEForJ2ME
@global export class AbFileSystem extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.AbFileSystem";
    }
    @lazy static jv_instance: AbFileSystem | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbFileSystem | null {
        if (!AbFileSystem.js_instance) {
            AbFileSystem.js_instance = true;
            AbFileSystem.jv_instance = new AbFileSystem().jinit_AbFileSystem_0();
        }
        return AbFileSystem.jv_instance;
    }
    static set instance(value: AbFileSystem | null) {
        AbFileSystem.js_instance = true;
        AbFileSystem.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;

    jfields_AbFileSystem(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    }

    jinit_AbFileSystem_0(): AbFileSystem {
        super.jinit_JObject_0();
        this.jfields_AbFileSystem();
        return this;
    }
    

    static getInstance(): AbFileSystem | null {
        return AbFileSystem.instance;
    }
    

    isDirectoryOrFile(path: string | null): bool {
        return false;
    }
    

    isDirectory(path: string | null): bool {
        return false;
    }
    

    getFilesAsStringArrayForPath(currentDirPath: string | null): StaticArray<string | null> | null {
        return StringUtil.getInstance()!.getArrayInstance();
    }
    

    readAsString_1(fileName: string | null): string | null {
        let bytes: StaticArray<i8> | null = new StaticArray<i8>(1000000);
        return this.readAsString_2(fileName, bytes);
    }
    

    readAsString_2(fileName: string | null, bytes: StaticArray<i8> | null): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    close(closeable: Object | null): bool {
        do {
            if (closeable != null) {
                let inputStream: JInputStream | null = (changetype<JInputStream | null>(closeable));
                inputStream!.close(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CLOSE, e); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

