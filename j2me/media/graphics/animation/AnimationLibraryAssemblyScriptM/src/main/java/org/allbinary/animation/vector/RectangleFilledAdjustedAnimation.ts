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
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.ColorCompositeInterface

@global export class RectangleFilledAdjustedAnimation extends RectangleFilledAnimation implements ColorCompositeInterface {

    jclassName(): string {
        return "org.allbinary.animation.vector.RectangleFilledAdjustedAnimation";
    }
    offsetX: i32 = 0;
    offsetY: i32 = 0;

    jfields_RectangleFilledAdjustedAnimation(): void {
    
    
    }
    

    jinit_RectangleFilledAdjustedAnimation_5(width: i32, height: i32, offsetX: i32, offsetY: i32, basicColor: BasicColor | null): RectangleFilledAdjustedAnimation {
        super.jinit_RectangleFilledAnimation_3(width, height, basicColor);
        this.jfields_RectangleFilledAdjustedAnimation();
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextFrame(): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor()); if (JThrowable.pending !== null) return;
        super.paintXY(graphics, x + this.offsetX, y + this.offsetY); if (JThrowable.pending !== null) return;
    }
    

    setOffsetX(offsetX: i32): void {
        this.offsetX = offsetX;
    }
    

    setOffsetY(offsetY: i32): void {
        this.offsetY = offsetY;
    }
    

    getBasicColorP(): BasicColor | null {
        return super.getBasicColorP();
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
    }
}

