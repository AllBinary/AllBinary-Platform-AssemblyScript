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
// package org.allbinary.business.init.db
// import org.allbinary.logic.system.loader.AbeFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.LicensingException

@global export class InitDbHelperFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.db.InitDbHelperFactory";
    }
    @lazy static readonly CLASSNAME: string | null = "org.allbinary.business.installer.InitDbCrypted";
    

    jinit_InitDbHelperFactory_0(): InitDbHelperFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance2(abeClientInformation: AbeClientInformationInterface | null, databaseConnectionInfoInterface: DatabaseConnectionInfoInterface | null): Object | null {
        let params: StaticArray<Object | null> | null = new StaticArray<Object | null>(1);
        let classes: StaticArray<JClass | null> | null = new StaticArray<JClass | null>(1);
        classes![0] = JClass.forName("DatabaseConnectionInfoInterface");
        params![0] = changetype<Object | null>(databaseConnectionInfoInterface);
        let anyType: Object | null = AbeFactory.getInstance()!.getInstance4(abeClientInformation, InitDbHelperFactory.CLASSNAME, classes, params); if (JThrowable.pending !== null) return null;
        return anyType;
    }
    

    static getInstance1(abeClientInformation: AbeClientInformationInterface | null): Object | null {
        let anyType: Object | null = AbeFactory.getInstance()!.getInstance4(abeClientInformation, InitDbHelperFactory.CLASSNAME, null, null); if (JThrowable.pending !== null) return null;
        return anyType;
    }
}

