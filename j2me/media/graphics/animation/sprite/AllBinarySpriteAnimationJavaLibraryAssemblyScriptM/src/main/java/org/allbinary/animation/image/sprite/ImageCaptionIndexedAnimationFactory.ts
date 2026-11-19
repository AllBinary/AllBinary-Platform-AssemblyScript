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
// package org.allbinary.animation.image.sprite
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.game.Sprite
// import javax.microedition.media.Player
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.animation.caption.CaptionIndexedAnimation
// import org.allbinary.animation.image.ImageAnimation
// import org.allbinary.graphics.color.BasicColorUtil
// import org.allbinary.image.AnimationFactoryImageScaleUtil
// import org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.media.ScaleProperties
// import org.allbinary.media.audio.Sound

@global export class ImageCaptionIndexedAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.ImageCaptionIndexedAnimationFactory";
    }
    animationFactoryImageScaleUtil: AnimationFactoryImageScaleUtil | null = null;
    animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil | null = null;
    captionImage: Image | null = null;
    spriteMovieImage: Image | null = null;
    frameWidth: i32 = 0;
    frameHeight: i32 = 0;
    captionDx: i32 = 0;
    captionDy: i32 = 0;
    dx: i32 = 0;
    dy: i32 = 0;
    time: i32 = 0;
    soundInterface: Sound | null = null;
    scaleProperties: ScaleProperties | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_ImageCaptionIndexedAnimationFactory(): void {
    this.animationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance();
    this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
    
    
    
    
    
    
    
    
    
    
    this.scaleProperties = ScaleProperties.instance;
    
    }
    

    jinit_ImageCaptionIndexedAnimationFactory_11(captionImage: Image | null, spriteMovieImage: Image | null, soundInterface: Sound | null, frameWidth: i32, frameHeight: i32, captionDx: i32, captionDy: i32, dx: i32, dy: i32, time: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): ImageCaptionIndexedAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_ImageCaptionIndexedAnimationFactory();
        if (animationBehaviorFactory == AnimationBehaviorFactory.getInstance()) {
            ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.captionImage = captionImage;
        this.spriteMovieImage = spriteMovieImage;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.captionDx = captionDx;
        this.captionDy = captionDy;
        this.dx = dx;
        this.dy = dy;
        this.time = time;
        this.soundInterface = soundInterface;
        this.animationBehaviorFactory = animationBehaviorFactory;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let scaledImage: Image | null = this.animationFactoryImageScaleUtil!.createImage(this.captionImage, this.captionImage!.getWidth(), this.captionImage!.getHeight(), this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        let animationInterface: Animation | null = new ImageAnimation().jinit_ImageAnimation_2(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance()); if (JThrowable.pending !== null) return null;
        let sprite: Sprite | null = this.animationFactorySpriteScaleUtil!.createImage(this.spriteMovieImage, this.frameWidth, this.frameHeight, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        let movieIndexedAnimationInterface: IndexedAnimation | null = new SpriteIndexedAnimation().jinit_SpriteIndexedAnimation_4(sprite, this.spriteMovieImage, BasicColorUtil.getInstance()!.ZERO_ARRAY, this.animationBehaviorFactory!.getOrCreateInstance()); if (JThrowable.pending !== null) return null;
        let player: Player | null = this.soundInterface!.getPlayerP(); if (JThrowable.pending !== null) return null;
        if (player == null) {
            { JThrowable.raise(new JException().jinit_JException_1("Sound Was not Initialized")); return null; }
        } if (JThrowable.pending !== null) return null;
        return new CaptionIndexedAnimation().jinit_CaptionIndexedAnimation_9(animationInterface, movieIndexedAnimationInterface, player, this.captionDx, this.captionDy, this.dx, this.dy, this.time, this.animationBehaviorFactory!.getOrCreateInstance());
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
        this.scaleProperties = scaleProperties;
    }
}

