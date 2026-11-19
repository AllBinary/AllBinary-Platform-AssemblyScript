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
// package org.allbinary.animation
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor

@global export class AdjustedVectorAnimation extends VectorAnimation {

    jclassName(): string {
        return "org.allbinary.animation.AdjustedVectorAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AdjustedVectorAnimation(): void {
    
    
    }
    

    jinit_AdjustedVectorAnimation_5(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AdjustedVectorAnimation {
        super.jinit_VectorAnimation_3(currentPoints, basicColor, animationBehavior);
        this.jfields_AdjustedVectorAnimation();
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        super.paintXY(graphics, x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
    }
}

