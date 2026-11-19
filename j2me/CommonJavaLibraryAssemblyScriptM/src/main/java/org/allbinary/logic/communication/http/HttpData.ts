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
// package org.allbinary.logic.communication.http
// import org.allbinary.string.CommonSeps

@global export class HttpData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.http.HttpData";
    }
    @lazy static jv_instance: HttpData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HttpData | null {
        if (!HttpData.js_instance) {
            HttpData.js_instance = true;
            HttpData.jv_instance = new HttpData().jinit_HttpData_0();
        }
        return HttpData.jv_instance;
    }
    static set instance(value: HttpData | null) {
        HttpData.js_instance = true;
        HttpData.jv_instance = value;
    }
    EQUALS: string | null = null;
    PARAM_SEP: string | null = null;
    URL_PARAM_SEP: string | null = null;
    URL_LABEL: string | null = null;

    jfields_HttpData(): void {
    
    
    
    this.URL_LABEL = "Url: ";
    }
    

    static getInstance(): HttpData | null {
        return HttpData.instance;
    }
    

    jinit_HttpData_0(): HttpData {
        super.jinit_JObject_0();
        this.jfields_HttpData();
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return this;
        this.EQUALS = commonSeps!.EQUALS;
        this.PARAM_SEP = commonSeps!.AMPERSAND;
        this.URL_PARAM_SEP = commonSeps!.QUESTION;
        return this;
    }
}

