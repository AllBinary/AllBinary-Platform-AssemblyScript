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
// import org.allbinary.logic.NullUtil

@global export class BaseSecretComposite extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.jcehelper.BaseSecretComposite";
    }
    @lazy static jv_NULL_SECRET_COMPOSITE: BaseSecretComposite | null = null;
    @lazy static js_NULL_SECRET_COMPOSITE: bool = false;
    static get NULL_SECRET_COMPOSITE(): BaseSecretComposite | null {
        if (!BaseSecretComposite.js_NULL_SECRET_COMPOSITE) {
            BaseSecretComposite.js_NULL_SECRET_COMPOSITE = true;
            BaseSecretComposite.jv_NULL_SECRET_COMPOSITE = new BaseSecretComposite().jinit_BaseSecretComposite_0();
        }
        return BaseSecretComposite.jv_NULL_SECRET_COMPOSITE;
    }
    static set NULL_SECRET_COMPOSITE(value: BaseSecretComposite | null) {
        BaseSecretComposite.js_NULL_SECRET_COMPOSITE = true;
        BaseSecretComposite.jv_NULL_SECRET_COMPOSITE = value;
    }

    jinit_BaseSecretComposite_0(): BaseSecretComposite {
        super.jinit_JObject_0();
        return this;
    }
    

    encrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    }
    

    decrypt(array: StaticArray<i8> | null): StaticArray<i8> | null {
        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    }
}

