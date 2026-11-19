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
// package org.allbinary.logic.system.hardware.windows
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.hardware.HardwareInterface
// import org.allbinary.logic.system.hardware.components.ComponentFactory
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
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.ABHashtable

@global export class WindowsHardware extends JObject implements HardwareInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.windows.WindowsHardware";
    }
    componentInterfaceVector: BasicArrayList | null = null;
    videoInterfaceVector: BasicArrayList | null = null;
    hardDriveControllerInterfaceVector: BasicArrayList | null = null;
    cpuInterfaceVector: BasicArrayList | null = null;
    usbInterfaceVector: BasicArrayList | null = null;
    ethernetInterfaceVector: BasicArrayList | null = null;
    multimediaInterfaceVector: BasicArrayList | null = null;
    fireWireInterfaceVector: BasicArrayList | null = null;
    bridgeInterfaceVector: BasicArrayList | null = null;
    hardDriveInterfaceVector: BasicArrayList | null = null;
    macInterfaceVector: BasicArrayList | null = null;
    monitorInterfaceVector: BasicArrayList | null = null;
    NAME: string | null = null;
    MINHARDWARE: i32 = 0;
    componentFactory: ComponentFactory | null = null;

    jfields_WindowsHardware(): void {
    this.componentInterfaceVector = null;
    this.videoInterfaceVector = null;
    this.hardDriveControllerInterfaceVector = null;
    this.cpuInterfaceVector = null;
    this.usbInterfaceVector = null;
    this.ethernetInterfaceVector = null;
    this.multimediaInterfaceVector = null;
    this.fireWireInterfaceVector = null;
    this.bridgeInterfaceVector = null;
    this.hardDriveInterfaceVector = null;
    this.macInterfaceVector = null;
    this.monitorInterfaceVector = null;
    this.NAME = "Windows Hardware Profile";
    this.MINHARDWARE = 0;
    this.componentFactory = ComponentFactory.getInstance();
    }
    

    jinit_WindowsHardware_0(): WindowsHardware {
        super.jinit_JObject_0();
        this.jfields_WindowsHardware();
        do {
            this.componentInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.videoInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.hardDriveControllerInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.cpuInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.usbInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.ethernetInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.multimediaInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.fireWireInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.bridgeInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.hardDriveInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.macInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            this.monitorInterfaceVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            if (this.componentInterfaceVector!.size() < this.MINHARDWARE) {
                { JThrowable.raise(new JException().jinit_JException_1("Not Enough Data For A Valid License On Windows")); break; }
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return this; }
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getComponentType(component: string | null): string | null {
        if (JString.indexOf1(component, JObject.jtoString(this.componentFactory!.ETHERNET)) >= 0) {
            return JObject.jtoString(this.componentFactory!.ETHERNET);
        } else if (JString.indexOf1(component, JObject.jtoString(this.componentFactory!.BRIDGE)) >= 0) {
            return JObject.jtoString(this.componentFactory!.BRIDGE);
        } else if (JString.indexOf1(component, JObject.jtoString(this.componentFactory!.IDE)) >= 0) {
            return JObject.jtoString(this.componentFactory!.IDE);
        } else if (JString.indexOf1(component, JObject.jtoString(this.componentFactory!.MULTIMEDIA)) >= 0) {
            return JObject.jtoString(this.componentFactory!.MULTIMEDIA);
        } else if (JString.indexOf1(component, JObject.jtoString(this.componentFactory!.SCSI)) >= 0) {
            return JObject.jtoString(this.componentFactory!.SCSI);
        } else if (JString.indexOf1(component, JObject.jtoString(this.componentFactory!.USB)) >= 0) {
            return JObject.jtoString(this.componentFactory!.USB);
        } else if (JString.indexOf1(component, JObject.jtoString(this.componentFactory!.VGA)) >= 0) {
            return JObject.jtoString(this.componentFactory!.VGA);
        } else {
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getMultimedia(index: i32): MediaInterface | null {
        return changetype<MediaInterface | null>(this.multimediaInterfaceVector!.get(index));
    }
    

    getBridge(index: i32): BridgeInterface | null {
        return changetype<BridgeInterface | null>(this.bridgeInterfaceVector!.get(index));
    }
    

    getCpu(index: i32): CpuInterface | null {
        return changetype<CpuInterface | null>(this.cpuInterfaceVector!.get(index));
    }
    

    getEthernet(index: i32): EthernetInterface | null {
        return changetype<EthernetInterface | null>(this.ethernetInterfaceVector!.get(index));
    }
    

    getFireWire(index: i32): FireWireInterface | null {
        return changetype<FireWireInterface | null>(this.fireWireInterfaceVector!.get(index));
    }
    

    getHardDriveController(index: i32): HardDriveControllerInterface | null {
        return changetype<HardDriveControllerInterface | null>(this.hardDriveControllerInterfaceVector!.get(index));
    }
    

    getHardDrive(index: i32): HardDriveInterface | null {
        return changetype<HardDriveInterface | null>(this.hardDriveInterfaceVector!.get(index));
    }
    

    getMachineAccessControlAddress(index: i32): MachineAccessControlAddressInterface | null {
        return changetype<MachineAccessControlAddressInterface | null>(this.macInterfaceVector!.get(index));
    }
    

    getMonitor(index: i32): MonitorInterface | null {
        return changetype<MonitorInterface | null>(this.monitorInterfaceVector!.get(index));
    }
    

    getUsb(index: i32): UsbInterface | null {
        return changetype<UsbInterface | null>(this.usbInterfaceVector!.get(index));
    }
    

    getVideo(index: i32): VideoInterface | null {
        return changetype<VideoInterface | null>(this.videoInterfaceVector!.get(index));
    }
    

    getComponent(index: i32): HardwareComponentInterface | null {
        return changetype<HardwareComponentInterface | null>(this.componentInterfaceVector!.get(index));
    }
    

    toString(): string | null {
        let hardwareBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = this.componentInterfaceVector!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let componentInterface: HardwareComponentInterface | null = changetype<HardwareComponentInterface | null>(this.componentInterfaceVector!.get(index)); if (JThrowable.pending !== null) return null;
            hardwareBuffer!.append(JObject.jtoString(componentInterface)); if (JThrowable.pending !== null) return null;
            hardwareBuffer!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(hardwareBuffer);
    }
    

    compareTo(hardwareInterface: HardwareInterface | null): bool {
        return true;
    }
    

    difference(hardwareInterface: HardwareInterface | null): ABHashtable | null {
        return StdUtil.getInstance()!.NULL_TABLE;
    }
}

