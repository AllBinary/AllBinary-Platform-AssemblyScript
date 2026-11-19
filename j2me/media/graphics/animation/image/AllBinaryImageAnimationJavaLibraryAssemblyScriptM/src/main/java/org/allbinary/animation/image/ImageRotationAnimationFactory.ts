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
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo

@global export class ImageRotationAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageRotationAnimationFactory";
    }
    angleIncrement: i16 = 0;

    jfields_ImageRotationAnimationFactory(): void {
    
    }
    

    jinit_ImageRotationAnimationFactory_7(image: Image | null, width: i32, height: i32, dx: i32, dy: i32, angleIncrement: i16, animationBehaviorFactory: AnimationBehaviorFactory | null): ImageRotationAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        this.jfields_ImageRotationAnimationFactory();
        this.angleIncrement = angleIncrement;
        this.animationFactoryInitializationVisitor!.dx = dx;
        this.animationFactoryInitializationVisitor!.dy = dy;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            this.animationFactoryImageScaleUtil!.processAdjust(this); if (JThrowable.pending !== null) return null;
            return new AdjustedImageBaseRotationAnimation().jinit_AdjustedImageBaseRotationAnimation_6(this.getImage(), AngleInfo.getInstance1(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new ImageBaseRotationAnimation().jinit_ImageBaseRotationAnimation_4(this.getImage(), AngleInfo.getInstance1(this.angleIncrement), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getAngleIncrementP(): i16 {
        return this.angleIncrement;
    }
}

