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
// package org.allbinary.logic.communication.smtp

@global export class EmailData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.smtp.EmailData";
    }
    @lazy static readonly SERVER: string | null = "EMAIL_SERVER";
    @lazy static readonly NAME: string | null = "EMAIL_NAME";
    @lazy static readonly FROM: string | null = "EMAIL_FROM";
    @lazy static readonly TO: string | null = "EMAIL_TO";
    @lazy static readonly CC: string | null = "EMAIL_CC";
    @lazy static readonly BCC: string | null = "EMAIL_BCC";
    @lazy static readonly SUBJECT: string | null = "EMAIL_SUBJECT";
    @lazy static readonly CONTENT: string | null = "EMAIL_CONTENT";
    

    jinit_EmailData_0(): EmailData {
        super.jinit_JObject_0();
        return this;
    }
}

