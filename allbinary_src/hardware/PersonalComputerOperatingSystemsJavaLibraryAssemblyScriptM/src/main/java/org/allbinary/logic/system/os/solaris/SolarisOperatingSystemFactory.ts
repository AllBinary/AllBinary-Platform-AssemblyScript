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
// package org.allbinary.logic.system.os.solaris
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.logic.system.os.NoOperatingSystem
// import org.allbinary.logic.system.os.OperatingSystems
// import org.allbinary.logic.system.os.SystemProperties
// import org.allbinary.string.CommonStrings

@global export class SolarisOperatingSystemFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.os.solaris.SolarisOperatingSystemFactory";
    }
    @lazy static jv_instance: SolarisOperatingSystemFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SolarisOperatingSystemFactory | null {
        if (!SolarisOperatingSystemFactory.js_instance) {
            SolarisOperatingSystemFactory.js_instance = true;
            SolarisOperatingSystemFactory.jv_instance = new SolarisOperatingSystemFactory().jinit_SolarisOperatingSystemFactory_0();
        }
        return SolarisOperatingSystemFactory.jv_instance;
    }
    static set instance(value: SolarisOperatingSystemFactory | null) {
        SolarisOperatingSystemFactory.js_instance = true;
        SolarisOperatingSystemFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_SolarisOperatingSystemFactory(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    static getInstance(): SolarisOperatingSystemFactory | null {
        return SolarisOperatingSystemFactory.instance;
    }
    

    jinit_SolarisOperatingSystemFactory_0(): SolarisOperatingSystemFactory {
        super.jinit_JObject_0();
        this.jfields_SolarisOperatingSystemFactory();
        return this;
    }
    

    getOperatingSystemInstance(): GenericOperatingSystem | null {
        do {
            let operatingSystems: OperatingSystems | null = OperatingSystems.getInstance(); if (JThrowable.pending !== null) break;
            let osName: string | null = SystemProperties.getInstance()!.getName(); if (JThrowable.pending !== null) break;
            let operatingSystemInterface: GenericOperatingSystem | null = null;
            if (JString.compareTo1(osName, operatingSystems!.SOLARIS) == 0) {
                operatingSystemInterface = new SolarisOS().jinit_SolarisOS_0(); if (JThrowable.pending !== null) break;
            } else {
                if (operatingSystems!.isUnknownSpecificOSAllowed()) {
                    operatingSystemInterface = new SolarisOS().jinit_SolarisOS_0(); if (JThrowable.pending !== null) break;
                } else {
                    { JThrowable.raise(new JException().jinit_JException_1(jstr("Specific Solaris OS Not Supported: ") + jstr(osName))); break; }
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return operatingSystemInterface;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR)) {
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
                this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return NoOperatingSystem.NO_OPERATING_SYSTEM;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

