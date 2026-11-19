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
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.media.ScaleProperties

@global export class CompoundAnimationInterfaceFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.compound.CompoundAnimationInterfaceFactory";
    }
    basicAnimationInterfaceFactoryInterfaceArrayP: StaticArray<AnimationInterfaceFactoryInterface | null> | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_CompoundAnimationInterfaceFactory(): void {
    
    
    }
    

    jinit_CompoundAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null, animationBehaviorFactory: AnimationBehaviorFactory | null): CompoundAnimationInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_CompoundAnimationInterfaceFactory();
        this.basicAnimationInterfaceFactoryInterfaceArrayP = basicAnimationInterfaceFactoryInterfaceArray;
        this.animationBehaviorFactory = animationBehaviorFactory;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let size: i32 = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length;
        let animationInterfaceArray: StaticArray<Animation | null> | null = this.createArray(size); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            animationInterfaceArray![index] = this.basicAnimationInterfaceFactoryInterfaceArrayP![index]!.getInstance1(instanceId); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.createAnimation(animationInterfaceArray);
    }
    

    createArray(size: i32): StaticArray<Animation | null> | null {
        return NullAnimationFactory.getFactoryInstance()!.EMPTY_ARRAY;
    }
    

    createAnimation(animationInterfaceArray: StaticArray<Animation | null> | null): Animation | null {
        return NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    }
    

    getBasicAnimationInterfaceFactoryInterfaceArray(): StaticArray<AnimationInterfaceFactoryInterface | null> | null {
        return this.basicAnimationInterfaceFactoryInterfaceArrayP;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
        let size: i32 = this.basicAnimationInterfaceFactoryInterfaceArrayP!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.basicAnimationInterfaceFactoryInterfaceArrayP![index]!.setInitialScale(scaleProperties); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

