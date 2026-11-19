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
// package org.allbinary.animation.image
// import javax.microedition.lcdui.Image
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.media.image.ImageScaleUtil
// import org.allbinary.string.CommonStrings

@global export class ScaleProcessor extends ScaleBaseProcessor {

    jclassName(): string {
        return "org.allbinary.animation.image.ScaleProcessor";
    }
    @lazy static jv_instanceC: ScaleProcessor | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): ScaleProcessor | null {
        if (!ScaleProcessor.js_instanceC) {
            ScaleProcessor.js_instanceC = true;
            ScaleProcessor.jv_instanceC = new ScaleProcessor().jinit_ScaleProcessor_0();
        }
        return ScaleProcessor.jv_instanceC;
    }
    static set instanceC(value: ScaleProcessor | null) {
        ScaleProcessor.js_instanceC = true;
        ScaleProcessor.jv_instanceC = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    imageScaleUtil: ImageScaleUtil | null = null;

    jfields_ScaleProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.imageScaleUtil = ImageScaleUtil.getInstance();
    }

    jinit_ScaleProcessor_0(): ScaleProcessor {
        super.jinit_ScaleBaseProcessor_0();
        this.jfields_ScaleProcessor();
        return this;
    }
    

    static getInstance(): ScaleBaseProcessor | null {
        return ScaleProcessor.instanceC;
    }
    

    update(originalImage: Image | null, originalImageArray: StaticArray<Image | null> | null, ximageToShowArray: StaticArray<Image | null> | null, unused: i32, scaleX: f32, scaleY: f32, maxScaleX: f32, maxScaleY: f32): void {
        do {
            this.imageScaleUtil!.scale2(originalImage, originalImageArray, ximageToShowArray, unused, scaleX, scaleY, maxScaleX, maxScaleY); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

