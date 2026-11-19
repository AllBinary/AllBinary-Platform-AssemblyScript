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
// package org.allbinary.business.user.address

@global export class StreetAddressData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.address.StreetAddressData";
    }
    static readonly MAX: i32 = 255;
    static readonly MIN: i32 = 0;
    @lazy static readonly FORM: string | null = "FORM";
    @lazy static readonly STATES: string | null = "STATES";
    @lazy static readonly NUMBEROFADDRESSES: string | null = "STREETADDRESS_NUMBEROFADDRESSES";
    @lazy static readonly ID: string | null = "STREETADDRESS_ID";
    @lazy static readonly DEFAULT: string | null = "STREETADDRESS_DEFAULT_ADDRESS";
    @lazy static readonly ADDRESS: string | null = "STREETADDRESS_ADDRESS";
    @lazy static readonly NAME: string | null = "STREETADDRESS_NAME";
    @lazy static readonly STREET: string | null = "STREETADDRESS_STREET";
    @lazy static readonly CITY: string | null = "STREETADDRESS_CITY";
    @lazy static readonly STATE: string | null = "STREETADDRESS_STATE";
    @lazy static readonly CODE: string | null = "STREETADDRESS_CODE";
    @lazy static readonly COUNTRY: string | null = "STREETADDRESS_COUNTRY";
    

    jinit_StreetAddressData_0(): StreetAddressData {
        super.jinit_JObject_0();
        return this;
    }
}

