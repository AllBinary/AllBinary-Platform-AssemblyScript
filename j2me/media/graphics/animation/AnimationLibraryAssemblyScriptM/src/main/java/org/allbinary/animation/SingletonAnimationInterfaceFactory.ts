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

@global export class SingletonAnimationInterfaceFactory extends JObject implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.SingletonAnimationInterfaceFactory";
    }
    animationInterface: Animation | null = null;

    jfields_SingletonAnimationInterfaceFactory(): void {
    
    }
    

    jinit_SingletonAnimationInterfaceFactory_1(animationInterface: Animation | null): SingletonAnimationInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_SingletonAnimationInterfaceFactory();
        this.animationInterface = animationInterface;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return this.animationInterface;
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        return this.animationInterface;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

