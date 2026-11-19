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
// import org.allbinary.thirdparty.store.LongArrayIdentifierInterface

@global export class StoreAppClientInformation extends AbeClientInformation implements LongArrayIdentifierInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.StoreAppClientInformation";
    }
    longArrayIdentifier: StaticArray<i64> | null = null;

    jfields_StoreAppClientInformation(): void {
    
    }
    

    jinit_StoreAppClientInformation_5(name: string | null, version: string | null, specialName: string | null, shortName: string | null, longArrayIdentifier: StaticArray<i64> | null): StoreAppClientInformation {
        super.jinit_AbeClientInformation_4(name, version, specialName, shortName);
        this.jfields_StoreAppClientInformation();
        this.longArrayIdentifier = longArrayIdentifier;
        return this;
    }
    

    getLongArrayIdentifier(): StaticArray<i64> | null {
        return this.longArrayIdentifier;
    }
}

