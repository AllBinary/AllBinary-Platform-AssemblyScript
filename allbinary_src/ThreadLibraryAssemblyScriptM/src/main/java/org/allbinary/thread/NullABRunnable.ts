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
// package org.allbinary.thread

@global export class NullABRunnable extends ABRunnable {

    jclassName(): string {
        return "org.allbinary.thread.NullABRunnable";
    }
    @lazy static jv_instance: NullABRunnable | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NullABRunnable | null {
        if (!NullABRunnable.js_instance) {
            NullABRunnable.js_instance = true;
            NullABRunnable.jv_instance = new NullABRunnable().jinit_NullABRunnable_0();
        }
        return NullABRunnable.jv_instance;
    }
    static set instance(value: NullABRunnable | null) {
        NullABRunnable.js_instance = true;
        NullABRunnable.jv_instance = value;
    }

    jinit_NullABRunnable_0(): NullABRunnable {
        super.jinit_ABRunnable_0();
        return this;
    }
    

    static getInstance(): NullABRunnable | null {
        return NullABRunnable.instance;
    }
    

    isRunning(): bool {
        return false;
    }
}

