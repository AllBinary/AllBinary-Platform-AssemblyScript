// Generated Code Do Not Modify
// package org.allbinary.device

@global export class OpenGLESNullGraphicsFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.device.OpenGLESNullGraphicsFactory";
    }
    @lazy static jv_instance: OpenGLESGraphics | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLESGraphics | null {
        if (!OpenGLESNullGraphicsFactory.js_instance) {
            OpenGLESNullGraphicsFactory.js_instance = true;
            OpenGLESNullGraphicsFactory.jv_instance = new OpenGLESGraphics().jinit_OpenGLESGraphics_0();
        }
        return OpenGLESNullGraphicsFactory.jv_instance;
    }
    static set instance(value: OpenGLESGraphics | null) {
        OpenGLESNullGraphicsFactory.js_instance = true;
        OpenGLESNullGraphicsFactory.jv_instance = value;
    }

    jinit_OpenGLESNullGraphicsFactory_0(): OpenGLESNullGraphicsFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): OpenGLESGraphics | null {
        return OpenGLESNullGraphicsFactory.instance;
    }
}

