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

@global export class BaseAnimationInterfaceFactoryInterfaceComposite extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.BaseAnimationInterfaceFactoryInterfaceComposite";
    }
    basicAnimationInterfaceFactoryInterfaceArray: StaticArray<BasicAnimationInterfaceFactoryInterface | null> | null = null;

    jfields_BaseAnimationInterfaceFactoryInterfaceComposite(): void {
    
    }
    

    jinit_BaseAnimationInterfaceFactoryInterfaceComposite_1(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<BasicAnimationInterfaceFactoryInterface | null> | null): BaseAnimationInterfaceFactoryInterfaceComposite {
        super.jinit_JObject_0();
        this.jfields_BaseAnimationInterfaceFactoryInterfaceComposite();
        this.basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    }
    

    getBasicAnimationInterfaceFactoryInterfaceArray(): StaticArray<BasicAnimationInterfaceFactoryInterface | null> | null {
        return this.basicAnimationInterfaceFactoryInterfaceArray;
    }
    

    setBasicAnimationInterfaceFactoryInterfaceArray(basicAnimationInterfaceFactoryInterfaceArray: StaticArray<BasicAnimationInterfaceFactoryInterface | null> | null): void {
        this.basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

