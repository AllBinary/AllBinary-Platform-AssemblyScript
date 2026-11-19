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
// import javax.microedition.lcdui.Image
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.animation.SingletonAnimationInterfaceFactory
// import org.allbinary.image.IndexedAnimationToImageArrayUtil

@global export class ImageArraySingletonAnimationInterfaceFactory extends SingletonAnimationInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArraySingletonAnimationInterfaceFactory";
    }
    

    jinit_ImageArraySingletonAnimationInterfaceFactory_1(imageArray: StaticArray<Image | null> | null): ImageArraySingletonAnimationInterfaceFactory {
        super.jinit_SingletonAnimationInterfaceFactory_1(new ImageArrayAnimation().jinit_ImageArrayAnimation_2(imageArray, AnimationBehavior.getInstance()));
        return this;
    }
}

