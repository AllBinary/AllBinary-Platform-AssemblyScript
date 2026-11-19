// Generated Code Do Not Modify
// package org.allbinary.graphics.opengles
// import javax.microedition.khronos.opengles.GL10
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class OpenGLProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.OpenGLProcessor";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;

    jfields_OpenGLProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    }

    jinit_OpenGLProcessor_0(): OpenGLProcessor {
        super.jinit_JObject_0();
        this.jfields_OpenGLProcessor();
        return this;
    }
    

    process(gl: GL10 | null): void {
    }
}

