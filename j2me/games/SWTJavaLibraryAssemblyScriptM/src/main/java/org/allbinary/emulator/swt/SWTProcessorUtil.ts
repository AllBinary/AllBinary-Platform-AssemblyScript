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

@global export class SWTProcessorUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.emulator.swt.SWTProcessorUtil";
    }
    @lazy static jv_instance: SWTProcessorUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SWTProcessorUtil | null {
        if (!SWTProcessorUtil.js_instance) {
            SWTProcessorUtil.js_instance = true;
            SWTProcessorUtil.jv_instance = new SWTProcessorUtil().jinit_SWTProcessorUtil_0();
        }
        return SWTProcessorUtil.jv_instance;
    }
    static set instance(value: SWTProcessorUtil | null) {
        SWTProcessorUtil.js_instance = true;
        SWTProcessorUtil.jv_instance = value;
    }
    swtProcessor: SWTProcessor | null = null;

    jfields_SWTProcessorUtil(): void {
    this.swtProcessor = SWTProcessor.getInstance();
    }

    jinit_SWTProcessorUtil_0(): SWTProcessorUtil {
        super.jinit_JObject_0();
        this.jfields_SWTProcessorUtil();
        return this;
    }
    

    static getInstance(): SWTProcessorUtil | null {
        return SWTProcessorUtil.instance;
    }
}

