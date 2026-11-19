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

@global export class LogDbInitInfo extends DbInitInfo {

    jclassName(): string {
        return "org.allbinary.business.init.db.LogDbInitInfo";
    }
    @lazy static readonly INITFILE: string | null = "logdbinitdata.dat";
    

    jinit_LogDbInitInfo_0(): LogDbInitInfo {
        super.jinit_DbInitInfo_2(LogDbInitInfo.INITFILE, true);
        return this;
    }
    

    jinit_LogDbInitInfo_1(read: bool): LogDbInitInfo {
        super.jinit_DbInitInfo_2(LogDbInitInfo.INITFILE, read);
        return this;
    }
}

