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
// package org.allbinary.thirdparty.store
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class ThirdPartyStore extends JObject {

    jclassName(): string {
        return "org.allbinary.thirdparty.store.ThirdPartyStore";
    }
    authorized: bool = false;
    name: string | null = null;

    jfields_ThirdPartyStore(): void {
    this.authorized = false;
    
    }
    

    jinit_ThirdPartyStore_1(name: string | null): ThirdPartyStore {
        super.jinit_JObject_0();
        this.jfields_ThirdPartyStore();
        this.name = name;
        return this;
    }
    

    authorize(clientInformationInterface: AbeClientInformationInterface | null): void {
    }
    

    isAuthorized(): bool {
        return this.authorized;
    }
    

    setAuthorized(authorized: bool): void {
        this.authorized = authorized;
    }
    

    getName(): string | null {
        return this.name;
    }
}

