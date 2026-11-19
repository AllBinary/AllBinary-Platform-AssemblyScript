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
// package org.allbinary.logic.system.security.licensing
// import javax.microedition.lcdui.CommandListener

@global export class LicenseUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LicenseUtil";
    }
    @lazy static jv_instance: LicenseUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LicenseUtil | null {
        if (!LicenseUtil.js_instance) {
            LicenseUtil.js_instance = true;
            LicenseUtil.jv_instance = new LicenseUtil().jinit_LicenseUtil_0();
        }
        return LicenseUtil.jv_instance;
    }
    static set instance(value: LicenseUtil | null) {
        LicenseUtil.js_instance = true;
        LicenseUtil.jv_instance = value;
    }

    jinit_LicenseUtil_0(): LicenseUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): LicenseUtil | null {
        return LicenseUtil.instance;
    }
    

    init(): void {
    }
    

    isRunning(): bool {
        return false;
    }
    

    setRunning(running: bool): void {
    }
    

    shouldWait(commandListener: CommandListener | null): bool {
        return this.isRunning();
    }
}

