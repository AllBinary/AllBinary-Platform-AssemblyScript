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
// package org.allbinary.business.user.commerce.inventory.order

@global export class OrderData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.inventory.order.OrderData";
    }
    @lazy static readonly ORDERS: string | null = "ORDERS";
    @lazy static readonly ORDER: string | null = "ORDER";
    @lazy static readonly ID: string | null = "ORDER_ID";
    @lazy static readonly CUSTOMERCOMMENT: string | null = "ORDER_CUSTOMER_COMMENT";
    @lazy static readonly CUSTOMERCANCELCOMMENT: string | null = "ORDER_CUSTOMER_CANCEL_COMMENT";
    @lazy static readonly STORECOMMENT: string | null = "ORDER_STORE_COMMENT";
    @lazy static readonly STORECANCELCOMMENT: string | null = "ORDER_STORE_CANCEL_COMMENT";

    jinit_OrderData_0(): OrderData {
        super.jinit_JObject_0();
        return this;
    }
}

