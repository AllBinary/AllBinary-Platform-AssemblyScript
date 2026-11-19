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
// import org.allbinary.TsUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.hardware.HardwareInterface
// import org.allbinary.logic.system.hardware.SystemHardwareFactory
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.logic.system.os.NoOperatingSystem
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

// This is the information sent to the license server
@global export class ClientInformation extends JObject implements AbeClientInformationInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.ClientInformation";
    }
    operatingSystemInterface: GenericOperatingSystem | null = null;
    tsUtil: TsUtil | null = null;
    name: string | null = null;
    shortName: string | null = null;
    version: string | null = null;
    specialName: string | null = null;
    hardSale: bool = false;
    licenseId: string | null = null;
    licenseServers: BasicArrayList | null = null;

    jfields_ClientInformation(): void {
    this.operatingSystemInterface = NoOperatingSystem.NO_OPERATING_SYSTEM;
    this.tsUtil = TsUtil.getInstance();
    
    
    
    
    this.hardSale = true;
    this.licenseId = StringUtil.getInstance()!.EMPTY_STRING;
    this.licenseServers = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    }
    

    jinit_ClientInformation_4(name: string | null, version: string | null, specialName: string | null, shortName: string | null): ClientInformation {
        super.jinit_JObject_0();
        this.jfields_ClientInformation();
        this.name = name;
        this.version = version;
        this.specialName = specialName;
        this.shortName = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(shortName)!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(version)); if (JThrowable.pending !== null) return this;
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
    }
    

    getOperatingSystemInterface(): GenericOperatingSystem | null {
        return this.operatingSystemInterface;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getSpecialName(): string | null {
        return this.specialName;
    }
    

    getVersion(): string | null {
        return this.version;
    }
    

    getLicenseId(): string | null {
        return this.licenseId;
    }
    

    getLicenseServers(): BasicArrayList | null {
        return this.licenseServers;
    }
    

    getLicenseServer(index: i32): string | null {
        return changetype<string | null>(this.licenseServers!.objectArray![index]);
    }
    

    getNumberOfLicenseServers(): i32 {
        return this.licenseServers!.size();
    }
    

    toHashtable(): ABHashtable | null {
        let abeClientInformationData: AbeClientInformationData | null = AbeClientInformationData.getInstance(); if (JThrowable.pending !== null) return null;
        let genericOperatingSystem: GenericOperatingSystem | null = this.getOperatingSystemInterface(); if (JThrowable.pending !== null) return null;
        let clientInfoHashtable: ABHashtable | null = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.NAME, this.name); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.VERSION, this.version); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.SPECIALNAME, this.specialName); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.LICENSEID, this.getLicenseId()); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.OSNAME, genericOperatingSystem!.getName()); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.OSARCH, genericOperatingSystem!.getArch()); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.OSVERSION, genericOperatingSystem!.getVersion()); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.OS, JObject.jtoString(genericOperatingSystem)); if (JThrowable.pending !== null) return null;
        let hardwareInterface: HardwareInterface | null = SystemHardwareFactory.getInstance()!.getInstance1(genericOperatingSystem); if (JThrowable.pending !== null) return null;
        let hardwareString: string | null = JObject.jtoString(hardwareInterface); if (JThrowable.pending !== null) return null;
        clientInfoHashtable!.put(abeClientInformationData!.HARDWARE, hardwareString); if (JThrowable.pending !== null) return null;
        return clientInfoHashtable;
    }
    

    isSameId(alicenseId: string | null): bool {
        if (this.tsUtil!.compareTo(this.getLicenseId(), alicenseId) == 0) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isLargerOrDifferentServerList(list: BasicArrayList | null): bool {
        let size: i32 = list!.size() - 1; if (JThrowable.pending !== null) return false;
        let currentSize: i32 = this.licenseServers!.size() - 1; if (JThrowable.pending !== null) return false;
        if (size > currentSize) {
            return true;
        }
        for (let index: i32 = size; index >= 0; index--) {
            let newServerName: string | null = changetype<string | null>(list!.objectArray![index]);
            for (let index2: i32 = currentSize; index2 >= 0; index2--) {
                let nextOldServerName: string | null = changetype<string | null>(this.licenseServers!.objectArray![index]);
                if (this.tsUtil!.compareTo(newServerName, nextOldServerName) != 0) {
                    return true;
                } if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setHardSale(hardSale: bool): void {
        this.hardSale = hardSale;
    }
    

    isHardSale(): bool {
        return this.hardSale;
    }
    

    setOperatingSystemInterface(operatingSystemInterface: GenericOperatingSystem | null): void {
        this.operatingSystemInterface = operatingSystemInterface;
    }
    

    setLicenseId(licenseId: string | null): void {
        this.licenseId = licenseId;
    }
    

    setLicenseServers(licenseServers: BasicArrayList | null): void {
        this.licenseServers = licenseServers;
    }
    

    toShortString(): string | null {
        return this.shortName;
    }
}

