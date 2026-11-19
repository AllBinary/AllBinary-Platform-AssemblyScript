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
// import java.nio.channels.FileChannel
// import java.nio.channels.FileLock
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.AbFileOutputStream
// import org.allbinary.logic.io.StreamUtil

@global export class FileLockUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileLockUtil";
    }
    @lazy static jv_instance: FileLockUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileLockUtil | null {
        if (!FileLockUtil.js_instance) {
            FileLockUtil.js_instance = true;
            FileLockUtil.jv_instance = new FileLockUtil().jinit_FileLockUtil_0();
        }
        return FileLockUtil.jv_instance;
    }
    static set instance(value: FileLockUtil | null) {
        FileLockUtil.js_instance = true;
        FileLockUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_FileLockUtil(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    static getInstance(): FileLockUtil | null {
        return FileLockUtil.instance;
    }
    

    jinit_FileLockUtil_0(): FileLockUtil {
        super.jinit_JObject_0();
        this.jfields_FileLockUtil();
        return this;
    }
    

    getAll(vector: BasicArrayList | null, isReturnOnFailure: bool): BasicArrayList | null {
        let fileLockVector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = vector!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let file: AbFile | null = changetype<AbFile | null>(vector!.get(index)); if (JThrowable.pending !== null) return null;
            let fileLock: FileLock | null = this.getLock_1_AbFile(file); if (JThrowable.pending !== null) return null;
            if (fileLock != null) {
                this.logUtil!.putF(jstr("File Lock Obtained: ") + jstr(file!.getAbsolutePath()), this, "getAll"); if (JThrowable.pending !== null) return null;
                fileLockVector!.add(fileLock); if (JThrowable.pending !== null) return null;
            } else if (isReturnOnFailure) {
                this.logUtil!.putF(jstr("Total Locks Obtained: ") + jstr(fileLockVector!.size()), this, "getAll"); if (JThrowable.pending !== null) return null;
                return fileLockVector;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        this.logUtil!.putF(jstr("Total Locks Obtained: ") + jstr(fileLockVector!.size()), this, "getAll"); if (JThrowable.pending !== null) return null;
        return fileLockVector;
    }
    

    getAllPossible(vector: BasicArrayList | null): BasicArrayList | null {
        return this.getAll(vector, false);
    }
    

    getAllOrNone(vector: BasicArrayList | null): BasicArrayList | null {
        let fileLockVector: BasicArrayList | null = this.getAll(vector, true); if (JThrowable.pending !== null) return null;
        if (vector!.size() != fileLockVector!.size()) {
            return new BasicArrayListD().jinit_BasicArrayListD_0();
        } else {
            return fileLockVector;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getLock_1_AbFile(file: AbFile | null): FileLock | null {
        do {
            return this.getLock_1_AbFileOutputStream(AbFileOutputStream.createFromAbFileAppend(file, true));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Exception returns null", this, "getLock", e); if (JThrowable.pending !== null) return null;
            return null;
        }
        {
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getLock_1_AbFileOutputStream(fileOutputStream: AbFileOutputStream | null): FileLock | null {
        do {
            let fileLock: FileLock | null = this.getLock_1_FileChannel(fileOutputStream!.getChannel()); if (JThrowable.pending !== null) break;
            return fileLock;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Exception returns null", this, "getLock", e); if (JThrowable.pending !== null) return null;
            return null;
        }
        {
            this.logUtil!.putF("Finally - Closing FileOutputStream", this, "getLock"); if (JThrowable.pending !== null) return null;
            StreamUtil.getInstance()!.close(fileOutputStream); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getLock_1_FileChannel(fileChannel: FileChannel | null): FileLock | null {
        do {
            let fileLock: FileLock | null = fileChannel!.tryLock(); if (JThrowable.pending !== null) break;
            return fileLock;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Exception returns null", this, "getLock", e); if (JThrowable.pending !== null) return null;
            return null;
        }
        {
            this.logUtil!.putF("Finally - Closing FileChannel", this, "getLock"); if (JThrowable.pending !== null) return null;
            fileChannel!.close(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

