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
// import org.eclipse.swt.widgets.EclipseDisplay

@global export class SWTRunnableProcessor extends SWTProcessor {

    jclassName(): string {
        return "org.allbinary.emulator.swt.SWTRunnableProcessor";
    }
    @lazy static jv_instanceR: SWTRunnableProcessor | null = null;
    @lazy static js_instanceR: bool = false;
    static get instanceR(): SWTRunnableProcessor | null {
        if (!SWTRunnableProcessor.js_instanceR) {
            SWTRunnableProcessor.js_instanceR = true;
            SWTRunnableProcessor.jv_instanceR = new SWTRunnableProcessor().jinit_SWTRunnableProcessor_0();
        }
        return SWTRunnableProcessor.jv_instanceR;
    }
    static set instanceR(value: SWTRunnableProcessor | null) {
        SWTRunnableProcessor.js_instanceR = true;
        SWTRunnableProcessor.jv_instanceR = value;
    }

    jinit_SWTRunnableProcessor_0(): SWTRunnableProcessor {
        super.jinit_SWTProcessor_0();
        return this;
    }
    

    static getInstance(): SWTRunnableProcessor | null {
        return SWTRunnableProcessor.instanceR;
    }
    

    process(display: EclipseDisplay | null): void {
    }
}

