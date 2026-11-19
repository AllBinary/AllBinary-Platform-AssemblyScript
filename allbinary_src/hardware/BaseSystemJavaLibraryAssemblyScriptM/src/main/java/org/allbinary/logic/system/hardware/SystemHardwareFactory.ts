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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.string.CommonStrings

@global export class SystemHardwareFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.hardware.SystemHardwareFactory";
    }
    @lazy static jv_instance: SystemHardwareFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SystemHardwareFactory | null {
        if (!SystemHardwareFactory.js_instance) {
            SystemHardwareFactory.js_instance = true;
            SystemHardwareFactory.jv_instance = new SystemHardwareFactory().jinit_SystemHardwareFactory_0();
        }
        return SystemHardwareFactory.jv_instance;
    }
    static set instance(value: SystemHardwareFactory | null) {
        SystemHardwareFactory.js_instance = true;
        SystemHardwareFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    hardwareInterface: HardwareInterface | null = null;

    jfields_SystemHardwareFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.hardwareInterface = NoHardware.getInstance();
    }
    

    static getInstance(): SystemHardwareFactory | null {
        return SystemHardwareFactory.instance;
    }
    

    jinit_SystemHardwareFactory_0(): SystemHardwareFactory {
        super.jinit_JObject_0();
        this.jfields_SystemHardwareFactory();
        return this;
    }
    

    getInstance1(operatingSystemInterface: GenericOperatingSystem | null): HardwareInterface | null {
        do {
            if (this.hardwareInterface == NoHardware.getInstance()) {
                this.hardwareInterface = HardwareFactory.getInstance()!.getInstance1(operatingSystemInterface); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.logUtil!.putF("Found Hardware", this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.hardwareInterface;
    }
    

    static static_toString(): string | null {
        let systemHardwareFactory: SystemHardwareFactory | null = SystemHardwareFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let osBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        osBuffer!.append("Hardware Info: \n"); if (JThrowable.pending !== null) return null;
        if (systemHardwareFactory!.hardwareInterface != null) {
            osBuffer!.append(JObject.jtoString(systemHardwareFactory!.hardwareInterface)); if (JThrowable.pending !== null) return null;
        } else {
            osBuffer!.append(StringUtil.getInstance()!.NULL_STRING); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(osBuffer);
    }
}

