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
// package org.allbinary.business.user.modules.configuration
// import org.allbinary.logic.io.file.CommonDataFileStrings

@global export class UserConfigurationData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.modules.configuration.UserConfigurationData";
    }
    @lazy static readonly NAME: string | null = "USER_CONFIGURATION_NAME";
    @lazy static jv_UNCRYPTED_EXTENSION: string | null = null;
    @lazy static js_UNCRYPTED_EXTENSION: bool = false;
    static get UNCRYPTED_EXTENSION(): string | null {
        if (!UserConfigurationData.js_UNCRYPTED_EXTENSION) {
            UserConfigurationData.js_UNCRYPTED_EXTENSION = true;
            UserConfigurationData.jv_UNCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.UNCRYPTED_EXTENSION;
        }
        return UserConfigurationData.jv_UNCRYPTED_EXTENSION;
    }
    static set UNCRYPTED_EXTENSION(value: string | null) {
        UserConfigurationData.js_UNCRYPTED_EXTENSION = true;
        UserConfigurationData.jv_UNCRYPTED_EXTENSION = value;
    }
    @lazy static jv_ENCRYPTED_EXTENSION: string | null = null;
    @lazy static js_ENCRYPTED_EXTENSION: bool = false;
    static get ENCRYPTED_EXTENSION(): string | null {
        if (!UserConfigurationData.js_ENCRYPTED_EXTENSION) {
            UserConfigurationData.js_ENCRYPTED_EXTENSION = true;
            UserConfigurationData.jv_ENCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.ENCRYPTED_EXTENSION;
        }
        return UserConfigurationData.jv_ENCRYPTED_EXTENSION;
    }
    static set ENCRYPTED_EXTENSION(value: string | null) {
        UserConfigurationData.js_ENCRYPTED_EXTENSION = true;
        UserConfigurationData.jv_ENCRYPTED_EXTENSION = value;
    }
    

    jinit_UserConfigurationData_0(): UserConfigurationData {
        super.jinit_JObject_0();
        return this;
    }
}

