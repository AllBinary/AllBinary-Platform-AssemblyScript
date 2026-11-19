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
// package org.allbinary.logic.system.loader
// import java.lang.reflect.Constructor
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.java.anyType.ConstructorUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.AbKeys
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.LicensingException
// import org.allbinary.string.CommonSeps
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class AbeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.loader.AbeFactory";
    }
    @lazy static jv_instance: AbeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbeFactory | null {
        if (!AbeFactory.js_instance) {
            AbeFactory.js_instance = true;
            AbeFactory.jv_instance = new AbeFactory().jinit_AbeFactory_0();
        }
        return AbeFactory.jv_instance;
    }
    static set instance(value: AbeFactory | null) {
        AbeFactory.js_instance = true;
        AbeFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    useCustomLoader: bool = false;

    jfields_AbeFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.useCustomLoader = false;
    }
    

    static getInstance(): AbeFactory | null {
        return AbeFactory.instance;
    }
    

    jinit_AbeFactory_0(): AbeFactory {
        super.jinit_JObject_0();
        this.jfields_AbeFactory();
        return this;
    }
    

    getInstance2(abeClientInformation: AbeClientInformationInterface | null, className: string | null): Object | null {
        do {
            return this.getClass(abeClientInformation, className)!.newInstance();
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof LicensingException) {
            let e: LicensingException | null = changetype<LicensingException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.put(jstr("Failure for: ") + jstr(className), this, "getInstance(classname)", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            { JThrowable.raise(e); return null; }
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.put(jstr("Failure for: ") + jstr(className), this, "getInstance(classname)", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getInstance4(abeClientInformation: AbeClientInformationInterface | null, className: string | null, classes: StaticArray<JClass | null> | null, params: StaticArray<Object | null> | null): Object | null {
        let constructor_: JConstructor | null = null;
        do {
            let parent: JClassLoader | null = WebappClassLoaderInfo.getLoader(); if (JThrowable.pending !== null) break;
            if (this.useCustomLoader) {
                let loader: JClassLoader | null = new AbeClassLoader().jinit_AbeClassLoader_2(parent, AbKeys.getInstance()!.getKey(abeClientInformation, className)); if (JThrowable.pending !== null) break;
                let myClass: JClass | null = loader!.loadClass(className); if (JThrowable.pending !== null) break;
                constructor_ = myClass!.getConstructor(classes); if (JThrowable.pending !== null) break;
                return constructor_!.newInstance(params);
            } else {
                let myClass: JClass | null = parent!.loadClass(className); if (JThrowable.pending !== null) break;
                constructor_ = myClass!.getConstructor(classes); if (JThrowable.pending !== null) break;
                return constructor_!.newInstance(params);
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof LicensingException) {
            let e: LicensingException | null = changetype<LicensingException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
                stringBuffer!.append("Failure for: "); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(className); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(ConstructorUtil.view(constructor_, CommonSeps.getInstance()!.NEW_LINE)); if (JThrowable.pending !== null) return null;
                this.logUtil!.put(JObject.jtoString(stringBuffer), this, "getInstance(className,params)", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            { JThrowable.raise(e); return null; }
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
                stringBuffer!.append("Failure for: "); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(className); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(ConstructorUtil.view(constructor_, CommonSeps.getInstance()!.NEW_LINE)); if (JThrowable.pending !== null) return null;
                this.logUtil!.put(JObject.jtoString(stringBuffer), this, "getInstance(className,params)", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getClass(abeClientInformation: AbeClientInformationInterface | null, className: string | null): JClass | null {
        do {
            let parent: JClassLoader | null = WebappClassLoaderInfo.getLoader(); if (JThrowable.pending !== null) break;
            if (this.useCustomLoader) {
                let loader: JClassLoader | null = new AbeClassLoader().jinit_AbeClassLoader_2(parent, AbKeys.getInstance()!.getKey(abeClientInformation, className)); if (JThrowable.pending !== null) break;
                let c: JClass | null = loader!.loadClass(className); if (JThrowable.pending !== null) break;
                return c;
            } else {
                let c: JClass | null = parent!.loadClass(className); if (JThrowable.pending !== null) break;
                return c;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof LicensingException) {
            let e: LicensingException | null = changetype<LicensingException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.put(jstr("Failure for: ") + jstr(className), this, "getClass(className)", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            { JThrowable.raise(e); return null; }
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.put(jstr("Failure for: ") + jstr(className), this, "getClass(className)", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

