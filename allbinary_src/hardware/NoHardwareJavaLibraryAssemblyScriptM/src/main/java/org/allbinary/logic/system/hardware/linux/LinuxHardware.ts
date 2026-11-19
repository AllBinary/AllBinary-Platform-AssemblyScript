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
// package org.allbinary.logic.system.hardware.linux
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.hardware.HardwareInterface
// import org.allbinary.logic.system.hardware.components.interfaces.BridgeInterface
// import org.allbinary.logic.system.hardware.components.interfaces.CpuInterface
// import org.allbinary.logic.system.hardware.components.interfaces.EthernetInterface
// import org.allbinary.logic.system.hardware.components.interfaces.FireWireInterface
// import org.allbinary.logic.system.hardware.components.interfaces.HardDriveControllerInterface
// import org.allbinary.logic.system.hardware.components.interfaces.HardDriveInterface
// import org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface
// import org.allbinary.logic.system.hardware.components.interfaces.MachineAccessControlAddressInterface
// import org.allbinary.logic.system.hardware.components.interfaces.MediaInterface
// import org.allbinary.logic.system.hardware.components.interfaces.MonitorInterface
// import org.allbinary.logic.system.hardware.components.interfaces.UsbInterface
// import org.allbinary.logic.system.hardware.components.interfaces.VideoInterface
// import org.allbinary.util.ABHashtable

@global export class LinuxHardware extends JObject implements HardwareInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.linux.LinuxHardware";
    }
    

    jinit_LinuxHardware_0(): LinuxHardware {
        super.jinit_JObject_0();
        return this;
    }
    

    getMultimedia(index: i32): MediaInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getBridge(index: i32): BridgeInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getCpu(index: i32): CpuInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getEthernet(index: i32): EthernetInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getFireWire(index: i32): FireWireInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getHardDriveController(index: i32): HardDriveControllerInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getHardDrive(index: i32): HardDriveInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getMachineAccessControlAddress(index: i32): MachineAccessControlAddressInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getMonitor(index: i32): MonitorInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getUsb(index: i32): UsbInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getVideo(index: i32): VideoInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getComponent(index: i32): HardwareComponentInterface | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    toString(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    compareTo(hardwareInterface: HardwareInterface | null): bool {
        return true;
    }
    

    difference(hardwareInterface: HardwareInterface | null): ABHashtable | null {
        return StdUtil.getInstance()!.NULL_TABLE;
    }
    

    isNextHardware(nextLine: string | null): bool {
        return false;
    }
}

