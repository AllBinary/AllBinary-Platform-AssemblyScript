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
// package org.allbinary.image.sprite
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.game.Sprite
// import org.allbinary.game.layer.SpriteFactory
// import org.allbinary.graphics.opengles.OpenGLUtil
// import org.allbinary.image.ImageCache
// import org.allbinary.image.ImageCacheFactory
// import org.allbinary.image.opengles.OpenGLESImageExclusionUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.J2SEMath
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.media.image.ImageScaleUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings

@global export class AnimationFactorySpriteScaleUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil";
    }
    @lazy static jv_instance: AnimationFactorySpriteScaleUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnimationFactorySpriteScaleUtil | null {
        if (!AnimationFactorySpriteScaleUtil.js_instance) {
            AnimationFactorySpriteScaleUtil.js_instance = true;
            AnimationFactorySpriteScaleUtil.jv_instance = new AnimationFactorySpriteScaleUtil().jinit_AnimationFactorySpriteScaleUtil_0();
        }
        return AnimationFactorySpriteScaleUtil.jv_instance;
    }
    static set instance(value: AnimationFactorySpriteScaleUtil | null) {
        AnimationFactorySpriteScaleUtil.js_instance = true;
        AnimationFactorySpriteScaleUtil.jv_instance = value;
    }
    imageCache: ImageCache | null = null;
    imageScaleUtil: ImageScaleUtil | null = null;
    openGLUtil: OpenGLUtil | null = null;
    j2seMath: J2SEMath | null = null;
    openGLESImageExclusionUtil: OpenGLESImageExclusionUtil | null = null;

    jfields_AnimationFactorySpriteScaleUtil(): void {
    this.imageCache = ImageCacheFactory.getInstance();
    this.imageScaleUtil = ImageScaleUtil.getInstance();
    this.openGLUtil = OpenGLUtil.getInstance();
    this.j2seMath = J2SEMath.getInstance();
    this.openGLESImageExclusionUtil = OpenGLESImageExclusionUtil.getInstance();
    }

    jinit_AnimationFactorySpriteScaleUtil_0(): AnimationFactorySpriteScaleUtil {
        super.jinit_JObject_0();
        this.jfields_AnimationFactorySpriteScaleUtil();
        return this;
    }
    

    static getInstance(): AnimationFactorySpriteScaleUtil | null {
        return AnimationFactorySpriteScaleUtil.instance;
    }
    

    createImage(image: Image | null, width: i32, height: i32, scaleWidth: i32, scaleHeight: i32): Sprite | null {
        let spriteFactory: SpriteFactory | null = SpriteFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let sprite: Sprite | null = null;
        let scaledImage: Image | null = null;
        if (scaleWidth != 0 && scaleHeight != 0) {
            let scaleX: f32 = ((<f32>(scaleWidth))) / ((<f32>(width)));
            let scaleY: f32 = ((<f32>(scaleHeight))) / ((<f32>(height)));
            if ((scaleX == (<f32>1.0) && scaleY == (<f32>1.0)) || (scaleX == (<f32>0.0) || scaleY == (<f32>0.0))) {
                scaledImage = this.openGLUtil!.addImage(image); if (JThrowable.pending !== null) return null;
                sprite = spriteFactory!.createSprite(scaledImage, width, height); if (JThrowable.pending !== null) return null;
            } else {
                if (this.openGLESImageExclusionUtil!.isCustomScaling(image)) {
                    let width2: i32 = this.j2seMath!.round((<f32>((scaleWidth))) - (<f32>0.5)); if (JThrowable.pending !== null) return null;
                    let height2: i32 = this.j2seMath!.round((<f32>((scaleHeight))) - (<f32>0.5)); if (JThrowable.pending !== null) return null;
                    let multiplesOf16Width: i32 = width2 / 16;
                    let by16Width: i32 = multiplesOf16Width * 16;
                    scaleX = ((<f32>(by16Width))) / (<f32>(width));
                    let multiplesOf16Height: i32 = height2 / 16;
                    let by16Height: i32 = multiplesOf16Height * 16;
                    scaleY = ((<f32>(by16Height))) / (<f32>(height));
                    if (scaleWidth < width) {
                        scaleX = scaleX * (<f32>2.35);
                    }
                    if (scaleHeight < height) {
                        scaleY = scaleY * (<f32>2.35);
                    }
                } if (JThrowable.pending !== null) return null;
                scaledImage = this.imageScaleUtil!.createImage2(this.imageCache, image, scaleX, (<f32>1.0), scaleY, (<f32>1.0), true); if (JThrowable.pending !== null) return null;
                sprite = spriteFactory!.createSprite(scaledImage, JMath.toInt(((<f32>(width)) * scaleX)), JMath.toInt(((<f32>(height)) * scaleY))); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } else {
            scaledImage = this.openGLUtil!.addImage(image); if (JThrowable.pending !== null) return null;
            sprite = spriteFactory!.createSprite(scaledImage, width, height); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return sprite;
    }
}

