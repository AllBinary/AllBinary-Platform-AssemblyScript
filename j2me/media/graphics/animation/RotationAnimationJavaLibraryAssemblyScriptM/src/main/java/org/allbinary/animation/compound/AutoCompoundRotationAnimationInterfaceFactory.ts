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
// package org.allbinary.animation.compound
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.animation.RotationAnimation

@global export class AutoCompoundRotationAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.animation.compound.AutoCompoundRotationAnimationInterfaceFactory";
    }
    

    jinit_AutoCompoundRotationAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null, animationBehaviorFactory: AnimationBehaviorFactory | null): AutoCompoundRotationAnimationInterfaceFactory {
        super.jinit_CompoundAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory);
        return this;
    }
    

    createArray(size: i32): StaticArray<Animation | null> | null {
        return changetype<StaticArray<Animation | null> | null>(new StaticArray<RotationAnimation | null>(size));
    }
    

    createAnimation(animationInterfaceArray: StaticArray<Animation | null> | null): Animation | null {
        return new AutoCompoundRotationAnimation().jinit_AutoCompoundRotationAnimation_2(changetype<StaticArray<RotationAnimation | null> | null>(animationInterfaceArray), this.animationBehaviorFactory!.getOrCreateInstance());
    }
}

