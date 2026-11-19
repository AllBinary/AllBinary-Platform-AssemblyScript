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
// import org.allbinary.logic.string.StringUtil

@global export class OpenGLCapabilities extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.OpenGLCapabilities";
    }
    @lazy static jv_instance: OpenGLCapabilities | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLCapabilities | null {
        if (!OpenGLCapabilities.js_instance) {
            OpenGLCapabilities.js_instance = true;
            OpenGLCapabilities.jv_instance = new OpenGLCapabilities().jinit_OpenGLCapabilities_0();
        }
        return OpenGLCapabilities.jv_instance;
    }
    static set instance(value: OpenGLCapabilities | null) {
        OpenGLCapabilities.js_instance = true;
        OpenGLCapabilities.jv_instance = value;
    }
    CUSTOM_GL_SURFACE_VIEW: bool = false;
    VERSION_1_0: string | null = null;
    VERSION_1_1: string | null = null;
    VERSION_2_0: string | null = null;
    VERSION_3_0: string | null = null;
    VERSION_3_1: string | null = null;
    VERSION_3_2: string | null = null;
    VERSION_HIGHER_THAN_EXISTS: string | null = null;
    glVersion: string | null = null;
    shaderVersion: i32 = 0;
    glInstanceVersion: string | null = null;
    maxTextureSize: i32 = 0;

    jfields_OpenGLCapabilities(): void {
    this.CUSTOM_GL_SURFACE_VIEW = true;
    this.VERSION_1_0 = "1.0";
    this.VERSION_1_1 = "1.1";
    this.VERSION_2_0 = "2.0";
    this.VERSION_3_0 = "3.0";
    this.VERSION_3_1 = "3.1";
    this.VERSION_3_2 = "3.2";
    this.VERSION_HIGHER_THAN_EXISTS = "999.999";
    this.glVersion = StringUtil.getInstance()!.EMPTY_STRING;
    this.shaderVersion = 0;
    this.glInstanceVersion = StringUtil.getInstance()!.EMPTY_STRING;
    this.maxTextureSize = 64;
    }
    

    static getInstance(): OpenGLCapabilities | null {
        return OpenGLCapabilities.instance;
    }
    

    jinit_OpenGLCapabilities_0(): OpenGLCapabilities {
        super.jinit_JObject_0();
        this.jfields_OpenGLCapabilities();
        return this;
    }
    

    isInitialized(): bool {
        return true;
    }
    

    initCapabilities(gl: Object | null): void {
    }
    

    isGlExtensionDrawTexture(): bool {
        return false;
    }
    

    getGlVersion(): string | null {
        return this.glVersion;
    }
    

    isVertexBufferObjectSupport(): bool {
        return false;
    }
    

    isTextureSizeValid(widthAndHeight: i32): bool {
        return true;
    }
}

