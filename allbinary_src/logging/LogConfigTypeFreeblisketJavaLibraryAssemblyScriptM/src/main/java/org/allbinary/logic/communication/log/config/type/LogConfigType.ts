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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class LogConfigType extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.type.LogConfigType";
    }
    @lazy static jv_availableLogConfigTypes: BasicArrayList | null = null;
    @lazy static js_availableLogConfigTypes: bool = false;
    static get availableLogConfigTypes(): BasicArrayList | null {
        if (!LogConfigType.js_availableLogConfigTypes) {
            LogConfigType.js_availableLogConfigTypes = true;
            LogConfigType.jv_availableLogConfigTypes = new BasicArrayListD().jinit_BasicArrayListD_0();
        }
        return LogConfigType.jv_availableLogConfigTypes;
    }
    static set availableLogConfigTypes(value: BasicArrayList | null) {
        LogConfigType.js_availableLogConfigTypes = true;
        LogConfigType.jv_availableLogConfigTypes = value;
    }
    logUtil: LogUtil | null = null;
    name: string | null = null;
    description: string | null = null;

    jfields_LogConfigType(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    }
    

    jinit_LogConfigType_2(name: string | null, description: string | null): LogConfigType {
        super.jinit_JObject_0();
        this.jfields_LogConfigType();
        this.name = name;
        this.description = description;
        LogConfigType.availableLogConfigTypes!.add(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getDescription(): string | null {
        return this.description;
    }
    

    setName(value: string | null): void {
        this.name = value;
    }
    

    setDescription(value: string | null): void {
        this.description = value;
    }
}

