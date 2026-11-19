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
// import org.allbinary.business.init.LicenseInitInfo
// import org.allbinary.business.init.LicenseInitInfoUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.logic.system.os.OperatingSystemFactory
// import org.allbinary.string.CommonStrings

// This is the information sent to the license server
@global export class AbeClientInformation extends ClientInformation {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.AbeClientInformation";
    }
    logUtil: LogUtil | null = null;

    jfields_AbeClientInformation(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_AbeClientInformation_4(name: string | null, version: string | null, specialName: string | null, shortName: string | null): AbeClientInformation {
        super.jinit_ClientInformation_4(name, version, specialName, shortName);
        this.jfields_AbeClientInformation();
        return this;
    }
    

    init(): void {
        do {
            this.setOperatingSystemInterface(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()); if (JThrowable.pending !== null) break;
            let licenseInitInfo: LicenseInitInfo | null = LicenseInitInfoUtil.getInstance()!.read(); if (JThrowable.pending !== null) break;
            this.setLicenseId(licenseInitInfo!.getLicenseId()); if (JThrowable.pending !== null) break;
            this.setLicenseServers(licenseInitInfo!.getServerList()); if (JThrowable.pending !== null) break;
            let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) break;
            if (stringValidationUtil!.isEmpty(this.getLicenseId())) {
                let NONE: string | null = "No License Id";
                this.setLicenseId(NONE); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) break;
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Special Name: ")!.append(this.getSpecialName())), this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

