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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.system.hardware.components.ComponentFactory
// import org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface
// import org.allbinary.logic.system.hardware.components.linux.Bridge
// import org.allbinary.logic.system.hardware.components.linux.Ethernet
// import org.allbinary.logic.system.hardware.components.linux.HardDriveController
// import org.allbinary.logic.system.hardware.components.linux.Media
// import org.allbinary.logic.system.hardware.components.linux.PCI
// import org.allbinary.logic.system.hardware.components.linux.Unknown
// import org.allbinary.logic.system.hardware.components.linux.Usb
// import org.allbinary.logic.system.hardware.components.linux.Video
// import org.allbinary.string.CommonStrings

@global export class PCComponentFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.linux.PCComponentFactory";
    }
    @lazy static jv_instance: PCComponentFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PCComponentFactory | null {
        if (!PCComponentFactory.js_instance) {
            PCComponentFactory.js_instance = true;
            PCComponentFactory.jv_instance = new PCComponentFactory().jinit_PCComponentFactory_0();
        }
        return PCComponentFactory.jv_instance;
    }
    static set instance(value: PCComponentFactory | null) {
        PCComponentFactory.js_instance = true;
        PCComponentFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    componentFactory: ComponentFactory | null = null;

    jfields_PCComponentFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.componentFactory = ComponentFactory.getInstance();
    }
    

    static getInstance(): PCComponentFactory | null {
        return PCComponentFactory.instance;
    }
    

    jinit_PCComponentFactory_0(): PCComponentFactory {
        super.jinit_JObject_0();
        this.jfields_PCComponentFactory();
        return this;
    }
    

    getInstance2(component: string | null, componentData: string | null): HardwareComponentInterface | null {
        do {
            if (component != null) {
                if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.ETHERNET)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new Ethernet().jinit_Ethernet_1(componentData));
                } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.BRIDGE)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new Bridge().jinit_Bridge_1(componentData));
                } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.IDE)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new HardDriveController().jinit_HardDriveController_1(componentData));
                } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.MULTIMEDIA)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new Media().jinit_Media_1(componentData));
                } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.SCSI)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new HardDriveController().jinit_HardDriveController_1(componentData));
                } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.USB)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new Usb().jinit_Usb_1(componentData));
                } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.VGA)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new Video().jinit_Video_1(componentData));
                } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.PCI)) == 0) {
                    return changetype<HardwareComponentInterface | null>(new PCI().jinit_PCI_1(componentData));
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return changetype<HardwareComponentInterface | null>(new Unknown().jinit_Unknown_1(componentData));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
                this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return new Unknown().jinit_Unknown_1(commonStrings!.EXCEPTION);
        } if (JThrowable.pending !== null) return null;
        return null;
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
        } else if (JString.compareTo1(component, JObject.jtoString(this.componentFactory!.PCI)) == 0) {
            return JObject.jtoString(this.componentFactory!.PCI);
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(this.componentFactory!.UNKNOWN);
    }
}

