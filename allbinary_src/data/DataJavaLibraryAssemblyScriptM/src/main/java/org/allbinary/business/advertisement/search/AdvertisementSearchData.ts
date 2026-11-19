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
// package org.allbinary.business.advertisement.search

@global export class AdvertisementSearchData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.search.AdvertisementSearchData";
    }
    @lazy static jv_instance: AdvertisementSearchData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AdvertisementSearchData | null {
        if (!AdvertisementSearchData.js_instance) {
            AdvertisementSearchData.js_instance = true;
            AdvertisementSearchData.jv_instance = new AdvertisementSearchData().jinit_AdvertisementSearchData_0();
        }
        return AdvertisementSearchData.jv_instance;
    }
    static set instance(value: AdvertisementSearchData | null) {
        AdvertisementSearchData.js_instance = true;
        AdvertisementSearchData.jv_instance = value;
    }
    TITLE: string | null = null;
    PRICE: string | null = null;
    RELEVANCY: string | null = null;
    POPULARITY: string | null = null;

    jfields_AdvertisementSearchData(): void {
    this.TITLE = "AFFILIATE_TITLE";
    this.PRICE = "AFFILIATE_PRICE";
    this.RELEVANCY = "AFFILIATE_RELEVANCY";
    this.POPULARITY = "AFFILIATE_POPULARITY";
    }
    

    static getInstance(): AdvertisementSearchData | null {
        return AdvertisementSearchData.instance;
    }
    

    jinit_AdvertisementSearchData_0(): AdvertisementSearchData {
        super.jinit_JObject_0();
        this.jfields_AdvertisementSearchData();
        return this;
    }
}

