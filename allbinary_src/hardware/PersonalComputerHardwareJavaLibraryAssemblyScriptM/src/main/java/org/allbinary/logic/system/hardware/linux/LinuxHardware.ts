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
// import java.io.FileReader
// import java.io.LineNumberReader
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.file.FilePathData
// import org.allbinary.logic.io.file.directory.SubDirectory
// import org.allbinary.logic.string.StringMaker
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
// import org.allbinary.logic.system.hardware.components.linux.Cpu
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList

@global export class LinuxHardware extends JObject implements HardwareInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.linux.LinuxHardware";
    }
    @lazy static readonly PCIFILE: string | null = "/proc/pci";
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
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

    jfields_LinuxHardware(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
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
    this.NAME = "Linux Hardware Profile";
    this.MINHARDWARE = 5;
    }
    

    jinit_LinuxHardware_1(path: string | null): LinuxHardware {
        super.jinit_JObject_0();
        this.jfields_LinuxHardware();
        this.init_1(path); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    jinit_LinuxHardware_0(): LinuxHardware {
        super.jinit_JObject_0();
        this.jfields_LinuxHardware();
        this.init_1(LinuxHardware.PCIFILE); if (JThrowable.pending !== null) return this;
        if (this.componentInterfaceVector!.size() < this.MINHARDWARE) {
            { JThrowable.raise(new JException().jinit_JException_1("Not Enough Data For A Valid License On Linux")); return this; }
        } if (JThrowable.pending !== null) return this;
        let cpu: Cpu | null = new Cpu().jinit_Cpu_0(); if (JThrowable.pending !== null) return this;
        if (cpu != null) {
            this.cpuInterfaceVector!.add(cpu); if (JThrowable.pending !== null) return this;
            this.componentInterfaceVector!.add(cpu); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.OS)) {
            this.logUtil!.putF(jstr("Hardware Data: ") + jstr(this.toString()), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init_1(filePath: string | null): void {
        let lineNumberReader: LineNumberReader | null = null;
        do {
            this.init_2(lineNumberReader, filePath); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.OS)) {
                this.logUtil!.put(jstr("Hardware Data: ") + jstr(this.toString()), this, this.commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    init_2(lineNumberReader: LineNumberReader | null, filePath: string | null): void {
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
            let pciFile: JFileReader | null = new JFileReader().jinit_JFileReader_1(filePath); if (JThrowable.pending !== null) break;
            lineNumberReader = new LineNumberReader().jinit_LineNumberReader_1(pciFile); if (JThrowable.pending !== null) break;
            if (lineNumberReader == null) {
                let fileVector: BasicArrayList | null = SubDirectory.getInstance()!.search_2_StringAbFile(filePath, AbFile.createAbFile(FilePathData.getInstance()!.PATH_START)); if (JThrowable.pending !== null) break;
                if (!fileVector!.isEmpty()) {
                    let file: AbFile | null = changetype<AbFile | null>(fileVector!.get(0)); if (JThrowable.pending !== null) break;
                    lineNumberReader = new LineNumberReader().jinit_LineNumberReader_1(new JFileReader().jinit_JFileReader_1(file!.getPath())); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                if (lineNumberReader == null) {
                    { JThrowable.raise(new JException().jinit_JException_1("No Linux File Data")); break; }
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (lineNumberReader != null) {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.OS)) {
                    this.logUtil!.putF("PCI File Found", this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                let nextLine: string | null = lineNumberReader!.readLine(); if (JThrowable.pending !== null) break;
                while (nextLine != null) {
                    if (this.isNextHardware(nextLine)) {
                        break;
                    } if (JThrowable.pending !== null) break;
                    nextLine = lineNumberReader!.readLine(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                while (this.isNextHardware(nextLine)) {
                    let componentData: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
                    if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.OS)) {
                        this.logUtil!.putF(jstr("Found Hardware Device: ") + jstr(this.componentInterfaceVector!.size()), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    componentData!.append(nextLine); if (JThrowable.pending !== null) break;
                    componentData!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) break;
                    nextLine = lineNumberReader!.readLine(); if (JThrowable.pending !== null) break;
                    let componentType: string | null = PCComponentFactory.getInstance()!.getComponentType(nextLine); if (JThrowable.pending !== null) break;
                    while (true) {
                        componentData!.append(nextLine); if (JThrowable.pending !== null) break;
                        componentData!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) break;
                        nextLine = lineNumberReader!.readLine(); if (JThrowable.pending !== null) break;
                        if (nextLine == null || this.isNextHardware(nextLine)) {
                            break;
                        } if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    let componentInterface: HardwareComponentInterface | null = PCComponentFactory.getInstance()!.getInstance2(componentType, JObject.jtoString(componentData)); if (JThrowable.pending !== null) break;
                    if (componentInterface != null) {
                        this.componentInterfaceVector!.add(componentInterface); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } else {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.OS)) {
                    this.logUtil!.putF("Could not load PCI File", this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            lineNumberReader!.close(); if (JThrowable.pending !== null) break;
        } while (false);
        {
            if (lineNumberReader != null) {
                lineNumberReader!.close(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
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
            hardwareBuffer!.append("Component "); if (JThrowable.pending !== null) return null;
            hardwareBuffer!.appendint(index); if (JThrowable.pending !== null) return null;
            hardwareBuffer!.append(": \n"); if (JThrowable.pending !== null) return null;
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
    

    isNextHardware(nextLine: string | null): bool {
        if (nextLine != null) {
            let index: i32 = JString.indexOf1(nextLine, "Bus"); if (JThrowable.pending !== null) return false;
            if (index >= 0 && index < 4) {
                return true;
            }
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

