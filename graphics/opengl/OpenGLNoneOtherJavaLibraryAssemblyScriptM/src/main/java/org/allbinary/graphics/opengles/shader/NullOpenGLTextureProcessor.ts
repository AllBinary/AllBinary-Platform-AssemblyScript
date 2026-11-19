/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.graphics.opengles.shader

@global export class NullOpenGLTextureProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.NullOpenGLTextureProcessor";
    }
    @lazy static jv_instance: OpenGLObject3dProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLObject3dProcessor | null {
        if (!NullOpenGLTextureProcessor.js_instance) {
            NullOpenGLTextureProcessor.js_instance = true;
            NullOpenGLTextureProcessor.jv_instance = new OpenGLObject3dProcessor().jinit_OpenGLObject3dProcessor_0();
        }
        return NullOpenGLTextureProcessor.jv_instance;
    }
    static set instance(value: OpenGLObject3dProcessor | null) {
        NullOpenGLTextureProcessor.js_instance = true;
        NullOpenGLTextureProcessor.jv_instance = value;
    }

    jinit_NullOpenGLTextureProcessor_0(): NullOpenGLTextureProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): OpenGLObject3dProcessor | null {
        return NullOpenGLTextureProcessor.instance;
    }
}

