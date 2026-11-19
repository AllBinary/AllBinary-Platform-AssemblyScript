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
// package org.allbinary.graphics.opengles

@global export class OpenGLFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.OpenGLFeatureFactory";
    }
    @lazy static jv_instance: OpenGLFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLFeatureFactory | null {
        if (!OpenGLFeatureFactory.js_instance) {
            OpenGLFeatureFactory.js_instance = true;
            OpenGLFeatureFactory.jv_instance = new OpenGLFeatureFactory().jinit_OpenGLFeatureFactory_0();
        }
        return OpenGLFeatureFactory.jv_instance;
    }
    static set instance(value: OpenGLFeatureFactory | null) {
        OpenGLFeatureFactory.js_instance = true;
        OpenGLFeatureFactory.jv_instance = value;
    }
    OPENGL_OPTIONS: OpenGLFeature | null = null;
    OPENGL: OpenGLFeature | null = null;
    OPENGL_SURFACE_VIEW: OpenGLFeature | null = null;
    OPENGL_2D: OpenGLFeature | null = null;
    OPENGL_3D: OpenGLFeature | null = null;
    OPENGL_2D_AND_3D: OpenGLFeature | null = null;
    OPENGL_AUTO_SELECT: OpenGLFeature | null = null;
    OPENGL_MINIMUM: OpenGLFeature | null = null;
    OPENGL_AS_GAME_THREAD: OpenGLFeature | null = null;
    OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS: OpenGLFeature | null = null;
    IMAGE_COLOR_DEPTH_4444: OpenGLFeature | null = null;
    IMAGE_COLOR_DEPTH_8888: OpenGLFeature | null = null;
    IMAGE_COLOR_DEPTH_565: OpenGLFeature | null = null;
    OPENGL_COLOR_DEPTH_4444: OpenGLFeature | null = null;
    OPENGL_COLOR_DEPTH_8888: OpenGLFeature | null = null;
    OPENGL_COLOR_DEPTH_565: OpenGLFeature | null = null;
    OPENGL_DRAW_TEXTURE: OpenGLFeature | null = null;
    OPENGL_VERTEX_BUFFER_OBJECT: OpenGLFeature | null = null;
    OPENGL_SIMPLE_OBJECT3D_PROCESSOR: OpenGLFeature | null = null;
    OPENGL_COMPLEX_OBJECT3D_PROCESSOR: OpenGLFeature | null = null;
    OPENGL_SIMPLE_TEXTURE_PROCESSOR: OpenGLFeature | null = null;
    OPENGL_COMPLEX_TEXTURE_PROCESSOR: OpenGLFeature | null = null;

    jfields_OpenGLFeatureFactory(): void {
    this.OPENGL_OPTIONS = new OpenGLFeature().jinit_OpenGLFeature_1("OpenGL Options");
    this.OPENGL = new OpenGLFeature().jinit_OpenGLFeature_1("OpenGL");
    this.OPENGL_SURFACE_VIEW = new OpenGLFeature().jinit_OpenGLFeature_1("GLSurfaceView");
    this.OPENGL_2D = new OpenGLFeature().jinit_OpenGLFeature_1("OpenGL 2D");
    this.OPENGL_3D = new OpenGLFeature().jinit_OpenGLFeature_1("OpenGL 3D");
    this.OPENGL_2D_AND_3D = new OpenGLFeature().jinit_OpenGLFeature_1("OpenGL 2D/3D");
    this.OPENGL_AUTO_SELECT = new OpenGLFeature().jinit_OpenGLFeature_1("Auto Select");
    this.OPENGL_MINIMUM = new OpenGLFeature().jinit_OpenGLFeature_1("Minimum");
    this.OPENGL_AS_GAME_THREAD = new OpenGLFeature().jinit_OpenGLFeature_1("As game thread");
    this.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS = new OpenGLFeature().jinit_OpenGLFeature_1("As different threads");
    this.IMAGE_COLOR_DEPTH_4444 = new OpenGLFeature().jinit_OpenGLFeature_1("4444");
    this.IMAGE_COLOR_DEPTH_8888 = new OpenGLFeature().jinit_OpenGLFeature_1("8888");
    this.IMAGE_COLOR_DEPTH_565 = new OpenGLFeature().jinit_OpenGLFeature_1("565");
    this.OPENGL_COLOR_DEPTH_4444 = new OpenGLFeature().jinit_OpenGLFeature_1("4444");
    this.OPENGL_COLOR_DEPTH_8888 = new OpenGLFeature().jinit_OpenGLFeature_1("8888");
    this.OPENGL_COLOR_DEPTH_565 = new OpenGLFeature().jinit_OpenGLFeature_1("565");
    this.OPENGL_DRAW_TEXTURE = new OpenGLFeature().jinit_OpenGLFeature_1("GL_OES_draw_texture");
    this.OPENGL_VERTEX_BUFFER_OBJECT = new OpenGLFeature().jinit_OpenGLFeature_1("vertex_buffer_object");
    this.OPENGL_SIMPLE_OBJECT3D_PROCESSOR = new OpenGLFeature().jinit_OpenGLFeature_1("Simple Object3d Processor");
    this.OPENGL_COMPLEX_OBJECT3D_PROCESSOR = new OpenGLFeature().jinit_OpenGLFeature_1("Complex Object3d Processor");
    this.OPENGL_SIMPLE_TEXTURE_PROCESSOR = new OpenGLFeature().jinit_OpenGLFeature_1("Simple Texture Processor");
    this.OPENGL_COMPLEX_TEXTURE_PROCESSOR = new OpenGLFeature().jinit_OpenGLFeature_1("Complex Texture Processor");
    }
    

    static getInstance(): OpenGLFeatureFactory | null {
        return OpenGLFeatureFactory.instance;
    }
    

    jinit_OpenGLFeatureFactory_0(): OpenGLFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_OpenGLFeatureFactory();
        return this;
    }
}

