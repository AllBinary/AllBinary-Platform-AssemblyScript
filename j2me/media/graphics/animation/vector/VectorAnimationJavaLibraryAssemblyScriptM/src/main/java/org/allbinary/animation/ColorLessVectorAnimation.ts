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
// import org.allbinary.graphics.color.BasicColorFactory

@global export class ColorLessVectorAnimation extends VectorAnimation {

    jclassName(): string {
        return "org.allbinary.animation.ColorLessVectorAnimation";
    }
    

    jinit_ColorLessVectorAnimation_2(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, animationBehavior: AnimationBehavior | null): ColorLessVectorAnimation {
        super.jinit_VectorAnimation_3(currentPoints, BasicColorFactory.getInstance()!.WHITE, animationBehavior);
        return this;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.paintVectors(graphics, x, y); if (JThrowable.pending !== null) return;
    }
}

