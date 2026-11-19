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
// import org.allbinary.TsUtil
// import org.allbinary.init.crypt.jcehelper.CryptInterface
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.java.byteutil.ByteUtil
// import org.allbinary.string.CommonStrings

@global export class BasicCrypt extends JObject implements CryptInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.jcehelper.BasicCrypt";
    }
    byteUtil: ByteUtil | null = null;
    key: StaticArray<i8> | null = null;

    jfields_BasicCrypt(): void {
    this.byteUtil = ByteUtil.getInstance();
    
    }
    

    jinit_BasicCrypt_1(keyAsString: string | null): BasicCrypt {
        super.jinit_JObject_0();
        this.jfields_BasicCrypt();
        let key: StaticArray<i8> | null = NullUtil.getInstance()!.NULL_BYTE_ARRAY; if (JThrowable.pending !== null) return this;
        do {
            key = TsUtil.getInstance()!.getByteArray(keyAsString); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "AbCrypt(alg,key)", e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.key = key;
        return this;
    }
    

    encrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        do {
            return this.mutilate(array);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e); if (JThrowable.pending !== null) return null;
            return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    decrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        do {
            return this.mutilate(array);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("decrypt Failed", this, "decrypt", e); if (JThrowable.pending !== null) return null;
            return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    mutilate(array: StaticArray<i8> | null): StaticArray<i8> | null {
        let value: i8 = 0;
        for (let index: i32 = 0; index < this.key!.length; index++) {
            value = this.key![index];
            array = this.byteUtil!.xor(array, value); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return array;
    }
}

