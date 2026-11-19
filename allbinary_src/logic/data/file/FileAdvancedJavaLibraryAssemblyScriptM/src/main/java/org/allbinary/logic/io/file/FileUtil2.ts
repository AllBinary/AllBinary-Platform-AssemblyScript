/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.AbFileInputStream
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class FileUtil2 extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileUtil2";
    }
    @lazy static jv_instance: FileUtil2 | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileUtil2 | null {
        if (!FileUtil2.js_instance) {
            FileUtil2.js_instance = true;
            FileUtil2.jv_instance = new FileUtil2().jinit_FileUtil2_0();
        }
        return FileUtil2.jv_instance;
    }
    static set instance(value: FileUtil2 | null) {
        FileUtil2.js_instance = true;
        FileUtil2.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    streamUtil: StreamUtil | null = null;

    jfields_FileUtil2(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.streamUtil = StreamUtil.getInstance();
    }
    

    static getInstance(): FileUtil2 | null {
        return FileUtil2.instance;
    }
    

    jinit_FileUtil2_0(): FileUtil2 {
        super.jinit_JObject_0();
        this.jfields_FileUtil2();
        return this;
    }
    

    loadFileAsList(file: AbFile | null, max: i32, byteArray1: StaticArray<i8> | null): BasicArrayList | null {
        let inputStream: AbFileInputStream | null = null;
        do {
            inputStream = AbFileInputStream.createFromAbFile(file); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return SimpleFileUtil.getInstance()!.loadFileAsList(inputStream, max, byteArray1);
    }
}

