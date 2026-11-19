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
// package org.allbinary.logic.system.security.licensing
// import java.io.InputStream
// import java.io.OutputStream
// import org.allbinary.business.init.LicenseInitInfoUtil
// import org.allbinary.data.resource.ResourceUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.FileStreamFactory
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.io.file.FileFactory
// import org.allbinary.logic.io.file.SimpleFileUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class LicenseServerInitFileUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LicenseServerInitFileUtil";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    NULL_OUTPUT_STREAM: JOutputStream | null = null;

    jfields_LicenseServerInitFileUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.NULL_OUTPUT_STREAM = SimpleFileUtil.nullOutputStream();
    }

    jinit_LicenseServerInitFileUtil_0(): LicenseServerInitFileUtil {
        super.jinit_JObject_0();
        this.jfields_LicenseServerInitFileUtil();
        return this;
    }
    

    init(): void {
        do {
            let filePath: string | null = LicenseInitInfoUtil.getInstance()!.INITFILENAME; if (JThrowable.pending !== null) break;
            LicenseInitInfoUtil.getInstance()!.setFilePath(StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) break;
            if (FileFactory.getInstance()!.isFile(filePath)) {
                this.logUtil!.putF("Using Existing License File", this, this.commonStrings!.INIT); if (JThrowable.pending !== null) break;
            } else {
                this.write(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    write(): void {
        let fileOutputStream: JOutputStream | null = this.NULL_OUTPUT_STREAM;
        do {
            let resourceUtil: ResourceUtil | null = ResourceUtil.getInstance(); if (JThrowable.pending !== null) break;
            let filePath: string | null = LicenseInitInfoUtil.getInstance()!.INITFILENAME; if (JThrowable.pending !== null) break;
            let inputStream: JInputStream | null = resourceUtil!.getResourceAsStream(filePath); if (JThrowable.pending !== null) break;
            this.logUtil!.putF("Writing Default License File", this, this.commonStrings!.INIT); if (JThrowable.pending !== null) break;
            let fileStreamFactory: FileStreamFactory | null = FileStreamFactory.getInstance(); if (JThrowable.pending !== null) break;
            fileOutputStream = fileStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, filePath); if (JThrowable.pending !== null) break;
            let b: i32 = 0;
            let index: i32 = 0;
            while (true) {
                b = inputStream!.read0(); if (JThrowable.pending !== null) break;
                if (b == -1) {
                    break;
                }
                fileOutputStream!.write1(b); if (JThrowable.pending !== null) break;
                index++;
            } if (JThrowable.pending !== null) break;
            this.logUtil!.putF(jstr("Wrote Bytes: ") + jstr(index), this, this.commonStrings!.INIT); if (JThrowable.pending !== null) break;
            fileOutputStream!.flush(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        }
        {
            StreamUtil.getInstance()!.close(fileOutputStream); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

