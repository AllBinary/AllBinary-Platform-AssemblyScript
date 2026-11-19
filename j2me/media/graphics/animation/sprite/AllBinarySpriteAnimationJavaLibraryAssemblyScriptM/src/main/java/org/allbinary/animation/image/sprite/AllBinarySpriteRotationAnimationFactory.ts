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
// import org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface
// import org.allbinary.animation.image.BaseImageAnimationFactory
// import org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class AllBinarySpriteRotationAnimationFactory extends BaseImageAnimationFactory implements ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.AllBinarySpriteRotationAnimationFactory";
    }
    animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil | null = null;

    jfields_AllBinarySpriteRotationAnimationFactory(): void {
    this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
    }
    

    static createWHDY(image: Image | null, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinarySpriteRotationAnimationFactory | null {
        let spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory | null = new AllBinarySpriteRotationAnimationFactory().jinit_AllBinarySpriteRotationAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), (image!.getHeight() >> 2), (image!.getHeight() >> 2), 0, 0, animationBehaviorFactory); if (JThrowable.pending !== null) return null;
        spriteRotationAnimationFactory!.initWH(dx, dy); if (JThrowable.pending !== null) return null;
        return spriteRotationAnimationFactory;
    }
    

    static createWH(image: Image | null, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinarySpriteRotationAnimationFactory | null {
        return AllBinarySpriteRotationAnimationFactory.createWHDY(image, 0, 0, animationBehaviorFactory);
    }
    

    static createDXY(image: Image | null, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinarySpriteRotationAnimationFactory | null {
        let spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory | null = new AllBinarySpriteRotationAnimationFactory().jinit_AllBinarySpriteRotationAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), image!.getHeight(), image!.getHeight(), 0, 0, animationBehaviorFactory); if (JThrowable.pending !== null) return null;
        spriteRotationAnimationFactory!.init(dx, dy); if (JThrowable.pending !== null) return null;
        return spriteRotationAnimationFactory;
    }
    

    static createDXYQ(image: Image | null, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinarySpriteRotationAnimationFactory | null {
        let spriteRotationAnimationFactory: AllBinarySpriteRotationAnimationFactory | null = new AllBinarySpriteRotationAnimationFactory().jinit_AllBinarySpriteRotationAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), (image!.getHeight() >> 2), (image!.getHeight() >> 2), 0, 0, animationBehaviorFactory); if (JThrowable.pending !== null) return null;
        spriteRotationAnimationFactory!.init(dx, dy); if (JThrowable.pending !== null) return null;
        return spriteRotationAnimationFactory;
    }
    

    static createQ(image: Image | null, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinarySpriteRotationAnimationFactory | null {
        return new AllBinarySpriteRotationAnimationFactory().jinit_AllBinarySpriteRotationAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), (image!.getHeight() >> 2), (image!.getHeight() >> 2), 0, 0, animationBehaviorFactory);
    }
    

    static createWHF(image: Image | null, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinarySpriteRotationAnimationFactory | null {
        return new AllBinarySpriteRotationAnimationFactory().jinit_AllBinarySpriteRotationAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), image!.getHeight(), image!.getHeight(), 0, 0, animationBehaviorFactory);
    }
    

    jinit_AllBinarySpriteRotationAnimationFactory_7(image: Image | null, sequenceArray: StaticArray<i32> | null, width: i32, height: i32, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): AllBinarySpriteRotationAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
        this.jfields_AllBinarySpriteRotationAnimationFactory();
        if (animationBehaviorFactory == AnimationBehaviorFactory.getInstance()) {
            ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(dx: i32, dy: i32): void {
        this.animationFactoryInitializationVisitor!.dx = dx;
        this.animationFactoryInitializationVisitor!.dy = dy;
    }
    

    initWH(dx: i32, dy: i32): void {
        this.init(dx, dy); if (JThrowable.pending !== null) return;
        this.animationFactoryInitializationVisitor!.dx += -this.animationFactoryInitializationVisitor!.width / 5;
        this.animationFactoryInitializationVisitor!.dy += -this.animationFactoryInitializationVisitor!.height / 5;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let sprite: Sprite | null = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        if (this.animationFactoryInitializationVisitor!.dx != 0 || this.animationFactoryInitializationVisitor!.dy != 0) {
            return new AllBinaryAdjustedSpriteRotationAnimation().jinit_AllBinaryAdjustedSpriteRotationAnimation_5(sprite, this.getImage(), this.animationFactoryInitializationVisitor!.dx, this.animationFactoryInitializationVisitor!.dy, this.animationBehaviorFactory!.getOrCreateInstance());
        } else {
            return new AllBinarySpriteRotationAnimation().jinit_AllBinarySpriteRotationAnimation_3(sprite, this.getImage(), this.animationBehaviorFactory!.getOrCreateInstance());
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        return this.getInstance1(0);
    }
}

