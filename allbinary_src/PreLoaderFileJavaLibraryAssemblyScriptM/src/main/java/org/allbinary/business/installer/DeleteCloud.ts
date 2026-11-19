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
// package org.allbinary.business.installer
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.communication.http.file.upload.FileUploadData
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.AbIOSystem
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.directory.Directory
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList

@global export class DeleteCloud extends JObject {

    jclassName(): string {
        return "org.allbinary.business.installer.DeleteCloud";
    }
    logUtil: LogUtil | null = null;

    jfields_DeleteCloud(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_DeleteCloud_0(): DeleteCloud {
        super.jinit_JObject_0();
        this.jfields_DeleteCloud();
        return this;
    }
    

    delete_(prePath: string | null, current: i32, total: i32): bool {
        do {
            if (AbIOSystem.getInstance()!.isType("com.vobject.appengine.java.io")) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                stringBuffer!.append(URLGLOBALS.getWebappPath()); if (JThrowable.pending !== null) break;
                stringBuffer!.append(prePath); if (JThrowable.pending !== null) break;
                let path: AbPath | null = new AbPath().jinit_AbPath_2(JObject.jtoString(stringBuffer), StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) break;
                let file: AbFile | null = AbFile.createAbFileFromAbPath(path); if (JThrowable.pending !== null) break;
                let fileBasicArrayList: BasicArrayList | null = Directory.getInstance()!.search_2_AbFileboolean(file, true); if (JThrowable.pending !== null) break;
                let size: i32 = fileBasicArrayList!.size(); if (JThrowable.pending !== null) break;
                stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) break;
                stringBuffer!.append("Searched: "); if (JThrowable.pending !== null) break;
                stringBuffer!.append(path!.toFileSystemString()); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" BasicArrayList: "); if (JThrowable.pending !== null) break;
                stringBuffer!.appendint(size); if (JThrowable.pending !== null) break;
                let portion: i32 = size / total + 1;
                let start: i32 = portion * current;
                let end: i32 = start + portion;
                if (end > size) {
                    end = size;
                }
                stringBuffer!.append(" Section: "); if (JThrowable.pending !== null) break;
                stringBuffer!.appendint(start); if (JThrowable.pending !== null) break;
                stringBuffer!.append(" - "); if (JThrowable.pending !== null) break;
                stringBuffer!.appendint(end); if (JThrowable.pending !== null) break;
                this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "initialize()"); if (JThrowable.pending !== null) break;
                let nextFile: AbFile | null = null;
                for (let index: i32 = start; index < end; index++) {
                    nextFile = changetype<AbFile | null>(fileBasicArrayList!.get(index)); if (JThrowable.pending !== null) break;
                    do {
                        if (JString.indexOf1(nextFile!.getPath(), FileUploadData.getInstance()!.FILE) < 0) {
                            nextFile!.delete_(); if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                    } while (false); if (JThrowable.pending != null) {
                        let e: JException | null = changetype<JException | null>(JThrowable.take());
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                this.logUtil!.putF("Deleted Files From Cloud", this, "initialize()"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Unable to copy installer files into cloud", this, "initialize()", e); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

