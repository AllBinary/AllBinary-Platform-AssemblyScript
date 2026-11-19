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

@global export class LogConfigTypesData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.type.LogConfigTypesData";
    }
    @lazy static jv_instance: LogConfigTypesData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogConfigTypesData | null {
        if (!LogConfigTypesData.js_instance) {
            LogConfigTypesData.js_instance = true;
            LogConfigTypesData.jv_instance = new LogConfigTypesData().jinit_LogConfigTypesData_0();
        }
        return LogConfigTypesData.jv_instance;
    }
    static set instance(value: LogConfigTypesData | null) {
        LogConfigTypesData.js_instance = true;
        LogConfigTypesData.jv_instance = value;
    }
    NAME: string | null = null;
    DESCRIPTION: string | null = null;

    jfields_LogConfigTypesData(): void {
    this.NAME = "LOG_CONFIG_TYPES_NAME";
    this.DESCRIPTION = "LOG_CONFIG_TYPES_DESCRIPTION";
    }

    jinit_LogConfigTypesData_0(): LogConfigTypesData {
        super.jinit_JObject_0();
        this.jfields_LogConfigTypesData();
        return this;
    }
    

    static getInstance(): LogConfigTypesData | null {
        return LogConfigTypesData.instance;
    }
}

