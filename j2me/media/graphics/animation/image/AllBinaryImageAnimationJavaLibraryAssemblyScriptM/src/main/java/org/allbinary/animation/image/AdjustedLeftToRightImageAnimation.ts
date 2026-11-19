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

@global export class AdjustedLeftToRightImageAnimation extends LeftToRightImageAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.AdjustedLeftToRightImageAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AdjustedLeftToRightImageAnimation(): void {
    this.dx = 0;
    this.dy = 0;
    }
    

    jinit_AdjustedLeftToRightImageAnimation_5(image: Image | null, sequenceArray: StaticArray<i32> | null, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AdjustedLeftToRightImageAnimation {
        super.jinit_LeftToRightImageAnimation_3(image, sequenceArray, animationBehavior);
        this.jfields_AdjustedLeftToRightImageAnimation();
        this.init(dx, dy); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(dx: i32, dy: i32): void {
        this.dx = dx;
        this.dy = dy;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        super.paintXY(graphics, x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
    }
}

