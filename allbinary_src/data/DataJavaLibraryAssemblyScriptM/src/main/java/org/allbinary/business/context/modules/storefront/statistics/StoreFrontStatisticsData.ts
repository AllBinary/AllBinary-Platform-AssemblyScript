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
// package org.allbinary.business.context.modules.storefront.statistics

@global export class StoreFrontStatisticsData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefront.statistics.StoreFrontStatisticsData";
    }
    @lazy static jv_instance: StoreFrontStatisticsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreFrontStatisticsData | null {
        if (!StoreFrontStatisticsData.js_instance) {
            StoreFrontStatisticsData.js_instance = true;
            StoreFrontStatisticsData.jv_instance = new StoreFrontStatisticsData().jinit_StoreFrontStatisticsData_0();
        }
        return StoreFrontStatisticsData.jv_instance;
    }
    static set instance(value: StoreFrontStatisticsData | null) {
        StoreFrontStatisticsData.js_instance = true;
        StoreFrontStatisticsData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_StoreFrontStatisticsData(): void {
    this.NAME = "STOREFRONT_STATISTICS_NAME";
    }
    

    static getInstance(): StoreFrontStatisticsData | null {
        return StoreFrontStatisticsData.instance;
    }
    

    jinit_StoreFrontStatisticsData_0(): StoreFrontStatisticsData {
        super.jinit_JObject_0();
        this.jfields_StoreFrontStatisticsData();
        return this;
    }
}

