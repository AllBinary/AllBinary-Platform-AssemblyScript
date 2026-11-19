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
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil
// import org.allbinary.logic.math.PrimitiveIntUtil

@global export class ColorCompositeSpriteIndexedAnimationFactory extends BaseImageAnimationFactory implements ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.sprite.ColorCompositeSpriteIndexedAnimationFactory";
    }
    animationFactorySpriteScaleUtil: AnimationFactorySpriteScaleUtil | null = null;
    basicColorArray: StaticArray<BasicColor | null> | null = null;

    jfields_ColorCompositeSpriteIndexedAnimationFactory(): void {
    this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
    
    }
    

    jinit_ColorCompositeSpriteIndexedAnimationFactory_5(image: Image | null, basicColorArray: StaticArray<BasicColor | null> | null, width: i32, height: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): ColorCompositeSpriteIndexedAnimationFactory {
        super.jinit_BaseImageAnimationFactory_7(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        this.jfields_ColorCompositeSpriteIndexedAnimationFactory();
        this.basicColorArray = basicColorArray;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let sprite: Sprite | null = this.animationFactorySpriteScaleUtil!.createImage(this.getImage(), this.animationFactoryInitializationVisitor!.width, this.animationFactoryInitializationVisitor!.height, this.scaleProperties!.scaleWidth, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        return new SpriteIndexedAnimation().jinit_SpriteIndexedAnimation_4(sprite, this.getImage(), this.basicColorArray, this.animationBehaviorFactory!.getOrCreateInstance());
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        return this.getInstance1(0);
    }
}

