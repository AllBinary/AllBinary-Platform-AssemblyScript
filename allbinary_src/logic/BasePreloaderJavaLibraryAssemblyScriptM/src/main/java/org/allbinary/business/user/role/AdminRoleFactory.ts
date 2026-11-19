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
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AdminRoleFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.role.AdminRoleFactory";
    }
    @lazy static jv_instance: AdminRoleFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AdminRoleFactory | null {
        if (!AdminRoleFactory.js_instance) {
            AdminRoleFactory.js_instance = true;
            AdminRoleFactory.jv_instance = new AdminRoleFactory().jinit_AdminRoleFactory_0();
        }
        return AdminRoleFactory.jv_instance;
    }
    static set instance(value: AdminRoleFactory | null) {
        AdminRoleFactory.js_instance = true;
        AdminRoleFactory.jv_instance = value;
    }
    adminRoles: BasicArrayList | null = null;
    storeAdminRoles: BasicArrayList | null = null;
    storeManagementRoles: BasicArrayList | null = null;
    productManagementRoles: BasicArrayList | null = null;
    reviewManagementRoles: BasicArrayList | null = null;
    customerManagementRoles: BasicArrayList | null = null;
    workflowManagementRoles: BasicArrayList | null = null;
    orderManagementRoles: BasicArrayList | null = null;
    adjusterManagementRoles: BasicArrayList | null = null;
    shippingManagementRoles: BasicArrayList | null = null;
    webManagementRoles: BasicArrayList | null = null;

    jfields_AdminRoleFactory(): void {
    this.adminRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.storeAdminRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.storeManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.productManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.reviewManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.customerManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.workflowManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.orderManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.adjusterManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.shippingManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.webManagementRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): AdminRoleFactory | null {
        return AdminRoleFactory.instance;
    }
    

    jinit_AdminRoleFactory_0(): AdminRoleFactory {
        super.jinit_JObject_0();
        this.jfields_AdminRoleFactory();
        let basicUserRoleFactory: BasicUserRoleFactory | null = BasicUserRoleFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.adminRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.storeAdminRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.storeAdminRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.storeManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.storeManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.storeManagementRoles!.add(basicUserRoleFactory!.CUSTOMERMANAGER); if (JThrowable.pending !== null) return this;
        this.storeManagementRoles!.add(basicUserRoleFactory!.ADJUSTER); if (JThrowable.pending !== null) return this;
        this.storeManagementRoles!.add(basicUserRoleFactory!.PRODUCTMANAGER); if (JThrowable.pending !== null) return this;
        this.storeManagementRoles!.add(basicUserRoleFactory!.REVIEWER); if (JThrowable.pending !== null) return this;
        this.storeManagementRoles!.add(basicUserRoleFactory!.SHIPPING); if (JThrowable.pending !== null) return this;
        this.productManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.productManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.productManagementRoles!.add(basicUserRoleFactory!.PRODUCTMANAGER); if (JThrowable.pending !== null) return this;
        this.reviewManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.reviewManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.reviewManagementRoles!.add(basicUserRoleFactory!.REVIEWER); if (JThrowable.pending !== null) return this;
        this.customerManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.customerManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.customerManagementRoles!.add(basicUserRoleFactory!.CUSTOMERMANAGER); if (JThrowable.pending !== null) return this;
        this.workflowManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.workflowManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.workflowManagementRoles!.add(basicUserRoleFactory!.WORKFLOWEDITOR); if (JThrowable.pending !== null) return this;
        this.orderManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.orderManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.adjusterManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.adjusterManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.adjusterManagementRoles!.add(basicUserRoleFactory!.ADJUSTER); if (JThrowable.pending !== null) return this;
        this.shippingManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.shippingManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.shippingManagementRoles!.add(basicUserRoleFactory!.SHIPPING); if (JThrowable.pending !== null) return this;
        this.webManagementRoles!.add(basicUserRoleFactory!.ADMINISTRATOR); if (JThrowable.pending !== null) return this;
        this.webManagementRoles!.add(basicUserRoleFactory!.STOREMANAGER); if (JThrowable.pending !== null) return this;
        this.webManagementRoles!.add(basicUserRoleFactory!.WEBMANAGER); if (JThrowable.pending !== null) return this;
        this.webManagementRoles!.add(basicUserRoleFactory!.WORKFLOWEDITOR); if (JThrowable.pending !== null) return this;
        this.webManagementRoles!.add(basicUserRoleFactory!.VIEWEDITOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getProductManagementRoles(): BasicArrayList | null {
        return this.productManagementRoles;
    }
    

    getAdminRoles(): BasicArrayList | null {
        return this.adminRoles;
    }
    

    getStoreAdminRoles(): BasicArrayList | null {
        return this.storeAdminRoles;
    }
    

    getStoreManagementRoles(): BasicArrayList | null {
        return this.storeManagementRoles;
    }
    

    getReviewManagementRoles(): BasicArrayList | null {
        return this.reviewManagementRoles;
    }
    

    getCustomerManagementRoles(): BasicArrayList | null {
        return this.customerManagementRoles;
    }
    

    getWorkflowManagementRoles(): BasicArrayList | null {
        return this.workflowManagementRoles;
    }
    

    getWebManagementRoles(): BasicArrayList | null {
        return this.webManagementRoles;
    }
    

    getShippingManagementRoles(): BasicArrayList | null {
        return this.shippingManagementRoles;
    }
    

    getAdjusterManagementRoles(): BasicArrayList | null {
        return this.adjusterManagementRoles;
    }
    

    getOrderManagementRoles(): BasicArrayList | null {
        return this.orderManagementRoles;
    }
}

