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
// import java.io.InputStream
// import java.io.OutputStream
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.io.AbDataOutputStream
// import org.allbinary.logic.io.AbFileInputStream
// import org.allbinary.logic.io.AbFileLocalInputStream
// import org.allbinary.logic.io.AbIOSystem
// import org.allbinary.logic.io.DataOutputStreamFactory
// import org.allbinary.logic.io.FileStreamFactory
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.io.file.directory.Directory
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import java.io.File
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

//data/init/views/TestStore/template/type/genericTemplateObjectConfig.xml
@global export class FileUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileUtil";
    }
    @lazy static jv_instance: FileUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileUtil | null {
        if (!FileUtil.js_instance) {
            FileUtil.js_instance = true;
            FileUtil.jv_instance = new FileUtil().jinit_FileUtil_0();
        }
        return FileUtil.jv_instance;
    }
    static set instance(value: FileUtil | null) {
        FileUtil.js_instance = true;
        FileUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    directory: Directory | null = null;
    logConfigTypeFactory: LogConfigTypeFactory | null = null;
    commonStrings: CommonStrings | null = null;
    streamUtil: StreamUtil | null = null;
    WRITE_LABEL: string | null = null;
    DATA_LABEL: string | null = null;
    WRITE_METHOD: string | null = null;

    jfields_FileUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.directory = Directory.getInstance();
    this.logConfigTypeFactory = LogConfigTypeFactory.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.streamUtil = StreamUtil.getInstance();
    this.WRITE_LABEL = "Write file: ";
    this.DATA_LABEL = " data: ";
    this.WRITE_METHOD = "write";
    }
    

    static getInstance(): FileUtil | null {
        return FileUtil.instance;
    }
    

    jinit_FileUtil_0(): FileUtil {
        super.jinit_JObject_0();
        this.jfields_FileUtil();
        return this;
    }
    

    write_2_InputStreamAbFile(inputStream: JInputStream | null, file: AbFile | null): void {
        let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(file); if (JThrowable.pending !== null) return;
        this.write_2_InputStreamAbDataOutputStream(inputStream, dataOutputStream); if (JThrowable.pending !== null) return;
    }
    

    write_2_InputStreamAbDataOutputStream(inputStream: JInputStream | null, dataOutputStream: AbDataOutputStream | null): void {
        do {
            dataOutputStream = changetype<AbDataOutputStream | null>(StreamUtil.getInstance()!.get(inputStream, dataOutputStream, new StaticArray<i8>(16384))); if (JThrowable.pending !== null) break;
            dataOutputStream!.flush(); if (JThrowable.pending !== null) break;
        } while (false);
        {
            StreamUtil.getInstance()!.close(dataOutputStream); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    write_3(inputStream: JInputStream | null, dataOutputStream: AbDataOutputStream | null, buffer: StaticArray<i8> | null): void {
        do {
            dataOutputStream = changetype<AbDataOutputStream | null>(StreamUtil.getInstance()!.get(inputStream, dataOutputStream, buffer)); if (JThrowable.pending !== null) break;
            dataOutputStream!.flush(); if (JThrowable.pending !== null) break;
        } while (false);
        {
            StreamUtil.getInstance()!.close(dataOutputStream); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    copy_2_AbFileInputStreamAbDataOutputStream(dataInputStream: AbFileInputStream | null, dataOutputStream: AbDataOutputStream | null): void {
        do {
            dataOutputStream = changetype<AbDataOutputStream | null>(StreamUtil.getInstance()!.get(dataInputStream, dataOutputStream, new StaticArray<i8>(16384))); if (JThrowable.pending !== null) break;
            dataOutputStream!.flush(); if (JThrowable.pending !== null) break;
        } while (false);
        {
            StreamUtil.getInstance()!.close(dataOutputStream); if (JThrowable.pending !== null) return;
            StreamUtil.getInstance()!.close(dataInputStream); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    fixPath(file: AbFile | null, path: AbPath | null, realPath: AbPath | null, cloud: string | null): AbPath | null {
        let beginIndex: i32 = JString.indexOf1(file!.getPath(), cloud) + JString.length0(cloud); if (JThrowable.pending !== null) return null;
        let endIndex: i32 = JString.indexOf1(file!.getPath(), file!.getName()); if (JThrowable.pending !== null) return null;
        let fixedPathString: string | null = jstr(realPath!.toFileSystemString()) + jstr(JString.substring2(file!.getPath(), beginIndex, endIndex)); if (JThrowable.pending !== null) return null;
        let fixedPath: AbPath | null = new AbPath().jinit_AbPath_2(fixedPathString, StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        this.directory!.create_1_AbPath(fixedPath); if (JThrowable.pending !== null) return null;
        let string: string | null = fixedPath!.toFileSystemString(); if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
            this.logUtil!.putF(string, this, "fixPath"); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let outPath: AbPath | null = new AbPath().jinit_AbPath_2(string, file!.getName()); if (JThrowable.pending !== null) return null;
        return outPath;
    }
    

    copyToCloud_4_AbFileAbPathAbPathString(file: AbFile | null, path: AbPath | null, realPath: AbPath | null, cloud: string | null): void {
        this.copyToCloud_6(file, path, realPath, cloud, false, false); if (JThrowable.pending !== null) return;
    }
    

    copyToCloud_6(file: AbFile | null, path: AbPath | null, realPath: AbPath | null, cloud: string | null, overwriteNewer: bool, overwriteAll: bool): void {
        do {
            let outPath: AbPath | null = this.fixPath(file, path, realPath, cloud); if (JThrowable.pending !== null) break;
            let outFile: AbFile | null = AbFile.createAbFileFromAbPath(outPath); if (JThrowable.pending !== null) break;
            if (!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll)) {
                return;
            } else {
                if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                    let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                    stringBuffer!.append("Out File: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(outFile!.getPath()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" In File: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(file!.getPath()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" to cloud."); if (JThrowable.pending !== null) break;
                    this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyToCloud"); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(outFile); if (JThrowable.pending !== null) break;
            let fileInputStream: AbFileInputStream | null = new AbFileLocalInputStream().jinit_AbFileLocalInputStream_1(file); if (JThrowable.pending !== null) break;
            this.copy_2_AbFileInputStreamAbDataOutputStream(fileInputStream, dataOutputStream); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILEERROR)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
                stringBuffer!.append("Error Copying File File: "); if (JThrowable.pending !== null) return;
                stringBuffer!.append(JObject.jtoString(file)); if (JThrowable.pending !== null) return;
                stringBuffer!.append(" to cloud."); if (JThrowable.pending !== null) return;
                this.logUtil!.put(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyToCloud", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    copyToCloud_2(file: AbFile | null, outFile: AbFile | null): void {
        this.copyToCloud_4_AbFileAbFilebooleanboolean(file, outFile, false, false); if (JThrowable.pending !== null) return;
    }
    

    copyToCloud_4_AbFileAbFilebooleanboolean(file: AbFile | null, outFile: AbFile | null, overwriteNewer: bool, overwriteAll: bool): void {
        do {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            if (!this.copyPrepare(file, outFile, overwriteNewer, overwriteAll)) {
                return;
            } else {
                if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                    stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append("Out File: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(outFile!.getPath()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" In File: "); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(file!.getPath()); if (JThrowable.pending !== null) break;
                    stringBuffer!.append(" to cloud."); if (JThrowable.pending !== null) break;
                    this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyToCloud"); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(outFile); if (JThrowable.pending !== null) break;
            let fileInputStream: AbFileInputStream | null = new AbFileLocalInputStream().jinit_AbFileLocalInputStream_1(file); if (JThrowable.pending !== null) break;
            this.copy_2_AbFileInputStreamAbDataOutputStream(fileInputStream, dataOutputStream); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILEERROR)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
                stringBuffer!.append("Error Copying File File: "); if (JThrowable.pending !== null) return;
                stringBuffer!.append(JObject.jtoString(file)); if (JThrowable.pending !== null) return;
                stringBuffer!.append(" to cloud."); if (JThrowable.pending !== null) return;
                this.logUtil!.put(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyToCloud", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    copyPrepare(fromFile: AbFile | null, toFile: AbFile | null, overwriteNewer: bool, overwriteAll: bool): bool {
        if (toFile!.exists()) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return false;
            if (overwriteAll) {
                if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                    stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append("Overwriting File: "); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append(toFile!.getPath()); if (JThrowable.pending !== null) return false;
                    this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyFile"); if (JThrowable.pending !== null) return false;
                } if (JThrowable.pending !== null) return false;
                toFile!.delete_(); if (JThrowable.pending !== null) return false;
                toFile!.createNewFile(); if (JThrowable.pending !== null) return false;
            } else if (toFile!.lastModified() < fromFile!.lastModified() && overwriteNewer) {
                if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                    stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append("Newer by: "); if (JThrowable.pending !== null) return false;
                    stringBuffer!.appendlong(fromFile!.lastModified() - toFile!.lastModified()); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append("ms "); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append("Copying File: "); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append(toFile!.getPath()); if (JThrowable.pending !== null) return false;
                    this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyFile"); if (JThrowable.pending !== null) return false;
                } if (JThrowable.pending !== null) return false;
                toFile!.delete_(); if (JThrowable.pending !== null) return false;
                toFile!.createNewFile(); if (JThrowable.pending !== null) return false;
            } else {
                if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                    stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append("File Already Exists"); if (JThrowable.pending !== null) return false;
                    if (overwriteNewer) {
                        stringBuffer!.append(" And Is Not Older"); if (JThrowable.pending !== null) return false;
                    } else {
                        stringBuffer!.append(" And Not A In Overwrite Mode"); if (JThrowable.pending !== null) return false;
                    } if (JThrowable.pending !== null) return false;
                    stringBuffer!.append(CommonLabels.getInstance()!.COLON_SEP); if (JThrowable.pending !== null) return false;
                    stringBuffer!.append(toFile!.getPath()); if (JThrowable.pending !== null) return false;
                    this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyFile"); if (JThrowable.pending !== null) return false;
                } if (JThrowable.pending !== null) return false;
                return false;
            } if (JThrowable.pending !== null) return false;
        } else {
            toFile!.createNewFile(); if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    copyFile_2(fromFile: AbFile | null, toFile: AbFile | null): void {
        this.copyFile_4(fromFile, toFile, false, false); if (JThrowable.pending !== null) return;
    }
    

    copyFile_4(fromFile: AbFile | null, toFile: AbFile | null, overwriteNewer: bool, overwriteAll: bool): void {
        do {
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                stringBuffer!.append("Copying "); if (JThrowable.pending !== null) break;
                stringBuffer!.appendlong((<i64>(fromFile!.length()))); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" bytes from File: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(fromFile!.getPath()); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" to: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(toFile!.getPath()); if (JThrowable.pending !== null) break;
                this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyFile"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (!this.copyPrepare(fromFile, toFile, overwriteNewer, overwriteAll)) {
                return;
            } if (JThrowable.pending !== null) break;
            let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(toFile); if (JThrowable.pending !== null) break;
            let fileInputStream: AbFileInputStream | null = AbFileInputStream.createFromAbFile(fromFile); if (JThrowable.pending !== null) break;
            this.copy_2_AbFileInputStreamAbDataOutputStream(fileInputStream, dataOutputStream); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILEERROR)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
                stringBuffer!.append("Error Copying File fromFile: "); if (JThrowable.pending !== null) return;
                stringBuffer!.append(JObject.jtoString(fromFile)); if (JThrowable.pending !== null) return;
                stringBuffer!.append(" to: "); if (JThrowable.pending !== null) return;
                stringBuffer!.append(JObject.jtoString(toFile)); if (JThrowable.pending !== null) return;
                this.logUtil!.put(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyFile", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    static getNewDirectory(fromFile: AbFile | null): string | null {
        let newDirectory: string | null = fromFile!.getPath(); if (JThrowable.pending !== null) return null;
        let separatorChar: string | null = FilePathData.getInstance()!.PATH_START; if (JThrowable.pending !== null) return null;
        if (AbIOSystem.getInstance()!.isType("com.vobject.appengine.java.io")) {
            separatorChar = AbPathData.getInstance()!.SEPARATOR; if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let lastIndex: i32 = JString.lastIndexOf1(newDirectory, separatorChar); if (JThrowable.pending !== null) return null;
        if (lastIndex >= JString.length0(newDirectory)) {
            newDirectory = JString.substring2(newDirectory, 0, JString.length0(newDirectory) - 1); if (JThrowable.pending !== null) return null;
            lastIndex = JString.lastIndexOf1(newDirectory, separatorChar); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JString.substring2(newDirectory, lastIndex, JString.length0(newDirectory));
    }
    

    copyDirectoryPortion(fromDirectoryAbPath: AbPath | null, toDirectoryAbPath: AbPath | null, overwriteNewer: bool, overwriteAll: bool, current: i32, total: i32): void {
        let file: AbFile | null = AbFile.createAbFileFromAbPath(fromDirectoryAbPath); if (JThrowable.pending !== null) return;
        if (!file!.isDirectory()) {
            { JThrowable.raise(new JException().jinit_JException_1(jstr("Not a directory: ") + jstr(file!.getPath()))); return; }
        } if (JThrowable.pending !== null) return;
        let fileList: BasicArrayList | null = this.directory!.search_2_AbFileboolean(file, true); if (JThrowable.pending !== null) return;
        let size: i32 = fileList!.size(); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Searched: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(file!.getPath()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" Total: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(size); if (JThrowable.pending !== null) return;
        let portion: i32 = size / total + 1;
        let start: i32 = portion * current;
        let end: i32 = start + portion;
        if (end > size) {
            end = size;
        }
        stringBuffer!.append(" Section: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(start); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" - "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(end); if (JThrowable.pending !== null) return;
        if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
            this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copySomeFilesToDirectory()"); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let nextFile: AbFile | null = null;
        for (let index: i32 = start; index < end; index++) {
            nextFile = changetype<AbFile | null>(fileList!.get(index)); if (JThrowable.pending !== null) return;
            if (nextFile!.isDirectory()) {
            } else {
                let path: string | null = new AbPath().jinit_AbPath_2(nextFile!.getPath(), StringUtil.getInstance()!.EMPTY_STRING)!.getPath(); if (JThrowable.pending !== null) return;
                let beginIndex: i32 = JString.length0(fromDirectoryAbPath!.getPath()); if (JThrowable.pending !== null) return;
                if (JString.indexOf1(path, URLGLOBALS.getWebappPath()) < 0) {
                    beginIndex -= JString.length0(new AbPath().jinit_AbPath_2(URLGLOBALS.getWebappPath(), StringUtil.getInstance()!.EMPTY_STRING)!.getPath()); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                let newPath: string | null = jstr(toDirectoryAbPath!.toFileSystemString()) + jstr(JString.substring1(path, beginIndex)); if (JThrowable.pending !== null) return;
                let toFile: AbFile | null = AbFile.createAbFileFromAbPath(new AbPath().jinit_AbPath_2(newPath, StringUtil.getInstance()!.EMPTY_STRING)); if (JThrowable.pending !== null) return;
                this.copyFile_4(nextFile, toFile, overwriteNewer, overwriteAll); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    copyDirectory(fromFile: AbFile | null, to: AbFile | null): void {
        do {
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                stringBuffer!.append("Copying Directory from: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(fromFile!.getPath()); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" to: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(to!.getPath()); if (JThrowable.pending !== null) break;
                this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyDirectory"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let newDirectory: string | null = FileUtil.getNewDirectory(fromFile); if (JThrowable.pending !== null) break;
            let newDirectoryAbPath: AbPath | null = new AbPath().jinit_AbPath_2(jstr(jstr(to!.getPath()) + jstr(AbPathData.getInstance()!.SEPARATOR)) + jstr(newDirectory), StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) break;
            if (!this.directory!.create_1_AbPath(newDirectoryAbPath)) {
                { JThrowable.raise(new JException().jinit_JException_1(jstr("Failed to create directory: ") + jstr(newDirectoryAbPath))); break; }
            } if (JThrowable.pending !== null) break;
            let fileArray: StaticArray<AbFile | null> | null = FileWrapperUtil.wrapFiles(fromFile!.listFiles()); if (JThrowable.pending !== null) break;
            let size: i32 = fileArray!.length;
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                stringBuffer!.append("Copying "); if (JThrowable.pending !== null) break;
                stringBuffer!.appendint(size); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" files from: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(fromFile!.getPath()); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" to: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(to!.getPath()); if (JThrowable.pending !== null) break;
                this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyDirectory"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let file: AbFile | null = null;
            for (let index: i32 = 0; index < size; index++) {
                file = fileArray![index];
                if (file!.isFile()) {
                    this.copyFile_2(file, AbFile.createAbFilePathAndName(JObject.jtoString(newDirectoryAbPath), file!.getName())); if (JThrowable.pending !== null) break;
                } else if (file!.isDirectory()) {
                    this.copyDirectory(file, AbFile.createAbFileFromAbPath(newDirectoryAbPath)); if (JThrowable.pending !== null) break;
                } else {
                    { JThrowable.raise(new JException().jinit_JException_1("File Copy Error")); break; }
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILEERROR)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
                stringBuffer!.append("Error Copying Directory fromFile: "); if (JThrowable.pending !== null) return;
                stringBuffer!.append(JObject.jtoString(fromFile)); if (JThrowable.pending !== null) return;
                stringBuffer!.append(" to: "); if (JThrowable.pending !== null) return;
                stringBuffer!.append(JObject.jtoString(to)); if (JThrowable.pending !== null) return;
                this.logUtil!.put(JObject.jtoString(stringBuffer), FileUtil.getInstance(), "copyDirectory", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    copy_2_AbPathAbPath(fromAbPath: AbPath | null, to: AbPath | null): bool {
        let COPY: string | null = "copy";
        do {
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                stringBuffer!.append("Copying AbPaths from: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(JObject.jtoString(fromAbPath)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" to: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(JObject.jtoString(to)); if (JThrowable.pending !== null) break;
                this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), COPY); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (fromAbPath == null) {
                { JThrowable.raise(new JException().jinit_JException_1("Cannot Copy From A Null Location")); break; }
            } if (JThrowable.pending !== null) break;
            if (to == null) {
                { JThrowable.raise(new JException().jinit_JException_1("Cannot Copy To A Null Location")); break; }
            } if (JThrowable.pending !== null) break;
            let fromLocationFile: AbFile | null = AbFile.createAbFileFromAbPath(fromAbPath); if (JThrowable.pending !== null) break;
            let toLocationFile: AbFile | null = AbFile.createAbFileFromAbPath(to); if (JThrowable.pending !== null) break;
            if (fromLocationFile!.isFile()) {
                if (toLocationFile!.isDirectory()) {
                    let file: AbFile | null = AbFile.createAbFileWithChild(toLocationFile, fromLocationFile!.getName()); if (JThrowable.pending !== null) break;
                    this.copyFile_2(fromLocationFile, file); if (JThrowable.pending !== null) break;
                    if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                        stringBuffer!.append("Copied file="); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(fromLocationFile!.getName()); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(" from: "); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(fromLocationFile!.getPath()); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(" to: "); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(toLocationFile!.getPath()); if (JThrowable.pending !== null) break;
                        this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), COPY); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } else {
                    this.copyFile_2(fromLocationFile, toLocationFile); if (JThrowable.pending !== null) break;
                    if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                        stringBuffer!.append("Copied file with new name "); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(" from: "); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(fromLocationFile!.getPath()); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(" to: "); if (JThrowable.pending !== null) break;
                        stringBuffer!.append(toLocationFile!.getPath()); if (JThrowable.pending !== null) break;
                        this.logUtil!.putF(JObject.jtoString(stringBuffer), FileUtil.getInstance(), COPY); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else if (fromLocationFile!.isDirectory() && toLocationFile!.isDirectory()) {
                if (JString.charAt1(fromAbPath!.toFileSystemString(), JString.length0(fromAbPath!.toFileSystemString()) - 1) == JFile.separatorChar) {
                    if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                        this.logUtil!.putF("Copying subdirectories", FileUtil.getInstance(), COPY); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    let fileArray: StaticArray<AbFile | null> | null = FileWrapperUtil.wrapFiles(fromLocationFile!.listFiles()); if (JThrowable.pending !== null) break;
                    for (let index: i32 = 0; index < fileArray!.length; index++) {
                        let file: AbFile | null = fileArray![index];
                        if (file!.isFile()) {
                            let aFile: AbFile | null = AbFile.createAbFileWithChild(toLocationFile, file!.getName()); if (JThrowable.pending !== null) break;
                            this.copyFile_2(file, aFile); if (JThrowable.pending !== null) break;
                        } else if (file!.isDirectory()) {
                            this.copyDirectory(file, toLocationFile); if (JThrowable.pending !== null) break;
                        } else {
                            { JThrowable.raise(new JException().jinit_JException_1("File Copy Error")); break; }
                        } if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                        this.logUtil!.putF("Copied subdirectories", FileUtil.getInstance(), COPY); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } else {
                    if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                        this.logUtil!.putF("Copyinhg directory", FileUtil.getInstance(), COPY); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.copyDirectory(fromLocationFile, toLocationFile); if (JThrowable.pending !== null) break;
                    if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILE)) {
                        this.logUtil!.putF("Copied directory", FileUtil.getInstance(), COPY); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(this.logConfigTypeFactory!.FILEERROR)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return false;
                stringBuffer!.append("Error Copying fromAbPath: "); if (JThrowable.pending !== null) return false;
                stringBuffer!.append(JObject.jtoString(fromAbPath)); if (JThrowable.pending !== null) return false;
                stringBuffer!.append(" to: "); if (JThrowable.pending !== null) return false;
                stringBuffer!.append(JObject.jtoString(to)); if (JThrowable.pending !== null) return false;
                this.logUtil!.put(JObject.jtoString(stringBuffer), FileUtil.getInstance(), COPY, e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            { JThrowable.raise(e); return false; }
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    shouldSkip(file: AbFile | null, skipFiles: StaticArray<string | null> | null): bool {
        let size: i32 = skipFiles!.length;
        let skipFile: string | null = null;
        for (let index: i32 = 0; index < size; index++) {
            skipFile = skipFiles![index];
            if (JString.compareTo1(file!.getPath(), skipFile) == 0) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    write_2_StringString(filePath: string | null, string: string | null): void {
        let dataOutputStream: AbDataOutputStream | null = null;
        do {
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.WRITE_LABEL)!.append(filePath)!.append(this.DATA_LABEL)!.append(string)), this, this.WRITE_METHOD); if (JThrowable.pending !== null) break;
            let fileInputStreamFactory: FileStreamFactory | null = FileStreamFactory.getInstance(); if (JThrowable.pending !== null) break;
            let fileOutputStream: JOutputStream | null = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, filePath); if (JThrowable.pending !== null) break;
            dataOutputStream = new AbDataOutputStream().jinit_AbDataOutputStream_1(fileOutputStream); if (JThrowable.pending !== null) break;
            dataOutputStream!.write3(JString.getBytes0(string), 0, JString.length0(string)); if (JThrowable.pending !== null) break;
            dataOutputStream!.flush(); if (JThrowable.pending !== null) break;
        } while (false);
        {
            StreamUtil.getInstance()!.close(dataOutputStream); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    loadFileAsList(file: AbFile | null, max: i32, byteArray1: StaticArray<i8> | null): BasicArrayList | null {
        return FileUtil2.getInstance()!.loadFileAsList(file, max, byteArray1);
    }
}

