/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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

@global export class LogConfigTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory";
    }
    @lazy static jv_instance: LogConfigTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogConfigTypeFactory | null {
        if (!LogConfigTypeFactory.js_instance) {
            LogConfigTypeFactory.js_instance = true;
            LogConfigTypeFactory.jv_instance = new LogConfigTypeFactory().jinit_LogConfigTypeFactory_0();
        }
        return LogConfigTypeFactory.jv_instance;
    }
    static set instance(value: LogConfigTypeFactory | null) {
        LogConfigTypeFactory.js_instance = true;
        LogConfigTypeFactory.jv_instance = value;
    }
    NO_DESCRIPTION: string | null = null;
    OS: LogConfigType | null = null;
    FACTORYERROR: LogConfigType | null = null;

    jfields_LogConfigTypeFactory(): void {
    this.NO_DESCRIPTION = "No Description";
    this.OS = new LogConfigType().jinit_LogConfigType_2("Operating System", this.NO_DESCRIPTION);
    this.FACTORYERROR = new LogConfigType().jinit_LogConfigType_2("Factory Error", this.NO_DESCRIPTION);
    }
    

    static getInstance(): LogConfigTypeFactory | null {
        return LogConfigTypeFactory.instance;
    }
    

    jinit_LogConfigTypeFactory_0(): LogConfigTypeFactory {
        super.jinit_JObject_0();
        this.jfields_LogConfigTypeFactory();
        LogConfigTypes.LOGGING!.add(this.OS); if (JThrowable.pending !== null) return this;
        LogConfigTypes.LOGGING!.add(this.FACTORYERROR); if (JThrowable.pending !== null) return this;
        return this;
    }
}

