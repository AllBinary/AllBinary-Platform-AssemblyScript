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
// package org.allbinary.logic.util.cache

@global export class CachePolicyFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.cache.CachePolicyFactory";
    }
    @lazy static jv_instance: CachePolicyFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CachePolicyFactory | null {
        if (!CachePolicyFactory.js_instance) {
            CachePolicyFactory.js_instance = true;
            CachePolicyFactory.jv_instance = new CachePolicyFactory().jinit_CachePolicyFactory_0();
        }
        return CachePolicyFactory.jv_instance;
    }
    static set instance(value: CachePolicyFactory | null) {
        CachePolicyFactory.js_instance = true;
        CachePolicyFactory.jv_instance = value;
    }
    NAME: string | null = null;
    MAX_TIME_THOUSAND_MAX: CachePolicy | null = null;
    THIRTY_MINUTES_TEN_THOUSAND_MAX: CachePolicy | null = null;
    THIRTY_MINUTES_FIFTY_THOUSAND_MAX: CachePolicy | null = null;
    ONE_MINUTE_FIVE_MAX: CachePolicy | null = null;
    ONE_MINUTE_TEN_MAX: CachePolicy | null = null;
    ONE_MINUTE_ONE_HUNDRED_MAX: CachePolicy | null = null;

    jfields_CachePolicyFactory(): void {
    this.NAME = "lru";
    this.MAX_TIME_THOUSAND_MAX = new CachePolicy().jinit_CachePolicy_3(this.NAME, JLong.MAX_VALUE, 1000);
    this.THIRTY_MINUTES_TEN_THOUSAND_MAX = new CachePolicy().jinit_CachePolicy_3(this.NAME, 1000 * 60 * 30, 10000);
    this.THIRTY_MINUTES_FIFTY_THOUSAND_MAX = new CachePolicy().jinit_CachePolicy_3(this.NAME, 1000 * 60 * 30, 100000);
    this.ONE_MINUTE_FIVE_MAX = new CachePolicy().jinit_CachePolicy_3(this.NAME, 1000 * 60 * 1, 5);
    this.ONE_MINUTE_TEN_MAX = new CachePolicy().jinit_CachePolicy_3(this.NAME, 1000 * 60 * 1, 10);
    this.ONE_MINUTE_ONE_HUNDRED_MAX = new CachePolicy().jinit_CachePolicy_3(this.NAME, 1000 * 60 * 1, 100);
    }

    jinit_CachePolicyFactory_0(): CachePolicyFactory {
        super.jinit_JObject_0();
        this.jfields_CachePolicyFactory();
        return this;
    }
    

    static getInstance(): CachePolicyFactory | null {
        return CachePolicyFactory.instance;
    }
}

