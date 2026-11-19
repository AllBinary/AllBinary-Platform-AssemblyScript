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
// package org.allbinary.animation.vector
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.ColorCompositeInterface

@global export class RectangleAnimation extends Animation implements ColorCompositeInterface {

    jclassName(): string {
        return "org.allbinary.animation.vector.RectangleAnimation";
    }
    width: i32 = 0;
    height: i32 = 0;

    jfields_RectangleAnimation(): void {
    
    
    }
    

    jinit_RectangleAnimation_3(width: i32, height: i32, basicColor: BasicColor | null): RectangleAnimation {
        super.jinit_Animation_0();
        this.jfields_RectangleAnimation();
        this.width = width;
        this.height = height;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextFrame(): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor()); if (JThrowable.pending !== null) return;
        graphics!.drawRect(x, y, this.width, this.height); if (JThrowable.pending !== null) return;
    }
    

    setWidth(width: i32): void {
        this.width = width;
    }
    

    setHeight(height: i32): void {
        this.height = height;
    }
    

    getBasicColorP(): BasicColor | null {
        return super.getBasicColorP();
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
    }
}

