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
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.math.AngleInfo

@global export class ImageArrayRotationAnimation extends ImageArrayBaseRotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayRotationAnimation";
    }
    expectedTotalFrames: i32 = 0;

    jfields_ImageArrayRotationAnimation(): void {
    this.expectedTotalFrames = 0;
    }
    

    static createAnimation(anyType: Object | null, animationBehavior: AnimationBehavior | null): ImageArrayRotationAnimation | null {
        let imageRotationAnimationInfo: ImageArrayRotationAnimationInfo | null = changetype<ImageArrayRotationAnimationInfo | null>(anyType);
        return new ImageArrayRotationAnimation().jinit_ImageArrayRotationAnimation_4(imageRotationAnimationInfo!.getImageArray(), imageRotationAnimationInfo!.getAngleInfoP(), imageRotationAnimationInfo!.getTotalAngle(), animationBehavior);
    }
    

    jinit_ImageArrayRotationAnimation_4(imageArray: StaticArray<Image | null> | null, angleInfo: AngleInfo | null, totalAngle: i32, animationBehavior: AnimationBehavior | null): ImageArrayRotationAnimation {
        super.jinit_ImageArrayBaseRotationAnimation_3(imageArray, angleInfo, animationBehavior);
        this.jfields_ImageArrayRotationAnimation();
        this.initImageArray(imageArray, angleInfo, totalAngle); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initImageArray(imageArray: StaticArray<Image | null> | null, angleInfo: AngleInfo | null, totalAngle: i32): void {
        this.expectedTotalFrames = totalAngle / (<i32>(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())); if (JThrowable.pending !== null) return;
        this.angleInfo!.adjustAngle(0); if (JThrowable.pending !== null) return;
        if (this.expectedTotalFrames != this.getSize()) {
            { JThrowable.raise(new JException().jinit_JException_1("Wrong Number of Frames")); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    setImageArray(imageArray: StaticArray<Image | null> | null): void {
        super.setImageArray(imageArray); if (JThrowable.pending !== null) return;
        this.angleInfo!.adjustAngle(0); if (JThrowable.pending !== null) return;
    }
}

