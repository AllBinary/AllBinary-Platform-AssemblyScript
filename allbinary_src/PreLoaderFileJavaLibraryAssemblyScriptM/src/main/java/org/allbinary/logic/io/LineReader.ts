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
// import java.io.DataInputStream
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

@global export class LineReader extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.LineReader";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    fileName: string | null = null;
    string: string | null = null;
    index: i32 = 0;
    idFile: AbFileInputStream | null = null;
    idData: JDataInputStream | null = null;

    jfields_LineReader(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.fileName = null;
    this.string = null;
    this.index = 0;
    this.idFile = null;
    this.idData = null;
    }
    

    jinit_LineReader_1(fileName: string | null): LineReader {
        super.jinit_JObject_0();
        this.jfields_LineReader();
        do {
            let bytes: StaticArray<i8> | null = new StaticArray<i8>(100000);
            this.fileName = fileName;
            this.idFile = new AbFileInputStream().jinit_AbFileInputStream_1(fileName); if (JThrowable.pending !== null) break;
            this.idFile!.read1(bytes); if (JThrowable.pending !== null) break;
            this.string = JString.new1(bytes); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(jstr("File: ") + jstr(fileName), this, "LineReader", e); if (JThrowable.pending !== null) return this;
            {
            }
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    hasNext(): bool {
        do {
            let nextIndex: i32 = JString.indexOf2(this.string, CommonSeps.getInstance()!.NEW_LINE, this.index); if (JThrowable.pending !== null) break;
            if (nextIndex == -1) {
                return false;
            }
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "hasNext", e); if (JThrowable.pending !== null) return false;
            {
            }
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    next(): string | null {
        do {
            let nextIndex: i32 = JString.indexOf2(this.string, CommonSeps.getInstance()!.NEW_LINE, this.index); if (JThrowable.pending !== null) break;
            if (nextIndex == -1) {
                { JThrowable.raise(new JException().jinit_JException_1("next() should have been called first")); break; }
            } if (JThrowable.pending !== null) break;
            let temp: string | null = JString.substring2(this.string, this.index, nextIndex); if (JThrowable.pending !== null) break;
            this.index = nextIndex + 1;
            return temp;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "next", e); if (JThrowable.pending !== null) return null;
            {
            }
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

