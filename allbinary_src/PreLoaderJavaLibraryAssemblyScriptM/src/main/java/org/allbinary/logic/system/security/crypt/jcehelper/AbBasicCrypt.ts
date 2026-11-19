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
// import java.security.Provider
// import java.security.Security
// import java.security.spec.KeySpec
// import javax.crypto.Cipher
// import javax.crypto.SecretKey
// import javax.crypto.SecretKeyFactory
// import org.allbinary.init.crypt.jcehelper.CryptInterface
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings
// import com.sun.crypto.provider.SunJCE

@global export class AbBasicCrypt extends JObject implements CryptInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.jcehelper.AbBasicCrypt";
    }
    cipher: Cipher | null = null;
    secretKey: SecretKey | null = null;
    algorithm: string | null = null;
    key: StaticArray<i8> | null = null;

    jfields_AbBasicCrypt(): void {
    this.cipher = null;
    this.secretKey = null;
    this.algorithm = null;
    this.key = null;
    }
    

    jinit_AbBasicCrypt_2(algorithm: string | null, key: string | null): AbBasicCrypt {
        super.jinit_JObject_0();
        this.jfields_AbBasicCrypt();
        do {
            this.algorithm = algorithm;
            this.key = JString.getBytes0(key); if (JThrowable.pending !== null) break;
            this.init(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "AbCrypt(alg,key)", e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
        do {
            let sunJce: JProvider | null = new SunJCE().jinit_SunJCE_0(); if (JThrowable.pending !== null) break;
            Security.addProvider(sunJce); if (JThrowable.pending !== null) break;
            let keySpec: KeySpec | null = KeySpecFactory.getInstance()!.getInstance2(this.algorithm, this.key); if (JThrowable.pending !== null) break;
            let keyFactory: SecretKeyFactory | null = SecretKeyFactory.getInstance1(this.algorithm); if (JThrowable.pending !== null) break;
            this.secretKey = keyFactory!.generateSecret(keySpec); if (JThrowable.pending !== null) break;
            this.cipher = Cipher.getInstance1(this.algorithm); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            PreLogUtil.putOE("init Failed", this, commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    encrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        do {
            this.cipher!.init(Cipher.ENCRYPT_MODE, this.secretKey); if (JThrowable.pending !== null) break;
            let ivArray: StaticArray<i8> | null = this.secretKey!.getEncoded(); if (JThrowable.pending !== null) break;
            let encrypted: StaticArray<i8> | null = this.cipher!.doFinal(array); if (JThrowable.pending !== null) break;
            let result: StaticArray<i8> | null = new StaticArray<i8>(ivArray!.length + encrypted!.length);
            PreLogUtil.put(jstr("ivArray Length: ") + jstr(ivArray!.length), this, "encrypt"); if (JThrowable.pending !== null) break;
            for (let index: i32 = 0; index < ivArray!.length; index++) {
                result![index] = ivArray![index];
            }
            for (let index: i32 = 0; index < encrypted!.length; index++) {
                result![index + ivArray!.length] = encrypted![index];
            }
            return result;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e); if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    decrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        do {
            this.cipher!.init(Cipher.DECRYPT_MODE, this.secretKey); if (JThrowable.pending !== null) break;
            let ivArray: StaticArray<i8> | null = new StaticArray<i8>(8);
            for (let index: i32 = 0; index < 8; index++) {
                ivArray![index] = array![index];
            }
            PreLogUtil.put(jstr("ivArray Length: ") + jstr(ivArray!.length), this, "encrypt"); if (JThrowable.pending !== null) break;
            let result: StaticArray<i8> | null = new StaticArray<i8>(array!.length - ivArray!.length);
            for (let index: i32 = ivArray!.length; index < array!.length; index++) {
                result![index - ivArray!.length] = array![index];
            }
            let decrypted: StaticArray<i8> | null = this.cipher!.doFinal(result); if (JThrowable.pending !== null) break;
            return result;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("decrypt Failed", this, "decrypt", e); if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

