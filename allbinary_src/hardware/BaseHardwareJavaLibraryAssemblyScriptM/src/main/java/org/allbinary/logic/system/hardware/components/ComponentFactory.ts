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
// package org.allbinary.logic.system.hardware.components
// import org.allbinary.string.CommonStrings

@global export class ComponentFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.ComponentFactory";
    }
    @lazy static jv_instance: ComponentFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ComponentFactory | null {
        if (!ComponentFactory.js_instance) {
            ComponentFactory.js_instance = true;
            ComponentFactory.jv_instance = new ComponentFactory().jinit_ComponentFactory_0();
        }
        return ComponentFactory.jv_instance;
    }
    static set instance(value: ComponentFactory | null) {
        ComponentFactory.js_instance = true;
        ComponentFactory.jv_instance = value;
    }
    VGA: Component | null = null;
    IDE: Component | null = null;
    SCSI: Component | null = null;
    BRIDGE: Component | null = null;
    ETHERNET: Component | null = null;
    USB: Component | null = null;
    MULTIMEDIA: Component | null = null;
    PCI: Component | null = null;
    RAID: Component | null = null;
    SMBUS: Component | null = null;
    PIC: Component | null = null;
    Class: Component | null = null;
    UNKNOWN: Component | null = null;

    jfields_ComponentFactory(): void {
    this.VGA = new Component().jinit_Component_1("VGA");
    this.IDE = new Component().jinit_Component_1("IDE");
    this.SCSI = new Component().jinit_Component_1("SCSI");
    this.BRIDGE = new Component().jinit_Component_1("bridge");
    this.ETHERNET = new Component().jinit_Component_1("Ethernet");
    this.USB = new Component().jinit_Component_1("USB");
    this.MULTIMEDIA = new Component().jinit_Component_1("Multimedia");
    this.PCI = new Component().jinit_Component_1("PCI");
    this.RAID = new Component().jinit_Component_1("RAID");
    this.SMBUS = new Component().jinit_Component_1("SMBus");
    this.PIC = new Component().jinit_Component_1("PIC");
    this.Class = new Component().jinit_Component_1("Class");
    this.UNKNOWN = new Component().jinit_Component_1(CommonStrings.getInstance()!.UNKNOWN);
    }

    jinit_ComponentFactory_0(): ComponentFactory {
        super.jinit_JObject_0();
        this.jfields_ComponentFactory();
        return this;
    }
    

    static getInstance(): ComponentFactory | null {
        return ComponentFactory.instance;
    }
}

