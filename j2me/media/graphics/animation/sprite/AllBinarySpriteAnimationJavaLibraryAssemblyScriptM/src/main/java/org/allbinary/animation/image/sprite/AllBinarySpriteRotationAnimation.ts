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
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.game.Sprite
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.direction.Direction
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo

@global export class AllBinarySpriteRotationAnimation extends HackRotationSpriteIndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.AllBinarySpriteRotationAnimation";
    }
    

    jinit_AllBinarySpriteRotationAnimation_3(sprite: Sprite | null, image: Image | null, animationBehavior: AnimationBehavior | null): AllBinarySpriteRotationAnimation {
        super.jinit_HackRotationSpriteIndexedAnimation_4(sprite, image, AngleInfo.getInstance1((<i16>(((<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE)) / sprite!.getRawFrameCount())))), animationBehavior);
        this.angleInfo!.adjustAngle(this.sprite!.getFrame()); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    nextRotation(): void {
        this.sprite!.nextFrame(); if (JThrowable.pending !== null) return;
        this.angleInfo!.adjustAngle(this.sprite!.getFrame()); if (JThrowable.pending !== null) return;
    }
    

    previousRotation(): void {
        this.sprite!.prevFrame(); if (JThrowable.pending !== null) return;
        this.angleInfo!.adjustAngle(this.sprite!.getFrame()); if (JThrowable.pending !== null) return;
    }
    

    setFrameByDirection(direction: Direction | null): void {
        let angle: Angle | null = this.directionUtil!.getFrameAngle(direction); if (JThrowable.pending !== null) return;
        this.adjustFrameToAngle(angle); if (JThrowable.pending !== null) return;
    }
    

    setFrameToAngle(angle: Angle | null): void {
        this.adjustFrameToAngle(angle); if (JThrowable.pending !== null) return;
    }
    

    setFrame(index: i32): void {
        this.sprite!.setFrame(index); if (JThrowable.pending !== null) return;
        this.angleInfo!.adjustAngle(this.getFrame()); if (JThrowable.pending !== null) return;
    }
    

    adjustFrameToAngle(angle: Angle | null): void {
        this.adjustFrame(angle!.getValue()); if (JThrowable.pending !== null) return;
    }
    

    adjustFrame(angle: i16): void {
        this.setFrame(this.frameUtil!.getFrameForAngle(angle, (<i32>(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())))); if (JThrowable.pending !== null) return;
    }
}

