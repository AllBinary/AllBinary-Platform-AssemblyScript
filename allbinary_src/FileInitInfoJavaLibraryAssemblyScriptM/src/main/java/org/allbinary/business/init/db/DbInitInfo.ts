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
// package org.allbinary.business.init.db
// import org.allbinary.globals.FREEBLISKET_PATH_GLOBALS
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.communication.http.HttpData
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.io.AbDataInputStream
// import org.allbinary.logic.io.AbDataOutputStream
// import org.allbinary.logic.io.AbFileInputStream
// import org.allbinary.logic.io.DataOutputStreamFactory
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.directory.Directory
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.crypt.DatabaseEncoder
// import org.allbinary.logic.system.security.crypt.WeakCrypt
// import org.allbinary.string.CommonStrings

@global export class DbInitInfo extends DbConnectionInfo {

    jclassName(): string {
        return "org.allbinary.business.init.db.DbInitInfo";
    }
    commonStrings: CommonStrings | null = null;
    directory: Directory | null = null;
    httpData: HttpData | null = null;
    GET_URL: string | null = null;
    PACKAGE: string | null = null;
    initFileName: string | null = null;
    hasRead: bool = false;

    jfields_DbInitInfo(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.directory = Directory.getInstance();
    this.httpData = HttpData.getInstance();
    this.GET_URL = "getUrl";
    this.PACKAGE = FREEBLISKET_PATH_GLOBALS.getInstance()!.DBINITPATH;
    
    this.hasRead = false;
    }
    

