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
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.logic.NullUtil
// import org.allbinary.math.AngleFactory
// import org.allbinary.media.ScaleProperties
// import org.allbinary.media.image.ImageToRotationImageArrayUtil

//TWB - Adjustments should be done in the resource creation and not at the animation level
@global export class PooledImageArrayRotationAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.PooledImageArrayRotationAnimationFactory";
    }
    allBinaryImageRotationAnimationInfo: Object | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_PooledImageArrayRotationAnimationFactory(): void {
    this.allBinaryImageRotationAnimationInfo = NullUtil.getInstance()!.NULL_OBJECT;
    
    }
    

    static createFactory(image: Image | null, animationBehaviorFactory: AnimationBehaviorFactory | null): PooledImageArrayRotationAnimationFactory | null {
        let totalAngle: i32 = (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)); if (JThrowable.pending !== null) return null;
        let angleIncrement: i32 = (totalAngle / GameConfigurationCentral.getInstance()!.getGameControlFidelity()); if (JThrowable.pending !== null) return null;
        return new PooledImageArrayRotationAnimationFactory().jinit_PooledImageArrayRotationAnimationFactory_7(image, image!.getWidth(), image!.getHeight(), -(image!.getWidth() >> 2), -(image!.getHeight() >> 2), angleIncrement, animationBehaviorFactory);
    }
    

    static createDXY(image: Image | null, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): PooledImageArrayRotationAnimationFactory | null {
        let totalAngle: i32 = (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)); if (JThrowable.pending !== null) return null;
        let angleIncrement: i32 = (totalAngle / GameConfigurationCentral.getInstance()!.getGameControlFidelity()); if (JThrowable.pending !== null) return null;
        return new PooledImageArrayRotationAnimationFactory().jinit_PooledImageArrayRotationAnimationFactory_7(image, image!.getWidth(), image!.getHeight(), dx, dy, angleIncrement, animationBehaviorFactory);
    }
    

    jinit_PooledImageArrayRotationAnimationFactory_7(image: Image | null, width: i32, height: i32, dx: i32, dy: i32, angleIncrement: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): PooledImageArrayRotationAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_PooledImageArrayRotationAnimationFactory();
        this.animationBehaviorFactory = animationBehaviorFactory;
        let totalAngle: i32 = (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)); if (JThrowable.pending !== null) return this;
        let imageArray: StaticArray<Image | null> | null = ImageToRotationImageArrayUtil.getInstance()!.generate(image, angleIncrement, totalAngle); if (JThrowable.pending !== null) return this;
        this.allBinaryImageRotationAnimationInfo = new ImageArrayRotationAnimationInfo().jinit_ImageArrayRotationAnimationInfo_5(imageArray, angleIncrement, totalAngle, dx, dy); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return AdjustedImageArrayRotationAnimation.createAdjustedImageArrayRotationAnimationInfo(this.allBinaryImageRotationAnimationInfo, this.animationBehaviorFactory!.getOrCreateInstance());
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

