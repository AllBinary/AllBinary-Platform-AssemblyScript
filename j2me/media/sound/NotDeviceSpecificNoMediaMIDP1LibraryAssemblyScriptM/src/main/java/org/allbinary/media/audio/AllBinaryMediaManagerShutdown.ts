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
// package org.allbinary.media.audio
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class AllBinaryMediaManagerShutdown extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.AllBinaryMediaManagerShutdown";
    }
    @lazy static jv_instance: AllBinaryMediaManagerShutdown | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AllBinaryMediaManagerShutdown | null {
        if (!AllBinaryMediaManagerShutdown.js_instance) {
            AllBinaryMediaManagerShutdown.js_instance = true;
            AllBinaryMediaManagerShutdown.jv_instance = new AllBinaryMediaManagerShutdown().jinit_AllBinaryMediaManagerShutdown_0();
        }
        return AllBinaryMediaManagerShutdown.jv_instance;
    }
    static set instance(value: AllBinaryMediaManagerShutdown | null) {
        AllBinaryMediaManagerShutdown.js_instance = true;
        AllBinaryMediaManagerShutdown.jv_instance = value;
    }

    jinit_AllBinaryMediaManagerShutdown_0(): AllBinaryMediaManagerShutdown {
        super.jinit_JObject_0();
        return this;
    }
    

    static shutdown(soundsFactoryInterface: SoundsFactoryInterface | null): void {
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        logUtil!.putF(commonStrings!.START, AllBinaryMediaManagerShutdown.instance, "shutdown"); if (JThrowable.pending !== null) return;
        AllBinaryMediaManager.shutdown(soundsFactoryInterface); if (JThrowable.pending !== null) return;
    }
}

