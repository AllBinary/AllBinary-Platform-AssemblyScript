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
// package org.allbinary.logic.communication.smtp.event
// import java.util.HashMap
// import org.allbinary.business.user.commerce.inventory.order.OrderHistoryData
// import org.allbinary.logic.StdUtil

@global export class UserEmailEventNameData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.smtp.event.UserEmailEventNameData";
    }
    @lazy static jv_userNameEvenNameHashMap: JHashMap | null = null;
    @lazy static js_userNameEvenNameHashMap: bool = false;
    static get userNameEvenNameHashMap(): JHashMap | null {
        if (!UserEmailEventNameData.js_userNameEvenNameHashMap) {
            UserEmailEventNameData.js_userNameEvenNameHashMap = true;
            UserEmailEventNameData.jv_userNameEvenNameHashMap = StdUtil.getInstance()!.createHashMap();
        }
        return UserEmailEventNameData.jv_userNameEvenNameHashMap;
    }
    static set userNameEvenNameHashMap(value: JHashMap | null) {
        UserEmailEventNameData.js_userNameEvenNameHashMap = true;
        UserEmailEventNameData.jv_userNameEvenNameHashMap = value;
    }
    @lazy static nextId: i32 = 0;
    @lazy static jv_INSTALLER: UserEmailEventNameData | null = null;
    @lazy static js_INSTALLER: bool = false;
    static get INSTALLER(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_INSTALLER) {
            UserEmailEventNameData.js_INSTALLER = true;
            UserEmailEventNameData.jv_INSTALLER = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Installer");
        }
        return UserEmailEventNameData.jv_INSTALLER;
    }
    static set INSTALLER(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_INSTALLER = true;
        UserEmailEventNameData.jv_INSTALLER = value;
    }
    @lazy static jv_EXCEPTION: UserEmailEventNameData | null = null;
    @lazy static js_EXCEPTION: bool = false;
    static get EXCEPTION(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_EXCEPTION) {
            UserEmailEventNameData.js_EXCEPTION = true;
            UserEmailEventNameData.jv_EXCEPTION = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Exception");
        }
        return UserEmailEventNameData.jv_EXCEPTION;
    }
    static set EXCEPTION(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_EXCEPTION = true;
        UserEmailEventNameData.jv_EXCEPTION = value;
    }
    @lazy static jv_LOGGEDEXCEPTION: UserEmailEventNameData | null = null;
    @lazy static js_LOGGEDEXCEPTION: bool = false;
    static get LOGGEDEXCEPTION(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_LOGGEDEXCEPTION) {
            UserEmailEventNameData.js_LOGGEDEXCEPTION = true;
            UserEmailEventNameData.jv_LOGGEDEXCEPTION = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Logged Exception");
        }
        return UserEmailEventNameData.jv_LOGGEDEXCEPTION;
    }
    static set LOGGEDEXCEPTION(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_LOGGEDEXCEPTION = true;
        UserEmailEventNameData.jv_LOGGEDEXCEPTION = value;
    }
    @lazy static jv_ERROR: UserEmailEventNameData | null = null;
    @lazy static js_ERROR: bool = false;
    static get ERROR(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_ERROR) {
            UserEmailEventNameData.js_ERROR = true;
            UserEmailEventNameData.jv_ERROR = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Error");
        }
        return UserEmailEventNameData.jv_ERROR;
    }
    static set ERROR(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_ERROR = true;
        UserEmailEventNameData.jv_ERROR = value;
    }
    @lazy static jv_OUTOFMEMORY: UserEmailEventNameData | null = null;
    @lazy static js_OUTOFMEMORY: bool = false;
    static get OUTOFMEMORY(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_OUTOFMEMORY) {
            UserEmailEventNameData.js_OUTOFMEMORY = true;
            UserEmailEventNameData.jv_OUTOFMEMORY = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Out Of Memory Error");
        }
        return UserEmailEventNameData.jv_OUTOFMEMORY;
    }
    static set OUTOFMEMORY(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_OUTOFMEMORY = true;
        UserEmailEventNameData.jv_OUTOFMEMORY = value;
    }
    @lazy static jv_ADMINGENERATINGSTATICPAGES: UserEmailEventNameData | null = null;
    @lazy static js_ADMINGENERATINGSTATICPAGES: bool = false;
    static get ADMINGENERATINGSTATICPAGES(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_ADMINGENERATINGSTATICPAGES) {
            UserEmailEventNameData.js_ADMINGENERATINGSTATICPAGES = true;
            UserEmailEventNameData.jv_ADMINGENERATINGSTATICPAGES = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Admin Generating Static Pages");
        }
        return UserEmailEventNameData.jv_ADMINGENERATINGSTATICPAGES;
    }
    static set ADMINGENERATINGSTATICPAGES(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_ADMINGENERATINGSTATICPAGES = true;
        UserEmailEventNameData.jv_ADMINGENERATINGSTATICPAGES = value;
    }
    @lazy static jv_STOREERROROCCURRED: UserEmailEventNameData | null = null;
    @lazy static js_STOREERROROCCURRED: bool = false;
    static get STOREERROROCCURRED(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_STOREERROROCCURRED) {
            UserEmailEventNameData.js_STOREERROROCCURRED = true;
            UserEmailEventNameData.jv_STOREERROROCCURRED = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Store Error Occurred");
        }
        return UserEmailEventNameData.jv_STOREERROROCCURRED;
    }
    static set STOREERROROCCURRED(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_STOREERROROCCURRED = true;
        UserEmailEventNameData.jv_STOREERROROCCURRED = value;
    }
    @lazy static jv_STOREOUTOFMEMORY: UserEmailEventNameData | null = null;
    @lazy static js_STOREOUTOFMEMORY: bool = false;
    static get STOREOUTOFMEMORY(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_STOREOUTOFMEMORY) {
            UserEmailEventNameData.js_STOREOUTOFMEMORY = true;
            UserEmailEventNameData.jv_STOREOUTOFMEMORY = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Store Out Of Memory Error");
        }
        return UserEmailEventNameData.jv_STOREOUTOFMEMORY;
    }
    static set STOREOUTOFMEMORY(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_STOREOUTOFMEMORY = true;
        UserEmailEventNameData.jv_STOREOUTOFMEMORY = value;
    }
    @lazy static jv_STORECREATED: UserEmailEventNameData | null = null;
    @lazy static js_STORECREATED: bool = false;
    static get STORECREATED(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_STORECREATED) {
            UserEmailEventNameData.js_STORECREATED = true;
            UserEmailEventNameData.jv_STORECREATED = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Store Created");
        }
        return UserEmailEventNameData.jv_STORECREATED;
    }
    static set STORECREATED(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_STORECREATED = true;
        UserEmailEventNameData.jv_STORECREATED = value;
    }
    @lazy static jv_STOREOPENED: UserEmailEventNameData | null = null;
    @lazy static js_STOREOPENED: bool = false;
    static get STOREOPENED(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_STOREOPENED) {
            UserEmailEventNameData.js_STOREOPENED = true;
            UserEmailEventNameData.jv_STOREOPENED = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Store Opened");
        }
        return UserEmailEventNameData.jv_STOREOPENED;
    }
    static set STOREOPENED(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_STOREOPENED = true;
        UserEmailEventNameData.jv_STOREOPENED = value;
    }
    @lazy static jv_STORECLOSED: UserEmailEventNameData | null = null;
    @lazy static js_STORECLOSED: bool = false;
    static get STORECLOSED(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_STORECLOSED) {
            UserEmailEventNameData.js_STORECLOSED = true;
            UserEmailEventNameData.jv_STORECLOSED = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Store Closed");
        }
        return UserEmailEventNameData.jv_STORECLOSED;
    }
    static set STORECLOSED(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_STORECLOSED = true;
        UserEmailEventNameData.jv_STORECLOSED = value;
    }
    @lazy static jv_STOREGENERATINGSTATICPAGES: UserEmailEventNameData | null = null;
    @lazy static js_STOREGENERATINGSTATICPAGES: bool = false;
    static get STOREGENERATINGSTATICPAGES(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_STOREGENERATINGSTATICPAGES) {
            UserEmailEventNameData.js_STOREGENERATINGSTATICPAGES = true;
            UserEmailEventNameData.jv_STOREGENERATINGSTATICPAGES = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Store Generating Static Pages");
        }
        return UserEmailEventNameData.jv_STOREGENERATINGSTATICPAGES;
    }
    static set STOREGENERATINGSTATICPAGES(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_STOREGENERATINGSTATICPAGES = true;
        UserEmailEventNameData.jv_STOREGENERATINGSTATICPAGES = value;
    }
    @lazy static jv_PRODUCTISOUT: UserEmailEventNameData | null = null;
    @lazy static js_PRODUCTISOUT: bool = false;
    static get PRODUCTISOUT(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_PRODUCTISOUT) {
            UserEmailEventNameData.js_PRODUCTISOUT = true;
            UserEmailEventNameData.jv_PRODUCTISOUT = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Product Is Out");
        }
        return UserEmailEventNameData.jv_PRODUCTISOUT;
    }
    static set PRODUCTISOUT(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_PRODUCTISOUT = true;
        UserEmailEventNameData.jv_PRODUCTISOUT = value;
    }
    @lazy static jv_PRODUCTISAVAILABLE: UserEmailEventNameData | null = null;
    @lazy static js_PRODUCTISAVAILABLE: bool = false;
    static get PRODUCTISAVAILABLE(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_PRODUCTISAVAILABLE) {
            UserEmailEventNameData.js_PRODUCTISAVAILABLE = true;
            UserEmailEventNameData.jv_PRODUCTISAVAILABLE = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Product Is Available");
        }
        return UserEmailEventNameData.jv_PRODUCTISAVAILABLE;
    }
    static set PRODUCTISAVAILABLE(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_PRODUCTISAVAILABLE = true;
        UserEmailEventNameData.jv_PRODUCTISAVAILABLE = value;
    }
    @lazy static jv_PRODUCTISOLD: UserEmailEventNameData | null = null;
    @lazy static js_PRODUCTISOLD: bool = false;
    static get PRODUCTISOLD(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_PRODUCTISOLD) {
            UserEmailEventNameData.js_PRODUCTISOLD = true;
            UserEmailEventNameData.jv_PRODUCTISOLD = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Product Is Old");
        }
        return UserEmailEventNameData.jv_PRODUCTISOLD;
    }
    static set PRODUCTISOLD(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_PRODUCTISOLD = true;
        UserEmailEventNameData.jv_PRODUCTISOLD = value;
    }
    @lazy static jv_PRODUCTISONSALE: UserEmailEventNameData | null = null;
    @lazy static js_PRODUCTISONSALE: bool = false;
    static get PRODUCTISONSALE(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_PRODUCTISONSALE) {
            UserEmailEventNameData.js_PRODUCTISONSALE = true;
            UserEmailEventNameData.jv_PRODUCTISONSALE = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Product Is On Sale");
        }
        return UserEmailEventNameData.jv_PRODUCTISONSALE;
    }
    static set PRODUCTISONSALE(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_PRODUCTISONSALE = true;
        UserEmailEventNameData.jv_PRODUCTISONSALE = value;
    }
    @lazy static jv_PRODUCTSALEISOVER: UserEmailEventNameData | null = null;
    @lazy static js_PRODUCTSALEISOVER: bool = false;
    static get PRODUCTSALEISOVER(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_PRODUCTSALEISOVER) {
            UserEmailEventNameData.js_PRODUCTSALEISOVER = true;
            UserEmailEventNameData.jv_PRODUCTSALEISOVER = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Product Sale Is Over");
        }
        return UserEmailEventNameData.jv_PRODUCTSALEISOVER;
    }
    static set PRODUCTSALEISOVER(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_PRODUCTSALEISOVER = true;
        UserEmailEventNameData.jv_PRODUCTSALEISOVER = value;
    }
    @lazy static jv_ORDERPREPROCESSING: UserEmailEventNameData | null = null;
    @lazy static js_ORDERPREPROCESSING: bool = false;
    static get ORDERPREPROCESSING(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_ORDERPREPROCESSING) {
            UserEmailEventNameData.js_ORDERPREPROCESSING = true;
            UserEmailEventNameData.jv_ORDERPREPROCESSING = new UserEmailEventNameData().jinit_UserEmailEventNameData_1(OrderHistoryData.PREPROCESSING);
        }
        return UserEmailEventNameData.jv_ORDERPREPROCESSING;
    }
    static set ORDERPREPROCESSING(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_ORDERPREPROCESSING = true;
        UserEmailEventNameData.jv_ORDERPREPROCESSING = value;
    }
    @lazy static jv_ORDERPROCESSING: UserEmailEventNameData | null = null;
    @lazy static js_ORDERPROCESSING: bool = false;
    static get ORDERPROCESSING(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_ORDERPROCESSING) {
            UserEmailEventNameData.js_ORDERPROCESSING = true;
            UserEmailEventNameData.jv_ORDERPROCESSING = new UserEmailEventNameData().jinit_UserEmailEventNameData_1(OrderHistoryData.PROCESSING);
        }
        return UserEmailEventNameData.jv_ORDERPROCESSING;
    }
    static set ORDERPROCESSING(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_ORDERPROCESSING = true;
        UserEmailEventNameData.jv_ORDERPROCESSING = value;
    }
    @lazy static jv_ORDERCANCELLED: UserEmailEventNameData | null = null;
    @lazy static js_ORDERCANCELLED: bool = false;
    static get ORDERCANCELLED(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_ORDERCANCELLED) {
            UserEmailEventNameData.js_ORDERCANCELLED = true;
            UserEmailEventNameData.jv_ORDERCANCELLED = new UserEmailEventNameData().jinit_UserEmailEventNameData_1(OrderHistoryData.CANCELLED);
        }
        return UserEmailEventNameData.jv_ORDERCANCELLED;
    }
    static set ORDERCANCELLED(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_ORDERCANCELLED = true;
        UserEmailEventNameData.jv_ORDERCANCELLED = value;
    }
    @lazy static jv_ORDERPARTIALLYSHIPPED: UserEmailEventNameData | null = null;
    @lazy static js_ORDERPARTIALLYSHIPPED: bool = false;
    static get ORDERPARTIALLYSHIPPED(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_ORDERPARTIALLYSHIPPED) {
            UserEmailEventNameData.js_ORDERPARTIALLYSHIPPED = true;
            UserEmailEventNameData.jv_ORDERPARTIALLYSHIPPED = new UserEmailEventNameData().jinit_UserEmailEventNameData_1(OrderHistoryData.PARTIALLYSHIPPED);
        }
        return UserEmailEventNameData.jv_ORDERPARTIALLYSHIPPED;
    }
    static set ORDERPARTIALLYSHIPPED(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_ORDERPARTIALLYSHIPPED = true;
        UserEmailEventNameData.jv_ORDERPARTIALLYSHIPPED = value;
    }
    @lazy static jv_ORDERSHIPPED: UserEmailEventNameData | null = null;
    @lazy static js_ORDERSHIPPED: bool = false;
    static get ORDERSHIPPED(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_ORDERSHIPPED) {
            UserEmailEventNameData.js_ORDERSHIPPED = true;
            UserEmailEventNameData.jv_ORDERSHIPPED = new UserEmailEventNameData().jinit_UserEmailEventNameData_1(OrderHistoryData.SHIPPED);
        }
        return UserEmailEventNameData.jv_ORDERSHIPPED;
    }
    static set ORDERSHIPPED(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_ORDERSHIPPED = true;
        UserEmailEventNameData.jv_ORDERSHIPPED = value;
    }
    @lazy static jv_QUOTEREQUEST: UserEmailEventNameData | null = null;
    @lazy static js_QUOTEREQUEST: bool = false;
    static get QUOTEREQUEST(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_QUOTEREQUEST) {
            UserEmailEventNameData.js_QUOTEREQUEST = true;
            UserEmailEventNameData.jv_QUOTEREQUEST = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("Quote Request");
        }
        return UserEmailEventNameData.jv_QUOTEREQUEST;
    }
    static set QUOTEREQUEST(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_QUOTEREQUEST = true;
        UserEmailEventNameData.jv_QUOTEREQUEST = value;
    }
    @lazy static jv_NEWPASSWORD: UserEmailEventNameData | null = null;
    @lazy static js_NEWPASSWORD: bool = false;
    static get NEWPASSWORD(): UserEmailEventNameData | null {
        if (!UserEmailEventNameData.js_NEWPASSWORD) {
            UserEmailEventNameData.js_NEWPASSWORD = true;
            UserEmailEventNameData.jv_NEWPASSWORD = new UserEmailEventNameData().jinit_UserEmailEventNameData_1("New Password");
        }
        return UserEmailEventNameData.jv_NEWPASSWORD;
    }
    static set NEWPASSWORD(value: UserEmailEventNameData | null) {
        UserEmailEventNameData.js_NEWPASSWORD = true;
        UserEmailEventNameData.jv_NEWPASSWORD = value;
    }
    eventNameId: i32 = 0;
    eventHandlerName: string | null = null;

    jfields_UserEmailEventNameData(): void {
    this.eventNameId = 0;
    
    }
    

    jinit_UserEmailEventNameData_1(eventHandlerName: string | null): UserEmailEventNameData {
        super.jinit_JObject_0();
        this.jfields_UserEmailEventNameData();
        this.eventHandlerName = eventHandlerName;
        this.initNextId(); if (JThrowable.pending !== null) return this;
        UserEmailEventNameData.userNameEvenNameHashMap!.put(this.eventHandlerName, this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initNextId(): void {
        this.eventNameId = UserEmailEventNameData.nextId;
        UserEmailEventNameData.nextId++;
    }
    

    isEvent(userEmailEventNameString: string | null): bool {
        return UserEmailEventNameData.userNameEvenNameHashMap!.containsKey(userEmailEventNameString);
    }
    

    static getInstance1(userEmailEventNameString: string | null): UserEmailEventNameData | null {
        let userEmailEventNameData: UserEmailEventNameData | null = changetype<UserEmailEventNameData | null>(UserEmailEventNameData.userNameEvenNameHashMap!.get(userEmailEventNameString)); if (JThrowable.pending !== null) return null;
        if (userEmailEventNameData == null) {
            { JThrowable.raise(new JException().jinit_JException_0()); return null; }
        } else {
            return userEmailEventNameData;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    toString(): string | null {
        return this.eventHandlerName;
    }
}

