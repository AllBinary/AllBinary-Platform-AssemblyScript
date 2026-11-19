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
// package org.allbinary.business.user.commerce.shipping

@global export class ShippingMethodsData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.shipping.ShippingMethodsData";
    }
    @lazy static readonly SHIPPINGMETHODSORDERSUMMARIES: string | null = "SHIPPINGMETHODS_ORDERSUMMARIES";
    @lazy static readonly SHIPPINGMETHODORDERSUMMARY: string | null = "SHIPPINGMETHOD_ORDERSUMMARY";
    @lazy static readonly SHIPPINGMETHODS: string | null = "SHIPPINGMETHODS";
    @lazy static readonly NAME: string | null = "SHIPPINGMETHODS_NAME";
    @lazy static readonly SHIPPINGCOST: string | null = "SHIPPINGMETHOD_SHIPPINGCOST";
    @lazy static readonly TAXRATE: string | null = "SHIPPINGMETHOD_TAXRATE";
    @lazy static readonly SUBTOTAL: string | null = "SHIPPINGMETHOD_SUBTOTAL";
    @lazy static readonly TAX: string | null = "SHIPPINGMETHOD_TAX";
    @lazy static readonly TOTAL: string | null = "SHIPPINGMETHOD_TOTAL";

    jinit_ShippingMethodsData_0(): ShippingMethodsData {
        super.jinit_JObject_0();
        return this;
    }
}

