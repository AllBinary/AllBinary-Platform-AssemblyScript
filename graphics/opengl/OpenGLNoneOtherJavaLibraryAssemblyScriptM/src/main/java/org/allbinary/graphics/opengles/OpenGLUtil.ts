// Generated Code Do Not Modify
// package org.allbinary.graphics.opengles
// import javax.microedition.lcdui.Image

@global export class OpenGLUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.OpenGLUtil";
    }
    @lazy static jv_instance: OpenGLUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLUtil | null {
        if (!OpenGLUtil.js_instance) {
            OpenGLUtil.js_instance = true;
            OpenGLUtil.jv_instance = new OpenGLUtil().jinit_OpenGLUtil_0();
        }
        return OpenGLUtil.jv_instance;
    }
    static set instance(value: OpenGLUtil | null) {
        OpenGLUtil.js_instance = true;
        OpenGLUtil.jv_instance = value;
    }

    jinit_OpenGLUtil_0(): OpenGLUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): OpenGLUtil | null {
        return OpenGLUtil.instance;
    }
    

    addImage(image: Image | null): Image | null {
        return image;
    }
    

    clear(): void {
    }
    

    addRunnable(runnable: JRunnable | null): void {
    }
}

