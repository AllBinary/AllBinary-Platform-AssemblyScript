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
// package org.allbinary.logic.communication.sql

@global export class AbSqlData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.sql.AbSqlData";
    }
    @lazy static readonly ANYSINGLECHARACTERMATCH: string | null = "_";
    @lazy static readonly ANYMULTICHARACTERMATCH: string | null = "%";
    static readonly MAXNUM: i32 = 19;
    static readonly MINSTRING: i32 = 1;
    static readonly MAXSTRING: i32 = 255;
    static readonly MAXBLOB: i32 = 32000;
    

    jinit_AbSqlData_0(): AbSqlData {
        super.jinit_JObject_0();
        return this;
    }
}

