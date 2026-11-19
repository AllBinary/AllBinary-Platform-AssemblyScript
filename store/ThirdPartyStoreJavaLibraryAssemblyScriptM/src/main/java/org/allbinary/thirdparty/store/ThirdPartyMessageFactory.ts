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

@global export class ThirdPartyMessageFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.thirdparty.store.ThirdPartyMessageFactory";
    }
    @lazy static jv_instance: ThirdPartyMessageFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThirdPartyMessageFactory | null {
        if (!ThirdPartyMessageFactory.js_instance) {
            ThirdPartyMessageFactory.js_instance = true;
            ThirdPartyMessageFactory.jv_instance = new ThirdPartyMessageFactory().jinit_ThirdPartyMessageFactory_0();
        }
        return ThirdPartyMessageFactory.jv_instance;
    }
    static set instance(value: ThirdPartyMessageFactory | null) {
        ThirdPartyMessageFactory.js_instance = true;
        ThirdPartyMessageFactory.jv_instance = value;
    }
    AUTHORIZED: string | null = null;
    NOT_AUTHORIZED: string | null = null;
    LINKAGE_ERROR: string | null = null;

    jfields_ThirdPartyMessageFactory(): void {
    this.AUTHORIZED = "Authorized";
    this.NOT_AUTHORIZED = "Not Authorized";
    this.LINKAGE_ERROR = "Linkage Error";
    }

    jinit_ThirdPartyMessageFactory_0(): ThirdPartyMessageFactory {
        super.jinit_JObject_0();
        this.jfields_ThirdPartyMessageFactory();
        return this;
    }
    

    static getInstance(): ThirdPartyMessageFactory | null {
        return ThirdPartyMessageFactory.instance;
    }
}

