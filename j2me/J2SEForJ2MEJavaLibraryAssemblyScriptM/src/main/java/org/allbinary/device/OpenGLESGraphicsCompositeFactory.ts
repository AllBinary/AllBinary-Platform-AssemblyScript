/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.device

@global export class OpenGLESGraphicsCompositeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.device.OpenGLESGraphicsCompositeFactory";
    }
    @lazy static jv_instance: OpenGLESGraphicsCompositeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLESGraphicsCompositeFactory | null {
        if (!OpenGLESGraphicsCompositeFactory.js_instance) {
            OpenGLESGraphicsCompositeFactory.js_instance = true;
            OpenGLESGraphicsCompositeFactory.jv_instance = new OpenGLESGraphicsCompositeFactory().jinit_OpenGLESGraphicsCompositeFactory_0();
        }
        return OpenGLESGraphicsCompositeFactory.jv_instance;
    }
    static set instance(value: OpenGLESGraphicsCompositeFactory | null) {
        OpenGLESGraphicsCompositeFactory.js_instance = true;
        OpenGLESGraphicsCompositeFactory.jv_instance = value;
    }
    openGLESGraphicsFactory: OpenGLESGraphicsFactory | null = null;

    jfields_OpenGLESGraphicsCompositeFactory(): void {
    this.openGLESGraphicsFactory = new OpenGLESGraphicsFactory().jinit_OpenGLESGraphicsFactory_0();
    }

    jinit_OpenGLESGraphicsCompositeFactory_0(): OpenGLESGraphicsCompositeFactory {
        super.jinit_JObject_0();
        this.jfields_OpenGLESGraphicsCompositeFactory();
        return this;
    }
    

    static getInstance(): OpenGLESGraphicsCompositeFactory | null {
        return OpenGLESGraphicsCompositeFactory.instance;
    }
    

    set(openGLESGraphicsFactory: OpenGLESGraphicsFactory | null): void {
        this.openGLESGraphicsFactory = openGLESGraphicsFactory;
    }
    

    get(): OpenGLESGraphicsFactory | null {
        return this.openGLESGraphicsFactory;
    }
}

