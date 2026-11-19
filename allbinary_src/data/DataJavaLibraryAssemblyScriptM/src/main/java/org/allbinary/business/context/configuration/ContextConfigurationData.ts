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
// package org.allbinary.business.context.configuration
// import org.allbinary.logic.io.file.CommonDataFileStrings

@global export class ContextConfigurationData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.configuration.ContextConfigurationData";
    }
    @lazy static jv_instance: ContextConfigurationData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ContextConfigurationData | null {
        if (!ContextConfigurationData.js_instance) {
            ContextConfigurationData.js_instance = true;
            ContextConfigurationData.jv_instance = new ContextConfigurationData().jinit_ContextConfigurationData_0();
        }
        return ContextConfigurationData.jv_instance;
    }
    static set instance(value: ContextConfigurationData | null) {
        ContextConfigurationData.js_instance = true;
        ContextConfigurationData.jv_instance = value;
    }
    NAME: string | null = null;
    UNCRYPTED_EXTENSION: string | null = null;
    ENCRYPTED_EXTENSION: string | null = null;

    jfields_ContextConfigurationData(): void {
    this.NAME = "CONTEXT_CONFIGURATION_NAME";
    this.UNCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.UNCRYPTED_EXTENSION;
    this.ENCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.ENCRYPTED_EXTENSION;
    }
    

    static getInstance(): ContextConfigurationData | null {
        return ContextConfigurationData.instance;
    }
    

    jinit_ContextConfigurationData_0(): ContextConfigurationData {
        super.jinit_JObject_0();
        this.jfields_ContextConfigurationData();
        return this;
    }
}

