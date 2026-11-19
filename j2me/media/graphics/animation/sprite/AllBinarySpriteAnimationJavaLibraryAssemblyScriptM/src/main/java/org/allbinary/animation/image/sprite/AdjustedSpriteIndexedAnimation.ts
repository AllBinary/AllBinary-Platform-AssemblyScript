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
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorUtil

@global export class AdjustedSpriteIndexedAnimation extends SpriteIndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.AdjustedSpriteIndexedAnimation";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AdjustedSpriteIndexedAnimation(): void {
    
    
    }
    

    jinit_AdjustedSpriteIndexedAnimation_6(sprite: Sprite | null, image: Image | null, basicColorArray: StaticArray<BasicColor | null> | null, dx: i32, dy: i32, animationBehavior: AnimationBehavior | null): AdjustedSpriteIndexedAnimation {
        super.jinit_SpriteIndexedAnimation_4(sprite, image, basicColorArray, animationBehavior);
        this.jfields_AdjustedSpriteIndexedAnimation();
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    paintFrame(graphics: Graphics | null, frame: i32, x: i32, y: i32): void {
        this.setFrame(frame); if (JThrowable.pending !== null) return;
        this.sprite!.setPosition(x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintXY(g: Graphics | null, x: i32, y: i32): void {
        this.sprite!.setPosition(x + this.dx, y + this.dy); if (JThrowable.pending !== null) return;
        super.paint(g); if (JThrowable.pending !== null) return;
    }
    

    paint(g: Graphics | null): void {
        this.sprite!.setPosition(this.dx, this.dy); if (JThrowable.pending !== null) return;
        super.paint(g); if (JThrowable.pending !== null) return;
    }
}

