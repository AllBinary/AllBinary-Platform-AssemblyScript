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
// import java.io.ByteArrayOutputStream
// import java.io.Closeable
// import java.io.InputStream
// import java.io.OutputStream
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class StreamUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.StreamUtil";
    }
    @lazy static jv_instance: StreamUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StreamUtil | null {
        if (!StreamUtil.js_instance) {
            StreamUtil.js_instance = true;
            StreamUtil.jv_instance = new StreamUtil().jinit_StreamUtil_0();
        }
        return StreamUtil.jv_instance;
    }
    static set instance(value: StreamUtil | null) {
        StreamUtil.js_instance = true;
        StreamUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_StreamUtil(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    static getInstance(): StreamUtil | null {
        return StreamUtil.instance;
    }
    

    jinit_StreamUtil_0(): StreamUtil {
        super.jinit_JObject_0();
        this.jfields_StreamUtil();
        return this;
    }
    

    get(inputStream: JInputStream | null, outputStream: JOutputStream | null, buffer: StaticArray<i8> | null): JOutputStream | null {
        let len: i32 = 0;
        while (true) {
            len = inputStream!.read3(buffer, 0, buffer!.length); if (JThrowable.pending !== null) return null;
            if (len != -1) {
            } else {
                break;
            }
            outputStream!.write3(buffer, 0, len); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return outputStream;
    }
    

    getByteArray(inputStream: JInputStream | null, outputStream2: JByteArrayOutputStream | null, byteArray: StaticArray<i8> | null): StaticArray<i8> | null {
        let outputStream: JByteArrayOutputStream | null = outputStream2;
        do {
            this.get(inputStream, outputStream, byteArray); if (JThrowable.pending !== null) break;
            return outputStream!.toByteArray();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        }
        {
            this.close(outputStream); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    close(closeable: JCloseable | null): bool {
        do {
            if (closeable != null) {
                closeable!.close(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return false;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CLOSE, e); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

