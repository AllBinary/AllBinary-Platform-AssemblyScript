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
// import org.allbinary.logic.system.hardware.components.interfaces.UsbInterface

@global export class Usb extends JObject implements HardwareComponentInterface, UsbInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.linux.Usb";
    }
    data: string | null = null;

    jfields_Usb(): void {
    
    }
    

    jinit_Usb_1(data: string | null): Usb {
        super.jinit_JObject_0();
        this.jfields_Usb();
        this.data = data;
        return this;
    }
    

    compareTo(componentInterface: HardwareComponentInterface | null): bool {
        return true;
    }
    

    toString(): string | null {
        return this.data;
    }
}

