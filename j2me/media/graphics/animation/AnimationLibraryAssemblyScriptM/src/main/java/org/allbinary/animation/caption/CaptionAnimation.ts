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
// package org.allbinary.animation.caption
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation

@global export class CaptionAnimation extends Animation {

    jclassName(): string {
        return "org.allbinary.animation.caption.CaptionAnimation";
    }
    animationInterface: Animation | null = null;
    overlayAnimationInterface: Animation | null = null;
    captionDx: i32 = 0;
    captionDy: i32 = 0;
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_CaptionAnimation(): void {
    
    
    
    
    
    
    }
    

    jinit_CaptionAnimation_6(animationInterface: Animation | null, overlayAnimationInterface: Animation | null, captionDx: i32, captionDy: i32, dx: i32, dy: i32): CaptionAnimation {
        super.jinit_Animation_0();
        this.jfields_CaptionAnimation();
        this.animationInterface = animationInterface;
        this.overlayAnimationInterface = overlayAnimationInterface;
        this.captionDx = captionDx;
        this.captionDy = captionDy;
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    nextFrame(): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.animationInterface!.paintXY(graphics, x + this.captionDx, y + this.captionDy); if (JThrowable.pending !== null) return;
        this.overlayAnimationInterface!.paintXY(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy); if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
        this.animationInterface!.paintThreedXYZ(graphics, x + this.captionDx, y + this.captionDy, z); if (JThrowable.pending !== null) return;
        this.overlayAnimationInterface!.paintThreedXYZ(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy, z); if (JThrowable.pending !== null) return;
    }
}

