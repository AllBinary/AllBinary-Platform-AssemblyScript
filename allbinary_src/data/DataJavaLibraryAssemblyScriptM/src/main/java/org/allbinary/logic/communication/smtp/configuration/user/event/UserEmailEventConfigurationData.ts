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
// package org.allbinary.logic.communication.smtp.configuration.user.event

@global export class UserEmailEventConfigurationData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.smtp.configuration.user.event.UserEmailEventConfigurationData";
    }
    @lazy static readonly NAME: string | null = "EMAIL_EVENT_CONFIGURATION_NAME";
    @lazy static readonly LISTENER_CLASSPATH: string | null = "EMAIL_EVENT_CONFIGURATION_LISTENER_CLASSPATH";
    

    jinit_UserEmailEventConfigurationData_0(): UserEmailEventConfigurationData {
        super.jinit_JObject_0();
        return this;
    }
}

