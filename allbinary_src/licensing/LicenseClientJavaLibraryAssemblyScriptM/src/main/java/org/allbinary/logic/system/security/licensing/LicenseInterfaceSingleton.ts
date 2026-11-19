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
// package org.allbinary.logic.system.security.licensing

@global export class LicenseInterfaceSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LicenseInterfaceSingleton";
    }
    @lazy static jv_licenseInterface: AbeLicenseInterface | null = null;
    @lazy static js_licenseInterface: bool = false;
    static get licenseInterface(): AbeLicenseInterface | null {
        if (!LicenseInterfaceSingleton.js_licenseInterface) {
            LicenseInterfaceSingleton.js_licenseInterface = true;
            LicenseInterfaceSingleton.jv_licenseInterface = AbeNoLicense.getInstance();
        }
        return LicenseInterfaceSingleton.jv_licenseInterface;
    }
    static set licenseInterface(value: AbeLicenseInterface | null) {
        LicenseInterfaceSingleton.js_licenseInterface = true;
        LicenseInterfaceSingleton.jv_licenseInterface = value;
    }

    jinit_LicenseInterfaceSingleton_0(): LicenseInterfaceSingleton {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AbeLicenseInterface | null {
        return LicenseInterfaceSingleton.licenseInterface;
    }
    

    static init(licenseInterface: AbeLicenseInterface | null): void {
        if (licenseInterface != null) {
            LicenseInterfaceSingleton.licenseInterface = licenseInterface;
        }
    }
}

