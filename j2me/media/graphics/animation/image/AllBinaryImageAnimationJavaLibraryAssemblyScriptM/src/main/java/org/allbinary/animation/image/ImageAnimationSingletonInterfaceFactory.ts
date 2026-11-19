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
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.SingletonAnimationInterfaceFactory
// import org.allbinary.image.AnimationFrameToImageUtil

@global export class ImageAnimationSingletonInterfaceFactory extends SingletonAnimationInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageAnimationSingletonInterfaceFactory";
    }
    

    jinit_ImageAnimationSingletonInterfaceFactory_3(animationInterface: Animation | null, width: i32, height: i32): ImageAnimationSingletonInterfaceFactory {
        super.jinit_SingletonAnimationInterfaceFactory_1(new ImageAnimation().jinit_ImageAnimation_2(AnimationFrameToImageUtil.getInstance()!.getInstanceWH(width, height, animationInterface), AnimationBehavior.getInstance()));
        return this;
    }
}

