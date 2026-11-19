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
// package org.allbinary.graphics

@global export class ScreenCaptureNoneFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.ScreenCaptureNoneFactory";
    }
    @lazy static jv_instance: ScreenCapture | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScreenCapture | null {
        if (!ScreenCaptureNoneFactory.js_instance) {
            ScreenCaptureNoneFactory.js_instance = true;
            ScreenCaptureNoneFactory.jv_instance = new ScreenCapture().jinit_ScreenCapture_0();
        }
        return ScreenCaptureNoneFactory.jv_instance;
    }
    static set instance(value: ScreenCapture | null) {
        ScreenCaptureNoneFactory.js_instance = true;
        ScreenCaptureNoneFactory.jv_instance = value;
    }

    jinit_ScreenCaptureNoneFactory_0(): ScreenCaptureNoneFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ScreenCapture | null {
        return ScreenCaptureNoneFactory.instance;
    }
}

