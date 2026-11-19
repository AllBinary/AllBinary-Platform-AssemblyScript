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

@global export class ThirdPartyStoreFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.thirdparty.store.ThirdPartyStoreFactory";
    }
    @lazy static jv_instance: NoThirdPartyStore | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoThirdPartyStore | null {
        if (!ThirdPartyStoreFactory.js_instance) {
            ThirdPartyStoreFactory.js_instance = true;
            ThirdPartyStoreFactory.jv_instance = new NoThirdPartyStore().jinit_NoThirdPartyStore_0();
        }
        return ThirdPartyStoreFactory.jv_instance;
    }
    static set instance(value: NoThirdPartyStore | null) {
        ThirdPartyStoreFactory.js_instance = true;
        ThirdPartyStoreFactory.jv_instance = value;
    }
    

    static getInstance(): ThirdPartyStore | null {
        return ThirdPartyStoreFactory.instance;
    }
    

    jinit_ThirdPartyStoreFactory_0(): ThirdPartyStoreFactory {
        super.jinit_JObject_0();
        return this;
    }
}

