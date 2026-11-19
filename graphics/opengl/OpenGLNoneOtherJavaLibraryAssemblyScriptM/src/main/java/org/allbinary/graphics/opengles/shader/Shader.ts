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
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil

@global export class Shader extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.Shader";
    }
    shaderName: string | null = null;
    shaderStringList: BasicArrayList | null = null;
    shaderAsString: string | null = null;
    shaderHandle: i32 = 0;

    jfields_Shader(): void {
    this.shaderName = StringUtil.getInstance()!.EMPTY_STRING;
    this.shaderStringList = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    this.shaderAsString = StringUtil.getInstance()!.EMPTY_STRING;
    this.shaderHandle = 0;
    }

    jinit_Shader_0(): Shader {
        super.jinit_JObject_0();
        this.jfields_Shader();
        return this;
    }
}

