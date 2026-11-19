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

@global export class AllBinaryAdjustedJ2SEImageRotationAnimation extends AllBinaryJ2SEImageRotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.AllBinaryAdjustedJ2SEImageRotationAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AllBinaryAdjustedJ2SEImageRotationAnimation(): void {
    this.dx = 0;
    this.dy = 0;
    }
    

    jinit_AllBinaryAdjustedJ2SEImageRotationAnimation_7(originalImage: Image | null, image: Image | null, angleInfo: AngleInfo | null, totalAngle: i16, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AllBinaryAdjustedJ2SEImageRotationAnimation {
        super.jinit_AllBinaryJ2SEImageRotationAnimation_5(originalImage, image, angleInfo, totalAngle, animationBehavior);
        this.jfields_AllBinaryAdjustedJ2SEImageRotationAnimation();
        this.init(dx, dy); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(dx: i32, dy: i32): void {
        this.dx = dx;
        this.dy = dy;
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
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        super.paintXY(graphics, x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
    }
}

