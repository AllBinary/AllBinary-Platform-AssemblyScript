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
// package org.allbinary.logic.io.file.zip
// import java.util.zip.ZipEntry
// import java.util.zip.ZipInputStream
// import java.util.zip.ZipOutputStream
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.AbDataOutputStream
// import org.allbinary.logic.io.AbFileInputStream
// import org.allbinary.logic.io.AbFileOutputStream
// import org.allbinary.logic.io.DataOutputStreamFactory
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.FileUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class ZipFileUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.zip.ZipFileUtil";
    }
    @lazy static jv_instance: ZipFileUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ZipFileUtil | null {
        if (!ZipFileUtil.js_instance) {
            ZipFileUtil.js_instance = true;
            ZipFileUtil.jv_instance = new ZipFileUtil().jinit_ZipFileUtil_0();
        }
        return ZipFileUtil.jv_instance;
    }
    static set instance(value: ZipFileUtil | null) {
        ZipFileUtil.js_instance = true;
        ZipFileUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;

    jfields_ZipFileUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    }

    jinit_ZipFileUtil_0(): ZipFileUtil {
        super.jinit_JObject_0();
        this.jfields_ZipFileUtil();
        return this;
    }
    

    static getInstance(): ZipFileUtil | null {
        return ZipFileUtil.instance;
    }
    

    create(outFilename: string | null, fileBasicArrayList: BasicArrayList | null): void {
        do {
            let zipFile: AbFile | null = AbFile.createAbFile(outFilename); if (JThrowable.pending !== null) break;
            if (zipFile!.exists()) {
                zipFile!.delete_(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            zipFile!.createNewFile(); if (JThrowable.pending !== null) break;
            let outputStream: ZipOutputStream | null = new ZipOutputStream().jinit_ZipOutputStream_1(AbFileOutputStream.createFromAbFile(zipFile)); if (JThrowable.pending !== null) break;
            let streamUtil: StreamUtil | null = StreamUtil.getInstance(); if (JThrowable.pending !== null) break;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            let byteArray: StaticArray<i8> | null = new StaticArray<i8>(16384);
            let fileInputStream: AbFileInputStream | null = null;
            let size: i32 = fileBasicArrayList!.size(); if (JThrowable.pending !== null) break;
            let current: i32 = 0;
            for (let i: i32 = 0; i < size; i++) {
                let file: AbFile | null = changetype<AbFile | null>(fileBasicArrayList!.get(i)); if (JThrowable.pending !== null) break;
                if (file!.isDirectory()) {
                } else if (file!.isFile()) {
                    stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) break;
                    stringBuffer!.appendint(current); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" Creating Zip File Entry: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(file!.getPath()); if (JThrowable.pending !== null) break;
                    this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "create()"); if (JThrowable.pending !== null) break;
                    do {
                        fileInputStream = AbFileInputStream.createFromAbFile(file); if (JThrowable.pending !== null) break;
                        outputStream!.putNextEntry(new ZipEntry().jinit_ZipEntry_1(file!.getPath())); if (JThrowable.pending !== null) break;
                        streamUtil!.get(fileInputStream, outputStream, byteArray); if (JThrowable.pending !== null) break;
                        outputStream!.closeEntry(); if (JThrowable.pending !== null) break;
                        streamUtil!.close(fileInputStream); if (JThrowable.pending !== null) break;
                    } while (false); if (JThrowable.pending != null) {
                        let e: JException | null = changetype<JException | null>(JThrowable.take());
                        this.logUtil!.putF(jstr("Skipping File (Probably Local): ") + jstr(file!.getPath()), this, "create()"); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                current++;
            } if (JThrowable.pending !== null) break;
            streamUtil!.close(outputStream); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    unzip(path: string | null, zipFile: AbFile | null, fileName: string | null): void {
        let buffer: StaticArray<i8> | null = new StaticArray<i8>(16384);
        let inputStream: ZipInputStream | null = null;
        do {
            inputStream = new ZipInputStream().jinit_ZipInputStream_1(AbFileInputStream.createFromAbFile(zipFile)); if (JThrowable.pending !== null) break;
            let zipEntry: ZipEntry | null = null;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            let fileUtil: FileUtil | null = FileUtil.getInstance(); if (JThrowable.pending !== null) break;
            while (((zipEntry = inputStream!.getNextEntry())) != null) {
                let entryName: string | null = zipEntry!.getName(); if (JThrowable.pending !== null) break;
                if (zipEntry!.isDirectory()) {
                } else {
                    let entryFile: AbFile | null = AbFile.createAbFile(jstr(path) + jstr(entryName)); if (JThrowable.pending !== null) break;
                    stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append("ZipEntry Name: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(entryName); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" isFile: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.appendboolean(entryFile!.isFile()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" isDirectory: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.appendboolean(entryFile!.isDirectory()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" getParent: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(entryFile!.getParent()); if (JThrowable.pending !== null) break;
                    this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "unzip"); if (JThrowable.pending !== null) break;
                    let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(entryFile); if (JThrowable.pending !== null) break;
                    fileUtil!.write_3(inputStream, dataOutputStream, buffer); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                inputStream!.closeEntry(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false);
        {
            StreamUtil.getInstance()!.close(inputStream); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

