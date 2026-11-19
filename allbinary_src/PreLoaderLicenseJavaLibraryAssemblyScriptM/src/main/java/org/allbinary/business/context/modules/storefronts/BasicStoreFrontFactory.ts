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
// package org.allbinary.business.context.modules.storefronts
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class BasicStoreFrontFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefronts.BasicStoreFrontFactory";
    }
    @lazy static jv_instance: BasicStoreFrontFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicStoreFrontFactory | null {
        if (!BasicStoreFrontFactory.js_instance) {
            BasicStoreFrontFactory.js_instance = true;
            BasicStoreFrontFactory.jv_instance = new BasicStoreFrontFactory().jinit_BasicStoreFrontFactory_0();
        }
        return BasicStoreFrontFactory.jv_instance;
    }
    static set instance(value: BasicStoreFrontFactory | null) {
        BasicStoreFrontFactory.js_instance = true;
        BasicStoreFrontFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_BasicStoreFrontFactory(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    static getInstance(): BasicStoreFrontFactory | null {
        return BasicStoreFrontFactory.instance;
    }
    

    jinit_BasicStoreFrontFactory_0(): BasicStoreFrontFactory {
        super.jinit_JObject_0();
        this.jfields_BasicStoreFrontFactory();
        return this;
    }
    

    getInstance1(storeName: string | null): BasicStoreFrontInterface | null {
        do {
            let storeFronts: BasicStoreFrontsEntity | null = new BasicStoreFrontsEntity().jinit_BasicStoreFrontsEntity_0(); if (JThrowable.pending !== null) break;
            return storeFronts!.getStoreFrontInterface(storeName);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
                this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

