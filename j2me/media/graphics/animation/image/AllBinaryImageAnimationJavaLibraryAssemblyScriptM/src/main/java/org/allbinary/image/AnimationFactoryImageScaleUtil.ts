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
// package org.allbinary.image
// import javax.microedition.lcdui.Image
// import org.allbinary.animation.image.AnimationFactoryInitializationVisitor
// import org.allbinary.animation.image.BaseImageAnimationFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.media.ScaleProperties
// import org.allbinary.media.image.ImageJ2MEScaleUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings

@global export class AnimationFactoryImageScaleUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.AnimationFactoryImageScaleUtil";
    }
    @lazy static jv_instance: AnimationFactoryImageScaleUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnimationFactoryImageScaleUtil | null {
        if (!AnimationFactoryImageScaleUtil.js_instance) {
            AnimationFactoryImageScaleUtil.js_instance = true;
            AnimationFactoryImageScaleUtil.jv_instance = new AnimationFactoryImageScaleUtil().jinit_AnimationFactoryImageScaleUtil_0();
        }
        return AnimationFactoryImageScaleUtil.jv_instance;
    }
    static set instance(value: AnimationFactoryImageScaleUtil | null) {
        AnimationFactoryImageScaleUtil.js_instance = true;
        AnimationFactoryImageScaleUtil.jv_instance = value;
    }
    imageScaleUtil: ImageJ2MEScaleUtil | null = null;

    jfields_AnimationFactoryImageScaleUtil(): void {
    this.imageScaleUtil = ImageJ2MEScaleUtil.getInstance();
    }

    jinit_AnimationFactoryImageScaleUtil_0(): AnimationFactoryImageScaleUtil {
        super.jinit_JObject_0();
        this.jfields_AnimationFactoryImageScaleUtil();
        return this;
    }
    

    static getInstance(): AnimationFactoryImageScaleUtil | null {
        return AnimationFactoryImageScaleUtil.instance;
    }
    

    createImage(image: Image | null, width: i32, height: i32, scaleWidth: i32, scaleHeight: i32): Image | null {
        let scaledImage: Image | null = null;
        if (scaleWidth != 0 && scaleHeight != 0) {
            let scaleX: f32 = ((<f32>(scaleWidth))) / ((<f32>(width)));
            let scaleY: f32 = ((<f32>(scaleHeight))) / ((<f32>(height)));
            if ((scaleX == (<f32>1.0) && scaleY == (<f32>1.0)) || (scaleX == (<f32>0.0) || scaleY == (<f32>0.0))) {
                scaledImage = image;
            } else {
                let scaledWidth: i32 = JMath.toInt((scaleX * (<f32>(width))));
                let scaledHeight: i32 = JMath.toInt((scaleY * (<f32>(height))));
                scaledImage = this.imageScaleUtil!.scale(image, scaledWidth, scaledHeight); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } else {
            scaledImage = image;
        } if (JThrowable.pending !== null) return null;
        return scaledImage;
    }
    

    processAdjust(baseImageAnimationFactory: BaseImageAnimationFactory | null): void {
        let scaleProperties: ScaleProperties | null = baseImageAnimationFactory!.getScalePropertiesP(); if (JThrowable.pending !== null) return;
        if (scaleProperties!.scaleWidth != 0 && scaleProperties!.scaleHeight != 0) {
            let animationFactoryInitializationVisitor: AnimationFactoryInitializationVisitor | null = baseImageAnimationFactory!.getAnimationFactoryInitializationVisitorP(); if (JThrowable.pending !== null) return;
            let scaleX: f32 = ((<f32>(scaleProperties!.scaleWidth))) / ((<f32>(animationFactoryInitializationVisitor!.width)));
            let scaleY: f32 = ((<f32>(scaleProperties!.scaleHeight))) / ((<f32>(animationFactoryInitializationVisitor!.height)));
            if ((scaleX == (<f32>1.0) && scaleY == (<f32>1.0)) || (scaleX == (<f32>0.0) || scaleY == (<f32>0.0))) {
            } else {
                animationFactoryInitializationVisitor!.dx = JMath.toInt(((<f32>(animationFactoryInitializationVisitor!.originalDx)) * scaleX));
                animationFactoryInitializationVisitor!.dy = JMath.toInt(((<f32>(animationFactoryInitializationVisitor!.originalDy)) * scaleY));
            }
        } else {
        } if (JThrowable.pending !== null) return;
    }
}

