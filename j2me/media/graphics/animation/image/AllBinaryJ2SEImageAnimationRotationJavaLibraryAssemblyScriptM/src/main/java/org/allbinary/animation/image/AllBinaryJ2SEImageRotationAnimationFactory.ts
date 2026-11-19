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
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.graphics.opengles.OpenGLUtil
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.media.image.ImageCopyUtil

@global export class AllBinaryJ2SEImageRotationAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.AllBinaryJ2SEImageRotationAnimationFactory";
    }
    angleIncrementP: i16 = 0;
    resizeCanvasForRotation: bool = false;

    jfields_AllBinaryJ2SEImageRotationAnimationFactory(): void {
    
    
    }
    

    static createDXY(image: Image | null, width: i32, height: i32, dx: i32, dy: i32, angleIncrement: i16, animationBehaviorFactory: AnimationBehaviorFactory | null, resizeCanvasForRotation: bool): AllBinaryJ2SEImageRotationAnimationFactory | null {
        let imageRotationAnimationFactory: AllBinaryJ2SEImageRotationAnimationFactory | null = new AllBinaryJ2SEImageRotationAnimationFactory().jinit_AllBinaryJ2SEImageRotationAnimationFactory_6(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation); if (JThrowable.pending !== null) return null;
        imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.dx = dx;
        imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.dy = dy;
        imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.originalDx = dx;
        imageRotationAnimationFactory!.animationFactoryInitializationVisitor!.originalDy = dy;
        return imageRotationAnimationFactory;
    }
    

    jinit_AllBinaryJ2SEImageRotationAnimationFactory_6(image: Image | null, width: i32, height: i32, angleIncrement: i16, animationBehaviorFactory: AnimationBehaviorFactory | null, resizeCanvasForRotation: bool): AllBinaryJ2SEImageRotationAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        this.jfields_AllBinaryJ2SEImageRotationAnimationFactory();
        this.angleIncrementP = angleIncrement;
        this.resizeCanvasForRotation = resizeCanvasForRotation;
        return this;
    }
    

    getCanvasImage(): Image | null {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return null;
        if (this.resizeCanvasForRotation && !features!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)) {
            return ImageCopyUtil.getInstance()!.createImageScale(this.getImage(), (<f32>1.44), false);
        } else {
            return this.getImage();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let imageCopyUtil: ImageCopyUtil | null = ImageCopyUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let canvasImage: Image | null = this.getCanvasImage(); if (JThrowable.pending !== null) return null;
        let scaledImage: Image | null = this.animationFactoryImageScaleUtil!.createImage(canvasImage, this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        let openGLUtil: OpenGLUtil | null = OpenGLUtil.getInstance(); if (JThrowable.pending !== null) return null;
        scaledImage = openGLUtil!.addImage(scaledImage); if (JThrowable.pending !== null) return null;
        let copyOfScaledImage: Image | null = imageCopyUtil!.createImageForRotation(scaledImage); if (JThrowable.pending !== null) return null;
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            this.animationFactoryImageScaleUtil!.processAdjust(this); if (JThrowable.pending !== null) return null;
            return new AllBinaryAdjustedJ2SEImageRotationAnimation().jinit_AllBinaryAdjustedJ2SEImageRotationAnimation_7(scaledImage, copyOfScaledImage, AngleInfo.getInstance1(this.angleIncrementP), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new AllBinaryJ2SEImageRotationAnimation().jinit_AllBinaryJ2SEImageRotationAnimation_5(scaledImage, copyOfScaledImage, AngleInfo.getInstance1(this.angleIncrementP), AngleFactory.getInstance()!.TOTAL_ANGLE, this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getAngleIncrement(): i16 {
        return this.angleIncrementP;
    }
}

