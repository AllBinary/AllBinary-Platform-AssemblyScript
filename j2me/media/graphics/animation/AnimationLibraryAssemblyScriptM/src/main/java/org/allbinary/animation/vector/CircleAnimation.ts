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
// import org.allbinary.math.AngleFactory

@global export class CircleAnimation extends Animation implements ColorCompositeInterface {

    jclassName(): string {
        return "org.allbinary.animation.vector.CircleAnimation";
    }
    TOTAL_ANGLE: i32 = 0;
    width: i32 = 0;
    height: i32 = 0;

    jfields_CircleAnimation(): void {
    this.TOTAL_ANGLE = (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE));
    
    
    }
    

    jinit_CircleAnimation_3(width: i32, height: i32, basicColor: BasicColor | null): CircleAnimation {
        super.jinit_Animation_0();
        this.jfields_CircleAnimation();
        this.width = width;
        this.height = height;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextFrame(): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor()); if (JThrowable.pending !== null) return;
        graphics!.drawArc(x, y, this.width, this.height, 0, this.TOTAL_ANGLE); if (JThrowable.pending !== null) return;
    }
    

    getBasicColorP(): BasicColor | null {
        return super.getBasicColorP();
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
    }
}

