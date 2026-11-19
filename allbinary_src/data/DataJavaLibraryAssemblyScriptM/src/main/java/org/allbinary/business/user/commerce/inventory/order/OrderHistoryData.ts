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

@global export class OrderHistoryData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.inventory.order.OrderHistoryData";
    }
    @lazy static MAXIDLEN: i32 = 19;
    @lazy static readonly DATEDELTA: string | null = "DATE_DELTA";
    @lazy static readonly DATETYPE: string | null = "DATE_TYPE";
    @lazy static readonly TYPELONG: string | null = "TYPE_LONG";
    @lazy static readonly TYPECAESAR: string | null = "TYPE_CAESAR";
    @lazy static readonly TODATE: string | null = "TO_DATE";
    @lazy static readonly FROMHOUR: string | null = "FROM_HOUR";
    @lazy static readonly FROMDAY: string | null = "FROM_DAY";
    @lazy static readonly FROMMONTH: string | null = "FROM_MONTH";
    @lazy static readonly FROMYEAR: string | null = "FROM_YEAR";
    @lazy static readonly TOHOUR: string | null = "TO_HOUR";
    @lazy static readonly TODAY: string | null = "TO_DAY";
    @lazy static readonly TOMONTH: string | null = "TO_MONTH";
    @lazy static readonly TOYEAR: string | null = "TO_YEAR";
    @lazy static readonly ORDERHISTORY: string | null = "ORDERHISTORY";
    @lazy static readonly SHIPPEDDATE: string | null = "ORDERHISTORY_SHIPPED_DATE";
    @lazy static readonly ORDERDATE: string | null = "ORDERHISTORY_ORDER_DATE";
    @lazy static readonly TRANSDATE: string | null = "ORDERHISTORY_TRANS_DATE";
    @lazy static readonly CANCELDATE: string | null = "ORDERHISTORY_CANCEL_DATE";
    @lazy static readonly SHIPPEDDATEFORMATTED: string | null = "ORDERHISTORY_SHIPPED_DATE_FORMATTED";
    @lazy static readonly ORDERDATEFORMATTED: string | null = "ORDERHISTORY_ORDER_DATE_FORMATTED";
    @lazy static readonly TRANSDATEFORMATTED: string | null = "ORDERHISTORY_TRANS_DATE_FORMATTED";
    @lazy static readonly CANCELDATEFORMATTED: string | null = "ORDERHISTORY_CANCEL_DATE_FORMATTED";
    @lazy static readonly SUBTOTAL: string | null = "ORDERHISTORY_SUB_TOTAL";
    @lazy static readonly SHIPPINGCOST: string | null = "ORDERHISTORY_SHIPPING_COST";
    @lazy static readonly TAX: string | null = "ORDERHISTORY_TAX";
    @lazy static readonly TOTAL: string | null = "ORDERHISTORY_TOTAL";
    @lazy static readonly CANCELINFO: string | null = "ORDERHISTORY_CANCEL_INFO";
    @lazy static readonly CANCELTYPE: string | null = "ORDERHISTORY_CANCEL_TYPE";
    @lazy static readonly STATUS: string | null = "ORDERHISTORY_STATUS";
    @lazy static readonly PREPROCESSINGNAME: string | null = "PREPROCESSING";
    @lazy static readonly PROCESSINGNAME: string | null = "PROCESSING";
    @lazy static readonly CANCELLEDNAME: string | null = "CANCELLED";
    @lazy static readonly PARTIALLYSHIPPEDNAME: string | null = "PARTIALLYSHIPPED";
    @lazy static readonly SHIPPEDNAME: string | null = "SHIPPED";
    @lazy static readonly PREPROCESSING: string | null = "Order Preprocessing";
    @lazy static readonly PROCESSING: string | null = "Order Processing";
    @lazy static readonly CANCELLED: string | null = "Order Cancelled";
    @lazy static readonly PARTIALLYSHIPPED: string | null = "Order Partially Shipped";
    @lazy static readonly SHIPPED: string | null = "Order Shipped";
    @lazy static readonly SETSTATUS: string | null = "Set Status";

    jinit_OrderHistoryData_0(): OrderHistoryData {
        super.jinit_JObject_0();
        return this;
    }
}

