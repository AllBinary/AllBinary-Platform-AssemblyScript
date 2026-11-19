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
// import java.io.BufferedWriter
// import java.io.FileWriter
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.AbFileNativeUtil
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings

@global export class BufferedWriterUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.BufferedWriterUtil";
    }
    @lazy static jv_instance: BufferedWriterUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BufferedWriterUtil | null {
        if (!BufferedWriterUtil.js_instance) {
            BufferedWriterUtil.js_instance = true;
            BufferedWriterUtil.jv_instance = new BufferedWriterUtil().jinit_BufferedWriterUtil_0();
        }
        return BufferedWriterUtil.jv_instance;
    }
    static set instance(value: BufferedWriterUtil | null) {
        BufferedWriterUtil.js_instance = true;
        BufferedWriterUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    commonLabels: CommonLabels | null = null;
    REMOVING_OLD: string | null = null;

    jfields_BufferedWriterUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.commonLabels = CommonLabels.getInstance();
    this.REMOVING_OLD = "Remove old for overwriting: ";
    }

    jinit_BufferedWriterUtil_0(): BufferedWriterUtil {
        super.jinit_JObject_0();
        this.jfields_BufferedWriterUtil();
        return this;
    }
    

    static getInstance(): BufferedWriterUtil | null {
        return BufferedWriterUtil.instance;
    }
    

    overwrite_2_StringString(path: string | null, data: string | null): void {
        let abFile: AbFile | null = AbFile.createAbFile(path); if (JThrowable.pending !== null) return;
        if (abFile!.exists()) {
            this.logUtil!.putF(jstr(this.REMOVING_OLD) + jstr(path), this, this.commonStrings!.CREATE); if (JThrowable.pending !== null) return;
            abFile!.delete_(); if (JThrowable.pending !== null) return;
        } else {
            let name: string | null = AbPathData.getInstance()!.removeNameFromPath(path); if (JThrowable.pending !== null) return;
            let abFileDirectory: AbFile | null = AbFile.createAbFile(name); if (JThrowable.pending !== null) return;
            if (abFileDirectory!.exists()) {
            } else {
                let stringBuilder: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringBuilder!.append(this.commonStrings!.CREATE)!.append(this.commonLabels!.COLON_SEP)!.append(name)), this, this.commonStrings!.CREATE); if (JThrowable.pending !== null) return;
                let result: bool = abFileDirectory!.mkdirs(); if (JThrowable.pending !== null) return;
                stringBuilder!.delete_(0, stringBuilder!.length()); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringBuilder!.append(this.commonLabels!.RESULT_)!.appendboolean(result)), this, this.commonStrings!.CREATE); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.write(abFile, data); if (JThrowable.pending !== null) return;
    }
    

    overwrite_2_AbFileString(abFile: AbFile | null, data: string | null): void {
        if (abFile!.exists()) {
            this.logUtil!.putF(jstr(this.REMOVING_OLD) + jstr(abFile!.getPath()), this, this.commonStrings!.CREATE); if (JThrowable.pending !== null) return;
            abFile!.delete_(); if (JThrowable.pending !== null) return;
        } else {
            let name: string | null = AbPathData.getInstance()!.removeNameFromPath(abFile!.getAbsolutePath()); if (JThrowable.pending !== null) return;
            let abFileDirectory: AbFile | null = AbFile.createAbFile(name); if (JThrowable.pending !== null) return;
            if (abFileDirectory!.exists()) {
            } else {
                let stringBuilder: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringBuilder!.append(this.commonStrings!.CREATE)!.append(this.commonLabels!.COLON_SEP)!.append(name)), this, this.commonStrings!.CREATE); if (JThrowable.pending !== null) return;
                let result: bool = abFileDirectory!.mkdirs(); if (JThrowable.pending !== null) return;
                stringBuilder!.delete_(0, stringBuilder!.length()); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringBuilder!.append(this.commonLabels!.RESULT_)!.appendboolean(result)), this, this.commonStrings!.CREATE); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.write(abFile, data); if (JThrowable.pending !== null) return;
    }
    

    write(abFile: AbFile | null, data: string | null): void {
        let fileOut: JBufferedWriter | null = new JBufferedWriter().jinit_JBufferedWriter_1(new JFileWriter().jinit_JFileWriter_1(AbFileNativeUtil.get(abFile))); if (JThrowable.pending !== null) return;
        fileOut!.write3(data, 0, JString.length0(data)); if (JThrowable.pending !== null) return;
        fileOut!.newLine(); if (JThrowable.pending !== null) return;
        fileOut!.flush(); if (JThrowable.pending !== null) return;
    }
}

