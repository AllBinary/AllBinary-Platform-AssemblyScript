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

@global export class StoreRoleFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.role.StoreRoleFactory";
    }
    @lazy static jv_instance: StoreRoleFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StoreRoleFactory | null {
        if (!StoreRoleFactory.js_instance) {
            StoreRoleFactory.js_instance = true;
            StoreRoleFactory.jv_instance = new StoreRoleFactory().jinit_StoreRoleFactory_0();
        }
        return StoreRoleFactory.jv_instance;
    }
    static set instance(value: StoreRoleFactory | null) {
        StoreRoleFactory.js_instance = true;
        StoreRoleFactory.jv_instance = value;
    }
    roles: BasicArrayList | null = null;
    subscriberRoles: BasicArrayList | null = null;
    wholesaleRoles: BasicArrayList | null = null;

    jfields_StoreRoleFactory(): void {
    this.roles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.subscriberRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.wholesaleRoles = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): StoreRoleFactory | null {
        return StoreRoleFactory.instance;
    }
    

    jinit_StoreRoleFactory_0(): StoreRoleFactory {
        super.jinit_JObject_0();
        this.jfields_StoreRoleFactory();
        let basicUserRoleFactory: BasicUserRoleFactory | null = BasicUserRoleFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.roles!.add(basicUserRoleFactory!.CUSTOMER); if (JThrowable.pending !== null) return this;
        this.roles!.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER); if (JThrowable.pending !== null) return this;
        this.roles!.add(basicUserRoleFactory!.WHOLESALECUSTOMER); if (JThrowable.pending !== null) return this;
        this.subscriberRoles!.add(basicUserRoleFactory!.SUBSCRIBERCUSTOMER); if (JThrowable.pending !== null) return this;
        this.wholesaleRoles!.add(basicUserRoleFactory!.WHOLESALECUSTOMER); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getRoles(): BasicArrayList | null {
        return this.roles;
    }
    

    getSubscriberRoles(): BasicArrayList | null {
        return this.subscriberRoles;
    }
    

    getWholesaleRoles(): BasicArrayList | null {
        return this.wholesaleRoles;
    }
}

