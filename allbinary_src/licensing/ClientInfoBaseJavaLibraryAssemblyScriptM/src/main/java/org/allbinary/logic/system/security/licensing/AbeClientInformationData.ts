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

@global export class AbeClientInformationData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.AbeClientInformationData";
    }
    @lazy static jv_instance: AbeClientInformationData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbeClientInformationData | null {
        if (!AbeClientInformationData.js_instance) {
            AbeClientInformationData.js_instance = true;
            AbeClientInformationData.jv_instance = new AbeClientInformationData().jinit_AbeClientInformationData_0();
        }
        return AbeClientInformationData.jv_instance;
    }
    static set instance(value: AbeClientInformationData | null) {
        AbeClientInformationData.js_instance = true;
        AbeClientInformationData.jv_instance = value;
    }
    KEY: string | null = null;
    NAME: string | null = null;
    VERSION: string | null = null;
    SPECIALNAME: string | null = null;
    LICENSEID: string | null = null;
    LICENSE_TYPE: string | null = null;
    PREVIOUSLICENSEID: string | null = null;
    OSNAME: string | null = null;
    OSARCH: string | null = null;
    OSVERSION: string | null = null;
    OS: string | null = null;
    HARDWARE: string | null = null;
    LICENSESERVERS: string | null = null;
    NEWLICENSE: string | null = null;
    ISNEW: string | null = null;
    SPECIAL: string | null = null;

    jfields_AbeClientInformationData(): void {
    this.KEY = "KEY";
    this.NAME = "NAME";
    this.VERSION = "VERSION";
    this.SPECIALNAME = "SPECIALNAME";
    this.LICENSEID = "LICENSEID";
    this.LICENSE_TYPE = "LICENSETYPE";
    this.PREVIOUSLICENSEID = "PREVIOUSLICENSEID";
    this.OSNAME = "OSNAME";
    this.OSARCH = "OSARCH";
    this.OSVERSION = "OSVERSION";
    this.OS = "OS";
    this.HARDWARE = "HARDWARE";
    this.LICENSESERVERS = "LICENSESERVERS";
    this.NEWLICENSE = "NEWLICENSE";
    this.ISNEW = "ISNEW";
    this.SPECIAL = "SPECIAL";
    }
    

    static getInstance(): AbeClientInformationData | null {
        return AbeClientInformationData.instance;
    }
    

    jinit_AbeClientInformationData_0(): AbeClientInformationData {
        super.jinit_JObject_0();
        this.jfields_AbeClientInformationData();
        return this;
    }
}

