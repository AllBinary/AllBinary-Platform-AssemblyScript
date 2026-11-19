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
// import java.io.FileInputStream
// import java.io.IOException
// import java.util.Map
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogBuffer
// import org.allbinary.logic.communication.log.LogFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.AbCryptUtil
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class AbeClassLoader extends JClassLoader {

    jclassName(): string {
        return "org.allbinary.logic.system.loader.AbeClassLoader";
    }
    @lazy static jv_classes: JMap | null = null;
    @lazy static js_classes: bool = false;
    static get classes(): JMap | null {
        if (!AbeClassLoader.js_classes) {
            AbeClassLoader.js_classes = true;
            AbeClassLoader.jv_classes = StdUtil.getInstance()!.createHashMap();
        }
        return AbeClassLoader.jv_classes;
    }
    static set classes(value: JMap | null) {
        AbeClassLoader.js_classes = true;
        AbeClassLoader.jv_classes = value;
    }
    @lazy static PATH: string | null = null;
    logUtil: LogUtil | null = null;
    abCryptUtil: AbCryptUtil | null = null;
    LOAD_CLASS: string | null = null;
    ENCRYPTED_EXTENSION: string | null = null;
    key: string | null = null;

    jfields_AbeClassLoader(): void {
    this.logUtil = LogUtil.getInstance();
    this.abCryptUtil = AbCryptUtil.getInstance();
    this.LOAD_CLASS = "loadClass";
    this.ENCRYPTED_EXTENSION = jstr(AbPathData.getInstance()!.EXTENSION_SEP) + jstr("abc");
    
    }
    

    jinit_AbeClassLoader_2(parent: JClassLoader | null, key: string | null): AbeClassLoader {
        super.jinit_JClassLoader_1(parent);
        this.jfields_AbeClassLoader();
        this.key = key;
        AbeClassLoader.PATH = jstr(URLGLOBALS.getWebappPath()) + jstr("WEB-INF/classes/"); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    findLoadedClass1(name: string | null): JClass | null {
        return changetype<JClass | null>(AbeClassLoader.classes!.get(name));
    }
    

    loadClass_1(name: string | null): JClass | null {
        return this.loadClass_2(name, false);
    }
    

    loadClass_2(name: string | null, resolve: bool): JClass | null {
        let loadedWith: string | null = "findLoadedClass1";
        let logBuffer: LogBuffer | null = new LogBuffer().jinit_LogBuffer_0(); if (JThrowable.pending !== null) return null;
        do {
            let myClass: JClass | null = this.findLoadedClass1(name); if (JThrowable.pending !== null) break;
            if (myClass == null) {
                do {
                    loadedWith = "super.loadClass";
                    let normalClass: JClass | null = super.loadClass(name, resolve); if (JThrowable.pending !== null) break;
                    if (normalClass != null) {
                        return normalClass;
                    }
                } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JClassNotFoundException) {
                    let e: JClassNotFoundException | null = changetype<JClassNotFoundException | null>(JThrowable.take());
                    logBuffer!.add(LogFactory.getInstance4(jstr(jstr(jstr("Failed to Load Class: ") + jstr(name)) + jstr("\nwith: ")) + jstr(loadedWith), this, this.LOAD_CLASS, e)); if (JThrowable.pending !== null) break;
                } else if (JThrowable.pending != null) {
                    let e: JException | null = changetype<JException | null>(JThrowable.take());
                    logBuffer!.add(LogFactory.getInstance4(jstr(jstr(jstr("Failed to Load Class: ") + jstr(name)) + jstr("\nwith: ")) + jstr(loadedWith), this, this.LOAD_CLASS, e)); if (JThrowable.pending !== null) break;
                } else if (JThrowable.pending != null && JThrowable.pending instanceof JNoClassDefFoundError) {
                    let e: JNoClassDefFoundError | null = changetype<JNoClassDefFoundError | null>(JThrowable.take());
                    logBuffer!.add(LogFactory.getInstanceF(jstr(jstr(jstr("NoClassDefFoundError Failed Loaded Class: ") + jstr(name)) + jstr("\nwith: ")) + jstr(loadedWith), this, this.LOAD_CLASS)); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                let classBytes: StaticArray<i8> | null = this.loadClassBytesFromFile(name); if (JThrowable.pending !== null) break;
                if (classBytes == null) {
                    { JThrowable.raise(new JClassNotFoundException().jinit_JClassNotFoundException_1(jstr(jstr(jstr("My Bytes not loaded for: ") + jstr(name)) + jstr("\nwith: ")) + jstr("loadClassBytes"))); break; }
                } if (JThrowable.pending !== null) break;
                myClass = this.defineClass(name, classBytes, 0, classBytes!.length); if (JThrowable.pending !== null) break;
                if (myClass == null) {
                    { JThrowable.raise(new JClassNotFoundException().jinit_JClassNotFoundException_1(jstr(jstr(jstr("My Class Not Defineable for: ") + jstr(name)) + jstr("\nwith: ")) + jstr("loadClassBytes"))); break; }
                } if (JThrowable.pending !== null) break;
                AbeClassLoader.classes!.put(name, myClass); if (JThrowable.pending !== null) break;
            } else {
                logBuffer!.add(LogFactory.getInstanceF(jstr(jstr(jstr("Already Loaded: ") + jstr(name)) + jstr("\nwith: ")) + jstr(loadedWith), this, this.LOAD_CLASS)); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.resolveClass(myClass); if (JThrowable.pending !== null) break;
            return myClass;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                logBuffer!.logAll(); if (JThrowable.pending !== null) return null;
                this.logUtil!.put(jstr(jstr(jstr("Failure loading: ") + jstr(name)) + jstr("\nwith: ")) + jstr(loadedWith), this, this.LOAD_CLASS, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    loadClassBytesFromFile(name: string | null): StaticArray<i8> | null {
        let in_: JFileInputStream | null = null;
        let cname: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return null;
        do {
            cname = jstr(jstr(AbeClassLoader.PATH) + jstr(JString.replace2(name, (<u16>0x2E), AbPathData.getInstance()!.SEPARATORCHAR))) + jstr(this.ENCRYPTED_EXTENSION); if (JThrowable.pending !== null) break;
            in_ = new JFileInputStream().jinit_JFileInputStream_1(cname); if (JThrowable.pending !== null) break;
            let decrypted: StaticArray<i8> | null = this.abCryptUtil!.decrypt(in_, this.key); if (JThrowable.pending !== null) break;
            return decrypted;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let e: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.put(jstr(jstr(jstr("(Before LogBuffer Output) Failure loading Encrypted: ") + jstr(name)) + jstr(" File: ")) + jstr(cname), "AbeClassLoader", "loadClassBytes", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            StreamUtil.getInstance()!.close(in_); if (JThrowable.pending !== null) return null;
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let loadedWith: string | null = "loadClassBytes";
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.put(jstr(jstr(jstr(jstr(jstr("(Before LogBuffer Output) Failed to Loaded Class: ") + jstr(name)) + jstr(" File: ")) + jstr(cname)) + jstr("\nwith: ")) + jstr(loadedWith), this, "loadClassBytes", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } else if (JThrowable.pending != null && JThrowable.pending instanceof JNoClassDefFoundError) {
            let e: JNoClassDefFoundError | null = changetype<JNoClassDefFoundError | null>(JThrowable.take());
            let loadedWith: string | null = "loadClassBytes";
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.putF(jstr(jstr(jstr(jstr(jstr("(Before LogBuffer Output) NoClassDefFoundError Failed Loaded Class: ") + jstr(name)) + jstr(" File: ")) + jstr(cname)) + jstr("\nwith: ")) + jstr(loadedWith), this, "loadClassBytes"); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    oldLoadClass(name: string | null, resolve: bool): JClass | null {
        let loadedWith: string | null = "findLoadedClass1";
        do {
            let myClass: JClass | null = this.findLoadedClass1(name); if (JThrowable.pending !== null) break;
            if (myClass == null) {
                do {
                    loadedWith = "super.loadClass";
                    let normalClass: JClass | null = super.loadClass(name, resolve); if (JThrowable.pending !== null) break;
                    if (normalClass != null) {
                        return normalClass;
                    }
                } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JClassNotFoundException) {
                    let e: JClassNotFoundException | null = changetype<JClassNotFoundException | null>(JThrowable.take());
                    if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADER)) {
                        this.logUtil!.putF(jstr(jstr(jstr("Failed Loaded Class: ") + jstr(name)) + jstr(" with: ")) + jstr(loadedWith), this, this.LOAD_CLASS); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } else if (JThrowable.pending != null) {
                    let e: JException | null = changetype<JException | null>(JThrowable.take());
                    if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADER)) {
                        this.logUtil!.putF(jstr(jstr(jstr("Failed Loaded Class: ") + jstr(name)) + jstr(" with: ")) + jstr(loadedWith), this, this.LOAD_CLASS); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } else if (JThrowable.pending != null && JThrowable.pending instanceof JNoClassDefFoundError) {
                    let e: JNoClassDefFoundError | null = changetype<JNoClassDefFoundError | null>(JThrowable.take());
                    if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADER)) {
                        this.logUtil!.putF(jstr(jstr(jstr("Failed Loaded Class: ") + jstr(name)) + jstr(" with: ")) + jstr(loadedWith), this, this.LOAD_CLASS); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                loadedWith = "loadClassBytes";
                let classBytes: StaticArray<i8> | null = this.loadClassBytesFromFile(name); if (JThrowable.pending !== null) break;
                if (classBytes == null) {
                    { JThrowable.raise(new JClassNotFoundException().jinit_JClassNotFoundException_1(jstr("Bytes not loaded for: ") + jstr(name))); break; }
                } if (JThrowable.pending !== null) break;
                myClass = this.defineClass(name, classBytes, 0, classBytes!.length); if (JThrowable.pending !== null) break;
                if (myClass == null) {
                    { JThrowable.raise(new JClassNotFoundException().jinit_JClassNotFoundException_1(jstr("Class Not Defineable for: ") + jstr(name))); break; }
                } if (JThrowable.pending !== null) break;
                AbeClassLoader.classes!.put(name, myClass); if (JThrowable.pending !== null) break;
            } else {
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADER)) {
                    this.logUtil!.putF(jstr(jstr(jstr("Already Loaded: ") + jstr(name)) + jstr(" with: ")) + jstr(loadedWith), this, this.LOAD_CLASS); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.resolveClass(myClass); if (JThrowable.pending !== null) break;
            return myClass;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.LOADERERROR)) {
                this.logUtil!.put(jstr("Failure loading: ") + jstr(name), "AbeClassLoader", this.LOAD_CLASS, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

