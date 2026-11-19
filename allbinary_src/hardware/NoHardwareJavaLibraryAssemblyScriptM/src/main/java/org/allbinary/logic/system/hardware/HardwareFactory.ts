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
// import org.allbinary.logic.system.os.OperatingSystemInterface

@global export class HardwareFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.HardwareFactory";
    }
    @lazy static jv_instance: HardwareFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HardwareFactory | null {
        if (!HardwareFactory.js_instance) {
            HardwareFactory.js_instance = true;
            HardwareFactory.jv_instance = new HardwareFactory().jinit_HardwareFactory_0();
        }
        return HardwareFactory.jv_instance;
    }
    static set instance(value: HardwareFactory | null) {
        HardwareFactory.js_instance = true;
        HardwareFactory.jv_instance = value;
    }
    SINGLETON: HardwareInterface | null = null;

    jfields_HardwareFactory(): void {
    this.SINGLETON = NoHardware.getInstance();
    }
    

    static getInstance(): HardwareFactory | null {
        return HardwareFactory.instance;
    }
    

    jinit_HardwareFactory_0(): HardwareFactory {
        super.jinit_JObject_0();
        this.jfields_HardwareFactory();
        return this;
    }
    

    getInstance1(os: OperatingSystemInterface | null): HardwareInterface | null {
        do {
            return this.SINGLETON;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

