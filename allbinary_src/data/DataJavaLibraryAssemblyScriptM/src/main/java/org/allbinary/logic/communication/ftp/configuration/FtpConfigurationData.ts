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
// package org.allbinary.logic.communication.ftp.configuration

@global export class FtpConfigurationData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.ftp.configuration.FtpConfigurationData";
    }
    @lazy static readonly NAME: string | null = "FTP_NAME";
    @lazy static readonly SERVER: string | null = "FTP_SERVER";
    @lazy static readonly PATH: string | null = "FTP_PATH";
    @lazy static readonly USERNAME: string | null = "FTP_USERNAME";
    @lazy static readonly PASSWORD: string | null = "FTP_PASSWORD";
    

    jinit_FtpConfigurationData_0(): FtpConfigurationData {
        super.jinit_JObject_0();
        return this;
    }
}

