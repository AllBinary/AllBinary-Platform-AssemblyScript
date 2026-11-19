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
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class ShaderManager extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.ShaderManager";
    }
    @lazy static jv_instance: ShaderManager | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ShaderManager | null {
        if (!ShaderManager.js_instance) {
            ShaderManager.js_instance = true;
            ShaderManager.jv_instance = new ShaderManager().jinit_ShaderManager_2(-1, -1);
        }
        return ShaderManager.jv_instance;
    }
    static set instance(value: ShaderManager | null) {
        ShaderManager.js_instance = true;
        ShaderManager.jv_instance = value;
    }
    LOAD_SHADER: string | null = null;
    commonStrings: CommonStrings | null = null;
    GL_VERTEX_SHADER: i32 = 0;
    GL_FRAGMENT_SHADER: i32 = 0;

    jfields_ShaderManager(): void {
    this.LOAD_SHADER = "loadShader";
    this.commonStrings = CommonStrings.getInstance();
    
    
    }
    

    static getInstance(): ShaderManager | null {
        return ShaderManager.instance;
    }
    

    jinit_ShaderManager_2(GL_VERTEX_SHADER: i32, GL_FRAGMENT_SHADER: i32): ShaderManager {
        super.jinit_JObject_0();
        this.jfields_ShaderManager();
        this.GL_VERTEX_SHADER = GL_VERTEX_SHADER;
        this.GL_FRAGMENT_SHADER = GL_FRAGMENT_SHADER;
        return this;
    }
    

    load(gl: GL10 | null, resource: string | null, shaderAsStringArray: StaticArray<string | null> | null, shaderType: i32): i32 {
        return -1;
    }
    

    loadShader(gl: GL10 | null, resource: string | null, stringList: BasicArrayList | null, shaderType: i32): i32 {
        return -1;
    }
}

