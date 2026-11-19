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
// import org.allbinary.logic.NullUtil

@global export class ModelViewProjection extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.shader.ModelViewProjection";
    }
    @lazy static jv_instance: ModelViewProjection | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ModelViewProjection | null {
        if (!ModelViewProjection.js_instance) {
            ModelViewProjection.js_instance = true;
            ModelViewProjection.jv_instance = new ModelViewProjection().jinit_ModelViewProjection_0();
        }
        return ModelViewProjection.jv_instance;
    }
    static set instance(value: ModelViewProjection | null) {
        ModelViewProjection.js_instance = true;
        ModelViewProjection.jv_instance = value;
    }

    jinit_ModelViewProjection_0(): ModelViewProjection {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ModelViewProjection | null {
        return ModelViewProjection.instance;
    }
    

    get(): StaticArray<f32> | null {
        return NullUtil.getInstance()!.NULL_FLOAT_ARRAY;
    }
}

