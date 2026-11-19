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
// package org.allbinary.logic.system.security.licensing

@global export class LockedUtil extends JObject implements LockedUtilInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LockedUtil";
    }
    @lazy static jv_instance: LockedUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LockedUtil | null {
        if (!LockedUtil.js_instance) {
            LockedUtil.js_instance = true;
            LockedUtil.jv_instance = new LockedUtil().jinit_LockedUtil_0();
        }
        return LockedUtil.jv_instance;
    }
    static set instance(value: LockedUtil | null) {
        LockedUtil.js_instance = true;
        LockedUtil.jv_instance = value;
    }

    jinit_LockedUtil_0(): LockedUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): LockedUtil | null {
        return LockedUtil.instance;
    }
    

    isLocked(): bool {
        return false;
    }
    

    isLockedFeature(lockableFeatrue: LockableFeature | null): bool {
        return false;
    }
}

