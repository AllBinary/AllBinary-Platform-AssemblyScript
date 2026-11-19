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
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.media.image.ImageToRotationImageArrayUtil

@global export class AllBinaryArrayImageRotationAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.AllBinaryArrayImageRotationAnimationFactory";
    }
    imageArray: StaticArray<Image | null> | null = null;
    angleIncrement: i32 = 0;

    jfields_AllBinaryArrayImageRotationAnimationFactory(): void {
    this.imageArray = NullImage.NULL_IMAGE_ARRAY;
    
    }
    

    static createFactory(image: Image | null, dx: i32, dy: i32): AllBinaryArrayImageRotationAnimationFactory | null {
        let arrayImageRotationAnimationFactory: AllBinaryArrayImageRotationAnimationFactory | null = new AllBinaryArrayImageRotationAnimationFactory().jinit_AllBinaryArrayImageRotationAnimationFactory_5(image, image!.getWidth(), image!.getHeight(), (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)) / GameConfigurationCentral.getInstance()!.getGameControlFidelity(), AnimationBehaviorFactory.getInstance()); if (JThrowable.pending !== null) return null;
        arrayImageRotationAnimationFactory!.initDXY(dx, dy); if (JThrowable.pending !== null) return null;
        return arrayImageRotationAnimationFactory;
    }
    

    static createFactoryA(image: Image | null, dx: i32, dy: i32, angleIncrement: i32): AllBinaryArrayImageRotationAnimationFactory | null {
        let arrayImageRotationAnimationFactory: AllBinaryArrayImageRotationAnimationFactory | null = new AllBinaryArrayImageRotationAnimationFactory().jinit_AllBinaryArrayImageRotationAnimationFactory_5(image, image!.getWidth(), image!.getHeight(), angleIncrement, AnimationBehaviorFactory.getInstance()); if (JThrowable.pending !== null) return null;
        arrayImageRotationAnimationFactory!.initDXY(dx, dy); if (JThrowable.pending !== null) return null;
        return arrayImageRotationAnimationFactory;
    }
    

    jinit_AllBinaryArrayImageRotationAnimationFactory_5(image: Image | null, width: i32, height: i32, angleIncrement: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinaryArrayImageRotationAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        this.jfields_AllBinaryArrayImageRotationAnimationFactory();
        this.angleIncrement = angleIncrement;
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
        this.setImageArray(ImageToRotationImageArrayUtil.getInstance()!.generate(this.getImage(), this.getAngleIncrement(), (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)))); if (JThrowable.pending !== null) return;
    }
    

    initDXY(dx: i32, dy: i32): void {
        this.animationFactoryInitializationVisitor!.dx = dx;
        this.animationFactoryInitializationVisitor!.dy = dy;
        this.animationFactoryInitializationVisitor!.originalDx = dx;
        this.animationFactoryInitializationVisitor!.originalDy = dy;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let scaledImageArray: StaticArray<Image | null> | null = new StaticArray<Image | null>(this.imageArray!.length);
        let size: i32 = scaledImageArray!.length;
        let image: Image | null = this.getImage(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            scaledImageArray![index] = this.animationFactoryImageScaleUtil!.createImage(image, image!.getWidth(), image!.getHeight(), this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            this.animationFactoryImageScaleUtil!.processAdjust(this); if (JThrowable.pending !== null) return null;
            return new AdjustedImageArrayRotationAnimation().jinit_AdjustedImageArrayRotationAnimation_6(scaledImageArray, AngleInfo.getInstance1((<i16>(this.getAngleIncrement()))), (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new ImageArrayRotationAnimation().jinit_ImageArrayRotationAnimation_4(scaledImageArray, AngleInfo.getInstance1((<i16>(this.getAngleIncrement()))), (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)), this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    setImageArray(imageArray: StaticArray<Image | null> | null): void {
        this.imageArray = imageArray;
    }
    

    getAngleIncrement(): i32 {
        return this.angleIncrement;
    }
}

