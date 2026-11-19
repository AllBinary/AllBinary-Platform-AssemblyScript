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
// package org.allbinary.business.init.db
// import org.allbinary.logic.communication.log.PreLogUtil

//import org.allbinary.logic.communication.log.config.type.LogConfigTypes;
@global export class DbInitInfo extends DbConnectionInfo {

    jclassName(): string {
        return "org.allbinary.business.init.db.DbInitInfo";
    }
    

    jinit_DbInitInfo_2(initFileName: string | null, read: bool): DbInitInfo {
        super.jinit_DbConnectionInfo_0();
        return this;
    }
    

    getUrl(): string | null {
        let url: string | null = super.getUrl(); if (JThrowable.pending !== null) return null;
        PreLogUtil.put(jstr("Url: ") + jstr(url), this, "getUrl"); if (JThrowable.pending !== null) return null;
        return url;
    }
    

    write(): void {
    }
    

    load(): void {
    }
    

    setHasRead(value: bool): void {
    }
}

