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
// import org.allbinary.AndroidUtil
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface
// import org.allbinary.animation.image.BaseImageAnimationFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorUtil
// import org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class SpriteIndexedAnimationFactory extends BaseImageAnimationFactory implements ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.SpriteIndexedAnimationFactory";
    }
    animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil | null = null;
    basicColorArray: StaticArray<BasicColor | null> | null = null;

    jfields_SpriteIndexedAnimationFactory(): void {
    this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
    this.basicColorArray = BasicColorUtil.getInstance()!.ZERO_ARRAY;
    }
    

    static createCWHDXY(image: Image | null, basicColorArray: StaticArray<BasicColor | null> | null, width: i32, height: i32, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): SpriteIndexedAnimationFactory | null {
        return new SpriteIndexedAnimationFactory().jinit_SpriteIndexedAnimationFactory_8(image, basicColorArray, PrimitiveIntUtil.getArrayInstance(), width, height, dx, dy, animationBehaviorFactory);
    }
    

    static createCWH(image: Image | null, basicColorArray: StaticArray<BasicColor | null> | null, width: i32, height: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): SpriteIndexedAnimationFactory | null {
        let spriteIndexedAnimationFactory: SpriteIndexedAnimationFactory | null = new SpriteIndexedAnimationFactory().jinit_SpriteIndexedAnimationFactory_8(image, basicColorArray, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory); if (JThrowable.pending !== null) return null;
        spriteIndexedAnimationFactory!.initHWH(); if (JThrowable.pending !== null) return null;
        return spriteIndexedAnimationFactory;
    }
    

    static createWH(image: Image | null, width: i32, height: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): SpriteIndexedAnimationFactory | null {
        return new SpriteIndexedAnimationFactory().jinit_SpriteIndexedAnimationFactory_8(image, BasicColorUtil.getInstance()!.ZERO_ARRAY, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
    }
    

    jinit_SpriteIndexedAnimationFactory_8(image: Image | null, basicColorArray: StaticArray<BasicColor | null> | null, sequenceArray: StaticArray<i32> | null, width: i32, height: i32, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): SpriteIndexedAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
        this.jfields_SpriteIndexedAnimationFactory();
        this.basicColorArray = basicColorArray;
        return this;
    }
    

    initHWH(): void {
        this.animationFactoryInitializationVisitor!.dx = -(this.animationFactoryInitializationVisitor!.width >> 2);
        this.animationFactoryInitializationVisitor!.dy = -(this.animationFactoryInitializationVisitor!.height >> 2);
        if (AndroidUtil.isAndroid()) {
            this.animationFactoryInitializationVisitor!.dx += 3;
        } if (JThrowable.pending !== null) return;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let sprite: Sprite | null = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            return new AdjustedSpriteIndexedAnimation().jinit_AdjustedSpriteIndexedAnimation_6(sprite, this.getImage(), this.basicColorArray, this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new SpriteIndexedAnimation().jinit_SpriteIndexedAnimation_4(sprite, this.getImage(), this.basicColorArray, this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        return this.getInstance1(0);
    }
}

