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
// package org.allbinary.logic.communication.log.config

@global export class LogConfigData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.LogConfigData";
    }
    @lazy static jv_instance: LogConfigData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogConfigData | null {
        if (!LogConfigData.js_instance) {
            LogConfigData.js_instance = true;
            LogConfigData.jv_instance = new LogConfigData().jinit_LogConfigData_0();
        }
        return LogConfigData.jv_instance;
    }
    static set instance(value: LogConfigData | null) {
        LogConfigData.js_instance = true;
        LogConfigData.jv_instance = value;
    }
    NAME: string | null = null;
    DESCRIPTION: string | null = null;
    FILE: string | null = null;

    jfields_LogConfigData(): void {
    this.NAME = "LOG_CONFIG_NAME";
    this.DESCRIPTION = "LOG_CONFIG_DESCRIPTION";
    this.FILE = "LOG_CONFIG_FILE";
    }
    

    static getInstance(): LogConfigData | null {
        return LogConfigData.instance;
    }
    

    jinit_LogConfigData_0(): LogConfigData {
        super.jinit_JObject_0();
        this.jfields_LogConfigData();
        return this;
    }
}

