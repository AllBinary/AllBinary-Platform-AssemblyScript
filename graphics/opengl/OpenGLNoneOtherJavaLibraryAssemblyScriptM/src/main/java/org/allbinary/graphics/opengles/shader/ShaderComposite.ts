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
// import javax.microedition.khronos.opengles.GL10
// import org.allbinary.graphics.opengles.NullOpenGLProcessorFactory
// import org.allbinary.graphics.opengles.OpenGLProcessor
// import org.allbinary.logic.string.StringUtil

@global export class ShaderComposite extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.ShaderComposite";
    }
    disableProgramShaderOpenGLProcessor: OpenGLProcessor | null = null;
    requiresOpenGLVersion: string | null = null;
    shaderArray: StaticArray<Shader | null> | null = null;
    shaderInitializer: ShaderInitializer | null = null;
    compositeShaderUpdater: CompositeShaderUpdater | null = null;
    modelViewProjection: ModelViewProjection | null = null;
    colorOpenGLProcessor: OpenGLProcessor | null = null;
    vertexOpenGLProcessor: OpenGLProcessor | null = null;
    useProgramShaderOpenGLProcessor: OpenGLProcessor | null = null;
    shaderMatrixOpenGLProcessor: OpenGLProcessor | null = null;
    colorEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    normalEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    vertexEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    textureEnableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    colorDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    normalDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    vertexDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    textureDisableVertexAttribArrayOpenGLProcessor: OpenGLProcessor | null = null;
    uniformLightPositionOpenGLProcessor: OpenGLObject3dProcessor | null = null;
    uniformLightColorOpenGLProcessor: OpenGLObject3dProcessor | null = null;
    uniformCameraPositionOpenGLProcessor: OpenGLObject3dProcessor | null = null;
    uniformTextureUnitOpenGLProcessor: OpenGLObject3dProcessor | null = null;
    programHandle: i32 = 0;

    jfields_ShaderComposite(): void {
    
    
    
    
    
    
    
    
    this.useProgramShaderOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.shaderMatrixOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.colorEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.normalEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.vertexEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.textureEnableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.colorDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.normalDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.vertexDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.textureDisableVertexAttribArrayOpenGLProcessor = NullOpenGLProcessorFactory.getInstance();
    this.uniformLightPositionOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
    this.uniformLightColorOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
    this.uniformCameraPositionOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
    this.uniformTextureUnitOpenGLProcessor = NullOpenGLTextureProcessor.getInstance();
    this.programHandle = 0;
    }
    

    jinit_ShaderComposite_8(requiresOpenGLVersion: string | null, shaderArray: StaticArray<Shader | null> | null, compositeShaderUpdater: CompositeShaderUpdater | null, shaderInitializer: ShaderInitializer | null, modelViewProjection: ModelViewProjection | null, colorOpenGLProcessor: OpenGLProcessor | null, vertexOpenGLProcessor: OpenGLProcessor | null, disableProgramShaderOpenGLProcessor: OpenGLProcessor | null): ShaderComposite {
        super.jinit_JObject_0();
        this.jfields_ShaderComposite();
        this.requiresOpenGLVersion = requiresOpenGLVersion;
        this.shaderArray = shaderArray;
        this.shaderInitializer = shaderInitializer;
        this.compositeShaderUpdater = compositeShaderUpdater;
        this.modelViewProjection = modelViewProjection;
        this.colorOpenGLProcessor = colorOpenGLProcessor;
        this.vertexOpenGLProcessor = vertexOpenGLProcessor;
        this.disableProgramShaderOpenGLProcessor = disableProgramShaderOpenGLProcessor;
        return this;
    }
    

    init(gl: GL10 | null): void {
        this.programHandle = this.shaderInitializer!.init(gl, this.shaderArray, StringUtil.getInstance()!.getArrayInstance()); if (JThrowable.pending !== null) return;
    }
}

