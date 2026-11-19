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
// package org.allbinary.logic.system.security.licensing
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class ClientInformationFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.ClientInformationFactory";
    }

    jinit_ClientInformationFactory_0(): ClientInformationFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): ClientInformation | null {
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        logUtil!.putF(commonStrings!.NOT_IMPLEMENTED, this, commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) return null;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        return new ClientInformation().jinit_ClientInformation_4(stringUtil!.NULL_STRING, stringUtil!.NULL_STRING, stringUtil!.NULL_STRING, stringUtil!.NULL_STRING);
    }
}

