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
// package org.allbinary.business.context.modules.storefront.statistics.advertisements

@global export class StoreFrontAdvertisementsStatisticsData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefront.statistics.advertisements.StoreFrontAdvertisementsStatisticsData";
    }
    @lazy static jv_instance: StoreFrontAdvertisementsStatisticsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreFrontAdvertisementsStatisticsData | null {
        if (!StoreFrontAdvertisementsStatisticsData.js_instance) {
            StoreFrontAdvertisementsStatisticsData.js_instance = true;
            StoreFrontAdvertisementsStatisticsData.jv_instance = new StoreFrontAdvertisementsStatisticsData().jinit_StoreFrontAdvertisementsStatisticsData_0();
        }
        return StoreFrontAdvertisementsStatisticsData.jv_instance;
    }
    static set instance(value: StoreFrontAdvertisementsStatisticsData | null) {
        StoreFrontAdvertisementsStatisticsData.js_instance = true;
        StoreFrontAdvertisementsStatisticsData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_StoreFrontAdvertisementsStatisticsData(): void {
    this.NAME = "STOREFRONT_ADVERTISEMENTS_STATISTICS_NAME";
    }
    

    static getInstance(): StoreFrontAdvertisementsStatisticsData | null {
        return StoreFrontAdvertisementsStatisticsData.instance;
    }
    

    jinit_StoreFrontAdvertisementsStatisticsData_0(): StoreFrontAdvertisementsStatisticsData {
        super.jinit_JObject_0();
        this.jfields_StoreFrontAdvertisementsStatisticsData();
        return this;
    }
}

