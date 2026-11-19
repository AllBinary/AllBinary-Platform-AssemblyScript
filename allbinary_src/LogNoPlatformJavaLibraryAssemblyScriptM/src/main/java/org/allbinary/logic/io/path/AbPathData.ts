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
// import org.allbinary.string.CommonSeps

@global export class AbPathData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.path.AbPathData";
    }
    @lazy static jv_instance: AbPathData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbPathData | null {
        if (!AbPathData.js_instance) {
            AbPathData.js_instance = true;
            AbPathData.jv_instance = new AbPathData().jinit_AbPathData_0();
        }
        return AbPathData.jv_instance;
    }
    static set instance(value: AbPathData | null) {
        AbPathData.js_instance = true;
        AbPathData.jv_instance = value;
    }
    EXTENSION_SEP: string | null = null;
    SEPARATORCHAR: u16 = 0;
    SEPARATOR: string | null = null;

    jfields_AbPathData(): void {
    this.EXTENSION_SEP = CommonSeps.getInstance()!.PERIOD;
    this.SEPARATORCHAR = (<u16>0x2F);
    this.SEPARATOR = CommonSeps.getInstance()!.FORWARD_SLASH;
    }
    

    static getInstance(): AbPathData | null {
        return AbPathData.instance;
    }
    

    jinit_AbPathData_0(): AbPathData {
        super.jinit_JObject_0();
        this.jfields_AbPathData();
        return this;
    }
    

    getExtensionIndex(filePath: string | null): i32 {
        let indexOfFileExtensionDelmiter: i32 = JString.lastIndexOf1(filePath, this.EXTENSION_SEP); if (JThrowable.pending !== null) return 0;
        let indexOfLatDelimiter: i32 = JString.lastIndexOf1(filePath, this.SEPARATORCHAR); if (JThrowable.pending !== null) return 0;
        if (indexOfFileExtensionDelmiter < 0) {
            return -1;
        }
        if (indexOfFileExtensionDelmiter < indexOfLatDelimiter) {
            return -1;
        }
        return indexOfFileExtensionDelmiter;
    }
    

    getExtensionWithDot(filePath: string | null): string | null {
        let indexOfFileExtensionDelmiter: i32 = this.getExtensionIndex(filePath); if (JThrowable.pending !== null) return null;
        let extension: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return null;
        if (indexOfFileExtensionDelmiter >= 0) {
            extension = JString.substring1(filePath, indexOfFileExtensionDelmiter); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return extension;
    }
    

    getExtension(filePath: string | null): string | null {
        let indexOfFileExtensionDelmiter: i32 = this.getExtensionIndex(filePath); if (JThrowable.pending !== null) return null;
        let extension: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return null;
        if (indexOfFileExtensionDelmiter >= 0) {
            extension = JString.substring1(filePath, indexOfFileExtensionDelmiter + 1); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return extension;
    }
    

    getNameFromPath(path: string | null): string | null {
        let endIndex: i32 = JString.lastIndexOf1(path, this.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            endIndex = JString.lastIndexOf1(path, FilePathData.getInstance()!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            return path;
        }
        if (JString.length0(path) == endIndex + 1) {
            let categoryName: string | null = JString.substring2(path, 0, endIndex); if (JThrowable.pending !== null) return null;
            return this.getNameFromPath(categoryName);
        } else {
            let categoryName: string | null = JString.substring1(path, endIndex + 1); if (JThrowable.pending !== null) return null;
            return categoryName;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    removeNameFromPath(path: string | null): string | null {
        let endIndex: i32 = JString.lastIndexOf1(path, this.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            endIndex = JString.lastIndexOf1(path, FilePathData.getInstance()!.SEPARATORCHAR); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (endIndex < 0) {
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        if (JString.length0(path) == endIndex + 1) {
            return this.removeNameFromPath(JString.substring2(path, 0, endIndex - 1));
        } else {
            let pathWithoutName: string | null = JString.substring2(path, 0, endIndex); if (JThrowable.pending !== null) return null;
            return pathWithoutName;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

