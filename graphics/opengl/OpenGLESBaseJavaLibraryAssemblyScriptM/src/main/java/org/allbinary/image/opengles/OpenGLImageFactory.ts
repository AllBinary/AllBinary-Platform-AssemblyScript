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
// package org.allbinary.image.opengles
// import javax.microedition.lcdui.Image
// import org.allbinary.platform.graphics.PlatformBitmapBaseFactory
// import org.allbinary.platform.opengles.PlatformTextureBaseFactory

@global export class OpenGLImageFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLImageFactory";
    }
    @lazy static jv_NULL_OPENGL_IMAGE_FACTORY: OpenGLImageFactory | null = null;
    @lazy static js_NULL_OPENGL_IMAGE_FACTORY: bool = false;
    static get NULL_OPENGL_IMAGE_FACTORY(): OpenGLImageFactory | null {
        if (!OpenGLImageFactory.js_NULL_OPENGL_IMAGE_FACTORY) {
            OpenGLImageFactory.js_NULL_OPENGL_IMAGE_FACTORY = true;
            OpenGLImageFactory.jv_NULL_OPENGL_IMAGE_FACTORY = new OpenGLImageFactory().jinit_OpenGLImageFactory_0();
        }
        return OpenGLImageFactory.jv_NULL_OPENGL_IMAGE_FACTORY;
    }
    static set NULL_OPENGL_IMAGE_FACTORY(value: OpenGLImageFactory | null) {
        OpenGLImageFactory.js_NULL_OPENGL_IMAGE_FACTORY = true;
        OpenGLImageFactory.jv_NULL_OPENGL_IMAGE_FACTORY = value;
    }

    jinit_OpenGLImageFactory_0(): OpenGLImageFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(image: Image | null, bitmapFactory: PlatformBitmapBaseFactory | null, textureFactory: PlatformTextureBaseFactory | null): Image | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
}

