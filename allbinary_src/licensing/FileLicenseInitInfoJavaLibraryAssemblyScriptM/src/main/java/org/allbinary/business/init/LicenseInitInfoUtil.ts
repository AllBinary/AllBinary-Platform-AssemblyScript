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
// import org.allbinary.TsUtil
// import org.allbinary.globals.PATH_GLOBALS
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.AbDataInputStream
// import org.allbinary.logic.io.AbDataOutputStream
// import org.allbinary.logic.io.AbFileInputStream
// import org.allbinary.logic.io.DataOutputStreamFactory
// import org.allbinary.logic.io.FileStreamFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.crypt.DatabaseEncoder
// import org.allbinary.logic.system.security.crypt.WeakCrypt
// import org.allbinary.string.CommonLabels

@global export class LicenseInitInfoUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.LicenseInitInfoUtil";
    }
    @lazy static jv_instance: LicenseInitInfoUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LicenseInitInfoUtil | null {
        if (!LicenseInitInfoUtil.js_instance) {
            LicenseInitInfoUtil.js_instance = true;
            LicenseInitInfoUtil.jv_instance = new LicenseInitInfoUtil().jinit_LicenseInitInfoUtil_0();
        }
        return LicenseInitInfoUtil.jv_instance;
    }
    static set instance(value: LicenseInitInfoUtil | null) {
        LicenseInitInfoUtil.js_instance = true;
        LicenseInitInfoUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    stringUtil: StringUtil | null = null;
    INITFILENAME: string | null = null;
    ABOUT: string | null = null;
    PRIVACY_POLICY: string | null = null;
    filePath: string | null = null;

    jfields_LicenseInitInfoUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.stringUtil = StringUtil.getInstance();
    this.INITFILENAME = "licenseinitdata.dat";
    this.ABOUT = "about";
    this.PRIVACY_POLICY = "privacy_policy";
    this.filePath = this.stringUtil!.EMPTY_STRING;
    }

    jinit_LicenseInitInfoUtil_0(): LicenseInitInfoUtil {
        super.jinit_JObject_0();
        this.jfields_LicenseInitInfoUtil();
        return this;
    }
    

    static getInstance(): LicenseInitInfoUtil | null {
        return LicenseInitInfoUtil.instance;
    }
    

    setFilePath(filePath: string | null): void {
        this.filePath = filePath;
    }
    

    write(initData: LicenseInitInfo | null): void {
        if (this.filePath == this.stringUtil!.EMPTY_STRING) {
            this.filePath = jstr(URLGLOBALS.getMainPath()) + jstr(PATH_GLOBALS.getInstance()!.INIT_PATH); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        do {
            let tsUtil: TsUtil | null = TsUtil.getInstance(); if (JThrowable.pending !== null) break;
            let dataOutputStream: AbDataOutputStream | null = DataOutputStreamFactory.getInstance()!.getInstance2(this.filePath, this.INITFILENAME); if (JThrowable.pending !== null) break;
            let licenseIdCrypted: StaticArray<i8> | null = tsUtil!.getByteArray(new WeakCrypt().jinit_WeakCrypt_1(1)!.encrypt(initData!.getLicenseId())); if (JThrowable.pending !== null) break;
            dataOutputStream!.writeUTF(DatabaseEncoder.encode(licenseIdCrypted)); if (JThrowable.pending !== null) break;
            let numberOfLicenseServers: i32 = initData!.getNumberOfServers(); if (JThrowable.pending !== null) break;
            dataOutputStream!.writeInt(numberOfLicenseServers); if (JThrowable.pending !== null) break;
            let licenseServerCrypted: StaticArray<i8> | null = null;
            for (let index: i32 = 0; index < numberOfLicenseServers; index++) {
                licenseServerCrypted = tsUtil!.getByteArray(new WeakCrypt().jinit_WeakCrypt_1(3)!.encrypt(initData!.getServer(index))); if (JThrowable.pending !== null) break;
                dataOutputStream!.writeUTF(DatabaseEncoder.encode(licenseServerCrypted)); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(jstr("Command Failed: ") + jstr(this.INITFILENAME), this, "write", e); if (JThrowable.pending !== null) return;
            FileStreamFactory.getInstance()!.delete_(this.filePath, this.INITFILENAME); if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    read(): LicenseInitInfo | null {
        return this.readAgain(0);
    }
    

    readAgain(initializeCounter: i32): LicenseInitInfo | null {
        let METHOD_NAME: string | null = "readAgain";
        if (this.filePath == this.stringUtil!.EMPTY_STRING) {
            this.filePath = jstr(URLGLOBALS.getMainPath()) + jstr(PATH_GLOBALS.getInstance()!.INIT_PATH); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        do {
            this.logUtil!.putF(jstr("LicenseInitInfo File: ") + jstr(this.INITFILENAME), this, METHOD_NAME); if (JThrowable.pending !== null) break;
            let fileStreamFactory: FileStreamFactory | null = FileStreamFactory.getInstance(); if (JThrowable.pending !== null) break;
            let iFile: AbFileInputStream | null = fileStreamFactory!.getFileInputStreamInstance(this.filePath, this.INITFILENAME); if (JThrowable.pending !== null) break;
            if (iFile != null) {
                let iData: AbDataInputStream | null = new AbDataInputStream().jinit_AbDataInputStream_1(iFile); if (JThrowable.pending !== null) break;
                let initInfo: LicenseInitInfo | null = new LicenseInitInfo().jinit_LicenseInitInfo_0(); if (JThrowable.pending !== null) break;
                let decodedByteArray: StaticArray<i8> | null = DatabaseEncoder.decode(iData!.readUTF()); if (JThrowable.pending !== null) break;
                let licenseIdDecoded: string | null = JString.new1(decodedByteArray); if (JThrowable.pending !== null) break;
                initInfo!.setLicenseId(new WeakCrypt().jinit_WeakCrypt_1(1)!.decrypt(licenseIdDecoded)); if (JThrowable.pending !== null) break;
                let numberOfLicenseServers: i32 = iData!.readInt(); if (JThrowable.pending !== null) break;
                let NEXT_FILE: string | null = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.NEXT)!.append(" License Server From File: ")); if (JThrowable.pending !== null) break;
                let licenseServerDecoded: string | null = null;
                for (let index: i32 = 0; index < numberOfLicenseServers; index++) {
                    decodedByteArray = DatabaseEncoder.decode(iData!.readUTF()); if (JThrowable.pending !== null) break;
                    licenseServerDecoded = JString.new1(decodedByteArray); if (JThrowable.pending !== null) break;
                    initInfo!.setServer(new WeakCrypt().jinit_WeakCrypt_1(3)!.decrypt(licenseServerDecoded), index); if (JThrowable.pending !== null) break;
                    this.logUtil!.putF(jstr(NEXT_FILE) + jstr(initInfo!.getServer(index)), this, METHOD_NAME); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                return initInfo;
            } else {
                { JThrowable.raise(new JException().jinit_JException_1(jstr("Could Not Load License InitInfo: ") + jstr(this.INITFILENAME))); break; }
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            do {
                this.logUtil!.put(jstr("Command Failed: ") + jstr(this.INITFILENAME), this, METHOD_NAME, e); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e2: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(jstr("LicenseInitInfo Read Retry: ") + jstr(this.INITFILENAME), this, "readAgain()", e2); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JException().jinit_JException_1(jstr("LicenseInitInfo Read Error: ") + jstr(this.INITFILENAME))); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getFilePath(): string | null {
        return this.filePath;
    }
}

