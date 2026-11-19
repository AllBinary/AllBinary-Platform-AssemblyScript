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
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.khronos.opengles.GL10
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.NullImage
// import org.allbinary.platform.graphics.PlatformBitmapBase
// import org.allbinary.platform.graphics.PlatformBitmapBaseFactory
// import org.allbinary.platform.opengles.PlatformTextureBaseFactory
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

//OpenGLESNullImageJ2MEJavaLibrary
@global export class OpenGLESImage extends JObject implements OpenGLSurfaceChangedInterface {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLESImage";
    }
    @lazy static jv_NULL_OPENGL_IMAGE: OpenGLESImage | null = null;
    @lazy static js_NULL_OPENGL_IMAGE: bool = false;
    static get NULL_OPENGL_IMAGE(): OpenGLESImage | null {
        if (!OpenGLESImage.js_NULL_OPENGL_IMAGE) {
            OpenGLESImage.js_NULL_OPENGL_IMAGE = true;
            OpenGLESImage.jv_NULL_OPENGL_IMAGE = new OpenGLESImage().jinit_OpenGLESImage_3(NullImage.NULL_IMAGE, PlatformBitmapBaseFactory.NULL_PLATFORM_BITMAP_BASE_FACTORY, PlatformTextureBaseFactory.NULL_PLATFORM_TEXTURE_BASE_FACTORY);
        }
        return OpenGLESImage.jv_NULL_OPENGL_IMAGE;
    }
    static set NULL_OPENGL_IMAGE(value: OpenGLESImage | null) {
        OpenGLESImage.js_NULL_OPENGL_IMAGE = true;
        OpenGLESImage.jv_NULL_OPENGL_IMAGE = value;
    }
    @lazy static jv_texture2dList: BasicArrayList | null = null;
    @lazy static js_texture2dList: bool = false;
    static get texture2dList(): BasicArrayList | null {
        if (!OpenGLESImage.js_texture2dList) {
            OpenGLESImage.js_texture2dList = true;
            OpenGLESImage.jv_texture2dList = new BasicArrayListD().jinit_BasicArrayListD_0();
        }
        return OpenGLESImage.jv_texture2dList;
    }
    static set texture2dList(value: BasicArrayList | null) {
        OpenGLESImage.js_texture2dList = true;
        OpenGLESImage.jv_texture2dList = value;
    }
    static readonly TYPE: i32 = 4;
    commonStrings: CommonStrings | null = null;
    textureFactory: PlatformTextureBaseFactory | null = null;
    openGLBitmap: PlatformBitmapBase | null = null;
    openGLESImageProperties: OpenGLESImageProperties | null = null;

    jfields_OpenGLESImage(): void {
    this.commonStrings = CommonStrings.getInstance();
    
    
    this.openGLESImageProperties = new OpenGLESImageProperties().jinit_OpenGLESImageProperties_0();
    }
    

    jinit_OpenGLESImage_3(image: Image | null, bitmapFactory: PlatformBitmapBaseFactory | null, textureFactory: PlatformTextureBaseFactory | null): OpenGLESImage {
        super.jinit_JObject_0();
        this.jfields_OpenGLESImage();
        this.openGLBitmap = bitmapFactory!.createBitmap(image); if (JThrowable.pending !== null) return this;
        this.textureFactory = textureFactory;
        return this;
    }
    

    set(gl: GL | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    initTexture(gl: GL10 | null): bool {
        return false;
    }
    

    drawRegion(gl: GL10 | null, viewHeight: i32, x_src: f32, y_src: f32, width: f32, height: f32, x: i32, y: i32, z: i32): void {
    }
    

    draw(gl: GL10 | null, x: i32, y: i32, z: i32): void {
    }
    

    getType(): i32 {
        return OpenGLESImage.TYPE;
    }
}

