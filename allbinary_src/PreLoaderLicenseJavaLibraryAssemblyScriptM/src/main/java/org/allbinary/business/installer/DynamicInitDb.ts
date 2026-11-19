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
// package org.allbinary.business.installer
// import org.allbinary.business.init.db.DatabaseConnectionInfoInterface
// import org.allbinary.business.init.db.InitDbHelperFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.LicensingException

//Warning you must have sql root access
@global export class DynamicInitDb extends InitDb {

    jclassName(): string {
        return "org.allbinary.business.installer.DynamicInitDb";
    }
    

    jinit_DynamicInitDb_1(abeClientInformation: AbeClientInformationInterface | null): DynamicInitDb {
        super.jinit_InitDb_0();
        this.setHelper(InitDbHelperFactory.getInstance1(abeClientInformation)); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    jinit_DynamicInitDb_2(abeClientInformation: AbeClientInformationInterface | null, databaseConnectionInfoInterface: DatabaseConnectionInfoInterface | null): DynamicInitDb {
        super.jinit_InitDb_0();
        this.setHelper(InitDbHelperFactory.getInstance2(abeClientInformation, databaseConnectionInfoInterface)); if (JThrowable.pending !== null) return this;
        return this;
    }
}

