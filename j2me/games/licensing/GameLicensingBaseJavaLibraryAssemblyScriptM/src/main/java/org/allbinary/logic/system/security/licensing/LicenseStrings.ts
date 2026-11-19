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

@global export class LicenseStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LicenseStrings";
    }
    @lazy static jv_instance: LicenseStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LicenseStrings | null {
        if (!LicenseStrings.js_instance) {
            LicenseStrings.js_instance = true;
            LicenseStrings.jv_instance = new LicenseStrings().jinit_LicenseStrings_0();
        }
        return LicenseStrings.jv_instance;
    }
    static set instance(value: LicenseStrings | null) {
        LicenseStrings.js_instance = true;
        LicenseStrings.jv_instance = value;
    }
    LOCKED: string | null = null;

    jfields_LicenseStrings(): void {
    this.LOCKED = "Demo Locked Feature";
    }

    jinit_LicenseStrings_0(): LicenseStrings {
        super.jinit_JObject_0();
        this.jfields_LicenseStrings();
        return this;
    }
    

    static getInstance(): LicenseStrings | null {
        return LicenseStrings.instance;
    }
}

