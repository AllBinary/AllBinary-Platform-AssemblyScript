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
// package org.allbinary.midlet
// import javax.microedition.midlet.MIDlet
// import org.allbinary.AppletUtil
// import org.allbinary.J2MEUtil
// import org.allbinary.canvas.Processor

@global export class MidletExitProcessorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.midlet.MidletExitProcessorFactory";
    }
    @lazy static jv_instance: MidletExitProcessorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MidletExitProcessorFactory | null {
        if (!MidletExitProcessorFactory.js_instance) {
            MidletExitProcessorFactory.js_instance = true;
            MidletExitProcessorFactory.jv_instance = new MidletExitProcessorFactory().jinit_MidletExitProcessorFactory_0();
        }
        return MidletExitProcessorFactory.jv_instance;
    }
    static set instance(value: MidletExitProcessorFactory | null) {
        MidletExitProcessorFactory.js_instance = true;
        MidletExitProcessorFactory.jv_instance = value;
    }

    jinit_MidletExitProcessorFactory_0(): MidletExitProcessorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): MidletExitProcessorFactory | null {
        return MidletExitProcessorFactory.instance;
    }
    

    getExitInstance(midlet: MIDlet | null): Processor | null {
        if (AppletUtil.isAppletLoader(midlet) || J2MEUtil.isJ2ME()) {
            return Processor.getInstance();
        } else {
            return new MidletExitProcessor().jinit_MidletExitProcessor_1(midlet);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

