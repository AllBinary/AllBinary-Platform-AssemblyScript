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
// import java.io.DataOutputStream
// import java.io.FileOutputStream
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.file.AbFileSystem
// import org.allbinary.string.CommonStrings
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class SmallDelete extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.SmallDelete";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    fileName: string | null = null;
    string: string | null = null;

    jfields_SmallDelete(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    }
    

    jinit_SmallDelete_1(fileName: string | null): SmallDelete {
        super.jinit_JObject_0();
        this.jfields_SmallDelete();
        this.fileName = fileName;
        this.string = AbFileSystem.getInstance()!.readAsString_1(fileName); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    deleteAtStart(start: string | null, end: string | null): bool {
        do {
            let beginIndex: i32 = 0;
            let endIndex: i32 = 0;
            beginIndex = JString.indexOf1(this.string, start); if (JThrowable.pending !== null) break;
            endIndex = JString.indexOf1(this.string, end); if (JThrowable.pending !== null) break;
            if (endIndex > beginIndex && beginIndex >= 0 && endIndex >= 0 && beginIndex < 10 && endIndex < 525) {
                let text: string | null = JString.substring2(this.string, endIndex, JString.length0(this.string)); if (JThrowable.pending !== null) break;
                let idFile: JFileOutputStream | null = new JFileOutputStream().jinit_JFileOutputStream_1(this.fileName); if (JThrowable.pending !== null) break;
                let idOutData: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(idFile); if (JThrowable.pending !== null) break;
                idOutData!.writeBytes(text); if (JThrowable.pending !== null) break;
                return true;
            } if (JThrowable.pending !== null) break;
            return false;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.IDLOGGING)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteAtStart", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    deleteBetween(start: string | null, end: string | null, newText: string | null): bool {
        do {
            let beginIndex: i32 = 0;
            let endIndex: i32 = 0;
            beginIndex = JString.indexOf1(this.string, start); if (JThrowable.pending !== null) break;
            endIndex = JString.indexOf1(this.string, end); if (JThrowable.pending !== null) break;
            if (endIndex > beginIndex && beginIndex >= 0 && endIndex >= 0 && beginIndex < 50 && endIndex < 425) {
                let newStart: string | null = JString.substring2(this.string, 0, beginIndex); if (JThrowable.pending !== null) break;
                let text: string | null = JString.substring2(this.string, endIndex + JString.length0(end), JString.length0(this.string)); if (JThrowable.pending !== null) break;
                let idFile: JFileOutputStream | null = new JFileOutputStream().jinit_JFileOutputStream_1(this.fileName); if (JThrowable.pending !== null) break;
                let idOutData: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(idFile); if (JThrowable.pending !== null) break;
                idOutData!.writeBytes(jstr(jstr(newStart) + jstr(newText)) + jstr(text)); if (JThrowable.pending !== null) break;
                return true;
            } if (JThrowable.pending !== null) break;
            return false;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.IDLOGGING)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "deleteAtStart", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

