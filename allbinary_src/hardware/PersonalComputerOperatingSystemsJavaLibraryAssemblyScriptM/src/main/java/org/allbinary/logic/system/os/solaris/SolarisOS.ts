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
// package org.allbinary.logic.system.os.solaris
// import org.allbinary.logic.system.os.GenericOperatingSystem

@global export class SolarisOS extends GenericOperatingSystem {

    jclassName(): string {
        return "org.allbinary.logic.system.os.solaris.SolarisOS";
    }
    

    jinit_SolarisOS_0(): SolarisOS {
        super.jinit_GenericOperatingSystem_0();
        this.scalable = true;
        return this;
    }
    

    isAutoHide(): bool {
        return true;
    }
}

