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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
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
    genericOperatingSystem: GenericOperatingSystem | null = null;

    jfields_OperatingSystemFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.genericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
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
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        do {
            let osString: string | null = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("OperatingSystem Info: ")!.append(JObject.jtoString(this.genericOperatingSystem))); if (JThrowable.pending !== null) break;
            JSystem.println(jstr(osString)); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(osString, this, commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.genericOperatingSystem;
    }
}

