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
// import org.allbinary.string.CommonStrings

@global export class LicenseTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LicenseTypeFactory";
    }
    @lazy static jv_instance: LicenseTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LicenseTypeFactory | null {
        if (!LicenseTypeFactory.js_instance) {
            LicenseTypeFactory.js_instance = true;
            LicenseTypeFactory.jv_instance = new LicenseTypeFactory().jinit_LicenseTypeFactory_0();
        }
        return LicenseTypeFactory.jv_instance;
    }
    static set instance(value: LicenseTypeFactory | null) {
        LicenseTypeFactory.js_instance = true;
        LicenseTypeFactory.jv_instance = value;
    }
    UNKNOWN: LicenseType | null = null;
    DEMO: LicenseType | null = null;
    NORMAL: LicenseType | null = null;

    jfields_LicenseTypeFactory(): void {
    this.UNKNOWN = new LicenseType().jinit_LicenseType_1(CommonStrings.getInstance()!.UNKNOWN);
    this.DEMO = new LicenseType().jinit_LicenseType_1("Demo");
    this.NORMAL = new LicenseType().jinit_LicenseType_1("Normal");
    }

    jinit_LicenseTypeFactory_0(): LicenseTypeFactory {
        super.jinit_JObject_0();
        this.jfields_LicenseTypeFactory();
        return this;
    }
    

    static getInstance(): LicenseTypeFactory | null {
        return LicenseTypeFactory.instance;
    }
    

    getInstance1(name: string | null): LicenseType | null {
        if (JString.compareTo1(this.DEMO!.getName(), name) == 0) {
            return this.DEMO;
        } else if (JString.compareTo1(this.NORMAL!.getName(), name) == 0) {
            return this.NORMAL;
        } if (JThrowable.pending !== null) return null;
        return this.UNKNOWN;
    }
}

