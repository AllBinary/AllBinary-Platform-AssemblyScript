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
// package org.allbinary.logic.system.os

@global export class NoOperatingSystem extends GenericOperatingSystem {

    jclassName(): string {
        return "org.allbinary.logic.system.os.NoOperatingSystem";
    }
    @lazy static jv_NO_OPERATING_SYSTEM: GenericOperatingSystem | null = null;
    @lazy static js_NO_OPERATING_SYSTEM: bool = false;
    static get NO_OPERATING_SYSTEM(): GenericOperatingSystem | null {
        if (!NoOperatingSystem.js_NO_OPERATING_SYSTEM) {
            NoOperatingSystem.js_NO_OPERATING_SYSTEM = true;
            NoOperatingSystem.jv_NO_OPERATING_SYSTEM = new GenericOperatingSystem().jinit_GenericOperatingSystem_0();
        }
        return NoOperatingSystem.jv_NO_OPERATING_SYSTEM;
    }
    static set NO_OPERATING_SYSTEM(value: GenericOperatingSystem | null) {
        NoOperatingSystem.js_NO_OPERATING_SYSTEM = true;
        NoOperatingSystem.jv_NO_OPERATING_SYSTEM = value;
    }
    

    jinit_NoOperatingSystem_0(): NoOperatingSystem {
        super.jinit_GenericOperatingSystem_0();
        return this;
    }
}

