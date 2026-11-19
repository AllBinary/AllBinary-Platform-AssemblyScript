// Generated Code Do Not Modify
// package org.allbinary.graphics.opengles

@global export class NullOpenGLProcessorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.NullOpenGLProcessorFactory";
    }
    @lazy static jv_instance: OpenGLProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLProcessor | null {
        if (!NullOpenGLProcessorFactory.js_instance) {
            NullOpenGLProcessorFactory.js_instance = true;
            NullOpenGLProcessorFactory.jv_instance = new OpenGLProcessor().jinit_OpenGLProcessor_0();
        }
        return NullOpenGLProcessorFactory.jv_instance;
    }
    static set instance(value: OpenGLProcessor | null) {
        NullOpenGLProcessorFactory.js_instance = true;
        NullOpenGLProcessorFactory.jv_instance = value;
    }

    jinit_NullOpenGLProcessorFactory_0(): NullOpenGLProcessorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): OpenGLProcessor | null {
        return NullOpenGLProcessorFactory.instance;
    }
}

