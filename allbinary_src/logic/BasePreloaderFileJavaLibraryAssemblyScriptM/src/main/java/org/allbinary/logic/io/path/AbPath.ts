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
// import org.allbinary.logic.io.file.FilePathUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.string.CommonSeps

@global export class AbPath extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.path.AbPath";
    }
    @lazy static readonly NETWORK_SEP: string | null = ":/";
    commonSeps: CommonSeps | null = null;
    abPathData: AbPathData | null = null;
    abPathUtil: PathUtil | null = null;
    EMPTY_STRING: string | null = null;
    schema: string | null = null;
    path: string | null = null;
    nameP: string | null = null;
    hasSchemaP: bool = false;
    numberOfSeps: i32 = 0;

    jfields_AbPath(): void {
    this.commonSeps = CommonSeps.getInstance();
    this.abPathData = AbPathData.getInstance();
    this.abPathUtil = PathUtil.getInstance();
    this.EMPTY_STRING = StringUtil.getInstance()!.EMPTY_STRING;
    this.schema = this.EMPTY_STRING;
    this.path = this.EMPTY_STRING;
    this.nameP = this.EMPTY_STRING;
    this.hasSchemaP = false;
    this.numberOfSeps = 0;
    }
    

    static createAbPath(): AbPath | null {
        do {
            let EMPTY_STRING: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) break;
            return new AbPath().jinit_AbPath_2(EMPTY_STRING, EMPTY_STRING);
        } while (false); if (JThrowable.pending != null) {
            let ex: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    jinit_AbPath_2(aPath: string | null, name: string | null): AbPath {
        super.jinit_JObject_0();
        this.jfields_AbPath();
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return this;
        if (!stringValidationUtil!.isEmpty(aPath)) {
            this.schema = this.getSchema(aPath); if (JThrowable.pending !== null) return this;
            this.nameP = name;
            this.path = this.abPathUtil!.adjustEnd(this.abPathUtil!.adjust(this.getPathFromPath(aPath))); if (JThrowable.pending !== null) return this;
        } else {
            this.init(); if (JThrowable.pending !== null) return this;
            if (!stringValidationUtil!.isEmpty(name)) {
                this.nameP = name;
            } if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
        this.schema = this.EMPTY_STRING;
        this.setPath(this.abPathData!.SEPARATOR); if (JThrowable.pending !== null) return;
        this.nameP = this.EMPTY_STRING;
    }
    

    getSchema(aPath: string | null): string | null {
        let beginIndex: i32 = JString.indexOf1(aPath, this.commonSeps!.COLON); if (JThrowable.pending !== null) return null;
        if (beginIndex >= 0) {
            this.hasSchemaP = true;
            return JString.substring2(aPath, 0, beginIndex);
        } if (JThrowable.pending !== null) return null;
        this.hasSchemaP = false;
        return this.EMPTY_STRING;
    }
    

    hasSchema(): bool {
        return this.hasSchemaP;
    }
    

    getPathFromPath(aPath: string | null): string | null {
        let filePathData: FilePathData | null = FilePathData.getInstance(); if (JThrowable.pending !== null) return null;
        let tempPath: string | null = aPath;
        if (!this.hasSchema()) {
            tempPath = this.abPathUtil!.adjustStart(tempPath); if (JThrowable.pending !== null) return null;
        } else {
            let beginIndex: i32 = JString.indexOf1(tempPath, this.commonSeps!.COLON); if (JThrowable.pending !== null) return null;
            if (beginIndex >= 0) {
                beginIndex++;
                while (JString.charAt1(tempPath, beginIndex) == this.abPathData!.SEPARATORCHAR || JString.charAt1(tempPath, beginIndex) == filePathData!.SEPARATORCHAR) {
                    beginIndex++;
                    this.numberOfSeps++;
                    if (this.numberOfSeps > 2) {
                        { JThrowable.raise(new JException().jinit_JException_1("Should Not Have More Than Two Seps")); return null; }
                    } if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
                tempPath = JString.substring2(tempPath, beginIndex, JString.length0(tempPath)); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return tempPath;
    }
    

    setName(name: string | null): void {
        this.nameP = name;
    }
    

    getName(): string | null {
        return this.nameP;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        if (this.hasSchema()) {
            stringBuffer!.append(this.schema); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(AbPath.NETWORK_SEP); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getPath()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.nameP); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    toFileSystemString(): string | null {
        if (this.hasSchema()) {
            let filePathData: FilePathData | null = FilePathData.getInstance(); if (JThrowable.pending !== null) return null;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.schema); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.commonSeps!.COLON); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(filePathData!.PATH_START); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(FilePathUtil.adjust(this.getPath())); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.nameP); if (JThrowable.pending !== null) return null;
            return JObject.jtoString(stringBuffer);
        } else {
            return jstr(FilePathUtil.adjust(this.getPath())) + jstr(this.nameP);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getPath(): string | null {
        return this.path;
    }
    

    setPath(path: string | null): void {
        this.path = path;
    }
}

