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
// package org.allbinary.animation.image
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import org.allbinary.DisposalUtil
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.graphics.Anchor
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class ImageAnimation extends IndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageAnimation";
    }
    image: Image | null = null;
    anchor: i32 = 0;

    jfields_ImageAnimation(): void {
    
    this.anchor = Anchor.TOP_LEFT;
    }
    

    jinit_ImageAnimation_2(image: Image | null, animationBehavior: AnimationBehavior | null): ImageAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_ImageAnimation();
        this.image = image;
        return this;
    }
    

    getAnimationSize(): i32 {
        return this.getSize();
    }
    

    nextFrame(): void {
    }
    

    previousFrame(): void {
    }
    

    setFrame(index: i32): void {
    }
    

    getFrame(): i32 {
        return 0;
    }
    

    getSize(): i32 {
        return 1;
    }
    

    setSequence(sequence: StaticArray<i32> | null): void {
    }
    

    getSequence(): StaticArray<i32> | null {
        return PrimitiveIntUtil.getArrayInstance();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        graphics!.drawImage(this.image, x, y, this.anchor); if (JThrowable.pending !== null) return;
    }
    

    getImage(): Image | null {
        return this.image;
    }
    

    close(): void {
        DisposalUtil.getInstance()!.disposeImage(this.image); if (JThrowable.pending !== null) return;
    }
    

    finalize(): void {
        DisposalUtil.getInstance()!.disposeImage(this.image); if (JThrowable.pending !== null) return;
    }
}

