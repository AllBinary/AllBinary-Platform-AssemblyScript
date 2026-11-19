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
// package org.allbinary.logic.system.security.licensing.registration
// import org.allbinary.logic.string.StringMaker

@global export class RegistrationConfiguration extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.registration.RegistrationConfiguration";
    }
    @lazy static jv_SINGLETON: RegistrationConfiguration | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): RegistrationConfiguration | null {
        if (!RegistrationConfiguration.js_SINGLETON) {
            RegistrationConfiguration.js_SINGLETON = true;
            RegistrationConfiguration.jv_SINGLETON = new RegistrationConfiguration().jinit_RegistrationConfiguration_0();
        }
        return RegistrationConfiguration.jv_SINGLETON;
    }
    static set SINGLETON(value: RegistrationConfiguration | null) {
        RegistrationConfiguration.js_SINGLETON = true;
        RegistrationConfiguration.jv_SINGLETON = value;
    }
    registrationCode: string | null = null;
    NAME: string | null = null;

    jfields_RegistrationConfiguration(): void {
    this.registrationCode = "No Registration Code";
    this.NAME = "registrationid";
    }
    

    jinit_RegistrationConfiguration_0(): RegistrationConfiguration {
        super.jinit_JObject_0();
        this.jfields_RegistrationConfiguration();
        return this;
    }
    

    static getInstance(): RegistrationConfiguration | null {
        return RegistrationConfiguration.SINGLETON;
    }
    

    read(): void {
    }
    

    write(): void {
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Registration Code: ")!.append(this.getRegistrationCode()));
    }
    

    setRegistrationCode(registrationCode: string | null): void {
        this.registrationCode = registrationCode;
    }
    

    getRegistrationCode(): string | null {
        return this.registrationCode;
    }
}

