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
// import java.io.Serializable

@global export class BasicUserRole extends JObject implements JSerializable {

    jclassName(): string {
        return "org.allbinary.business.user.role.BasicUserRole";
    }
    m_int_RoleId: i32 = 0;
    role: string | null = null;
    displayValue: string | null = null;
    sessionTimeout: i64 = 0;
    sessionInactivityTimeout: i64 = 0;

    jfields_BasicUserRole(): void {
    
    
    
    
    
    }
    

    jinit_BasicUserRole_4(aRole: string | null, a_int_RoleId: i32, aSessionTimeout: i64, aSessionInactivityTimeout: i64): BasicUserRole {
        this.jinit_BasicUserRole_5(aRole, aRole, a_int_RoleId, aSessionTimeout, aSessionInactivityTimeout);
        return this;
    }
    

    jinit_BasicUserRole_5(aRole: string | null, aDisplayValue: string | null, a_int_RoleId: i32, aSessionTimeout: i64, aSessionInactivityTimeout: i64): BasicUserRole {
        super.jinit_JObject_0();
        this.jfields_BasicUserRole();
        this.m_int_RoleId = a_int_RoleId;
        this.role = aRole;
        this.displayValue = aDisplayValue;
        this.sessionTimeout = aSessionTimeout;
        this.sessionInactivityTimeout = aSessionInactivityTimeout;
        BasicUserRoles.getInstance()!.roleVector!.add(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getRoleId(): i32 {
        return this.m_int_RoleId;
    }
    

    getRole(): string | null {
        return this.role;
    }
    

    getSessionTimeout(): i64 {
        return this.sessionTimeout;
    }
    

    getSessionInactivityTimeout(): i64 {
        return this.sessionInactivityTimeout;
    }
    

    equals(basicUserRole_object: Object | null): bool {
        if (basicUserRole_object !== null && !(basicUserRole_object instanceof BasicUserRole)) return false;
        let basicUserRole: BasicUserRole | null = changetype<BasicUserRole | null>(basicUserRole_object);
        if (this.getRoleId() == basicUserRole!.getRoleId()) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toString0(): string | null {
        return this.getRole();
    }
}

