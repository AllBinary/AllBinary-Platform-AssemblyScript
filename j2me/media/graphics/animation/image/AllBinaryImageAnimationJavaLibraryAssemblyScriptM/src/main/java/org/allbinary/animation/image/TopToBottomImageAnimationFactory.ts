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
// import org.allbinary.animation.AnimationBehaviorFactory

@global export class TopToBottomImageAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.TopToBottomImageAnimationFactory";
    }
    

    jinit_TopToBottomImageAnimationFactory_3(image: Image | null, sequenceArray: StaticArray<i32> | null, animationBehaviorFactory: AnimationBehaviorFactory | null): TopToBottomImageAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, sequenceArray, image!.getWidth(), image!.getHeight(), 0, 0, animationBehaviorFactory);
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let scaledImage: Image | null = this.animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        return new TopToBottomImageAnimation().jinit_TopToBottomImageAnimation_3(scaledImage, this.getSequenceArray(), this.animationBehaviorFactory!.getOrCreateInstance());
    }
}

