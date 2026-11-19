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
// package org.allbinary.logic.system.security.licensing.client
// import org.allbinary.business.init.LicenseInitInfo
// import org.allbinary.business.init.LicenseInitInfoUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.AbeLicenseInterface
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class AbeLicenseClient extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.client.AbeLicenseClient";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    MINSERVERS: i32 = 0;

    jfields_AbeLicenseClient(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.MINSERVERS = 3;
    }
    

    jinit_AbeLicenseClient_0(): AbeLicenseClient {
        super.jinit_JObject_0();
        this.jfields_AbeLicenseClient();
        return this;
    }
    

    get(abeClientInformation: AbeClientInformationInterface | null): AbeLicenseInterface | null {
        do {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            let xmlRpcAbeLicenseClient: XmlRpcAbeClient | null = new XmlRpcAbeLicenseRetrievalClient().jinit_XmlRpcAbeLicenseRetrievalClient_1(abeClientInformation); if (JThrowable.pending !== null) break;
            let abeLicenseInterface: AbeLicenseInterface | null = changetype<AbeLicenseInterface | null>(xmlRpcAbeLicenseClient!.get(null)); if (JThrowable.pending !== null) break;
            let licenseId: string | null = abeLicenseInterface!.getLicenseId(); if (JThrowable.pending !== null) break;
            let servers: BasicArrayList | null = abeLicenseInterface!.getServers(); if (JThrowable.pending !== null) break;
            let isNewLicenseId: bool = false;
            let isBetterServerList: bool = false;
            let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) break;
            if (stringValidationUtil!.isEmpty(abeClientInformation!.getLicenseId()) && !abeClientInformation!.isSameId(licenseId)) {
                isNewLicenseId = true;
            } if (JThrowable.pending !== null) break;
            if (servers!.size() >= this.MINSERVERS && abeClientInformation!.isLargerOrDifferentServerList(servers)) {
                isBetterServerList = true;
            } if (JThrowable.pending !== null) break;
            if (isBetterServerList || isNewLicenseId) {
                let initInfo: LicenseInitInfo | null = LicenseInitInfoUtil.getInstance()!.read(); if (JThrowable.pending !== null) break;
                initInfo!.setLicenseId(licenseId); if (JThrowable.pending !== null) break;
                initInfo!.setServerList(servers); if (JThrowable.pending !== null) break;
                LicenseInitInfoUtil.getInstance()!.write(initInfo); if (JThrowable.pending !== null) break;
                abeClientInformation!.init(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            return abeLicenseInterface;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

