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
// import java.util.HashMap
// import org.allbinary.business.context.modules.storefront.StoreFrontData
// import org.allbinary.business.init.InitSql
// import org.allbinary.business.init.db.UserDbInitInfo
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class BasicStoreFrontsEntity extends InitSql {

    jclassName(): string {
        return "org.allbinary.business.context.modules.storefronts.BasicStoreFrontsEntity";
    }
    logUtil: LogUtil | null = null;
    tableName: string | null = null;

    jfields_BasicStoreFrontsEntity(): void {
    this.logUtil = LogUtil.getInstance();
    this.tableName = "storefronts";
    }
    

    jinit_BasicStoreFrontsEntity_0(): BasicStoreFrontsEntity {
        super.jinit_InitSql_1(new UserDbInitInfo().jinit_UserDbInitInfo_0());
        this.jfields_BasicStoreFrontsEntity();
        this.setTable(this.tableName); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getStoreFrontInterface(name: string | null): BasicStoreFrontInterface | null {
        let keysAndValues: JHashMap | null = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) return null;
        keysAndValues!.put(StoreFrontData.getInstance()!.NAME, name); if (JThrowable.pending !== null) return null;
        let storeHashMap: JHashMap | null = super.getRow(keysAndValues); if (JThrowable.pending !== null) return null;
        if (storeHashMap == null) {
            { JThrowable.raise(new JException().jinit_JException_1(jstr("No Such Store: ") + jstr(name))); return null; }
        } if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
            this.logUtil!.putF(jstr("StoreFront: ") + jstr(JObject.jtoString(storeHashMap)), this, "getStore()"); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<BasicStoreFrontInterface | null>(new BasicStoreFront().jinit_BasicStoreFront_1(storeHashMap));
    }
}

