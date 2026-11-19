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
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.math.AngleInfo

//TWB - Adjustments should be done in the resource creation and not at the animation level
@global export class AdjustedImageArrayRotationAnimation extends ImageArrayRotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.AdjustedImageArrayRotationAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AdjustedImageArrayRotationAnimation(): void {
    this.dx = 0;
    this.dy = 0;
    }
    

    static createAdjustedImageArrayRotationAnimationInfo(anyType: Object | null, animationBehavior: AnimationBehavior | null): AdjustedImageArrayRotationAnimation | null {
        let imageRotationAnimationInfo: ImageArrayRotationAnimationInfo | null = changetype<ImageArrayRotationAnimationInfo | null>(anyType);
        return new AdjustedImageArrayRotationAnimation().jinit_AdjustedImageArrayRotationAnimation_6(imageRotationAnimationInfo!.getImageArray(), imageRotationAnimationInfo!.getAngleInfoP(), imageRotationAnimationInfo!.getTotalAngle(), imageRotationAnimationInfo!.getDx(), imageRotationAnimationInfo!.getDy(), animationBehavior);
    }
    

    static createAnimation_4(imageArray: StaticArray<Image | null> | null, angleInfo: AngleInfo | null, totalAngle: i32, animationBehavior: AnimationBehavior | null): AdjustedImageArrayRotationAnimation | null {
        return new AdjustedImageArrayRotationAnimation().jinit_AdjustedImageArrayRotationAnimation_6(imageArray, angleInfo, totalAngle, -(imageArray![0]!.getWidth() >> 2), -(imageArray![0]!.getHeight() >> 2), animationBehavior);
    }
    

    jinit_AdjustedImageArrayRotationAnimation_6(imageArray: StaticArray<Image | null> | null, angleInfo: AngleInfo | null, totalAngle: i32, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AdjustedImageArrayRotationAnimation {
        super.jinit_ImageArrayRotationAnimation_4(imageArray, angleInfo, totalAngle, animationBehavior);
        this.jfields_AdjustedImageArrayRotationAnimation();
        this.init(dx, dy); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(dx: i32, dy: i32): void {
        this.setDx(dx); if (JThrowable.pending !== null) return;
        this.setDy(dy); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        super.paintXY(graphics, x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
    }
    

    setDx(dx: i32): void {
        this.dx = dx;
    }
    

    getDx(): i32 {
        return this.dx;
    }
    

    setDy(dy: i32): void {
        this.dy = dy;
    }
    

    getDy(): i32 {
        return this.dy;
    }
}

