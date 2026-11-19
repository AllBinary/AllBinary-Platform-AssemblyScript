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
// package org.allbinary.media.image
// import java.awt.Color

@global export class ImageJ2SEUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageJ2SEUtil";
    }
    @lazy static jv_instance: ImageJ2SEUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageJ2SEUtil | null {
        if (!ImageJ2SEUtil.js_instance) {
            ImageJ2SEUtil.js_instance = true;
            ImageJ2SEUtil.jv_instance = new ImageJ2SEUtil().jinit_ImageJ2SEUtil_0();
        }
        return ImageJ2SEUtil.jv_instance;
    }
    static set instance(value: ImageJ2SEUtil | null) {
        ImageJ2SEUtil.js_instance = true;
        ImageJ2SEUtil.jv_instance = value;
    }
    TRANSPARENT_COLOR: Color | null = null;

    jfields_ImageJ2SEUtil(): void {
    this.TRANSPARENT_COLOR = new Color().jinit_Color_4(0, 0, 0, 0);
    }

    jinit_ImageJ2SEUtil_0(): ImageJ2SEUtil {
        super.jinit_JObject_0();
        this.jfields_ImageJ2SEUtil();
        return this;
    }
    

    static getInstance(): ImageJ2SEUtil | null {
        return ImageJ2SEUtil.instance;
    }
}

