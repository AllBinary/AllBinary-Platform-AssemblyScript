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
// package org.allbinary.logic.system.os
// import org.allbinary.logic.communication.log.Log
// import org.allbinary.logic.communication.log.LogFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.os.linux.LinuxOperatingSystemFactory
// import org.allbinary.logic.system.os.solaris.SolarisOperatingSystemFactory
// import org.allbinary.logic.system.os.windows.WindowsOperatingSystemFactory
// import org.allbinary.string.CommonStrings

@global export class OperatingSystemFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.os.OperatingSystemFactory";
    }
    @lazy static jv_instance: OperatingSystemFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OperatingSystemFactory | null {
        if (!OperatingSystemFactory.js_instance) {
            OperatingSystemFactory.js_instance = true;
            OperatingSystemFactory.jv_instance = new OperatingSystemFactory().jinit_OperatingSystemFactory_0();
        }
        return OperatingSystemFactory.jv_instance;
    }
    static set instance(value: OperatingSystemFactory | null) {
        OperatingSystemFactory.js_instance = true;
        OperatingSystemFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    genericOperatingSystem: GenericOperatingSystem | null = null;
    hasDetected: bool = false;

    jfields_OperatingSystemFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.genericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
    this.hasDetected = false;
    }
    

    static getInstance(): OperatingSystemFactory | null {
        return OperatingSystemFactory.instance;
    }
    

    jinit_OperatingSystemFactory_0(): OperatingSystemFactory {
        super.jinit_JObject_0();
        this.jfields_OperatingSystemFactory();
        return this;
    }
    

    getOperatingSystemInstance(): GenericOperatingSystem | null {
        do {
            let operatingSystems: OperatingSystems | null = OperatingSystems.getInstance(); if (JThrowable.pending !== null) break;
            let systemProperties: SystemProperties | null = SystemProperties.getInstance(); if (JThrowable.pending !== null) break;
            let osName: string | null = systemProperties!.getName(); if (JThrowable.pending !== null) break;
            let osArch: string | null = systemProperties!.getArch(); if (JThrowable.pending !== null) break;
            let osVersion: string | null = systemProperties!.getVersion(); if (JThrowable.pending !== null) break;
            if (!this.hasDetected) {
                this.logUtil!.putF(jstr("osName: ") + jstr(osName), this, this.commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) break;
                this.hasDetected = true;
                if (JString.indexOf1(osName, operatingSystems!.LINUX) >= 0) {
                    if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
                        this.logUtil!.putF("Found a Linux OS", this, this.commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.genericOperatingSystem = LinuxOperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) break;
                } else if (JString.indexOf1(osName, operatingSystems!.WINDOWS) >= 0) {
                    if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
                        this.logUtil!.putF("Found a Windows OS", this, this.commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.genericOperatingSystem = WindowsOperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) break;
                } else if (JString.indexOf1(osName, operatingSystems!.SOLARIS) >= 0) {
                    if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
                        this.logUtil!.putF("Found a Solaris OS", this, this.commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.genericOperatingSystem = SolarisOperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) break;
                } else {
                    { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("OS Not Supported: ")!.append(osName)))); break; }
                } if (JThrowable.pending !== null) break;
                let log: Log | null = LogFactory.getInstanceF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("OperatingSystem Info: ")!.append(StringUtil.getInstance()!.toString1(this.genericOperatingSystem))), this, this.commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) break;
                JSystem.println(jstr(JObject.jtoString(log))); if (JThrowable.pending !== null) break;
                this.logUtil!.putL(log); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return this.genericOperatingSystem;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return NoOperatingSystem.NO_OPERATING_SYSTEM;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

