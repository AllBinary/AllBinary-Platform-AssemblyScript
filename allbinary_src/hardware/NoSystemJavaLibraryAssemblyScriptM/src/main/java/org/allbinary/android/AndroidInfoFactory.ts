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
// package org.allbinary.android

@global export class AndroidInfoFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.android.AndroidInfoFactory";
    }
    @lazy static jv_instance: AndroidInfoFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AndroidInfoFactory | null {
        if (!AndroidInfoFactory.js_instance) {
            AndroidInfoFactory.js_instance = true;
            AndroidInfoFactory.jv_instance = new AndroidInfoFactory().jinit_AndroidInfoFactory_0();
        }
        return AndroidInfoFactory.jv_instance;
    }
    static set instance(value: AndroidInfoFactory | null) {
        AndroidInfoFactory.js_instance = true;
        AndroidInfoFactory.jv_instance = value;
    }
    version: i32 = 0;

    jfields_AndroidInfoFactory(): void {
    this.version = 8;
    }

    jinit_AndroidInfoFactory_0(): AndroidInfoFactory {
        super.jinit_JObject_0();
        this.jfields_AndroidInfoFactory();
        return this;
    }
    

    static getInstance(): AndroidInfoFactory | null {
        return AndroidInfoFactory.instance;
    }
    

    getVersion(): i32 {
        return this.version;
    }
}

