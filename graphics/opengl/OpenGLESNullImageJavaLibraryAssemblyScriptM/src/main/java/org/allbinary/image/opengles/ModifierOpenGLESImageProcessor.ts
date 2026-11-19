/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.image.opengles

@global export class ModifierOpenGLESImageProcessor extends OpenGLESImageProcessor {

    jclassName(): string {
        return "org.allbinary.image.opengles.ModifierOpenGLESImageProcessor";
    }
    @lazy static jv_instanceC: ModifierOpenGLESImageProcessor | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): ModifierOpenGLESImageProcessor | null {
        if (!ModifierOpenGLESImageProcessor.js_instanceC) {
            ModifierOpenGLESImageProcessor.js_instanceC = true;
            ModifierOpenGLESImageProcessor.jv_instanceC = new ModifierOpenGLESImageProcessor().jinit_ModifierOpenGLESImageProcessor_0();
        }
        return ModifierOpenGLESImageProcessor.jv_instanceC;
    }
    static set instanceC(value: ModifierOpenGLESImageProcessor | null) {
        ModifierOpenGLESImageProcessor.js_instanceC = true;
        ModifierOpenGLESImageProcessor.jv_instanceC = value;
    }

    jinit_ModifierOpenGLESImageProcessor_0(): ModifierOpenGLESImageProcessor {
        super.jinit_OpenGLESImageProcessor_0();
        return this;
    }
    

    static getInstance(): ModifierOpenGLESImageProcessor | null {
        return ModifierOpenGLESImageProcessor.instanceC;
    }
}

