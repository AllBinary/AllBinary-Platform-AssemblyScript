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
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AbeNoLicense extends JObject implements AbeLicenseInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.AbeNoLicense";
    }
    @lazy static jv_abeNoLicense: AbeNoLicense | null = null;
    @lazy static js_abeNoLicense: bool = false;
    static get abeNoLicense(): AbeNoLicense | null {
        if (!AbeNoLicense.js_abeNoLicense) {
            AbeNoLicense.js_abeNoLicense = true;
            AbeNoLicense.jv_abeNoLicense = new AbeNoLicense().jinit_AbeNoLicense_0();
        }
        return AbeNoLicense.jv_abeNoLicense;
    }
    static set abeNoLicense(value: AbeNoLicense | null) {
        AbeNoLicense.js_abeNoLicense = true;
        AbeNoLicense.jv_abeNoLicense = value;
    }
    serverVector: BasicArrayList | null = null;

    jfields_AbeNoLicense(): void {
    this.serverVector = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_AbeNoLicense_0(): AbeNoLicense {
        super.jinit_JObject_0();
        this.jfields_AbeNoLicense();
        return this;
    }
    

    static getInstance(): AbeNoLicense | null {
        return AbeNoLicense.abeNoLicense;
    }
    

    hasKey(): bool {
        return false;
    }
    

    getKey(keyName: string | null): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    getLicenseId(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    getSpecial(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    getServers(): BasicArrayList | null {
        return this.serverVector;
    }
    

    isValid(): bool {
        return false;
    }
    

    getLicenseType(): LicenseType | null {
        return LicenseTypeFactory.getInstance()!.UNKNOWN;
    }
}

