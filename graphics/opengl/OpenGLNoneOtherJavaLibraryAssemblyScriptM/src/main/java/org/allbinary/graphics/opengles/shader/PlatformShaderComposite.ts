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
// import org.allbinary.graphics.opengles.NullOpenGLProcessorFactory
// import org.allbinary.graphics.opengles.OpenGLProcessor

@global export class PlatformShaderComposite extends ShaderComposite {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.PlatformShaderComposite";
    }
    

    jinit_PlatformShaderComposite_7(requiresOpenGLVersion: string | null, shaderArray: StaticArray<Shader | null> | null, compositeShaderUpdater: CompositeShaderUpdater | null, shaderInitializer: ShaderInitializer | null, modelViewProjection: ModelViewProjection | null, colorOpenGLProcessor: OpenGLProcessor | null, vertexOpenGLProcessor: OpenGLProcessor | null): PlatformShaderComposite {
        super.jinit_ShaderComposite_8(requiresOpenGLVersion, shaderArray, compositeShaderUpdater, shaderInitializer, modelViewProjection, colorOpenGLProcessor, vertexOpenGLProcessor, NullOpenGLProcessorFactory.getInstance());
        return this;
    }
}

