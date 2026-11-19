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
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import org.allbinary.graphics.paint.PaintableInterface

@global export class PaintableToImageUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.PaintableToImageUtil";
    }
    @lazy static jv_instance: PaintableToImageUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PaintableToImageUtil | null {
        if (!PaintableToImageUtil.js_instance) {
            PaintableToImageUtil.js_instance = true;
            PaintableToImageUtil.jv_instance = new PaintableToImageUtil().jinit_PaintableToImageUtil_0();
        }
        return PaintableToImageUtil.jv_instance;
    }
    static set instance(value: PaintableToImageUtil | null) {
        PaintableToImageUtil.js_instance = true;
        PaintableToImageUtil.jv_instance = value;
    }

    jinit_PaintableToImageUtil_0(): PaintableToImageUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getImage(paintableInterface: PaintableInterface | null, width: i32, height: i32): Image | null {
        let image: Image | null = GameFeatureImageCacheFactory.getInstance()!.get(JObject.jclassOf(PaintableToImageUtil.instance)!.getName(), width, height); if (JThrowable.pending !== null) return null;
        let graphics: Graphics | null = image!.getGraphics(); if (JThrowable.pending !== null) return null;
        paintableInterface!.paint(graphics); if (JThrowable.pending !== null) return null;
        return image;
    }
}

