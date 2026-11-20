/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.logic.system.hardware.components.interfaces
// import org.allbinary.logic.string.StringUtil

@global export class NoHardwareComponent extends JObject implements HardwareComponentInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.components.interfaces.NoHardwareComponent";
    }
    @lazy static jv_instance: NoHardwareComponent | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoHardwareComponent | null {
        if (!NoHardwareComponent.js_instance) {
            NoHardwareComponent.js_instance = true;
            NoHardwareComponent.jv_instance = new NoHardwareComponent().jinit_NoHardwareComponent_0();
        }
        return NoHardwareComponent.jv_instance;
    }
    static set instance(value: NoHardwareComponent | null) {
        NoHardwareComponent.js_instance = true;
        NoHardwareComponent.jv_instance = value;
    }

    jinit_NoHardwareComponent_0(): NoHardwareComponent {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): NoHardwareComponent | null {
        return NoHardwareComponent.instance;
    }
    

    compareTo_1_HardwareComponentInterface(componentInterface: HardwareComponentInterface | null): bool {
        if (this == componentInterface) {
            return true;
        }
        return false;
    }
    

    toString(): string | null {
        return StringUtil.getInstance()!.NULL_STRING;
    }
}

