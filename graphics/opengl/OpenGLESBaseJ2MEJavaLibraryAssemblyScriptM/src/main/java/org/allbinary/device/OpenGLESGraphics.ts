// Generated Code Do Not Modify
// package org.allbinary.device
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.khronos.opengles.GL10
// import javax.microedition.lcdui.Font
// import org.allbinary.graphics.font.FontDebugBase
// import org.allbinary.image.opengles.OpenGLSurfaceChangedInterface
// import org.allbinary.string.CommonStrings

@global export class OpenGLESGraphics extends JObject implements OpenGLSurfaceChangedInterface, GraphicsInterface {

    jclassName(): string {
        return "org.allbinary.device.OpenGLESGraphics";
    }
    commonStrings: CommonStrings | null = null;
    gl: GL10 | null = null;

    jfields_OpenGLESGraphics(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.gl = NullGL10.NULL_GL10;
    }
    

    jinit_OpenGLESGraphics_0(): OpenGLESGraphics {
        super.jinit_JObject_0();
        this.jfields_OpenGLESGraphics();
        return this;
    }
    

    updateGL(gl: GL | null): void {
    }
    

    set(gl: GL | null): void {
    }
    

    init(): void {
    }
    

    update(): void {
    }
    

    setOrthoginalMode(): void {
    }
    

    setCameraMode(): void {
    }
    

    getGlP(): GL10 | null {
        return this.gl;
    }
    

    setFontDebug(font: Font | null, fontDebug: FontDebugBase | null): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
}

