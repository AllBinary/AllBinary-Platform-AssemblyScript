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
// package org.allbinary.media.image
// import javax.microedition.lcdui.Image

@global export class ImageCompleteUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageCompleteUtil";
    }
    @lazy static jv_instance: ImageCompleteUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageCompleteUtil | null {
        if (!ImageCompleteUtil.js_instance) {
            ImageCompleteUtil.js_instance = true;
            ImageCompleteUtil.jv_instance = new ImageCompleteUtil().jinit_ImageCompleteUtil_0();
        }
        return ImageCompleteUtil.jv_instance;
    }
    static set instance(value: ImageCompleteUtil | null) {
        ImageCompleteUtil.js_instance = true;
        ImageCompleteUtil.jv_instance = value;
    }

    jinit_ImageCompleteUtil_0(): ImageCompleteUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ImageCompleteUtil | null {
        return ImageCompleteUtil.instance;
    }
    

    waitForImage(image: Image | null, name: string | null): void {
    }
}

