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
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AbeClientLicense extends JObject implements AbeLicenseInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.AbeClientLicense";
    }
    hashtable: ABHashtable | null = null;
    id: string | null = null;
    servers: BasicArrayList | null = null;
    special: string | null = null;
    licenseType: LicenseType | null = null;

    jfields_AbeClientLicense(): void {
    
    
    
    this.special = null;
    
    }
    

    jinit_AbeClientLicense_1(hashtable: ABHashtable | null): AbeClientLicense {
        super.jinit_JObject_0();
        this.jfields_AbeClientLicense();
        this.hashtable = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return this;
        let abeClientInformationData: AbeClientInformationData | null = AbeClientInformationData.getInstance(); if (JThrowable.pending !== null) return this;
        let keyValue: Object | null = hashtable!.get(abeClientInformationData!.KEY); if (JThrowable.pending !== null) return this;
        if (keyValue != null) {
            if ((keyValue instanceof String)) {
                this.hashtable!.put(abeClientInformationData!.KEY, keyValue); if (JThrowable.pending !== null) return this;
            } if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.id = changetype<string | null>(hashtable!.get(abeClientInformationData!.LICENSEID)); if (JThrowable.pending !== null) return this;
        let vector: BasicArrayList | null = changetype<BasicArrayList | null>(hashtable!.get(abeClientInformationData!.LICENSESERVERS)); if (JThrowable.pending !== null) return this;
        this.servers = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        let size: i32 = vector!.size(); if (JThrowable.pending !== null) return this;
        for (let index: i32 = 0; index < size; index++) {
            this.servers!.add(vector!.get(index)); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return this;
        this.setSpecial(stringUtil!.getNonNull(changetype<string | null>(hashtable!.get(abeClientInformationData!.SPECIAL)))); if (JThrowable.pending !== null) return this;
        let licenseTypeString: string | null = stringUtil!.getNonNull(changetype<string | null>(hashtable!.get(abeClientInformationData!.LICENSE_TYPE))); if (JThrowable.pending !== null) return this;
        this.licenseType = LicenseTypeFactory.getInstance()!.getInstance1(licenseTypeString); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    static hasRequiredKeys(resultHashtable: ABHashtable | null): bool {
        let abeClientInformationData: AbeClientInformationData | null = AbeClientInformationData.getInstance(); if (JThrowable.pending !== null) return false;
        if (resultHashtable!.containsKey(abeClientInformationData!.LICENSEID) && resultHashtable!.containsKey(abeClientInformationData!.LICENSESERVERS) && resultHashtable!.containsKey(abeClientInformationData!.KEY) && resultHashtable!.containsKey(abeClientInformationData!.LICENSE_TYPE)) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    hasKey(): bool {
        return this.isValid();
    }
    

    getKey(keyName: string | null): string | null {
        return changetype<string | null>(this.hashtable!.get(keyName));
    }
    

    getLicenseId(): string | null {
        return this.id;
    }
    

    getServers(): BasicArrayList | null {
        return this.servers;
    }
    

    isValid(): bool {
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return false;
        if (!stringValidationUtil!.isEmpty(this.getKey(AbeClientInformationData.getInstance()!.KEY))) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let BREAK: string | null = "<br/>";
        stringBuffer!.append("License Id: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getLicenseId()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(BREAK); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Is Valid: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isValid()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(BREAK); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Keys: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.hashtable)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(BREAK); if (JThrowable.pending !== null) return null;
        let serverVector: BasicArrayList | null = this.getServers(); if (JThrowable.pending !== null) return null;
        let size: i32 = serverVector!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let nextServerString: string | null = changetype<string | null>(serverVector!.get(index)); if (JThrowable.pending !== null) return null;
            stringBuffer!.append("Server: "); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(nextServerString); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(BREAK); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    setSpecial(special: string | null): void {
        this.special = special;
    }
    

    getSpecial(): string | null {
        return this.special;
    }
    

    getLicenseType(): LicenseType | null {
        return this.licenseType;
    }
}

