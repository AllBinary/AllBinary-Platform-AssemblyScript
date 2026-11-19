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
// import org.allbinary.DisposalUtil
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.RotationAnimation
// import org.allbinary.graphics.Anchor
// import org.allbinary.logic.math.PrimitiveIntUtil
// import org.allbinary.math.AngleInfo
// import org.allbinary.util.CircularIndexUtil

@global export class ImageBaseRotationAnimation extends RotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageBaseRotationAnimation";
    }
    image: Image | null = null;
    anchor: i32 = 0;

    jfields_ImageBaseRotationAnimation(): void {
    
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_ImageBaseRotationAnimation_4(image: Image | null, angleInfo: AngleInfo | null, totalAngle: i16, animationBehavior: AnimationBehavior | null): ImageBaseRotationAnimation {
        super.jinit_RotationAnimation_3(angleInfo, CircularIndexUtil.createInstance(totalAngle / angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
        this.jfields_ImageBaseRotationAnimation();
        this.image = image;
        return this;
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawImage(this.image, x, y, this.anchor); if (JThrowable.pending !== null) return;
    }
    

    getImage(): Image | null {
        return this.image;
    }
    

    getWidth(): i32 {
        return this.image!.getWidth();
    }
    

    getHeight(): i32 {
        return this.image!.getHeight();
    }
    

    close(): void {
        DisposalUtil.getInstance()!.disposeImage(this.image); if (JThrowable.pending !== null) return;
    }
    

    finalize(): void {
        DisposalUtil.getInstance()!.disposeImage(this.image); if (JThrowable.pending !== null) return;
    }
}

