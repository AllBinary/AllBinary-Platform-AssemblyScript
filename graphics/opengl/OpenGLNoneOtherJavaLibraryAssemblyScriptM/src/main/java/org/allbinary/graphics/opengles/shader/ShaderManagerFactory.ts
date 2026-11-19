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

@global export class ShaderManagerFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.ShaderManagerFactory";
    }
    @lazy static jv_instance: ShaderManagerFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ShaderManagerFactory | null {
        if (!ShaderManagerFactory.js_instance) {
            ShaderManagerFactory.js_instance = true;
            ShaderManagerFactory.jv_instance = new ShaderManagerFactory().jinit_ShaderManagerFactory_0();
        }
        return ShaderManagerFactory.jv_instance;
    }
    static set instance(value: ShaderManagerFactory | null) {
        ShaderManagerFactory.js_instance = true;
        ShaderManagerFactory.jv_instance = value;
    }

    jinit_ShaderManagerFactory_0(): ShaderManagerFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ShaderManagerFactory | null {
        return ShaderManagerFactory.instance;
    }
    

    create(): ShaderManager | null {
        return ShaderManager.getInstance();
    }
}

