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

@global export class StaticPagesDbInitInfo extends DbInitInfo {

    jclassName(): string {
        return "org.allbinary.business.init.db.StaticPagesDbInitInfo";
    }
    @lazy static readonly INITFILE: string | null = "staticpagesbinitdata.dat";
    

    jinit_StaticPagesDbInitInfo_0(): StaticPagesDbInitInfo {
        super.jinit_DbInitInfo_2(StaticPagesDbInitInfo.INITFILE, true);
        return this;
    }
    

    jinit_StaticPagesDbInitInfo_1(read: bool): StaticPagesDbInitInfo {
        super.jinit_DbInitInfo_2(StaticPagesDbInitInfo.INITFILE, read);
        return this;
    }
}

