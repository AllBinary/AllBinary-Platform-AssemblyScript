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
// package org.allbinary.graphics.displayable.screen
// import javax.microedition.lcdui.Displayable
// import org.allbinary.J2MEUtil
// import org.allbinary.canvas.Processor

@global export class ScreenRepaintProcessorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.ScreenRepaintProcessorFactory";
    }
    @lazy static jv_instance: ScreenRepaintProcessorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScreenRepaintProcessorFactory | null {
        if (!ScreenRepaintProcessorFactory.js_instance) {
            ScreenRepaintProcessorFactory.js_instance = true;
            ScreenRepaintProcessorFactory.jv_instance = new ScreenRepaintProcessorFactory().jinit_ScreenRepaintProcessorFactory_0();
        }
        return ScreenRepaintProcessorFactory.jv_instance;
    }
    static set instance(value: ScreenRepaintProcessorFactory | null) {
        ScreenRepaintProcessorFactory.js_instance = true;
        ScreenRepaintProcessorFactory.jv_instance = value;
    }
    

    static getInstance(): ScreenRepaintProcessorFactory | null {
        return ScreenRepaintProcessorFactory.instance;
    }
    

    jinit_ScreenRepaintProcessorFactory_0(): ScreenRepaintProcessorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    create(displayable: Displayable | null): Processor | null {
        if (!J2MEUtil.isJ2ME()) {
            return new ScreenRepaintProcessor().jinit_ScreenRepaintProcessor_1(displayable);
        } else {
            return Processor.getInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

