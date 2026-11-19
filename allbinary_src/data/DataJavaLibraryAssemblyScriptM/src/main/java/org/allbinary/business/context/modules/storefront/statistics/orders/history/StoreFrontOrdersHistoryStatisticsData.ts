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
// package org.allbinary.business.context.modules.storefront.statistics.orders.history

@global export class StoreFrontOrdersHistoryStatisticsData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefront.statistics.orders.history.StoreFrontOrdersHistoryStatisticsData";
    }
    @lazy static jv_instance: StoreFrontOrdersHistoryStatisticsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreFrontOrdersHistoryStatisticsData | null {
        if (!StoreFrontOrdersHistoryStatisticsData.js_instance) {
            StoreFrontOrdersHistoryStatisticsData.js_instance = true;
            StoreFrontOrdersHistoryStatisticsData.jv_instance = new StoreFrontOrdersHistoryStatisticsData().jinit_StoreFrontOrdersHistoryStatisticsData_0();
        }
        return StoreFrontOrdersHistoryStatisticsData.jv_instance;
    }
    static set instance(value: StoreFrontOrdersHistoryStatisticsData | null) {
        StoreFrontOrdersHistoryStatisticsData.js_instance = true;
        StoreFrontOrdersHistoryStatisticsData.jv_instance = value;
    }
    NAME: string | null = null;
    NUMBEROFORDERS: string | null = null;
    SUBTOTAL: string | null = null;
    SHIPPINGCOST: string | null = null;
    TAXES: string | null = null;
    TOTAL: string | null = null;

    jfields_StoreFrontOrdersHistoryStatisticsData(): void {
    this.NAME = "STOREFRONT_ORDERS_HISTORY_STATISTICS_NAME";
    this.NUMBEROFORDERS = "STOREFRONT_ORDERS_HISTORY_STATISTICS_NUMBER_OF_ORDERS";
    this.SUBTOTAL = "STOREFRONT_ORDERS_HISTORY_STATISTICS_SUBTOTAL";
    this.SHIPPINGCOST = "STOREFRONT_ORDERS_HISTORY_STATISTICS_SHIPPINGCOST";
    this.TAXES = "STOREFRONT_ORDERS_HISTORY_STATISTICS_TAXES";
    this.TOTAL = "STOREFRONT_ORDERS_HISTORY_STATISTICS_TOTAL";
    }
    

    static getInstance(): StoreFrontOrdersHistoryStatisticsData | null {
        return StoreFrontOrdersHistoryStatisticsData.instance;
    }
    

    jinit_StoreFrontOrdersHistoryStatisticsData_0(): StoreFrontOrdersHistoryStatisticsData {
        super.jinit_JObject_0();
        this.jfields_StoreFrontOrdersHistoryStatisticsData();
        return this;
    }
}

