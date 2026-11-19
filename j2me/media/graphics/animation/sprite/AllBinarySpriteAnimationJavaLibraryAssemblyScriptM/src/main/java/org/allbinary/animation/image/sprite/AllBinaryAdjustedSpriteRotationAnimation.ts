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
// package org.allbinary.animation.image.sprite
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.game.Sprite
// import org.allbinary.animation.AnimationBehavior

@global export class AllBinaryAdjustedSpriteRotationAnimation extends AllBinarySpriteRotationAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.AllBinaryAdjustedSpriteRotationAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AllBinaryAdjustedSpriteRotationAnimation(): void {
    
    
    }
    

    jinit_AllBinaryAdjustedSpriteRotationAnimation_5(sprite: Sprite | null, image: Image | null, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AllBinaryAdjustedSpriteRotationAnimation {
        super.jinit_AllBinarySpriteRotationAnimation_3(sprite, image, animationBehavior);
        this.jfields_AllBinaryAdjustedSpriteRotationAnimation();
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    paintXY(g: Graphics | null, x: i32, y: i32): void {
        this.sprite!.setPosition(x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
        this.paint(g); if (JThrowable.pending !== null) return;
    }
}

