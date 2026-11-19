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
// package org.allbinary.logic.system.os

//NoPlatform
@global export class SystemProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.os.SystemProperties";
    }
    @lazy static jv_instance: SystemProperties | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SystemProperties | null {
        if (!SystemProperties.js_instance) {
            SystemProperties.js_instance = true;
            SystemProperties.jv_instance = new SystemProperties().jinit_SystemProperties_0();
        }
        return SystemProperties.jv_instance;
    }
    static set instance(value: SystemProperties | null) {
        SystemProperties.js_instance = true;
        SystemProperties.jv_instance = value;
    }
    

    static getInstance(): SystemProperties | null {
        return SystemProperties.instance;
    }
    

    jinit_SystemProperties_0(): SystemProperties {
        super.jinit_JObject_0();
        return this;
    }
    

    getName(): string | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getArch(): string | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getVersion(): string | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getUserHomePath(): string | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
}

