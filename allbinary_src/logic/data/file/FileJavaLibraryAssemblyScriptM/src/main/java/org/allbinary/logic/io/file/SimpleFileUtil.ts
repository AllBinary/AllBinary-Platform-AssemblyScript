/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import java.io.ByteArrayOutputStream
// import java.io.InputStream
// import java.io.OutputStream
// import java.io.Reader
// import java.io.Writer
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.NullOutputStream
// import org.allbinary.logic.io.NullReader
// import org.allbinary.logic.io.NullWriter
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class SimpleFileUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.SimpleFileUtil";
    }
    @lazy static jv_instance: SimpleFileUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SimpleFileUtil | null {
        if (!SimpleFileUtil.js_instance) {
            SimpleFileUtil.js_instance = true;
            SimpleFileUtil.jv_instance = new SimpleFileUtil().jinit_SimpleFileUtil_0();
        }
        return SimpleFileUtil.jv_instance;
    }
    static set instance(value: SimpleFileUtil | null) {
        SimpleFileUtil.js_instance = true;
        SimpleFileUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    NULL_WRITER: JWriter | null = null;
    NULL_READER: JReader | null = null;
    commonStrings: CommonStrings | null = null;
    nullUtil: NullUtil | null = null;
    streamUtil: StreamUtil | null = null;

    jfields_SimpleFileUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.NULL_WRITER = SimpleFileUtil.nullWriter();
    this.NULL_READER = SimpleFileUtil.nullReader();
    this.commonStrings = CommonStrings.getInstance();
    this.nullUtil = NullUtil.getInstance();
    this.streamUtil = StreamUtil.getInstance();
    }

    jinit_SimpleFileUtil_0(): SimpleFileUtil {
        super.jinit_JObject_0();
        this.jfields_SimpleFileUtil();
        return this;
    }
    

    static getInstance(): SimpleFileUtil | null {
        return SimpleFileUtil.instance;
    }
    

    static nullOutputStream(): JOutputStream | null {
        return NullOutputStream.NULL_OUTPUT_STREAM;
    }
    

    static nullWriter(): JWriter | null {
        return NullWriter.NULL_WRITER;
    }
    

    static nullReader(): JReader | null {
        return NullReader.NULL_READER;
    }
    

    loadFileAsList(inputStream: JInputStream | null, max: i32, byteArray1: StaticArray<i8> | null): BasicArrayList | null {
        return this.loadFileAsListReturnLine(inputStream, max, byteArray1, 0);
    }
    

    loadFileAsListReturnLine(inputStream: JInputStream | null, max: i32, byteArray1: StaticArray<i8> | null, includeReturnLine: i32): BasicArrayList | null {
        let stringList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        if (inputStream == null) {
            return stringList;
        }
        let byteArray: StaticArray<i8> | null = this.nullUtil!.NULL_BYTE_ARRAY;
        do {
            let outputStream2: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_1(max); if (JThrowable.pending !== null) break;
            byteArray = this.streamUtil!.getByteArray(inputStream, outputStream2, byteArray1); if (JThrowable.pending !== null) break;
            this.streamUtil!.close(inputStream); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.streamUtil!.close(inputStream); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (byteArray == null) {
            return stringList;
        }
        let size: i32 = byteArray!.length;
        let index: i32 = 0;
        let startIndex: i32 = 0;
        let returnLine: i32 = 0;
        while (index < size) {
            startIndex = index;
            while (index < size - 1 && byteArray![index] != (<i8>((<u16>0x0A)))) {
                index++;
            }
            if (includeReturnLine == 0) {
                if (index > 0 && byteArray![index - 1] == (<i8>((<u16>0x0D)))) {
                    returnLine = 1;
                } else {
                    returnLine = 0;
                }
            }
            let s: string | null = JString.new3(byteArray, startIndex, (index + includeReturnLine - returnLine - startIndex)); if (JThrowable.pending !== null) return null;
            stringList!.add(s); if (JThrowable.pending !== null) return null;
            index++;
        } if (JThrowable.pending !== null) return null;
        return stringList;
    }
    

    createStringFromArrayOfStrings(stringArray: StaticArray<string | null> | null): string | null {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = stringArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            stringMaker!.append(stringArray![index]); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringMaker);
    }
}

