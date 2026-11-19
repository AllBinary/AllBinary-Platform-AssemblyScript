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
// package org.allbinary.thread
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor

@global export class NullRunnable extends ARunnable {

    jclassName(): string {
        return "org.allbinary.thread.NullRunnable";
    }
    @lazy static jv_instance: NullRunnable | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NullRunnable | null {
        if (!NullRunnable.js_instance) {
            NullRunnable.js_instance = true;
            NullRunnable.jv_instance = new NullRunnable().jinit_NullRunnable_0();
        }
        return NullRunnable.jv_instance;
    }
    static set instance(value: NullRunnable | null) {
        NullRunnable.js_instance = true;
        NullRunnable.jv_instance = value;
    }
    

    static getInstance(): NullRunnable | null {
        return NullRunnable.instance;
    }
    

    jinit_NullRunnable_0(): NullRunnable {
        super.jinit_ARunnable_0();
        return this;
    }
}

