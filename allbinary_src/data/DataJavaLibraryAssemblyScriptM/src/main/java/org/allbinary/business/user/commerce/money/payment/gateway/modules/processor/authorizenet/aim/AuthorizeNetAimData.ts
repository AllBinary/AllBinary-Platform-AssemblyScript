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
// package org.allbinary.business.user.commerce.money.payment.gateway.modules.processor.authorizenet.aim

@global export class AuthorizeNetAimData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.money.payment.gateway.modules.processor.authorizenet.aim.AuthorizeNetAimData";
    }
    @lazy static readonly X_DELIM_DATA: string | null = "x_delim_data";
    @lazy static readonly X_DELIM_CHAR: string | null = "x_delim_char";
    @lazy static readonly X_ENCAP_CHAR: string | null = "x_encap_char";
    @lazy static readonly X_AUTHENTICATION_INDICATOR: string | null = "x_authentication_indicator";
    @lazy static readonly X_CARDHOLDER_AUTHENTICATION_VALUE: string | null = "x_cardholder_authentication_value";
    @lazy static readonly X_DRIVERS_LICENSE_NUM: string | null = "x_drivers_license_num";
    @lazy static readonly X_DRIVERS_LICENSE_STATE: string | null = "x_drivers_license_state";
    @lazy static readonly X_DRIVERS_LICENSE_DOB: string | null = "x_drivers_license_dob";
    

    jinit_AuthorizeNetAimData_0(): AuthorizeNetAimData {
        super.jinit_JObject_0();
        return this;
    }
}

