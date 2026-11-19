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
// import org.allbinary.AndroidUtil
// import org.allbinary.graphics.color.BasicColor

@global export class AdjustedCircleAnimation extends CircleAnimation {

    jclassName(): string {
        return "org.allbinary.animation.vector.AdjustedCircleAnimation";
    }
    xAdjustment: i32 = 0;
    yAdjustment: i32 = 0;

    jfields_AdjustedCircleAnimation(): void {
    this.xAdjustment = 0;
    this.yAdjustment = 0;
    }
    

    static createAnimation(width: i32, height: i32, xAdjustment: i32, yAdjustment: i32, basicColor: BasicColor | null): AdjustedCircleAnimation | null {
        let adjustedCircleAnimation: AdjustedCircleAnimation | null = new AdjustedCircleAnimation().jinit_AdjustedCircleAnimation_3(width, height, basicColor); if (JThrowable.pending !== null) return null;
        adjustedCircleAnimation!.initXY(xAdjustment, yAdjustment); if (JThrowable.pending !== null) return null;
        return adjustedCircleAnimation;
    }
    

    static createW(width: i32, height: i32, innerWidth: i32, basicColor: BasicColor | null): AdjustedCircleAnimation | null {
        let adjustedCircleAnimation: AdjustedCircleAnimation | null = new AdjustedCircleAnimation().jinit_AdjustedCircleAnimation_3(width, height, basicColor); if (JThrowable.pending !== null) return null;
        adjustedCircleAnimation!.init(innerWidth); if (JThrowable.pending !== null) return null;
        return adjustedCircleAnimation;
    }
    

    jinit_AdjustedCircleAnimation_3(width: i32, height: i32, basicColor: BasicColor | null): AdjustedCircleAnimation {
        super.jinit_CircleAnimation_3(width, height, basicColor);
        this.jfields_AdjustedCircleAnimation();
        return this;
    }
    

    initXY(xAdjustment: i32, yAdjustment: i32): void {
        this.xAdjustment = xAdjustment;
        this.yAdjustment = yAdjustment;
    }
    

    init(innerWidth: i32): void {
        if (AndroidUtil.isAndroid()) {
            let widthPortion: i32 = (((innerWidth / 3) * 10) / 7);
            this.xAdjustment = -((this.width >> 1) - widthPortion);
            this.yAdjustment = this.xAdjustment;
        } else {
            this.xAdjustment = -((this.width >> 1) - innerWidth);
            this.yAdjustment = this.xAdjustment;
        } if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor()); if (JThrowable.pending !== null) return;
        graphics!.drawArc(x + this.xAdjustment, y + this.yAdjustment, this.width, this.height, 0, this.TOTAL_ANGLE); if (JThrowable.pending !== null) return;
    }
}

