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
// package org.allbinary.business.init

@global export class LicenseInitInfoUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.LicenseInitInfoUtil";
    }
    @lazy static jv_instance: LicenseInitInfoUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LicenseInitInfoUtil | null {
        if (!LicenseInitInfoUtil.js_instance) {
            LicenseInitInfoUtil.js_instance = true;
            LicenseInitInfoUtil.jv_instance = new LicenseInitInfoUtil().jinit_LicenseInitInfoUtil_0();
        }
        return LicenseInitInfoUtil.jv_instance;
    }
    static set instance(value: LicenseInitInfoUtil | null) {
        LicenseInitInfoUtil.js_instance = true;
        LicenseInitInfoUtil.jv_instance = value;
    }
    INITFILENAME: string | null = null;
    ABOUT: string | null = null;
    PRIVACY_POLICY: string | null = null;
    OFFICIAL_ALLBINARY_SERVICES_SERVER: string | null = null;

    jfields_LicenseInitInfoUtil(): void {
    this.INITFILENAME = "licenseinitdata.dat";
    this.ABOUT = "about";
    this.PRIVACY_POLICY = "privacy_policy";
    this.OFFICIAL_ALLBINARY_SERVICES_SERVER = "https://services.allbinary.com/LicServ/serverssl.php";
    }
    

    static getInstance(): LicenseInitInfoUtil | null {
        return LicenseInitInfoUtil.instance;
    }
    

    setFilePath(filePath: string | null): void {
    }
    

    jinit_LicenseInitInfoUtil_0(): LicenseInitInfoUtil {
        super.jinit_JObject_0();
        this.jfields_LicenseInitInfoUtil();
        return this;
    }
    

    write(initData: LicenseInitInfo | null): void {
    }
    

    read(): LicenseInitInfo | null {
        return this.readAgain(0);
    }
    

    readAgain(initializeCounter: i32): LicenseInitInfo | null {
        let licenseInitInfo: LicenseInitInfo | null = new LicenseInitInfo().jinit_LicenseInitInfo_0(); if (JThrowable.pending !== null) return null;
        licenseInitInfo!.clearServers(); if (JThrowable.pending !== null) return null;
        licenseInitInfo!.addServer(this.OFFICIAL_ALLBINARY_SERVICES_SERVER); if (JThrowable.pending !== null) return null;
        return licenseInitInfo;
    }
}

