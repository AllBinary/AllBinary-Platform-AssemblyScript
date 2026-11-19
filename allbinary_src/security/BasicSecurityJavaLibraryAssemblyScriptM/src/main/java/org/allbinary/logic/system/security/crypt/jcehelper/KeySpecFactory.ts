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
// package org.allbinary.logic.system.security.crypt.jcehelper
// import java.security.spec.KeySpec
// import javax.crypto.spec.DESKeySpec
// import javax.crypto.spec.DESedeKeySpec
// import org.allbinary.TsUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings

@global export class KeySpecFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.jcehelper.KeySpecFactory";
    }
    @lazy static jv_instance: KeySpecFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): KeySpecFactory | null {
        if (!KeySpecFactory.js_instance) {
            KeySpecFactory.js_instance = true;
            KeySpecFactory.jv_instance = new KeySpecFactory().jinit_KeySpecFactory_0();
        }
        return KeySpecFactory.jv_instance;
    }
    static set instance(value: KeySpecFactory | null) {
        KeySpecFactory.js_instance = true;
        KeySpecFactory.jv_instance = value;
    }
    DES: string | null = null;
    DESEDE: string | null = null;
    BLOWFISH: string | null = null;

    jfields_KeySpecFactory(): void {
    this.DES = "DES";
    this.DESEDE = "DESede";
    this.BLOWFISH = "Blowfish";
    }
    

    static getInstance(): KeySpecFactory | null {
        return KeySpecFactory.instance;
    }
    

    jinit_KeySpecFactory_0(): KeySpecFactory {
        super.jinit_JObject_0();
        this.jfields_KeySpecFactory();
        return this;
    }
    

    getInstance2(algorithm: string | null, keyData: StaticArray<i8> | null): KeySpec | null {
        do {
            let tsUtil: TsUtil | null = TsUtil.getInstance(); if (JThrowable.pending !== null) break;
            if (tsUtil!.compareTo(algorithm, this.DES) == 0) {
                return new DESKeySpec().jinit_DESKeySpec_1(keyData);
            } else if (tsUtil!.compareTo(algorithm, this.DESEDE) == 0) {
                return new DESedeKeySpec().jinit_DESedeKeySpec_1(keyData);
            } else {
                { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); break; }
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

