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
// import javax.microedition.khronos.egl.EGLConfig
// import javax.microedition.khronos.opengles.GL10
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps

@global export class CompositeShaderUpdater extends ShaderUpdater {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.CompositeShaderUpdater";
    }
    @lazy static jv_instanceC: CompositeShaderUpdater | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): CompositeShaderUpdater | null {
        if (!CompositeShaderUpdater.js_instanceC) {
            CompositeShaderUpdater.js_instanceC = true;
            CompositeShaderUpdater.jv_instanceC = new CompositeShaderUpdater().jinit_CompositeShaderUpdater_4(StringUtil.getInstance()!.getArrayInstance(), StringUtil.getInstance()!.getArrayInstance(), StringUtil.getInstance()!.getArrayInstance(), NullUtil.getInstance()!.NULL_INT_ARRAY);
        }
        return CompositeShaderUpdater.jv_instanceC;
    }
    static set instanceC(value: CompositeShaderUpdater | null) {
        CompositeShaderUpdater.js_instanceC = true;
        CompositeShaderUpdater.jv_instanceC = value;
    }
    commonSeps: CommonSeps | null = null;

    jfields_CompositeShaderUpdater(): void {
    this.commonSeps = CommonSeps.getInstance();
    }
    

    static getInstance(): CompositeShaderUpdater | null {
        return CompositeShaderUpdater.instanceC;
    }
    

    jinit_CompositeShaderUpdater_4(uniformBlockArray: StaticArray<string | null> | null, uniformArray: StaticArray<string | null> | null, attributeArray: StaticArray<string | null> | null, attributeHandleArray: StaticArray<i32> | null): CompositeShaderUpdater {
        super.jinit_ShaderUpdater_0();
        this.jfields_CompositeShaderUpdater();
        return this;
    }
    

    onSurfaceCreated_3(gl: GL10 | null, eglConfig: EGLConfig | null, programHandle: i32): void {
    }
    

    onSurfaceDestroyed(gl: GL10 | null): void {
    }
}

