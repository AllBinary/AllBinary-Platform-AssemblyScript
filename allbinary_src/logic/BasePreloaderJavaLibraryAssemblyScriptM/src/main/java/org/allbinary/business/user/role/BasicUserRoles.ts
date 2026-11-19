/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2026 AllBinary 
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

@global export class BasicUserRoles extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.role.BasicUserRoles";
    }
    @lazy static jv_instance: BasicUserRoles | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicUserRoles | null {
        if (!BasicUserRoles.js_instance) {
            BasicUserRoles.js_instance = true;
            BasicUserRoles.jv_instance = new BasicUserRoles().jinit_BasicUserRoles_0();
        }
        return BasicUserRoles.jv_instance;
    }
    static set instance(value: BasicUserRoles | null) {
        BasicUserRoles.js_instance = true;
        BasicUserRoles.jv_instance = value;
    }
    roleVector: BasicArrayList | null = null;

    jfields_BasicUserRoles(): void {
    this.roleVector = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_BasicUserRoles_0(): BasicUserRoles {
        super.jinit_JObject_0();
        this.jfields_BasicUserRoles();
        return this;
    }
    

    static getInstance(): BasicUserRoles | null {
        return BasicUserRoles.instance;
    }
    

    getRole(role: string | null): BasicUserRole | null {
        let roleVector: BasicArrayList | null = this.getAll(); if (JThrowable.pending !== null) return null;
        let size: i32 = roleVector!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let userRole: BasicUserRole | null = changetype<BasicUserRole | null>(roleVector!.get(index)); if (JThrowable.pending !== null) return null;
            if (JString.compareTo1(role, JObject.jtoString(userRole)) == 0) {
                return userRole;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        { JThrowable.raise(new JException().jinit_JException_1("Unable to get role - Unknown Role")); return null; }
        return null;
    }
    

    getAll(): BasicArrayList | null {
        return this.roleVector;
    }
}

