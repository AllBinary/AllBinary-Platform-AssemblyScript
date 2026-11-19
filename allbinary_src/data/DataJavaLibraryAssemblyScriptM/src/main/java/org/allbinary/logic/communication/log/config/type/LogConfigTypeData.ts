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
// package org.allbinary.logic.communication.log.config.type

@global export class LogConfigTypeData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.type.LogConfigTypeData";
    }
    @lazy static jv_instance: LogConfigTypeData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogConfigTypeData | null {
        if (!LogConfigTypeData.js_instance) {
            LogConfigTypeData.js_instance = true;
            LogConfigTypeData.jv_instance = new LogConfigTypeData().jinit_LogConfigTypeData_0();
        }
        return LogConfigTypeData.jv_instance;
    }
    static set instance(value: LogConfigTypeData | null) {
        LogConfigTypeData.js_instance = true;
        LogConfigTypeData.jv_instance = value;
    }
    NAME: string | null = null;
    DESCRIPTION: string | null = null;

    jfields_LogConfigTypeData(): void {
    this.NAME = "LOG_CONFIG_TYPE_NAME";
    this.DESCRIPTION = "LOG_CONFIG_TYPE_DESCRIPTION";
    }
    

    static getInstance(): LogConfigTypeData | null {
        return LogConfigTypeData.instance;
    }
    

    jinit_LogConfigTypeData_0(): LogConfigTypeData {
        super.jinit_JObject_0();
        this.jfields_LogConfigTypeData();
        return this;
    }
}

