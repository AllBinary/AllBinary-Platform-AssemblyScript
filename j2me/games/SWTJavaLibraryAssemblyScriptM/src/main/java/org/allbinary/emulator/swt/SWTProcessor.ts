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
// package org.allbinary.emulator.swt
// import org.allbinary.thread.NullRunnable
// import org.eclipse.swt.widgets.Display

@global export class SWTProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.emulator.swt.SWTProcessor";
    }
    @lazy static jv_instance: SWTProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SWTProcessor | null {
        if (!SWTProcessor.js_instance) {
            SWTProcessor.js_instance = true;
            SWTProcessor.jv_instance = new SWTProcessor().jinit_SWTProcessor_0();
        }
        return SWTProcessor.jv_instance;
    }
    static set instance(value: SWTProcessor | null) {
        SWTProcessor.js_instance = true;
        SWTProcessor.jv_instance = value;
    }
    runnable: JRunnable | null = null;

    jfields_SWTProcessor(): void {
    this.runnable = NullRunnable.getInstance();
    }
    

    static getInstance(): SWTProcessor | null {
        return SWTProcessor.instance;
    }
    

    jinit_SWTProcessor_0(): SWTProcessor {
        super.jinit_JObject_0();
        this.jfields_SWTProcessor();
        return this;
    }
    

    process(display: Display | null): void {
        display!.sleep(); if (JThrowable.pending !== null) return;
    }
}

