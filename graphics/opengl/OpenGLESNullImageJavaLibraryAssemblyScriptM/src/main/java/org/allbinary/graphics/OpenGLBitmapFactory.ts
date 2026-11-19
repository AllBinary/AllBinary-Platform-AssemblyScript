// Generated Code Do Not Modify
// package org.allbinary.graphics
// import java.io.IOException
// import java.io.InputStream
// import javax.microedition.lcdui.Image
// import org.allbinary.logic.NullUtil
// import org.allbinary.platform.graphics.PlatformBitmapBase
// import org.allbinary.platform.graphics.PlatformBitmapBaseFactory

@global export class OpenGLBitmapFactory extends PlatformBitmapBaseFactory {

    jclassName(): string {
        return "org.allbinary.graphics.OpenGLBitmapFactory";
    }
    @lazy static jv_instance: OpenGLBitmapFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLBitmapFactory | null {
        if (!OpenGLBitmapFactory.js_instance) {
            OpenGLBitmapFactory.js_instance = true;
            OpenGLBitmapFactory.jv_instance = new OpenGLBitmapFactory().jinit_OpenGLBitmapFactory_0();
        }
        return OpenGLBitmapFactory.jv_instance;
    }
    static set instance(value: OpenGLBitmapFactory | null) {
        OpenGLBitmapFactory.js_instance = true;
        OpenGLBitmapFactory.jv_instance = value;
    }
    ARGB_8888: OpenGLBitmapConfig | null = null;

    jfields_OpenGLBitmapFactory(): void {
    this.ARGB_8888 = new OpenGLBitmapConfig().jinit_OpenGLBitmapConfig_1(NullUtil.getInstance()!.NULL_OBJECT);
    }

    jinit_OpenGLBitmapFactory_0(): OpenGLBitmapFactory {
        super.jinit_PlatformBitmapBaseFactory_0();
        this.jfields_OpenGLBitmapFactory();
        return this;
    }
    

    static getInstance(): OpenGLBitmapFactory | null {
        return OpenGLBitmapFactory.instance;
    }
    

    createBitmap_3(width: i32, height: i32, config: OpenGLBitmapConfig | null): OpenGLBitmap | null {
        return new OpenGLBitmap().jinit_OpenGLBitmap_1(NullUtil.getInstance()!.NULL_OBJECT);
    }
    

    decodeStream(inputStream: JInputStream | null): OpenGLBitmap | null {
        return new OpenGLBitmap().jinit_OpenGLBitmap_1(NullUtil.getInstance()!.NULL_OBJECT);
    }
    

    createBitmap(image: Image | null): PlatformBitmapBase | null {
        return new OpenGLBitmap().jinit_OpenGLBitmap_1(NullUtil.getInstance()!.NULL_OBJECT);
    }
}

