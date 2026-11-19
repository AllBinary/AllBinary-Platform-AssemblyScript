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
// package org.allbinary.business.context.modules.storefront.statistics.inventory

@global export class StoreFrontInventoryStatisticsData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefront.statistics.inventory.StoreFrontInventoryStatisticsData";
    }
    @lazy static jv_instance: StoreFrontInventoryStatisticsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreFrontInventoryStatisticsData | null {
        if (!StoreFrontInventoryStatisticsData.js_instance) {
            StoreFrontInventoryStatisticsData.js_instance = true;
            StoreFrontInventoryStatisticsData.jv_instance = new StoreFrontInventoryStatisticsData().jinit_StoreFrontInventoryStatisticsData_0();
        }
        return StoreFrontInventoryStatisticsData.jv_instance;
    }
    static set instance(value: StoreFrontInventoryStatisticsData | null) {
        StoreFrontInventoryStatisticsData.js_instance = true;
        StoreFrontInventoryStatisticsData.jv_instance = value;
    }
    NAME: string | null = null;
    NUMBEROFITEMS: string | null = null;
    TOTALVALUE: string | null = null;

    jfields_StoreFrontInventoryStatisticsData(): void {
    this.NAME = "STOREFRONT_INVENTORY_STATISTICS_NAME";
    this.NUMBEROFITEMS = "STOREFRONT_INVENTORY_STATISTICS_NUMBER_OF_ITEMS";
    this.TOTALVALUE = "STOREFRONT_INVENTORY_STATISTICS_TOTAL_VALUE";
    }
    

    static getInstance(): StoreFrontInventoryStatisticsData | null {
        return StoreFrontInventoryStatisticsData.instance;
    }
    

    jinit_StoreFrontInventoryStatisticsData_0(): StoreFrontInventoryStatisticsData {
        super.jinit_JObject_0();
        this.jfields_StoreFrontInventoryStatisticsData();
        return this;
    }
}

