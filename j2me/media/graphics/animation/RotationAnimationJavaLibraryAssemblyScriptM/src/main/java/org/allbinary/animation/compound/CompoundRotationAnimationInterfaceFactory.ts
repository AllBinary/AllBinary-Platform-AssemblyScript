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
// import org.allbinary.logic.communication.log.ForcedLogUtil

@global export class CompoundRotationAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.animation.compound.CompoundRotationAnimationInterfaceFactory";
    }
    

    jinit_CompoundRotationAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null, animationBehaviorFactory: AnimationBehaviorFactory | null): CompoundRotationAnimationInterfaceFactory {
        super.jinit_CompoundAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory);
        if (animationBehaviorFactory == AnimationBehaviorFactory.getInstance()) {
            ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    createArray(size: i32): StaticArray<Animation | null> | null {
        return changetype<StaticArray<Animation | null> | null>(new StaticArray<RotationAnimation | null>(size));
    }
    

    createAnimation(animationInterfaceArray: StaticArray<Animation | null> | null): Animation | null {
        return new CompoundRotationAnimation().jinit_CompoundRotationAnimation_2(changetype<StaticArray<RotationAnimation | null> | null>(animationInterfaceArray), this.animationBehaviorFactory!.getOrCreateInstance());
    }
}

