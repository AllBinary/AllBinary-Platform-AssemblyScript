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
// package org.allbinary.logic.io.path
// import org.allbinary.logic.io.file.FilePathData
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil

//Used to correct user input for paths
@global export class PathUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.path.PathUtil";
    }
    @lazy static jv_instance: PathUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PathUtil | null {
        if (!PathUtil.js_instance) {
            PathUtil.js_instance = true;
            PathUtil.jv_instance = new PathUtil().jinit_PathUtil_0();
        }
        return PathUtil.jv_instance;
    }
    static set instance(value: PathUtil | null) {
        PathUtil.js_instance = true;
        PathUtil.jv_instance = value;
    }
    abPathData: AbPathData | null = null;
    filePathData: FilePathData | null = null;

    jfields_PathUtil(): void {
    this.abPathData = AbPathData.getInstance();
    this.filePathData = FilePathData.getInstance();
    }
    

    static getInstance(): PathUtil | null {
        return PathUtil.instance;
    }
    

    jinit_PathUtil_0(): PathUtil {
        super.jinit_JObject_0();
        this.jfields_PathUtil();
        return this;
    }
    

    getExtensionWithAbFilePath(abFilePath: AbFilePath | null): string | null {
        return this.abPathData!.getExtension(JObject.jtoString(abFilePath));
    }
    

    getExtensionWithAbPath(abPath: AbPath | null): string | null {
        return this.abPathData!.getExtension(JObject.jtoString(abPath));
    }
    

    getWithoutExtensionWithAbFilePath(abFilePath: AbFilePath | null): string | null {
        return this.getWithoutExtension(JObject.jtoString(abFilePath));
    }
    

    getWithoutExtensionWithAbPath(abPath: AbPath | null): string | null {
        return this.getWithoutExtension(JObject.jtoString(abPath));
    }
    

    getWithoutExtension(filePath: string | null): string | null {
        let indexOfFileExtensionDelmiter: i32 = this.abPathData!.getExtensionIndex(filePath); if (JThrowable.pending !== null) return null;
        let pathWithoutExtension: string | null = filePath;
        if (indexOfFileExtensionDelmiter >= 0) {
            pathWithoutExtension = JString.substring2(filePath, 0, indexOfFileExtensionDelmiter); if (JThrowable.pending !== null) return null;
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
        if (JString.charAt1(path, 0) == this.abPathData!.SEPARATORCHAR || JString.charAt1(path, 0) == (<u16>0x2E)) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isValidEnd(path: string | null): bool {
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return false;
        if (stringValidationUtil!.isEmpty(path)) {
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
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return null;
        if (stringValidationUtil!.isEmpty(path)) {
            return this.abPathData!.SEPARATOR;
        } if (JThrowable.pending !== null) return null;
        if (JString.indexOf1(path, "\\") >= 0) {
            path = JString.replace2(path, (<u16>0x5C), this.abPathData!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return path;
    }
    

    removeNameFromPath(path: string | null): AbPath | null {
        let endIndex: i32 = JString.lastIndexOf1(path, this.abPathData!.SEPARATOR); if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            endIndex = JString.lastIndexOf1(path, this.filePathData!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            return AbPath.createAbPath();
        } if (JThrowable.pending !== null) return null;
        if (JString.length0(path) == endIndex + 1) {
            return this.removeNameFromPath(JString.substring2(path, 0, endIndex - 1));
        } else {
            let pathWithoutName: string | null = JString.substring2(path, 0, endIndex); if (JThrowable.pending !== null) return null;
            return new AbPath().jinit_AbPath_2(pathWithoutName, StringUtil.getInstance()!.EMPTY_STRING);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

