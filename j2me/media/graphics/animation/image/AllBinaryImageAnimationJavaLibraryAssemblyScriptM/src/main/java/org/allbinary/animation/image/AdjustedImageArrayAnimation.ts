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

@global export class AdjustedImageArrayAnimation extends ImageArrayAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.AdjustedImageArrayAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AdjustedImageArrayAnimation(): void {
    this.dx = 0;
    this.dy = 0;
    }
    

    jinit_AdjustedImageArrayAnimation_4(imageArray: StaticArray<Image | null> | null, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AdjustedImageArrayAnimation {
        super.jinit_ImageArrayAnimation_2(imageArray, animationBehavior);
        this.jfields_AdjustedImageArrayAnimation();
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

