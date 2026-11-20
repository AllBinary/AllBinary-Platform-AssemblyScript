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
// package org.allbinary.logic.system.hardware.components.linux
// import org.allbinary.logic.system.hardware.components.interfaces.BridgeInterface
// import org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface

@global export class Bridge extends JObject implements HardwareComponentInterface, BridgeInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.linux.Bridge";
    }
    data: string | null = null;

    jfields_Bridge(): void {
    
    }
    

    jinit_Bridge_1(data: string | null): Bridge {
        super.jinit_JObject_0();
        this.jfields_Bridge();
        this.data = data;
        return this;
    }
    

    compareTo_1_HardwareComponentInterface(componentInterface: HardwareComponentInterface | null): bool {
        return true;
    }
    

    toString(): string | null {
        return this.data;
    }
}

