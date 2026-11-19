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

@global export class SimpleShaderInitializer extends ShaderInitializer {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.SimpleShaderInitializer";
    }
    @lazy static jv_instanceC: SimpleShaderInitializer | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): SimpleShaderInitializer | null {
        if (!SimpleShaderInitializer.js_instanceC) {
            SimpleShaderInitializer.js_instanceC = true;
            SimpleShaderInitializer.jv_instanceC = new SimpleShaderInitializer().jinit_SimpleShaderInitializer_0();
        }
        return SimpleShaderInitializer.jv_instanceC;
    }
    static set instanceC(value: SimpleShaderInitializer | null) {
        SimpleShaderInitializer.js_instanceC = true;
        SimpleShaderInitializer.jv_instanceC = value;
    }

    jinit_SimpleShaderInitializer_0(): SimpleShaderInitializer {
        super.jinit_ShaderInitializer_0();
        return this;
    }
    

    static getInstance(): SimpleShaderInitializer | null {
        return SimpleShaderInitializer.instanceC;
    }
}

