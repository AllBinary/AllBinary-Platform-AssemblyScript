// Generated Code Do Not Modify
// package org.allbinary.graphics.opengles

@global export class OpenGLThreadUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.OpenGLThreadUtil";
    }
    @lazy static jv_instance: OpenGLThreadUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLThreadUtil | null {
        if (!OpenGLThreadUtil.js_instance) {
            OpenGLThreadUtil.js_instance = true;
            OpenGLThreadUtil.jv_instance = new OpenGLThreadUtil().jinit_OpenGLThreadUtil_0();
        }
        return OpenGLThreadUtil.jv_instance;
    }
    static set instance(value: OpenGLThreadUtil | null) {
        OpenGLThreadUtil.js_instance = true;
        OpenGLThreadUtil.jv_instance = value;
    }

    jinit_OpenGLThreadUtil_0(): OpenGLThreadUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): OpenGLThreadUtil | null {
        return OpenGLThreadUtil.instance;
    }
    

    set(glSurfaceView: Object | null): void {
    }
    

    onPause(): void {
    }
    

    onResume(): void {
    }
}

