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
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.image.BaseImageAnimationFactory
// import org.allbinary.graphics.color.BasicColorUtil
// import org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class OneRowSpriteIndexedAnimationFactory extends BaseImageAnimationFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.OneRowSpriteIndexedAnimationFactory";
    }
    animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil | null = null;

    jfields_OneRowSpriteIndexedAnimationFactory(): void {
    this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
    }
    

    static createFactoryDX(image: Image | null, dx: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): OneRowSpriteIndexedAnimationFactory | null {
        let oneRowSpriteIndexedAnimationFactory: OneRowSpriteIndexedAnimationFactory | null = new OneRowSpriteIndexedAnimationFactory().jinit_OneRowSpriteIndexedAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), image!.getHeight(), image!.getHeight(), 0, 0, animationBehaviorFactory); if (JThrowable.pending !== null) return null;
        oneRowSpriteIndexedAnimationFactory!.initW(dx); if (JThrowable.pending !== null) return null;
        return oneRowSpriteIndexedAnimationFactory;
    }
    

    static createFactoryDXY(image: Image | null, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): OneRowSpriteIndexedAnimationFactory | null {
        let oneRowSpriteIndexedAnimationFactory: OneRowSpriteIndexedAnimationFactory | null = new OneRowSpriteIndexedAnimationFactory().jinit_OneRowSpriteIndexedAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), image!.getHeight(), image!.getHeight(), 0, 0, animationBehaviorFactory); if (JThrowable.pending !== null) return null;
        oneRowSpriteIndexedAnimationFactory!.init(dx, dy); if (JThrowable.pending !== null) return null;
        return oneRowSpriteIndexedAnimationFactory;
    }
    

    static createFactoryWH(image: Image | null, width: i32, height: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): OneRowSpriteIndexedAnimationFactory | null {
        return new OneRowSpriteIndexedAnimationFactory().jinit_OneRowSpriteIndexedAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
    }
    

    static createFactory(image: Image | null, animationBehaviorFactory: AnimationBehaviorFactory | null): OneRowSpriteIndexedAnimationFactory | null {
        return new OneRowSpriteIndexedAnimationFactory().jinit_OneRowSpriteIndexedAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), image!.getHeight(), image!.getHeight(), 0, 0, animationBehaviorFactory);
    }
    

    jinit_OneRowSpriteIndexedAnimationFactory_7(image: Image | null, sequenceArray: StaticArray<i32> | null, width: i32, height: i32, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): OneRowSpriteIndexedAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
        this.jfields_OneRowSpriteIndexedAnimationFactory();
        return this;
    }
    

    init(dx: i32, dy: i32): void {
        this.animationFactoryInitializationVisitor!.dx = dx;
        this.animationFactoryInitializationVisitor!.dy = dy;
    }
    

    initW(dx: i32): void {
        this.init(dx, 0); if (JThrowable.pending !== null) return;
        this.animationFactoryInitializationVisitor!.dx += -(this.animationFactoryInitializationVisitor!.width >> 2);
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let sprite: Sprite | null = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            return new AdjustedSpriteIndexedAnimation().jinit_AdjustedSpriteIndexedAnimation_6(sprite, this.getImage(), BasicColorUtil.getInstance()!.ZERO_ARRAY, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new SpriteIndexedAnimation().jinit_SpriteIndexedAnimation_4(sprite, this.getImage(), BasicColorUtil.getInstance()!.ZERO_ARRAY, this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

