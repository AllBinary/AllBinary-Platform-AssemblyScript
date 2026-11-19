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

@global export class InventoryDbInitInfo extends DbInitInfo {

    jclassName(): string {
        return "org.allbinary.business.init.db.InventoryDbInitInfo";
    }
    @lazy static readonly INITFILE: string | null = "inventorydbinitdata.dat";
    

    jinit_InventoryDbInitInfo_0(): InventoryDbInitInfo {
        super.jinit_DbInitInfo_2(InventoryDbInitInfo.INITFILE, true);
        return this;
    }
    

    jinit_InventoryDbInitInfo_1(read: bool): InventoryDbInitInfo {
        super.jinit_DbInitInfo_2(InventoryDbInitInfo.INITFILE, read);
        return this;
    }
}

