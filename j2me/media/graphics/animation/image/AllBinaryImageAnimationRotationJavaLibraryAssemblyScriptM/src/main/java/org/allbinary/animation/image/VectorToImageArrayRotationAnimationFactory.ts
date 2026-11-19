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
// import javax.microedition.lcdui.NullImage
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.VectorAnimation
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.image.AnimationFrameToImageUtil
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.media.ScaleProperties
// import org.allbinary.media.image.ImageToRotationImageArrayUtil
// import org.allbinary.vector.VectorInfo

@global export class VectorToImageArrayRotationAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.VectorToImageArrayRotationAnimationFactory";
    }
    imageArray: StaticArray<Image | null> | null = null;
    angleIncrement: i32 = 0;

    jfields_VectorToImageArrayRotationAnimationFactory(): void {
    this.imageArray = NullImage.NULL_IMAGE_ARRAY;
    this.angleIncrement = 0;
    }
    

    jinit_VectorToImageArrayRotationAnimationFactory_3(vectorInfo: VectorInfo | null, basicColor: BasicColor | null, animationBehaviorFactory: AnimationBehaviorFactory | null): VectorToImageArrayRotationAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(AnimationFrameToImageUtil.getInstance()!.getInstanceTranslate(vectorInfo!.getWidth(), vectorInfo!.getHeight(), VectorAnimation.createVectorAnimation(vectorInfo!.getPoints(), basicColor, animationBehaviorFactory!.getOrCreateInstance())), PrimitiveIntUtil.getArrayInstance(), 0, 0, 0, 0, animationBehaviorFactory);
        this.jfields_VectorToImageArrayRotationAnimationFactory();
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
        let angleFactory: AngleFactory | null = AngleFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.angleIncrement = (<i32>(angleFactory!.TOTAL_ANGLE)) / GameConfigurationCentral.getInstance()!.getGameControlFidelity(); if (JThrowable.pending !== null) return;
        this.imageArray = ImageToRotationImageArrayUtil.getInstance()!.generate(this.getImage(), this.getAngleIncrement(), (<i32>(angleFactory!.TOTAL_ANGLE))); if (JThrowable.pending !== null) return;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            return new AdjustedImageArrayRotationAnimation().jinit_AdjustedImageArrayRotationAnimation_6(this.imageArray, AngleInfo.getInstance1((<i16>(this.getAngleIncrement()))), (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return AdjustedImageArrayRotationAnimation.createAnimation_4(this.imageArray, AngleInfo.getInstance1((<i16>(this.angleIncrement))), (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)), this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getAngleIncrement(): i32 {
        return this.angleIncrement;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

