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
// import javax.microedition.lcdui.Image
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class OpenGLESImageExclusionUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLESImageExclusionUtil";
    }
    @lazy static jv_instance: OpenGLESImageExclusionUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLESImageExclusionUtil | null {
        if (!OpenGLESImageExclusionUtil.js_instance) {
            OpenGLESImageExclusionUtil.js_instance = true;
            OpenGLESImageExclusionUtil.jv_instance = new OpenGLESImageExclusionUtil().jinit_OpenGLESImageExclusionUtil_0();
        }
        return OpenGLESImageExclusionUtil.jv_instance;
    }
    static set instance(value: OpenGLESImageExclusionUtil | null) {
        OpenGLESImageExclusionUtil.js_instance = true;
        OpenGLESImageExclusionUtil.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_OpenGLESImageExclusionUtil(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_OpenGLESImageExclusionUtil_0(): OpenGLESImageExclusionUtil {
        super.jinit_JObject_0();
        this.jfields_OpenGLESImageExclusionUtil();
        return this;
    }
    

    static getInstance(): OpenGLESImageExclusionUtil | null {
        return OpenGLESImageExclusionUtil.instance;
    }
    

    isCustomScaling(image: Image | null): bool {
        return false;
    }
}

