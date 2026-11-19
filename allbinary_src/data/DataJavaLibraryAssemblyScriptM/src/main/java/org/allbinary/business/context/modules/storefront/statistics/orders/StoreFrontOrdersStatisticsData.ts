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
// package org.allbinary.business.context.modules.storefront.statistics.orders

@global export class StoreFrontOrdersStatisticsData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefront.statistics.orders.StoreFrontOrdersStatisticsData";
    }
    @lazy static jv_instance: StoreFrontOrdersStatisticsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreFrontOrdersStatisticsData | null {
        if (!StoreFrontOrdersStatisticsData.js_instance) {
            StoreFrontOrdersStatisticsData.js_instance = true;
            StoreFrontOrdersStatisticsData.jv_instance = new StoreFrontOrdersStatisticsData().jinit_StoreFrontOrdersStatisticsData_0();
        }
        return StoreFrontOrdersStatisticsData.jv_instance;
    }
    static set instance(value: StoreFrontOrdersStatisticsData | null) {
        StoreFrontOrdersStatisticsData.js_instance = true;
        StoreFrontOrdersStatisticsData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_StoreFrontOrdersStatisticsData(): void {
    this.NAME = "STOREFRONT_ORDERS_STATISTICS_NAME";
    }
    

    static getInstance(): StoreFrontOrdersStatisticsData | null {
        return StoreFrontOrdersStatisticsData.instance;
    }
    

    jinit_StoreFrontOrdersStatisticsData_0(): StoreFrontOrdersStatisticsData {
        super.jinit_JObject_0();
        this.jfields_StoreFrontOrdersStatisticsData();
        return this;
    }
}

