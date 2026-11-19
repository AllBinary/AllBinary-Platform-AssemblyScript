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
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.media.ScaleProperties

@global export class SimultaneousCompoundIndexAnimationInterfaceFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.compound.SimultaneousCompoundIndexAnimationInterfaceFactory";
    }
    basicAnimationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_SimultaneousCompoundIndexAnimationInterfaceFactory(): void {
    
    
    }
    

    jinit_SimultaneousCompoundIndexAnimationInterfaceFactory_2(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null, animationBehaviorFactory: AnimationBehaviorFactory | null): SimultaneousCompoundIndexAnimationInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_SimultaneousCompoundIndexAnimationInterfaceFactory();
        this.basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray;
        this.animationBehaviorFactory = animationBehaviorFactory;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let size: i32 = this.basicAnimationInterfaceFactoryInterfaceArray!.length;
        let animationInterfaceArray: StaticArray<IndexedAnimation | null> | null = new StaticArray<IndexedAnimation | null>(size);
        for (let index: i32 = 0; index < size; index++) {
            animationInterfaceArray![index] = changetype<IndexedAnimation | null>(this.basicAnimationInterfaceFactoryInterfaceArray![index]!.getInstance1(instanceId)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.getOrCreate(animationInterfaceArray);
    }
    

    getOrCreate(animationInterfaceArray: StaticArray<IndexedAnimation | null> | null): Animation | null {
        return new SimultaneousCompoundIndexAnimation().jinit_SimultaneousCompoundIndexAnimation_2(animationInterfaceArray, this.animationBehaviorFactory!.getOrCreateInstance());
    }
    

    getBasicAnimationInterfaceFactoryInterfaceArray(): StaticArray<AnimationInterfaceFactoryInterface | null> | null {
        return this.basicAnimationInterfaceFactoryInterfaceArray;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

