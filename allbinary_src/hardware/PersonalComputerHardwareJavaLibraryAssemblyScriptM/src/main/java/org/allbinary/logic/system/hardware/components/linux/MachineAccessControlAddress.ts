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
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface
// import org.allbinary.logic.system.hardware.components.interfaces.MachineAccessControlAddressInterface

@global export class MachineAccessControlAddress extends JObject implements HardwareComponentInterface, MachineAccessControlAddressInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.linux.MachineAccessControlAddress";
    }
    

    jinit_MachineAccessControlAddress_0(): MachineAccessControlAddress {
        super.jinit_JObject_0();
        return this;
    }
    

    compareTo_1_HardwareComponentInterface(componentInterface: HardwareComponentInterface | null): bool {
        return true;
    }
    

    toString(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
}

