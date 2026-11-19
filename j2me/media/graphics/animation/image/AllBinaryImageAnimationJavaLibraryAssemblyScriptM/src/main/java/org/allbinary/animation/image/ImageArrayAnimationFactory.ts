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
// package org.allbinary.animation.image
// import javax.microedition.lcdui.Image
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.media.ScaleProperties

@global export class ImageArrayAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayAnimationFactory";
    }
    dx: i32 = 0;
    dy: i32 = 0;
    imageArray: StaticArray<Image | null> | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_ImageArrayAnimationFactory(): void {
    this.dx = 0;
    this.dy = 0;
    
    
    }
    

    jinit_ImageArrayAnimationFactory_4(imageArray: StaticArray<Image | null> | null, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): ImageArrayAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_ImageArrayAnimationFactory();
        this.imageArray = imageArray;
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        if (this.dx != 0 || this.dy != 0) {
            return new AdjustedImageArrayAnimation().jinit_AdjustedImageArrayAnimation_4(this.imageArray, this.dx, this.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new ImageArrayAnimation().jinit_ImageArrayAnimation_2(this.imageArray, AnimationBehavior.getInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

