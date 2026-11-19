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
// package org.allbinary.logic.communication.http.request

@global export class AbeHttpRequestInfoData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.http.request.AbeHttpRequestInfoData";
    }
    @lazy static jv_instance: AbeHttpRequestInfoData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbeHttpRequestInfoData | null {
        if (!AbeHttpRequestInfoData.js_instance) {
            AbeHttpRequestInfoData.js_instance = true;
            AbeHttpRequestInfoData.jv_instance = new AbeHttpRequestInfoData().jinit_AbeHttpRequestInfoData_0();
        }
        return AbeHttpRequestInfoData.jv_instance;
    }
    static set instance(value: AbeHttpRequestInfoData | null) {
        AbeHttpRequestInfoData.js_instance = true;
        AbeHttpRequestInfoData.jv_instance = value;
    }
    HTTP_USER_AGENT: string | null = null;
    REMOTE_ADDRESS: string | null = null;
    REMOTE_HOST: string | null = null;
    REMOTE_HOST_BY_ADDRESS: string | null = null;
    REMOTE_PORT: string | null = null;
    REQUEST_FILE_PATH: string | null = null;

    jfields_AbeHttpRequestInfoData(): void {
    this.HTTP_USER_AGENT = "HTTP_USER_AGENT";
    this.REMOTE_ADDRESS = "REMOTE_ADDRESS";
    this.REMOTE_HOST = "REMOTE_HOST";
    this.REMOTE_HOST_BY_ADDRESS = "REMOTE_HOST_BY_ADDRESS";
    this.REMOTE_PORT = "REMOTE_PORT";
    this.REQUEST_FILE_PATH = "REQUEST_FILE_PATH";
    }
    

    static getInstance(): AbeHttpRequestInfoData | null {
        return AbeHttpRequestInfoData.instance;
    }
    

    jinit_AbeHttpRequestInfoData_0(): AbeHttpRequestInfoData {
        super.jinit_JObject_0();
        this.jfields_AbeHttpRequestInfoData();
        return this;
    }
}

