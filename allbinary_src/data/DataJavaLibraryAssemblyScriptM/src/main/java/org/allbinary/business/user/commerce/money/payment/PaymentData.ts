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
// package org.allbinary.business.user.commerce.money.payment

@global export class PaymentData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.money.payment.PaymentData";
    }
    static readonly MIN: i32 = 4;
    static readonly MAX: i32 = 19;
    @lazy static readonly ADDNEW: string | null = "Add New Payment";
    @lazy static readonly VIEW: string | null = "View Payment";
    @lazy static readonly SELECT: string | null = "Select Payment";
    @lazy static readonly CHANGE: string | null = "Change Payment";
    @lazy static readonly PAYMENT: string | null = "PAYMENT";
    @lazy static readonly METHOD: string | null = "PAYMENT_METHOD";
    @lazy static readonly ID: string | null = "PAYMENT_ID";
    @lazy static readonly NUMBER: string | null = "PAYMENT_NUMBER";
    @lazy static readonly NAME: string | null = "PAYMENT_NAME";
    @lazy static readonly TYPE: string | null = "PAYMENT_TYPE";
    @lazy static readonly EXPIRATION: string | null = "PAYMENT_EXPIRATION";
    @lazy static readonly TENDERTYPE: string | null = "PAYMENT_TENDERTYPE";
    @lazy static readonly TRANSACTIONTYPE: string | null = "PAYMENT_TRANSACTIONTYPE";
    @lazy static readonly ABA: string | null = "PAYMENT_ABA";
    @lazy static readonly ACCOUNT: string | null = "PAYMENT_ACCOUNT";
    @lazy static readonly ACCOUNTTYPE: string | null = "PAYMENT_ACCOUNTTYPE";
    @lazy static readonly AUTHORIZATIONCODE: string | null = "PAYMENT_AUTHORIZATIONCODE";
    @lazy static readonly CHECKNUMBER: string | null = "PAYMENT_CHECKNUMBER";
    @lazy static readonly CHECKTYPE: string | null = "PAYMENT_CHECKTYPE";
    @lazy static readonly DRIVERSLICENSE: string | null = "PAYMENT_DRIVERSLICENSE";
    @lazy static readonly MAGNETICINKCHECKREADER: string | null = "PAYMENT_MAGNETICINKCHECKREADER";

    jinit_PaymentData_0(): PaymentData {
        super.jinit_JObject_0();
        return this;
    }
}

