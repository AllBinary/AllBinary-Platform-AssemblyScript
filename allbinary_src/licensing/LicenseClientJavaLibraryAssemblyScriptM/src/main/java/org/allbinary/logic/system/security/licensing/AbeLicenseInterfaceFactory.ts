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
// import java.io.IOException
// import java.util.Calendar
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.system.security.licensing.client.AbeLicenseClient
// import org.allbinary.string.CommonStrings

@global export class AbeLicenseInterfaceFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.AbeLicenseInterfaceFactory";
    }
    @lazy static jv_SINGLETON: AbeLicenseInterfaceFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): AbeLicenseInterfaceFactory | null {
        if (!AbeLicenseInterfaceFactory.js_SINGLETON) {
            AbeLicenseInterfaceFactory.js_SINGLETON = true;
            AbeLicenseInterfaceFactory.jv_SINGLETON = new AbeLicenseInterfaceFactory().jinit_AbeLicenseInterfaceFactory_0();
        }
        return AbeLicenseInterfaceFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: AbeLicenseInterfaceFactory | null) {
        AbeLicenseInterfaceFactory.js_SINGLETON = true;
        AbeLicenseInterfaceFactory.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    time: i64 = 0;
    check: bool = false;
    checkPeriod: i32 = 0;
    abeLicenseInterface: AbeLicenseInterface | null = null;

    jfields_AbeLicenseInterfaceFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.time = (<i64>0);
    this.check = false;
    this.checkPeriod = 36000000;
    this.abeLicenseInterface = null;
    }
    

    static getInstance(): AbeLicenseInterfaceFactory | null {
        return AbeLicenseInterfaceFactory.SINGLETON;
    }
    

    jinit_AbeLicenseInterfaceFactory_0(): AbeLicenseInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_AbeLicenseInterfaceFactory();
        return this;
    }
    

    getLicenseInstance(abeClientInformation: AbeClientInformationInterface | null): AbeLicenseInterface | null {
        if (this.isTimeToGetKey()) {
            return this.get(abeClientInformation);
        } else {
            return this.abeLicenseInterface;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    get(abeClientInformation: AbeClientInformationInterface | null): AbeLicenseInterface | null {
        do {
            this.logUtil!.putF("Getting Keys", this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            this.abeLicenseInterface = AbeNoLicense.getInstance(); if (JThrowable.pending !== null) break;
            let licenseClient: AbeLicenseClient | null = new AbeLicenseClient().jinit_AbeLicenseClient_0(); if (JThrowable.pending !== null) break;
            this.abeLicenseInterface = licenseClient!.get(abeClientInformation); if (JThrowable.pending !== null) break;
            if (this.abeLicenseInterface != null) {
                this.logUtil!.putF(jstr("Default Key: ") + jstr(this.abeLicenseInterface!.getKey(AbeClientInformationData.getInstance()!.KEY)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return this.abeLicenseInterface;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let e: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            this.logUtil!.put("Licensing IO Error", this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new LicensingException().jinit_LicensingException_1("License Server Connection Error")); return null; }
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Licensing Failure", this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new LicensingException().jinit_LicensingException_1(jstr("Unknown License Failure: ") + jstr(JObject.jclassOf(this)!.getName()))); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    isTimeToGetKey(): bool {
        let calendar: JCalendar | null = JCalendar.getInstance(); if (JThrowable.pending !== null) return false;
        let currentTime: i64 = calendar!.getTimeInMillis(); if (JThrowable.pending !== null) return false;
        if (this.abeLicenseInterface == null || this.abeLicenseInterface == AbeNoLicense.getInstance() || !this.abeLicenseInterface!.hasKey() || this.isCheck() || currentTime - (<i64>(this.checkPeriod)) > this.time) {
            this.abeLicenseInterface = null;
            this.time = currentTime;
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setCheck(check: bool): void {
        this.check = check;
    }
    

    isCheck(): bool {
        return this.check;
    }
}

