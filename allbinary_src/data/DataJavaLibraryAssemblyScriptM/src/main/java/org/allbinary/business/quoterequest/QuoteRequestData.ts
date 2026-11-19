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
// package org.allbinary.business.quoterequest

@global export class QuoteRequestData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.quoterequest.QuoteRequestData";
    }
    @lazy static jv_instance: QuoteRequestData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): QuoteRequestData | null {
        if (!QuoteRequestData.js_instance) {
            QuoteRequestData.js_instance = true;
            QuoteRequestData.jv_instance = new QuoteRequestData().jinit_QuoteRequestData_0();
        }
        return QuoteRequestData.jv_instance;
    }
    static set instance(value: QuoteRequestData | null) {
        QuoteRequestData.js_instance = true;
        QuoteRequestData.jv_instance = value;
    }
    ID: string | null = null;
    PROJECT_INFO: string | null = null;
    CUSTOMER_COMMENTS: string | null = null;
    BUDGET: string | null = null;
    TIMEFRAME: string | null = null;
    COMMENTS: string | null = null;

    jfields_QuoteRequestData(): void {
    this.ID = "QUOTEREQUEST_ID";
    this.PROJECT_INFO = "QUOTEREQUEST_PROJECT_INFO";
    this.CUSTOMER_COMMENTS = "QUOTEREQUEST_CUSTOMER_COMMENTS";
    this.BUDGET = "QUOTEREQUEST_BUDGET";
    this.TIMEFRAME = "QUOTEREQUEST_TIMEFRAME";
    this.COMMENTS = "QUOTEREQUEST_COMMENTS";
    }
    

    static getInstance(): QuoteRequestData | null {
        return QuoteRequestData.instance;
    }
    

    jinit_QuoteRequestData_0(): QuoteRequestData {
        super.jinit_JObject_0();
        this.jfields_QuoteRequestData();
        return this;
    }
}