    jinit_DbInitInfo_2(initFileName: string | null, read: bool): DbInitInfo {
        super.jinit_DbConnectionInfo_0();
        this.jfields_DbInitInfo();
        this.initFileName = initFileName;
        if (read) {
            this.updateIfNeeded(); if (JThrowable.pending !== null) return this;
        } else {
            this.setHasRead(true); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getUrl(): string | null {
        let url: string | null = super.getUrl(); if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
            PreLogUtil.put(jstr(this.httpData!.URL_LABEL) + jstr(url), this, this.GET_URL); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return url;
    }
    

    write(): void {
        let PATH: AbPath | null = new AbPath().jinit_AbPath_2(jstr(URLGLOBALS.getWebappPath()) + jstr(this.PACKAGE), StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) return;
        this.directory!.create_1_AbPath(PATH); if (JThrowable.pending !== null) return;
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(jstr(URLGLOBALS.getWebappPath()) + jstr(this.PACKAGE), this.initFileName); if (JThrowable.pending !== null) return;
        do {
            let newFile: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) break;
            newFile!.createNewFile(); if (JThrowable.pending !== null) break;
            let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(newFile); if (JThrowable.pending !== null) break;
            do {
                let cryptedJdbcDriver: StaticArray<i8> | null = JString.getBytes0(new WeakCrypt().jinit_WeakCrypt_1(1)!.encrypt(this.getJdbcDriver())); if (JThrowable.pending !== null) break;
                let cryptedName: StaticArray<i8> | null = JString.getBytes0(new WeakCrypt().jinit_WeakCrypt_1(2)!.encrypt(this.getName())); if (JThrowable.pending !== null) break;
                let cryptedUserName: StaticArray<i8> | null = JString.getBytes0(new WeakCrypt().jinit_WeakCrypt_1(3)!.encrypt(this.getUserName())); if (JThrowable.pending !== null) break;
                let cryptedPassword: StaticArray<i8> | null = JString.getBytes0(new WeakCrypt().jinit_WeakCrypt_1(4)!.encrypt(this.getPassword())); if (JThrowable.pending !== null) break;
                let cryptedSchema: StaticArray<i8> | null = JString.getBytes0(new WeakCrypt().jinit_WeakCrypt_1(5)!.encrypt(this.getSchema())); if (JThrowable.pending !== null) break;
                let cryptedServer: StaticArray<i8> | null = JString.getBytes0(new WeakCrypt().jinit_WeakCrypt_1(6)!.encrypt(this.getServer())); if (JThrowable.pending !== null) break;
                let cryptedPort: StaticArray<i8> | null = JString.getBytes0(new WeakCrypt().jinit_WeakCrypt_1(7)!.encrypt(this.getPort())); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedJdbcDriver)); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedName)); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedUserName)); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPassword)); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedSchema)); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedServer)); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(cryptedPort)); if (JThrowable.pending !== null) break;
                this.hasRead = false;
            } while (false);
            {
                StreamUtil.getInstance()!.close(dataOutputStream); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE(jstr("Failed Write: ") + jstr(JObject.jtoString(FILEABPATH)), this, "write", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    load(): void {
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(jstr(URLGLOBALS.getWebappPath()) + jstr(this.PACKAGE), this.initFileName); if (JThrowable.pending !== null) return;
        do {
            let file: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) break;
            if (file!.isFile()) {
                let iFile: AbFileInputStream | null = AbFileInputStream.createFromAbFile(file); if (JThrowable.pending !== null) break;
                let iData: AbDataInputStream | null = new AbDataInputStream().jinit_AbDataInputStream_1(iFile); if (JThrowable.pending !== null) break;
                do {
                    let decryptedJdbcDriver: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                    let decryptedName: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                    let decryptedUserName: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                    let decryptedPassword: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                    let decryptedSchema: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                    let decryptedServer: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                    let decryptedPort: string | null = JString.new1(DatabaseEncoder.decode(iData!.readUTF())); if (JThrowable.pending !== null) break;
                    this.setJdbcDriver(new WeakCrypt().jinit_WeakCrypt_1(1)!.decrypt(decryptedJdbcDriver)); if (JThrowable.pending !== null) break;
                    this.setName(new WeakCrypt().jinit_WeakCrypt_1(2)!.decrypt(decryptedName)); if (JThrowable.pending !== null) break;
                    this.setUserName(new WeakCrypt().jinit_WeakCrypt_1(3)!.decrypt(decryptedUserName)); if (JThrowable.pending !== null) break;
                    this.setPassword(new WeakCrypt().jinit_WeakCrypt_1(4)!.decrypt(decryptedPassword)); if (JThrowable.pending !== null) break;
                    this.setSchema(new WeakCrypt().jinit_WeakCrypt_1(5)!.decrypt(decryptedSchema)); if (JThrowable.pending !== null) break;
                    this.setServer(new WeakCrypt().jinit_WeakCrypt_1(6)!.decrypt(decryptedServer)); if (JThrowable.pending !== null) break;
                    this.setPort(new WeakCrypt().jinit_WeakCrypt_1(7)!.decrypt(decryptedPort)); if (JThrowable.pending !== null) break;
                    let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) break;
                } while (false);
                {
                    StreamUtil.getInstance()!.close(iData); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else {
                this.hasRead = false;
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
                    PreLogUtil.put(jstr("Not a File - Failed Loading: ") + jstr(JObject.jtoString(FILEABPATH)), this, this.commonStrings!.LOAD); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE(jstr("Failed Loading: ") + jstr(JObject.jtoString(FILEABPATH)), this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setHasRead(value: bool): void {
        this.hasRead = value;
    }
    

    updateIfNeeded(): void {
        do {
            if (!this.hasRead) {
                this.hasRead = true;
                this.load(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, "updateIfNeeded", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getName(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
            PreLogUtil.put(jstr("Name: ") + jstr(super.getName()), this, "getName"); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return super.getName();
    }
    

    getUserName(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.PRELOADER)) {
            PreLogUtil.put(jstr("Name: ") + jstr(super.getUserName()), this, "getUserName"); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return super.getUserName();
    }
    

    getPassword(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return super.getPassword();
    }
    

    getSchema(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return super.getSchema();
    }
    

    getServer(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return super.getServer();
    }
    

    getPort(): string | null {
        this.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return super.getPort();
    }
}

