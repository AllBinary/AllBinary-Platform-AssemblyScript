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
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class LogConfigTypes extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.type.LogConfigTypes";
    }
    @lazy static jv_LOGGING: BasicArrayList | null = null;
    @lazy static js_LOGGING: bool = false;
    static get LOGGING(): BasicArrayList | null {
        if (!LogConfigTypes.js_LOGGING) {
            LogConfigTypes.js_LOGGING = true;
            LogConfigTypes.jv_LOGGING = new BasicArrayListD().jinit_BasicArrayListD_0();
        }
        return LogConfigTypes.jv_LOGGING;
    }
    static set LOGGING(value: BasicArrayList | null) {
        LogConfigTypes.js_LOGGING = true;
        LogConfigTypes.jv_LOGGING = value;
    }
    

    jinit_LogConfigTypes_0(): LogConfigTypes {
        super.jinit_JObject_0();
        return this;
    }
}

