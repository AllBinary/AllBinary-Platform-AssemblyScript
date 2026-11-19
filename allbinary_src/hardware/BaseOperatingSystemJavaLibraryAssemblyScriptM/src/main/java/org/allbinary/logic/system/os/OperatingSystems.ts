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

@global export class OperatingSystems extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.os.OperatingSystems";
    }
    @lazy static jv_instance: OperatingSystems | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OperatingSystems | null {
        if (!OperatingSystems.js_instance) {
            OperatingSystems.js_instance = true;
            OperatingSystems.jv_instance = new OperatingSystems().jinit_OperatingSystems_0();
        }
        return OperatingSystems.jv_instance;
    }
    static set instance(value: OperatingSystems | null) {
        OperatingSystems.js_instance = true;
        OperatingSystems.jv_instance = value;
    }
    LINUX: string | null = null;
    WINDOWS: string | null = null;
    SOLARIS: string | null = null;
    WINDOWS2000: string | null = null;
    WINDOWS_NT: string | null = null;
    WINDOWS_10: string | null = null;
    WINDOWS_11: string | null = null;
    WINDOWS_VISTA: string | null = null;
    WINDOWS_XP: string | null = null;
    ANDROID: string | null = null;
    HARMONY: string | null = null;
    unknownSpecificOSAllowed: bool = false;

    jfields_OperatingSystems(): void {
    this.LINUX = "Linux";
    this.WINDOWS = "Windows";
    this.SOLARIS = "Solaris";
    this.WINDOWS2000 = "Windows 2000";
    this.WINDOWS_NT = "Windows NT";
    this.WINDOWS_10 = "Windows 10";
    this.WINDOWS_11 = "Windows 11";
    this.WINDOWS_VISTA = "Windows Vista";
    this.WINDOWS_XP = "Windows XP";
    this.ANDROID = this.LINUX;
    this.HARMONY = "HarmonyOS";
    this.unknownSpecificOSAllowed = true;
    }
    

    jinit_OperatingSystems_0(): OperatingSystems {
        super.jinit_JObject_0();
        this.jfields_OperatingSystems();
        return this;
    }
    

    isUnknownSpecificOSAllowed(): bool {
        return this.unknownSpecificOSAllowed;
    }
    

    setUnknownSpecificOSAllowed(aUnknownSpecificOSAllowed: bool): void {
        this.unknownSpecificOSAllowed = aUnknownSpecificOSAllowed;
    }
    

    static getInstance(): OperatingSystems | null {
        return OperatingSystems.instance;
    }
}

