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
// package org.allbinary.init.crypt.jcehelper
// import java.io.ByteArrayInputStream
// import java.io.ByteArrayOutputStream
// import java.io.InputStream
// import org.allbinary.TsUtil
// import org.allbinary.logic.communication.log.LogUtil

@global export class BasicCryptUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.init.crypt.jcehelper.BasicCryptUtil";
    }
    @lazy static jv_instance: BasicCryptUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicCryptUtil | null {
        if (!BasicCryptUtil.js_instance) {
            BasicCryptUtil.js_instance = true;
            BasicCryptUtil.jv_instance = new BasicCryptUtil().jinit_BasicCryptUtil_0();
        }
        return BasicCryptUtil.jv_instance;
    }
    static set instance(value: BasicCryptUtil | null) {
        BasicCryptUtil.js_instance = true;
        BasicCryptUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    tsUtil: TsUtil | null = null;
    XML_START: string | null = null;

    jfields_BasicCryptUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.tsUtil = TsUtil.getInstance();
    this.XML_START = "<?xml";
    }

    jinit_BasicCryptUtil_0(): BasicCryptUtil {
        super.jinit_JObject_0();
        this.jfields_BasicCryptUtil();
        return this;
    }
    

    static getInstance(): BasicCryptUtil | null {
        return BasicCryptUtil.instance;
    }
    

    getDecryptedInputStream(inputStream: JInputStream | null, cryptInterface: CryptInterface | null): JInputStream | null {
        let buffer: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) return null;
        let ch: i32 = 0;
        while (true) {
            ch = inputStream!.read0(); if (JThrowable.pending !== null) return null;
            if (ch == -1) {
                break;
            }
            buffer!.write1(ch); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let decrypted: StaticArray<i8> | null = cryptInterface!.decrypt(buffer!.toByteArray()); if (JThrowable.pending !== null) return null;
        let decryptedString: string | null = JString.new1(decrypted); if (JThrowable.pending !== null) return null;
        let index: i32 = JString.indexOf1(decryptedString, this.XML_START); if (JThrowable.pending !== null) return null;
        if (index > 0) {
            decryptedString = JString.substring1(decryptedString, index); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return new JByteArrayInputStream().jinit_JByteArrayInputStream_1(this.tsUtil!.getByteArray(decryptedString));
    }
}

