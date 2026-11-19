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
// package org.allbinary.business.user

@global export class UserData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.UserData";
    }
    @lazy static MAXLEN: i32 = 250;
    @lazy static readonly NAME: string | null = "USER_NAME";
    @lazy static readonly USERNAME: string | null = "CUSTOMER_USER_NAME";
    @lazy static readonly PASSWORD: string | null = "CUSTOMER_PASSWORD";
    @lazy static readonly PREFIXNAME: string | null = "CUSTOMER_PREFIX_NAME";
    @lazy static readonly FIRSTNAME: string | null = "CUSTOMER_FIRST_NAME";
    @lazy static readonly LASTNAME: string | null = "CUSTOMER_LAST_NAME";
    @lazy static readonly MIDDLENAME: string | null = "CUSTOMER_MIDDLE_NAME";
    @lazy static readonly SUFFIXNAME: string | null = "CUSTOMER_SUFFIX_NAME";
    @lazy static readonly COMPANY: string | null = "CUSTOMER_COMPANY";
    @lazy static readonly POSITIONATCOMPANY: string | null = "CUSTOMER_POSITION_AT_COMPANY";
    @lazy static readonly MAINEMAIL: string | null = "CUSTOMER_MAIN_EMAIL";
    @lazy static readonly SECONDARYEMAIL: string | null = "CUSTOMER_SECONDARY_EMAIL";
    @lazy static readonly HOMEPHONE: string | null = "CUSTOMER_HOME_PHONE";
    @lazy static readonly CELLPHONE: string | null = "CUSTOMER_CELL_PHONE";
    @lazy static readonly WORKPHONE: string | null = "CUSTOMER_WORK_PHONE";
    @lazy static readonly OTHERCONTACT: string | null = "CUSTOMER_OTHER_CONTACT";
    @lazy static readonly ELECTRONICDEVICE: string | null = "CUSTOMER_ELECTRONIC_DEVICE";
    @lazy static readonly FAX: string | null = "CUSTOMER_FAX";
    @lazy static readonly SECRET: string | null = "CUSTOMER_SECRET";
    @lazy static readonly PERMISSIONS: string | null = "CUSTOMER_PERMISSIONS";
    @lazy static readonly CONFIGURATION: string | null = "CUSTOMER_CONFIGURATION";
    

    jinit_UserData_0(): UserData {
        super.jinit_JObject_0();
        return this;
    }
}

