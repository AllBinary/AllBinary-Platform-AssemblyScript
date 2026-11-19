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
// package org.allbinary.time

@global export class LicenseStupidTimerFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.time.LicenseStupidTimerFactory";
    }
    @lazy static jv_instance: StupidTimer | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StupidTimer | null {
        if (!LicenseStupidTimerFactory.js_instance) {
            LicenseStupidTimerFactory.js_instance = true;
            LicenseStupidTimerFactory.jv_instance = new StupidTimer().jinit_StupidTimer_0();
        }
        return LicenseStupidTimerFactory.jv_instance;
    }
    static set instance(value: StupidTimer | null) {
        LicenseStupidTimerFactory.js_instance = true;
        LicenseStupidTimerFactory.jv_instance = value;
    }

    jinit_LicenseStupidTimerFactory_0(): LicenseStupidTimerFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): StupidTimer | null {
        return LicenseStupidTimerFactory.instance;
    }
}

