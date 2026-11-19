/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import javax.crypto.Cipher
// import javax.crypto.SecretKey
// import org.allbinary.logic.java.byteutil.ByteUtil

@global export class SecretComposite extends BaseSecretComposite {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.jcehelper.SecretComposite";
    }
    byteUtil: ByteUtil | null = null;
    cipher: Cipher | null = null;
    secretKey: SecretKey | null = null;
    key: StaticArray<i8> | null = null;

    jfields_SecretComposite(): void {
    this.byteUtil = ByteUtil.getInstance();
    
    
    
    }
    

    jinit_SecretComposite_3(secretKey: SecretKey | null, cipher: Cipher | null, key: StaticArray<i8> | null): SecretComposite {
        super.jinit_BaseSecretComposite_0();
        this.jfields_SecretComposite();
        this.secretKey = secretKey;
        this.cipher = cipher;
        this.key = key;
        return this;
    }
    

    encrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        array = this.mutilate(array); if (JThrowable.pending !== null) return null;
        this.cipher!.init(Cipher.ENCRYPT_MODE, this.secretKey); if (JThrowable.pending !== null) return null;
        return this.cipher!.doFinal(array);
    }
    

    decrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        this.cipher!.init(Cipher.DECRYPT_MODE, this.secretKey); if (JThrowable.pending !== null) return null;
        return this.mutilate(this.cipher!.doFinal(array));
    }
    

    mutilate(array: StaticArray<i8> | null): StaticArray<i8> | null {
        for (let index: i32 = 0; index < this.key!.length; index++) {
            let value: i8 = this.key![index];
            if ((<i32>(value)) < 8 && (<i32>(value)) > 0) {
                array = this.byteUtil!.xorByte(array, (<i32>(value))); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return array;
    }
}

