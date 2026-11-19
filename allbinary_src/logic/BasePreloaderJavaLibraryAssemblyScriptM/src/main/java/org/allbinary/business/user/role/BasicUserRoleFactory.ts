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
// package org.allbinary.business.user.role

@global export class BasicUserRoleFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.role.BasicUserRoleFactory";
    }
    @lazy static jv_instance: BasicUserRoleFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicUserRoleFactory | null {
        if (!BasicUserRoleFactory.js_instance) {
            BasicUserRoleFactory.js_instance = true;
            BasicUserRoleFactory.jv_instance = new BasicUserRoleFactory().jinit_BasicUserRoleFactory_0();
        }
        return BasicUserRoleFactory.jv_instance;
    }
    static set instance(value: BasicUserRoleFactory | null) {
        BasicUserRoleFactory.js_instance = true;
        BasicUserRoleFactory.jv_instance = value;
    }
    INACTIVITYTIMEOUT: i64 = 0;
    CUSTOMERTIMEOUT: i64 = 0;
    CUSTOMERMAXSESSIONTIME: i64 = 0;
    MAXSESSIONTIME: i64 = 0;
    INSTALLER: BasicUserRole | null = null;
    ADMINISTRATOR: BasicUserRole | null = null;
    CUSTOMER: BasicUserRole | null = null;
    SUBSCRIBERCUSTOMER: BasicUserRole | null = null;
    WHOLESALECUSTOMER: BasicUserRole | null = null;
    STOREMANAGER: BasicUserRole | null = null;
    PRODUCTMANAGER: BasicUserRole | null = null;
    CUSTOMERMANAGER: BasicUserRole | null = null;
    PAYMENTMANAGER: BasicUserRole | null = null;
    ORDERMANAGER: BasicUserRole | null = null;
    WEBMANAGER: BasicUserRole | null = null;
    REVIEWER: BasicUserRole | null = null;
    SHIPPING: BasicUserRole | null = null;
    ADJUSTER: BasicUserRole | null = null;
    WORKFLOWEDITOR: BasicUserRole | null = null;
    WIZARD: BasicUserRole | null = null;
    VIEWEDITOR: BasicUserRole | null = null;

    jfields_BasicUserRoleFactory(): void {
    this.INACTIVITYTIMEOUT = (<i64>360000000);
    this.CUSTOMERTIMEOUT = (<i64>360000000);
    this.CUSTOMERMAXSESSIONTIME = (<i64>360000000);
    this.MAXSESSIONTIME = (<i64>360000000);
    this.INSTALLER = new BasicUserRole().jinit_BasicUserRole_4("Installer", 16, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.ADMINISTRATOR = new BasicUserRole().jinit_BasicUserRole_4("Administrator", 0, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.CUSTOMER = new BasicUserRole().jinit_BasicUserRole_5("CustomerUser", "Customer User", 1, this.CUSTOMERTIMEOUT, this.CUSTOMERMAXSESSIONTIME);
    this.SUBSCRIBERCUSTOMER = new BasicUserRole().jinit_BasicUserRole_5("SubscriberUser", "Subscriber User", 2, this.CUSTOMERTIMEOUT, this.CUSTOMERMAXSESSIONTIME);
    this.WHOLESALECUSTOMER = new BasicUserRole().jinit_BasicUserRole_5("WholesaleUser", "Wholesale User", 3, this.CUSTOMERTIMEOUT, this.CUSTOMERMAXSESSIONTIME);
    this.STOREMANAGER = new BasicUserRole().jinit_BasicUserRole_5("StoreManager", "Store Manager", 4, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.PRODUCTMANAGER = new BasicUserRole().jinit_BasicUserRole_5("ProductManager", "Product Manager", 5, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.CUSTOMERMANAGER = new BasicUserRole().jinit_BasicUserRole_5("UserManager", "User Manager", 6, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.PAYMENTMANAGER = new BasicUserRole().jinit_BasicUserRole_5("PaymentManager", "Payment Manager", 7, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.ORDERMANAGER = new BasicUserRole().jinit_BasicUserRole_5("OrderManager", "Order Manager", 8, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.WEBMANAGER = new BasicUserRole().jinit_BasicUserRole_5("WebManager", "Web Manager", 9, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.REVIEWER = new BasicUserRole().jinit_BasicUserRole_4("Reviewer", 10, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.SHIPPING = new BasicUserRole().jinit_BasicUserRole_4("Shipping", 11, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.ADJUSTER = new BasicUserRole().jinit_BasicUserRole_4("Adjuster", 12, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.WORKFLOWEDITOR = new BasicUserRole().jinit_BasicUserRole_5("WorkFlowEditor", "WorkFlow Editor", 13, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.WIZARD = new BasicUserRole().jinit_BasicUserRole_5("WizardUser", "Wizard User", 14, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    this.VIEWEDITOR = new BasicUserRole().jinit_BasicUserRole_5("ViewEditor", "View Editor", 15, this.MAXSESSIONTIME, this.INACTIVITYTIMEOUT);
    }

    jinit_BasicUserRoleFactory_0(): BasicUserRoleFactory {
        super.jinit_JObject_0();
        this.jfields_BasicUserRoleFactory();
        return this;
    }
    

    static getInstance(): BasicUserRoleFactory | null {
        return BasicUserRoleFactory.instance;
    }
}

