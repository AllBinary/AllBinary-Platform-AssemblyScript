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
// package org.allbinary.logic.io.file.path
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.file.FilePathData
// import org.allbinary.logic.io.path.AbFilePath
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

//Used to correct user input for paths
@global export class AbPathUtilOld extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.path.AbPathUtilOld";
    }
    @lazy static jv_instance: AbPathUtilOld | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbPathUtilOld | null {
        if (!AbPathUtilOld.js_instance) {
            AbPathUtilOld.js_instance = true;
            AbPathUtilOld.jv_instance = new AbPathUtilOld().jinit_AbPathUtilOld_0();
        }
        return AbPathUtilOld.jv_instance;
    }
    static set instance(value: AbPathUtilOld | null) {
        AbPathUtilOld.js_instance = true;
        AbPathUtilOld.jv_instance = value;
    }
    static readonly MIN: i32 = 4;
    logUtil: LogUtil | null = null;
    abPathData: AbPathData | null = null;
    filePathData: FilePathData | null = null;

    jfields_AbPathUtilOld(): void {
    this.logUtil = LogUtil.getInstance();
    this.abPathData = AbPathData.getInstance();
    this.filePathData = FilePathData.getInstance();
    }
    

    static getInstance(): AbPathUtilOld | null {
        return AbPathUtilOld.instance;
    }
    

    jinit_AbPathUtilOld_0(): AbPathUtilOld {
        super.jinit_JObject_0();
        this.jfields_AbPathUtilOld();
        return this;
    }
    

    getExtension_1_AbFilePath(abFilePath: AbFilePath | null): string | null {
        return this.getExtension_1_String(JObject.jtoString(abFilePath));
    }
    

    getExtension_1_AbPath(abPath: AbPath | null): string | null {
        return this.getExtension_1_String(JObject.jtoString(abPath));
    }
    

    getExtension_1_String(filePath: string | null): string | null {
        if (JString.length0(filePath) < AbPathUtilOld.MIN) {
            { JThrowable.raise(new JException().jinit_JException_1("Could not be a file path since its less that 4 characters")); return null; }
        } if (JThrowable.pending !== null) return null;
        let beginIndex: i32 = JString.length0(filePath) - AbPathUtilOld.MIN; if (JThrowable.pending !== null) return null;
        let extension: string | null = JString.substring1(filePath, beginIndex + 1); if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.VIEW)) {
            this.logUtil!.putF(jstr("FileExtension: ") + jstr(extension), this, "getExtension()"); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return extension;
    }
    

    getWithoutExtension_1_AbFilePath(abFilePath: AbFilePath | null): string | null {
        return this.getWithoutExtension_1_String(JObject.jtoString(abFilePath));
    }
    

    getWithoutExtension_1_AbPath(abPath: AbPath | null): string | null {
        return this.getWithoutExtension_1_String(JObject.jtoString(abPath));
    }
    

    getWithoutExtension_1_String(filePath: string | null): string | null {
        if (JString.length0(filePath) < AbPathUtilOld.MIN) {
            { JThrowable.raise(new JException().jinit_JException_1("Could not be a file path since its less that 4 characters")); return null; }
        } if (JThrowable.pending !== null) return null;
        let endIndex: i32 = JString.length0(filePath) - AbPathUtilOld.MIN; if (JThrowable.pending !== null) return null;
        let pathWithoutExtension: string | null = JString.substring2(filePath, 0, endIndex); if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.VIEW)) {
            this.logUtil!.putF(jstr("FileWithoutExtension: ") + jstr(pathWithoutExtension), this, "getWithoutExtension()"); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return pathWithoutExtension;
    }
    

    isValid(path: string | null): bool {
        if (this.isValidStart(path)) {
            if (this.isValidEnd(path)) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isValidStart(path: string | null): bool {
        if (JString.charAt1(path, 0) == this.abPathData!.SEPARATORCHAR) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isValidEnd(path: string | null): bool {
        if (StringValidationUtil.getInstance()!.isEmpty(path)) {
            return false;
        } if (JThrowable.pending !== null) return false;
        if (JString.charAt1(path, JString.length0(path) - 1) == this.abPathData!.SEPARATORCHAR) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    adjustStart(path: string | null): string | null {
        if (!this.isValidStart(path)) {
            path = jstr(this.abPathData!.SEPARATOR) + jstr(path);
        } if (JThrowable.pending !== null) return null;
        return path;
    }
    

    adjustEnd(path: string | null): string | null {
        if (!this.isValidEnd(path)) {
            path = jstr(path) + jstr(this.abPathData!.SEPARATOR);
        } if (JThrowable.pending !== null) return null;
        return path;
    }
    

    adjust(path: string | null): string | null {
        if (StringValidationUtil.getInstance()!.isEmpty(path)) {
            return this.abPathData!.SEPARATOR;
        } if (JThrowable.pending !== null) return null;
        if (JString.indexOf1(path, "\\") >= 0) {
            path = JString.replace2(path, (<u16>0x5C), this.abPathData!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return path;
    }
    

    getNameFromPath(categoryPath: string | null): string | null {
        let endIndex: i32 = JString.lastIndexOf1(categoryPath, this.abPathData!.SEPARATOR); if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            endIndex = JString.lastIndexOf1(categoryPath, this.filePathData!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            return categoryPath;
        }
        if (JString.length0(categoryPath) == endIndex + 1) {
            let categoryName: string | null = JString.substring2(categoryPath, 0, endIndex); if (JThrowable.pending !== null) return null;
            return this.getNameFromPath(categoryName);
        } else {
            let categoryName: string | null = JString.substring1(categoryPath, endIndex + 1); if (JThrowable.pending !== null) return null;
            return categoryName;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    removeNameFromPath(categoryPath: string | null): AbPath | null {
        let endIndex: i32 = JString.lastIndexOf1(categoryPath, this.abPathData!.SEPARATOR); if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            endIndex = JString.lastIndexOf1(categoryPath, this.filePathData!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            return AbPath.createAbPath();
        } if (JThrowable.pending !== null) return null;
        if (JString.length0(categoryPath) == endIndex + 1) {
            return this.removeNameFromPath(JString.substring2(categoryPath, 0, endIndex - 1));
        } else {
            let categoryName: string | null = JString.substring2(categoryPath, 0, endIndex); if (JThrowable.pending !== null) return null;
            return new AbPath().jinit_AbPath_2(categoryName, StringUtil.getInstance()!.EMPTY_STRING);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

