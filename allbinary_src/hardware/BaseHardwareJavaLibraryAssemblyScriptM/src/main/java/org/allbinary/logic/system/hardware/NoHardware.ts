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
// package org.allbinary.logic.system.hardware
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface
// import org.allbinary.logic.system.hardware.components.interfaces.NoHardwareComponent
// import org.allbinary.util.ABHashtable

@global export class NoHardware extends JObject implements HardwareInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.NoHardware";
    }
    @lazy static jv_instance: HardwareInterface | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HardwareInterface | null {
        if (!NoHardware.js_instance) {
            NoHardware.js_instance = true;
            NoHardware.jv_instance = new NoHardware().jinit_NoHardware_0();
        }
        return NoHardware.jv_instance;
    }
    static set instance(value: HardwareInterface | null) {
        NoHardware.js_instance = true;
        NoHardware.jv_instance = value;
    }

    jinit_NoHardware_0(): NoHardware {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): HardwareInterface | null {
        return NoHardware.instance;
    }
    

    getComponent(index: i32): HardwareComponentInterface | null {
        return NoHardwareComponent.getInstance();
    }
    

    toString(): string | null {
        return "No Hardware";
    }
    

    compareTo(hardwareInterface: HardwareInterface | null): bool {
        return true;
    }
    

    difference(hardwareInterface: HardwareInterface | null): ABHashtable | null {
        return StdUtil.getInstance()!.NULL_TABLE;
    }
}

