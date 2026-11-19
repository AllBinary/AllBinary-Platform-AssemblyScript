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
// package org.allbinary.logic.communication.http.request.session

@global export class WeblisketSessionData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.http.request.session.WeblisketSessionData";
    }
    @lazy static readonly INVALIDATESESSION: string | null = "SESSION_INVALIDATE_SESSION";
    @lazy static readonly ATTEMPTS: string | null = "SESSION_ATTEMPTS";
    @lazy static readonly TIMEOUT: string | null = "SESSION_TIMEOUT";
    @lazy static readonly REMOVABLEUSERNAME: string | null = "SESSION_REMOVABLE_USER_NAME";
    @lazy static readonly REMOVABLEPASSWORD: string | null = "SESSION_REMOVABLE_PASSWORD";
    @lazy static readonly REMOVABLENEWPASSWORD: string | null = "SESSION_REMOVABLE_NEW_PASSWORD";
    @lazy static readonly REMOVABLEREENTERNEWPASSWORD: string | null = "SESSION_REMOVABLE_REENTER_NEW_PASSWORD";
    @lazy static readonly AUTHENTICATED: string | null = "SESSION_AUTHENTICATED";
    

    jinit_WeblisketSessionData_0(): WeblisketSessionData {
        super.jinit_JObject_0();
        return this;
    }
}

