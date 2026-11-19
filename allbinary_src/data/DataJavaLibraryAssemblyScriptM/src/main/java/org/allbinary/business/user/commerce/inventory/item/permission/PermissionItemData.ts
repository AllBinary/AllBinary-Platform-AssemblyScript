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
// package org.allbinary.business.user.commerce.inventory.item.permission

@global export class PermissionItemData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.inventory.item.permission.PermissionItemData";
    }
    @lazy static readonly WHO: string | null = "PERMISSIONSITEM_WHO";
    @lazy static readonly WHAT: string | null = "PERMISSIONSITEM_WHAT";
    @lazy static readonly TYPE: string | null = "PERMISSIONSITEM_TYPE";
    @lazy static readonly START_TIME: string | null = "PERMISSIONSITEM_START_TIME";
    @lazy static readonly END_TIME: string | null = "PERMISSIONSITEM_END_TIME";
    @lazy static readonly REMOTE_ADDR: string | null = "PERMISSIONSITEM_REMOTE_ADDR";

    jinit_PermissionItemData_0(): PermissionItemData {
        super.jinit_JObject_0();
        return this;
    }
}

