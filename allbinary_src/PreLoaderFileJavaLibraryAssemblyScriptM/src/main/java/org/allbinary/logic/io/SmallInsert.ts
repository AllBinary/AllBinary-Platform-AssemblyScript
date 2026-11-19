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

@global export class SmallInsert extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.SmallInsert";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    fileName: string | null = null;
    string: string | null = null;

    jfields_SmallInsert(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    }
    

    jinit_SmallInsert_1(fileName: string | null): SmallInsert {
        super.jinit_JObject_0();
        this.jfields_SmallInsert();
        this.fileName = fileName;
        this.string = AbFileSystem.getInstance()!.readAsString_1(fileName); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    atBeginning(text: string | null): bool {
        do {
            let idFile: JFileOutputStream | null = new JFileOutputStream().jinit_JFileOutputStream_1(this.fileName); if (JThrowable.pending !== null) break;
            let idOutData: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(idFile); if (JThrowable.pending !== null) break;
            idOutData!.writeBytes(jstr(text) + jstr(this.string)); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.IDLOGGING)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "insertAtBeginning", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    after(text: string | null, after: string | null): bool {
        do {
            let index: i32 = JString.indexOf1(this.string, after); if (JThrowable.pending !== null) break;
            if (index < 0) {
                JSystem.println(jstr(jstr(jstr(jstr("No such start: ") + jstr(after)) + jstr(" in: ")) + jstr(this.string))); if (JThrowable.pending !== null) break;
                return false;
            } if (JThrowable.pending !== null) break;
            index = index + JString.length0(after); if (JThrowable.pending !== null) break;
            let start: string | null = JString.substring2(this.string, 0, index); if (JThrowable.pending !== null) break;
            let end: string | null = JString.substring2(this.string, index + 1, JString.length0(this.string)); if (JThrowable.pending !== null) break;
            let idFile: JFileOutputStream | null = new JFileOutputStream().jinit_JFileOutputStream_1(this.fileName); if (JThrowable.pending !== null) break;
            let idOutData: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(idFile); if (JThrowable.pending !== null) break;
            idOutData!.writeBytes(jstr(jstr(start) + jstr(text)) + jstr(end)); if (JThrowable.pending !== null) break;
            idOutData!.close(); if (JThrowable.pending !== null) break;
            idFile!.close(); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.IDLOGGING)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "after", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    atEnd(text: string | null): bool {
        do {
            let idFile: JFileOutputStream | null = new JFileOutputStream().jinit_JFileOutputStream_1(this.fileName); if (JThrowable.pending !== null) break;
            let idOutData: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(idFile); if (JThrowable.pending !== null) break;
            idOutData!.writeBytes(jstr(this.string) + jstr(text)); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.IDLOGGING)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "insertAtEnd", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

