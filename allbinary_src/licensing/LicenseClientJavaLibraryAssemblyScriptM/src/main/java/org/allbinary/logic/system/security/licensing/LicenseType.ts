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

@global export class LicenseType extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LicenseType";
    }
    name: string | null = null;

    jfields_LicenseType(): void {
    this.name = null;
    }
    

    jinit_LicenseType_1(name: string | null): LicenseType {
        super.jinit_JObject_0();
        this.jfields_LicenseType();
        this.setName(name); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setName(name: string | null): void {
        this.name = name;
    }
    

    getName(): string | null {
        return this.name;
    }
}

