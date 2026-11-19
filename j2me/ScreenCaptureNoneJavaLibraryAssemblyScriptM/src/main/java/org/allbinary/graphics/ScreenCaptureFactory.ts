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

@global export class ScreenCaptureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.ScreenCaptureFactory";
    }
    @lazy static jv_instance: ScreenCapture | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScreenCapture | null {
        if (!ScreenCaptureFactory.js_instance) {
            ScreenCaptureFactory.js_instance = true;
            ScreenCaptureFactory.jv_instance = ScreenCaptureNoneFactory.getInstance();
        }
        return ScreenCaptureFactory.jv_instance;
    }
    static set instance(value: ScreenCapture | null) {
        ScreenCaptureFactory.js_instance = true;
        ScreenCaptureFactory.jv_instance = value;
    }

    jinit_ScreenCaptureFactory_0(): ScreenCaptureFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ScreenCapture | null {
        return ScreenCaptureFactory.instance;
    }
}

