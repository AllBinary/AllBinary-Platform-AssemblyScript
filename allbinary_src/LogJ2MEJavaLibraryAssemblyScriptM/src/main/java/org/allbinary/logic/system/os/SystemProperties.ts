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

//ActualPlatform
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
    OS_NAME: string | null = null;
    OS_ARCH: string | null = null;
    OS_VERSION: string | null = null;
    USER_HOME: string | null = null;

    jfields_SystemProperties(): void {
    this.OS_NAME = "os.name";
    this.OS_ARCH = "os.arch";
    this.OS_VERSION = "os.version";
    this.USER_HOME = "user.home";
    }
    

    static getInstance(): SystemProperties | null {
        return SystemProperties.instance;
    }
    

    jinit_SystemProperties_0(): SystemProperties {
        super.jinit_JObject_0();
        this.jfields_SystemProperties();
        return this;
    }
    

    getName(): string | null {
        return JSystem.getProperty(this.OS_NAME);
    }
    

    getArch(): string | null {
        return JSystem.getProperty(this.OS_ARCH);
    }
    

    getVersion(): string | null {
        return JSystem.getProperty(this.OS_VERSION);
    }
    

    getUserHomePath(): string | null {
        return JSystem.getProperty(this.USER_HOME);
    }
}

