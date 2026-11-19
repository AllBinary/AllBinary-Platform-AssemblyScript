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
// package org.allbinary.business.advertisement.campaign

@global export class AdvertisementCampaignData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.campaign.AdvertisementCampaignData";
    }
    @lazy static jv_instance: AdvertisementCampaignData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AdvertisementCampaignData | null {
        if (!AdvertisementCampaignData.js_instance) {
            AdvertisementCampaignData.js_instance = true;
            AdvertisementCampaignData.jv_instance = new AdvertisementCampaignData().jinit_AdvertisementCampaignData_0();
        }
        return AdvertisementCampaignData.jv_instance;
    }
    static set instance(value: AdvertisementCampaignData | null) {
        AdvertisementCampaignData.js_instance = true;
        AdvertisementCampaignData.jv_instance = value;
    }
    NAME: string | null = null;
    DESCRIPTION: string | null = null;
    CONFIG: string | null = null;

    jfields_AdvertisementCampaignData(): void {
    this.NAME = "ADVERTISEMENTCAMPAIGN_NAME";
    this.DESCRIPTION = "ADVERTISEMENTCAMPAIGN_DESCRIPTION";
    this.CONFIG = "ADVERTISEMENTCAMPAIGN_CONFIG";
    }
    

    static getInstance(): AdvertisementCampaignData | null {
        return AdvertisementCampaignData.instance;
    }
    

    jinit_AdvertisementCampaignData_0(): AdvertisementCampaignData {
        super.jinit_JObject_0();
        this.jfields_AdvertisementCampaignData();
        return this;
    }
}

