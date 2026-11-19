/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
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
// package org.allbinary.graphics.opengles

@global export class OpenGLFeatureUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.OpenGLFeatureUtil";
    }
    @lazy static jv_instance: OpenGLFeatureUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLFeatureUtil | null {
        if (!OpenGLFeatureUtil.js_instance) {
            OpenGLFeatureUtil.js_instance = true;
            OpenGLFeatureUtil.jv_instance = new OpenGLFeatureUtil().jinit_OpenGLFeatureUtil_0();
        }
        return OpenGLFeatureUtil.jv_instance;
    }
    static set instance(value: OpenGLFeatureUtil | null) {
        OpenGLFeatureUtil.js_instance = true;
        OpenGLFeatureUtil.jv_instance = value;
    }
    

    static getInstance(): OpenGLFeatureUtil | null {
        return OpenGLFeatureUtil.instance;
    }
    

    jinit_OpenGLFeatureUtil_0(): OpenGLFeatureUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    isAnyThreed(): bool {
        return false;
    }
}

