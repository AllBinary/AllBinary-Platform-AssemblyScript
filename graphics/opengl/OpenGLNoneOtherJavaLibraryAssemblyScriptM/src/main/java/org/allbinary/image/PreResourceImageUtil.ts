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
// package org.allbinary.image
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image

@global export class PreResourceImageUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.PreResourceImageUtil";
    }
    @lazy static jv_instance: PreResourceImageUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PreResourceImageUtil | null {
        if (!PreResourceImageUtil.js_instance) {
            PreResourceImageUtil.js_instance = true;
            PreResourceImageUtil.jv_instance = new PreResourceImageUtil().jinit_PreResourceImageUtil_0();
        }
        return PreResourceImageUtil.jv_instance;
    }
    static set instance(value: PreResourceImageUtil | null) {
        PreResourceImageUtil.js_instance = true;
        PreResourceImageUtil.jv_instance = value;
    }

    jinit_PreResourceImageUtil_0(): PreResourceImageUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): PreResourceImageUtil | null {
        return PreResourceImageUtil.instance;
    }
    

    encapsulate(image: Image | null): Image | null {
        return image;
    }
    

    updateGL(gl: GL | null, image: Image | null): void {
    }
    

    update(graphics: Graphics | null, image: Image | null): void {
    }
}

