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
// import org.allbinary.animation.Animation

@global export class AnimationFrameToImageUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.AnimationFrameToImageUtil";
    }
    @lazy static jv_instance: AnimationFrameToImageUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnimationFrameToImageUtil | null {
        if (!AnimationFrameToImageUtil.js_instance) {
            AnimationFrameToImageUtil.js_instance = true;
            AnimationFrameToImageUtil.jv_instance = new AnimationFrameToImageUtil().jinit_AnimationFrameToImageUtil_0();
        }
        return AnimationFrameToImageUtil.jv_instance;
    }
    static set instance(value: AnimationFrameToImageUtil | null) {
        AnimationFrameToImageUtil.js_instance = true;
        AnimationFrameToImageUtil.jv_instance = value;
    }

    jinit_AnimationFrameToImageUtil_0(): AnimationFrameToImageUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AnimationFrameToImageUtil | null {
        return AnimationFrameToImageUtil.instance;
    }
    

    getInstanceTranslate(width: i32, height: i32, animationInterface: Animation | null): Image | null {
        let image: Image | null = GameFeatureImageCacheFactory.getInstance()!.get(JObject.jclassOf(AnimationFrameToImageUtil.instance)!.getName(), ((width * 3) >> 1), ((height * 3) >> 1)); if (JThrowable.pending !== null) return null;
        let graphics: Graphics | null = image!.getGraphics(); if (JThrowable.pending !== null) return null;
        let tranlateX: i32 = (width >> 2);
        let tranlateY: i32 = (height >> 2);
        graphics!.translate(tranlateX, tranlateY); if (JThrowable.pending !== null) return null;
        animationInterface!.paintXY(graphics, 0, 0); if (JThrowable.pending !== null) return null;
        graphics!.translate(-tranlateX, -tranlateY); if (JThrowable.pending !== null) return null;
        return image;
    }
    

    getInstanceWH(width: i32, height: i32, animationInterface: Animation | null): Image | null {
        let image: Image | null = GameFeatureImageCacheFactory.getInstance()!.get(JObject.jclassOf(AnimationFrameToImageUtil.instance)!.getName(), width, height); if (JThrowable.pending !== null) return null;
        let graphics: Graphics | null = image!.getGraphics(); if (JThrowable.pending !== null) return null;
        animationInterface!.paintXY(graphics, 0, 0); if (JThrowable.pending !== null) return null;
        return image;
    }
}

