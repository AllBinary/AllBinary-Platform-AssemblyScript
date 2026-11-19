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

@global export class ShaderInitializer extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.ShaderInitializer";
    }
    @lazy static jv_instance: ShaderInitializer | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ShaderInitializer | null {
        if (!ShaderInitializer.js_instance) {
            ShaderInitializer.js_instance = true;
            ShaderInitializer.jv_instance = new ShaderInitializer().jinit_ShaderInitializer_0();
        }
        return ShaderInitializer.jv_instance;
    }
    static set instance(value: ShaderInitializer | null) {
        ShaderInitializer.js_instance = true;
        ShaderInitializer.jv_instance = value;
    }
    commonStrings: CommonStrings | null = null;

    jfields_ShaderInitializer(): void {
    this.commonStrings = CommonStrings.getInstance();
    }

    jinit_ShaderInitializer_0(): ShaderInitializer {
        super.jinit_JObject_0();
        this.jfields_ShaderInitializer();
        return this;
    }
    

    static getInstance(): ShaderInitializer | null {
        return ShaderInitializer.instance;
    }
    

    init(gl: GL10 | null, shader: StaticArray<Shader | null> | null, attributeArray: StaticArray<string | null> | null): i32 {
        return -1;
    }
}

