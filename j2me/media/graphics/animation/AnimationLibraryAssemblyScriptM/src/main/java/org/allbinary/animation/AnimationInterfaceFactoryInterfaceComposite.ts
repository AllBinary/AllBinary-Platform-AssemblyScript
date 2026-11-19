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
// package org.allbinary.animation
// import org.allbinary.media.ScaleProperties

@global export class AnimationInterfaceFactoryInterfaceComposite extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.AnimationInterfaceFactoryInterfaceComposite";
    }
    animationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null = null;

    jfields_AnimationInterfaceFactoryInterfaceComposite(): void {
    
    }
    

    jinit_AnimationInterfaceFactoryInterfaceComposite_1(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<AnimationInterfaceFactoryInterface | null> | null): AnimationInterfaceFactoryInterfaceComposite {
        super.jinit_JObject_0();
        this.jfields_AnimationInterfaceFactoryInterfaceComposite();
        this.animationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    }
    

    getAnimationInterfaceFactoryInterfaceArray(): StaticArray<AnimationInterfaceFactoryInterface | null> | null {
        return this.animationInterfaceFactoryInterfaceArray;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

