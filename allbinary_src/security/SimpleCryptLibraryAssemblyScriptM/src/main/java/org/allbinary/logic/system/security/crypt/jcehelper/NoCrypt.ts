/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// import org.allbinary.init.crypt.jcehelper.CryptInterface

@global export class NoCrypt extends JObject implements CryptInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.jcehelper.NoCrypt";
    }

    jinit_NoCrypt_0(): NoCrypt {
        super.jinit_JObject_0();
        return this;
    }
    

    encrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        return array;
    }
    

    decrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        return array;
    }
}

