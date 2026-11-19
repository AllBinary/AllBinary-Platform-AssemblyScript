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

@global export class RequestData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.http.request.RequestData";
    }
    @lazy static readonly REQUEST: string | null = "REQUESTDATA_REQUEST";
    @lazy static readonly PARAMETER: string | null = "REQUESTDATA_PARAMETER";
    @lazy static readonly VIEWS: string | null = "REQUESTDATA_VIEWS";
    @lazy static readonly VISITORS: string | null = "REQUESTDATA_VISITORS";
    

    jinit_RequestData_0(): RequestData {
        super.jinit_JObject_0();
        return this;
    }
}

