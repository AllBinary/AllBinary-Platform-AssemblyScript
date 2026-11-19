/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.animation.text
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.AnimationBehavior

@global export class AdjustCustomTextAnimation extends CustomTextAnimation {

    jclassName(): string {
        return "org.allbinary.animation.text.AdjustCustomTextAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AdjustCustomTextAnimation(): void {
    
    
    }
    

    jinit_AdjustCustomTextAnimation_5(text: string | null, fontSize: i32, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AdjustCustomTextAnimation {
        super.jinit_CustomTextAnimation_3(text, fontSize, animationBehavior);
        this.jfields_AdjustCustomTextAnimation();
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    getDx(): i32 {
        return this.dx;
    }
    

    setDx(dx: i32): void {
        this.dx = dx;
    }
    

    getDy(): i32 {
        return this.dy;
    }
    

    setDy(dy: i32): void {
        this.dy = dy;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        super.paintXY(graphics, x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
    }
}

