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
// package org.allbinary.business.context.modules.storefront

@global export class StoreFrontsData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefront.StoreFrontsData";
    }
    @lazy static jv_instance: StoreFrontsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreFrontsData | null {
        if (!StoreFrontsData.js_instance) {
            StoreFrontsData.js_instance = true;
            StoreFrontsData.jv_instance = new StoreFrontsData().jinit_StoreFrontsData_0();
        }
        return StoreFrontsData.jv_instance;
    }
    static set instance(value: StoreFrontsData | null) {
        StoreFrontsData.js_instance = true;
        StoreFrontsData.jv_instance = value;
    }
    TYPE: string | null = null;
    RETAIL: string | null = null;
    SUBSCRIPTION: string | null = null;
    AUCTION: string | null = null;
    NEWS: string | null = null;
    BLOG: string | null = null;
    FORUM: string | null = null;

    jfields_StoreFrontsData(): void {
    this.TYPE = "STOREFRONTS_TYPE";
    this.RETAIL = "STOREFRONTS_RETAIL";
    this.SUBSCRIPTION = "STOREFRONTS_SUBSCRIPTION";
    this.AUCTION = "STOREFRONTS_AUCTION";
    this.NEWS = "STOREFRONTS_NEWS";
    this.BLOG = "STOREFRONTS_BLOG";
    this.FORUM = "STOREFRONTS_FORUM";
    }

    jinit_StoreFrontsData_0(): StoreFrontsData {
        super.jinit_JObject_0();
        this.jfields_StoreFrontsData();
        return this;
    }
    

    static getInstance(): StoreFrontsData | null {
        return StoreFrontsData.instance;
    }
}

