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
// package org.allbinary.graphics.paint
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation

@global export class AnimationCompositePaintable extends InitUpdatePaintable {

    jclassName(): string {
        return "org.allbinary.graphics.paint.AnimationCompositePaintable";
    }
    animationInterface: Animation | null = null;

    jfields_AnimationCompositePaintable(): void {
    
    }
    

    jinit_AnimationCompositePaintable_1(animationInterface: Animation | null): AnimationCompositePaintable {
        super.jinit_InitUpdatePaintable_0();
        this.jfields_AnimationCompositePaintable();
        this.animationInterface = animationInterface;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.animationInterface!.paintXY(graphics, 0, 0); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        this.animationInterface!.paintThreedXYZ(graphics, 0, 0, 0); if (JThrowable.pending !== null) return;
    }
}

