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
// import java.security.Security
// import java.security.spec.KeySpec
// import javax.crypto.Cipher
// import javax.crypto.SecretKey
// import javax.crypto.SecretKeyFactory
// import org.allbinary.TsUtil
// import org.allbinary.init.crypt.jcehelper.CryptInterface
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings
// import org.bouncycastle.jce.provider.BouncyCastleProvider

@global export class AbCrypt extends JObject implements CryptInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.jcehelper.AbCrypt";
    }
    tsUtil: TsUtil | null = null;
    secretComposite: BaseSecretComposite | null = null;
    algorithm: string | null = null;

    jfields_AbCrypt(): void {
    this.tsUtil = TsUtil.getInstance();
    this.secretComposite = BaseSecretComposite.NULL_SECRET_COMPOSITE;
    
    }
    

    jinit_AbCrypt_1(algorithm: string | null): AbCrypt {
        super.jinit_JObject_0();
        this.jfields_AbCrypt();
        this.algorithm = algorithm;
        return this;
    }
    

    init(keyAsString: string | null): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        do {
            do {
                Security.addProvider(new BouncyCastleProvider().jinit_BouncyCastleProvider_0()); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let key: StaticArray<i8> | null = this.tsUtil!.getByteArray(keyAsString); if (JThrowable.pending !== null) break;
            let keySpec: KeySpec | null = KeySpecFactory.getInstance()!.getInstance2(this.algorithm, key); if (JThrowable.pending !== null) break;
            let keyFactory: SecretKeyFactory | null = SecretKeyFactory.getInstance1(this.algorithm); if (JThrowable.pending !== null) break;
            let secretKey: SecretKey | null = keyFactory!.generateSecret(keySpec); if (JThrowable.pending !== null) break;
            let cipher: Cipher | null = Cipher.getInstance1(this.algorithm); if (JThrowable.pending !== null) break;
            this.secretComposite = new SecretComposite().jinit_SecretComposite_3(secretKey, cipher, key); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("init Failed", this, commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    encrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        do {
            return this.secretComposite!.encrypt(array);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e); if (JThrowable.pending !== null) return null;
            return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    decrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        do {
            return this.secretComposite!.decrypt(array);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("decrypt Failed", this, "decrypt", e); if (JThrowable.pending !== null) return null;
            return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

