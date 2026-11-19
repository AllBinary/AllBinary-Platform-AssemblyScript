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

@global export class LogConfigsData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.LogConfigsData";
    }
    @lazy static jv_instance: LogConfigsData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogConfigsData | null {
        if (!LogConfigsData.js_instance) {
            LogConfigsData.js_instance = true;
            LogConfigsData.jv_instance = new LogConfigsData().jinit_LogConfigsData_0();
        }
        return LogConfigsData.jv_instance;
    }
    static set instance(value: LogConfigsData | null) {
        LogConfigsData.js_instance = true;
        LogConfigsData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_LogConfigsData(): void {
    this.NAME = "LOG_CONFIGS_NAME";
    }

    jinit_LogConfigsData_0(): LogConfigsData {
        super.jinit_JObject_0();
        this.jfields_LogConfigsData();
        return this;
    }
    

    static getInstance(): LogConfigsData | null {
        return LogConfigsData.instance;
    }
}

