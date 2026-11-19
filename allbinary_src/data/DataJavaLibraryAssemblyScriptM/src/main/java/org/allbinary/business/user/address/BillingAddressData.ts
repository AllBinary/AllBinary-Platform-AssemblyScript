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

@global export class BillingAddressData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.address.BillingAddressData";
    }
    static readonly MAX: i32 = 255;
    static readonly MIN: i32 = 0;
    @lazy static readonly MULTIPLE: string | null = "BILLINGADDRESSES";
    @lazy static readonly STATES: string | null = "BILLINGADDRESS_STATES";
    @lazy static readonly SETTOSHIPPINGADDRESS: string | null = "Set To Shipping Address";
    @lazy static readonly SELECT: string | null = "Select Billing Address";
    @lazy static readonly SETTOSHIPPINGADDRESSNAME: string | null = "SETTOSHIPPINGADDRESS";
    @lazy static readonly BILLINGADDRESSES: string | null = "BILLINGADDRESSES";
    @lazy static readonly BILLINGADDRESS: string | null = "BILLINGADDRESS";
    @lazy static readonly ID: string | null = "BILLINGADDRESS_ID";
    @lazy static readonly ADDRESS: string | null = "BILLINGADDRESS_ADDRESS";
    @lazy static readonly NAME: string | null = "BILLINGADDRESS_NAME";
    @lazy static readonly STREET: string | null = "BILLINGADDRESS_STREET";
    @lazy static readonly CITY: string | null = "BILLINGADDRESS_CITY";
    @lazy static readonly STATE: string | null = "BILLINGADDRESS_STATE";
    @lazy static readonly CODE: string | null = "BILLINGADDRESS_CODE";
    @lazy static readonly COUNTRY: string | null = "BILLINGADDRESS_COUNTRY";
    

    jinit_BillingAddressData_0(): BillingAddressData {
        super.jinit_JObject_0();
        return this;
    }
}

