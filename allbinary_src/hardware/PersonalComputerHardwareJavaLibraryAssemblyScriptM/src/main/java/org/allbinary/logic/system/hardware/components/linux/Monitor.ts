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
// import org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface
// import org.allbinary.logic.system.hardware.components.interfaces.MonitorInterface

@global export class Monitor extends JObject implements HardwareComponentInterface, MonitorInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.linux.Monitor";
    }
    data: string | null = null;

    jfields_Monitor(): void {
    
    }
    

    jinit_Monitor_1(data: string | null): Monitor {
        super.jinit_JObject_0();
        this.jfields_Monitor();
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

