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
// package org.allbinary.business.advertisement.area

@global export class AdvertisementAreaData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.area.AdvertisementAreaData";
    }
    @lazy static jv_instance: AdvertisementAreaData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AdvertisementAreaData | null {
        if (!AdvertisementAreaData.js_instance) {
            AdvertisementAreaData.js_instance = true;
            AdvertisementAreaData.jv_instance = new AdvertisementAreaData().jinit_AdvertisementAreaData_0();
        }
        return AdvertisementAreaData.jv_instance;
    }
    static set instance(value: AdvertisementAreaData | null) {
        AdvertisementAreaData.js_instance = true;
        AdvertisementAreaData.jv_instance = value;
    }
    NAME: string | null = null;
    DESCRIPTION: string | null = null;
    CONSTRAINTS: string | null = null;

    jfields_AdvertisementAreaData(): void {
    this.NAME = "ADVERTISEMENT_NAME";
    this.DESCRIPTION = "ADVERTISEMENT_DESCRIPTION";
    this.CONSTRAINTS = "ADVERTISEMENT_CONSTRAINTS";
    }
    

    static getInstance(): AdvertisementAreaData | null {
        return AdvertisementAreaData.instance;
    }
    

    jinit_AdvertisementAreaData_0(): AdvertisementAreaData {
        super.jinit_JObject_0();
        this.jfields_AdvertisementAreaData();
        return this;
    }
}

