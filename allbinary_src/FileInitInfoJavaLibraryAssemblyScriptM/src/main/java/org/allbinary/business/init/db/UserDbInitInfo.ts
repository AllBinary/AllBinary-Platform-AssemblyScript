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

@global export class UserDbInitInfo extends DbInitInfo {

    jclassName(): string {
        return "org.allbinary.business.init.db.UserDbInitInfo";
    }
    @lazy static readonly INITFILE: string | null = "userdbinitdata.dat";
    

    jinit_UserDbInitInfo_0(): UserDbInitInfo {
        super.jinit_DbInitInfo_2(UserDbInitInfo.INITFILE, true);
        return this;
    }
    

    jinit_UserDbInitInfo_1(read: bool): UserDbInitInfo {
        super.jinit_DbInitInfo_2(UserDbInitInfo.INITFILE, read);
        return this;
    }
}

