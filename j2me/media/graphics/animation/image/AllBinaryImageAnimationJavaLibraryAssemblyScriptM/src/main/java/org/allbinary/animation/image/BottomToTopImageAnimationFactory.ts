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
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class BottomToTopImageAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.BottomToTopImageAnimationFactory";
    }
    

    jinit_BottomToTopImageAnimationFactory_2(image: Image | null, animationBehaviorFactory: AnimationBehaviorFactory | null): BottomToTopImageAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), image!.getWidth(), image!.getHeight(), 0, 0, animationBehaviorFactory);
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let scaledImage: Image | null = this.animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        return new BottomToTopImageAnimation().jinit_BottomToTopImageAnimation_2(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());
    }
}

