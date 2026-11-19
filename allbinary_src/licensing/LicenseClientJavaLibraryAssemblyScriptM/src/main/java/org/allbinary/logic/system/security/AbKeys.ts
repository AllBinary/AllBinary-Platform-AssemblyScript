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
// package org.allbinary.logic.system.security
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.AbeLicenseInterfaceFactory
// import org.allbinary.logic.system.security.licensing.LicensingException

@global export class AbKeys extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.AbKeys";
    }
    @lazy static jv_instance: AbKeys | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbKeys | null {
        if (!AbKeys.js_instance) {
            AbKeys.js_instance = true;
            AbKeys.jv_instance = new AbKeys().jinit_AbKeys_0();
        }
        return AbKeys.jv_instance;
    }
    static set instance(value: AbKeys | null) {
        AbKeys.js_instance = true;
        AbKeys.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_AbKeys(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    static getInstance(): AbKeys | null {
        return AbKeys.instance;
    }
    

    jinit_AbKeys_0(): AbKeys {
        super.jinit_JObject_0();
        this.jfields_AbKeys();
        return this;
    }
    

    getKey(abeClientInformation: AbeClientInformationInterface | null, keyName: string | null): string | null {
        do {
            this.logUtil!.putF(jstr("Getting Key: ") + jstr(keyName), this, "getKey"); if (JThrowable.pending !== null) break;
            if (JString.compareTo1(keyName, "DirectX 8") == 0 || JString.compareTo1(keyName, "DirectX") == 0 || JString.compareTo1(keyName, "Low Level") == 0 || JString.compareTo1(keyName, "System Drivers") == 0) {
                return "Temp For Input Library";
            } if (JThrowable.pending !== null) break;
            return AbeLicenseInterfaceFactory.getInstance()!.getLicenseInstance(abeClientInformation)!.getKey(keyName);
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof LicensingException) {
            let e: LicensingException | null = changetype<LicensingException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put("Licensing Failure", this, "getKey()", e); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new LicensingException().jinit_LicensingException_1("Unknown License Failure")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

