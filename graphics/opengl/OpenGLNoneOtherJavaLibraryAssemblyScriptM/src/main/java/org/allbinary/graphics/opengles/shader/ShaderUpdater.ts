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
// import org.allbinary.graphics.opengles.renderer.RendererStrings
// import org.allbinary.string.CommonStrings

@global export class ShaderUpdater extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.ShaderUpdater";
    }
    @lazy static jv_instance: ShaderUpdater | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ShaderUpdater | null {
        if (!ShaderUpdater.js_instance) {
            ShaderUpdater.js_instance = true;
            ShaderUpdater.jv_instance = new ShaderUpdater().jinit_ShaderUpdater_0();
        }
        return ShaderUpdater.jv_instance;
    }
    static set instance(value: ShaderUpdater | null) {
        ShaderUpdater.js_instance = true;
        ShaderUpdater.jv_instance = value;
    }
    commonStrings: CommonStrings | null = null;
    rendererStrings: RendererStrings | null = null;

    jfields_ShaderUpdater(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.rendererStrings = RendererStrings.getInstance();
    }

    jinit_ShaderUpdater_0(): ShaderUpdater {
        super.jinit_JObject_0();
        this.jfields_ShaderUpdater();
        return this;
    }
    

    static getInstance(): ShaderUpdater | null {
        return ShaderUpdater.instance;
    }
    

    onSurfaceCreated(gl: GL10 | null, eglConfig: EGLConfig | null): void {
    }
}

