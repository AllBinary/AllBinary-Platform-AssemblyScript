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
// package org.allbinary.business.init
// import org.allbinary.globals.PATH_GLOBALS
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.AbDataInputStream
// import org.allbinary.logic.io.AbDataOutputStream
// import org.allbinary.logic.io.AbFileLocalInputStream
// import org.allbinary.logic.io.DataOutputStreamFactory
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.crypt.DatabaseEncoder
// import org.allbinary.logic.system.security.crypt.WeakCrypt
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class InstallerInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.InstallerInfo";
    }
    @lazy static jv_instance: InstallerInfo | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InstallerInfo | null {
        if (!InstallerInfo.js_instance) {
            InstallerInfo.js_instance = true;
            InstallerInfo.jv_instance = new InstallerInfo().jinit_InstallerInfo_0();
        }
        return InstallerInfo.jv_instance;
    }
    static set instance(value: InstallerInfo | null) {
        InstallerInfo.js_instance = true;
        InstallerInfo.jv_instance = value;
    }
    @lazy static readonly INITFILENAME: string | null = "installerdata.dat";
    @lazy static jv_PACKAGE: string | null = null;
    @lazy static js_PACKAGE: bool = false;
    static get PACKAGE(): string | null {
        if (!InstallerInfo.js_PACKAGE) {
            InstallerInfo.js_PACKAGE = true;
            InstallerInfo.jv_PACKAGE = PATH_GLOBALS.getInstance()!.INIT_PATH;
        }
        return InstallerInfo.jv_PACKAGE;
    }
    static set PACKAGE(value: string | null) {
        InstallerInfo.js_PACKAGE = true;
        InstallerInfo.jv_PACKAGE = value;
    }
    @lazy static jv_userName: string | null = null;
    @lazy static js_userName: bool = false;
    static get userName(): string | null {
        if (!InstallerInfo.js_userName) {
            InstallerInfo.js_userName = true;
            InstallerInfo.jv_userName = StringUtil.getInstance()!.EMPTY_STRING;
        }
        return InstallerInfo.jv_userName;
    }
    static set userName(value: string | null) {
        InstallerInfo.js_userName = true;
        InstallerInfo.jv_userName = value;
    }
    @lazy static jv_password: string | null = null;
    @lazy static js_password: bool = false;
    static get password(): string | null {
        if (!InstallerInfo.js_password) {
            InstallerInfo.js_password = true;
            InstallerInfo.jv_password = StringUtil.getInstance()!.EMPTY_STRING;
        }
        return InstallerInfo.jv_password;
    }
    static set password(value: string | null) {
        InstallerInfo.js_password = true;
        InstallerInfo.jv_password = value;
    }
    @lazy static hasRead: bool = false;
    logUtil: LogUtil | null = null;

    jfields_InstallerInfo(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_InstallerInfo_0(): InstallerInfo {
        super.jinit_JObject_0();
        this.jfields_InstallerInfo();
        return this;
    }
    

    write(): void {
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(jstr(URLGLOBALS.getMainPath()) + jstr(InstallerInfo.PACKAGE), InstallerInfo.INITFILENAME); if (JThrowable.pending !== null) return;
        do {
            let newFile: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) break;
            newFile!.createNewFile(); if (JThrowable.pending !== null) break;
            let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(newFile); if (JThrowable.pending !== null) break;
            let cryptedUserName: StaticArray<i8> | null = new WeakCrypt().jinit_WeakCrypt_1(1)!.encrypt(this.getUserName())!.getBytes0(); if (JThrowable.pending !== null) break;
            let cryptedPassword: StaticArray<i8> | null = new WeakCrypt().jinit_WeakCrypt_1(2)!.encrypt(this.getPassword())!.getBytes0(); if (JThrowable.pending !== null) break;
            dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedUserName)); if (JThrowable.pending !== null) break;
            dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPassword)); if (JThrowable.pending !== null) break;
            InstallerInfo.hasRead = false;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                this.logUtil!.putF("Failed", this, "write"); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    read(): void {
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(jstr(URLGLOBALS.getMainPath()) + jstr(InstallerInfo.PACKAGE), InstallerInfo.INITFILENAME); if (JThrowable.pending !== null) return;
        do {
            let file: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) break;
            if (file!.isFile()) {
                let iFile: AbFileLocalInputStream | null = new AbFileLocalInputStream().jinit_AbFileLocalInputStream_1(file); if (JThrowable.pending !== null) break;
                let iData: AbDataInputStream | null = new AbDataInputStream().jinit_AbDataInputStream_1(iFile); if (JThrowable.pending !== null) break;
                let decryptedUserName: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                let decryptedPassword: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                this.setUserName(new WeakCrypt().jinit_WeakCrypt_1(1)!.decrypt(decryptedUserName)); if (JThrowable.pending !== null) break;
                this.setPassword(new WeakCrypt().jinit_WeakCrypt_1(2)!.decrypt(decryptedPassword)); if (JThrowable.pending !== null) break;
            } else {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                    this.logUtil!.putF(jstr("Not a File - Failed Loading: ") + jstr(JObject.jtoString(FILEABPATH)), this, "read"); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                this.logUtil!.putF("Failed", this, "read"); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    static setHasRead(value: bool): void {
        InstallerInfo.hasRead = value;
    }
    

    setUserName(userName: string | null): void {
        InstallerInfo.userName = userName;
    }
    

    setPassword(password: string | null): void {
        InstallerInfo.password = password;
    }
    

    updateIfNeeded(): void {
        if (!InstallerInfo.hasRead) {
            InstallerInfo.hasRead = true;
            this.read(); if (JThrowable.pending !== null) return;
            if (InstallerInfo.userName == null || InstallerInfo.password == null) {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                    this.logUtil!.putF("Failed", this, "updateIfNeeded"); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getUserName(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return InstallerInfo.userName;
    }
    

    getPassword(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return InstallerInfo.password;
    }
    

    isValid(userName: string | null, password: string | null): bool {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return false;
        if (InstallerInfo.userName != null && JString.compareTo1(InstallerInfo.userName, userName) == 0 && InstallerInfo.password != null && JString.compareTo1(InstallerInfo.password, password) == 0) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

