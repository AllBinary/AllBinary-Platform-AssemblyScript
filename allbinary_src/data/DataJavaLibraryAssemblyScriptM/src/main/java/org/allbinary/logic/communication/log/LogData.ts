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
// package org.allbinary.logic.communication.log
// import org.allbinary.logic.io.path.AbPathData

@global export class LogData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.LogData";
    }
    MAX: i64 = 0;
    extension: string | null = null;
    backupFileExt: string | null = null;
    ALLBINARY: string | null = null;
    NAME: string | null = null;
    DESCRIPTION: string | null = null;

    jfields_LogData(): void {
    this.MAX = (<i64>5000000);
    this.extension = "log";
    this.backupFileExt = jstr(jstr(jstr(AbPathData.getInstance()!.EXTENSION_SEP) + jstr("bak")) + jstr(AbPathData.getInstance()!.EXTENSION_SEP)) + jstr("txt");
    this.ALLBINARY = "allbinary";
    this.NAME = "LOG_NAME";
    this.DESCRIPTION = "LOG_DESCRIPTION";
    }

    jinit_LogData_0(): LogData {
        super.jinit_JObject_0();
        this.jfields_LogData();
        return this;
    }
}

