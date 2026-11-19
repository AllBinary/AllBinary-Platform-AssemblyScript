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
// package org.allbinary.business.advertisement

@global export class AdvertisementData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.AdvertisementData";
    }
    @lazy static jv_instance: AdvertisementData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AdvertisementData | null {
        if (!AdvertisementData.js_instance) {
            AdvertisementData.js_instance = true;
            AdvertisementData.jv_instance = new AdvertisementData().jinit_AdvertisementData_0();
        }
        return AdvertisementData.jv_instance;
    }
    static set instance(value: AdvertisementData | null) {
        AdvertisementData.js_instance = true;
        AdvertisementData.jv_instance = value;
    }
    NAME: string | null = null;
    DESCRIPTION: string | null = null;

    jfields_AdvertisementData(): void {
    this.NAME = "ADVERTISEMENT_NAME";
    this.DESCRIPTION = "ADVERTISEMENT_DESCRIPTION";
    }
    

    static getInstance(): AdvertisementData | null {
        return AdvertisementData.instance;
    }
    

    jinit_AdvertisementData_0(): AdvertisementData {
        super.jinit_JObject_0();
        this.jfields_AdvertisementData();
        return this;
    }
}

