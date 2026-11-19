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

@global export class RightToLeftImageAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.RightToLeftImageAnimationFactory";
    }
    

    jinit_RightToLeftImageAnimationFactory_4(image: Image | null, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): RightToLeftImageAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), image!.getWidth(), image!.getHeight(), dx, dy, animationBehaviorFactory);
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let scaledImage: Image | null = this.animationFactoryImageScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            this.animationFactoryImageScaleUtil!.processAdjust(this); if (JThrowable.pending !== null) return null;
            return new AdjustedRightToLeftImageAnimation().jinit_AdjustedRightToLeftImageAnimation_4(scaledImage, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new RightToLeftImageAnimation().jinit_RightToLeftImageAnimation_2(scaledImage, this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

