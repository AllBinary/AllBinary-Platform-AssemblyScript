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

@global export class ShippingAddressData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.address.ShippingAddressData";
    }
    @lazy static readonly SETTOBILLINGADDRESS: string | null = "Set To Billing Address";
    @lazy static readonly SELECT: string | null = "Select Shipping Address";
    @lazy static readonly SELECTNAME: string | null = "SELECTSHIPPINGADDRESS";
    @lazy static readonly MULTIPLE: string | null = "SHIPPINGADDRESSES";
    @lazy static readonly SHIPPINGADDRESSES: string | null = "SHIPPINGADDRESSES";
    @lazy static readonly SHIPPINGADDRESS: string | null = "SHIPPINGADDRESS";
    @lazy static readonly ID: string | null = "SHIPPINGADDRESS_ID";
    @lazy static readonly ADDRESS: string | null = "SHIPPINGADDRESS_ADDRESS";
    @lazy static readonly NAME: string | null = "SHIPPINGADDRESS_NAME";
    @lazy static readonly STREET: string | null = "SHIPPINGADDRESS_STREET";
    @lazy static readonly CITY: string | null = "SHIPPINGADDRESS_CITY";
    @lazy static readonly STATE: string | null = "SHIPPINGADDRESS_STATE";
    @lazy static readonly CODE: string | null = "SHIPPINGADDRESS_CODE";
    @lazy static readonly COUNTRY: string | null = "SHIPPINGADDRESS_COUNTRY";
    @lazy static readonly TAX: string | null = "SHIPPINGADDRESS_TAX";
    

    jinit_ShippingAddressData_0(): ShippingAddressData {
        super.jinit_JObject_0();
        return this;
    }
}

