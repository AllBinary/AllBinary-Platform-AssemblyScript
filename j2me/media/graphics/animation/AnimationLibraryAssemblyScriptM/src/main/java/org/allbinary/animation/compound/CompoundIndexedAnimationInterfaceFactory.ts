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
// import org.allbinary.logic.communication.log.ForcedLogUtil

@global export class CompoundIndexedAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.animation.compound.CompoundIndexedAnimationInterfaceFactory";
    }
    

    jinit_CompoundIndexedAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null, animationBehaviorFactory: AnimationBehaviorFactory | null): CompoundIndexedAnimationInterfaceFactory {
        super.jinit_CompoundAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory);
        return this;
    }
    

    createArray(size: i32): StaticArray<Animation | null> | null {
        return changetype<StaticArray<Animation | null> | null>(new StaticArray<Animation | null>(size));
    }
    

    createAnimation(animationArray: StaticArray<Animation | null> | null): Animation | null {
        return new CompoundIndexedAnimation().jinit_CompoundIndexedAnimation_2(animationArray, this.animationBehaviorFactory!.getOrCreateInstance());
    }
}

