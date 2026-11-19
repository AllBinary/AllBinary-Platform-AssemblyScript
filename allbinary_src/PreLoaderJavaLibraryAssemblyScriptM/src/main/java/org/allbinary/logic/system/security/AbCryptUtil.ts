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
// package org.allbinary.logic.system.security
// import java.io.ByteArrayOutputStream
// import java.io.InputStream
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.system.security.crypt.jcehelper.AbCrypt
// import org.allbinary.logic.system.security.crypt.jcehelper.KeySpecFactory

@global export class AbCryptUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.AbCryptUtil";
    }
    @lazy static jv_instance: AbCryptUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbCryptUtil | null {
        if (!AbCryptUtil.js_instance) {
            AbCryptUtil.js_instance = true;
            AbCryptUtil.jv_instance = new AbCryptUtil().jinit_AbCryptUtil_0();
        }
        return AbCryptUtil.jv_instance;
    }
    static set instance(value: AbCryptUtil | null) {
        AbCryptUtil.js_instance = true;
        AbCryptUtil.jv_instance = value;
    }
    streamUtil: StreamUtil | null = null;

    jfields_AbCryptUtil(): void {
    this.streamUtil = StreamUtil.getInstance();
    }
    

    static getInstance(): AbCryptUtil | null {
        return AbCryptUtil.instance;
    }
    

    jinit_AbCryptUtil_0(): AbCryptUtil {
        super.jinit_JObject_0();
        this.jfields_AbCryptUtil();
        return this;
    }
    

    decrypt(inputStream: JInputStream | null, key: string | null): StaticArray<i8> | null {
        let outputStream: JByteArrayOutputStream | null = null;
        do {
            outputStream = changetype<JByteArrayOutputStream | null>(this.streamUtil!.get(inputStream, new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(), new StaticArray<i8>(16384))); if (JThrowable.pending !== null) break;
            let abCrypt: AbCrypt | null = new AbCrypt().jinit_AbCrypt_1(KeySpecFactory.getInstance()!.DESEDE); if (JThrowable.pending !== null) break;
            abCrypt!.init(key); if (JThrowable.pending !== null) break;
            return abCrypt!.decrypt(outputStream!.toByteArray());
        } while (false);
        {
            this.streamUtil!.close(outputStream); if (JThrowable.pending !== null) return null;
            this.streamUtil!.close(inputStream); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

