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

@global export class NullRotationAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.NullRotationAnimationFactory";
    }
    @lazy static jv_NULL_ROTATION_ANIMATION_FACTORY: NullRotationAnimationFactory | null = null;
    @lazy static js_NULL_ROTATION_ANIMATION_FACTORY: bool = false;
    static get NULL_ROTATION_ANIMATION_FACTORY(): NullRotationAnimationFactory | null {
        if (!NullRotationAnimationFactory.js_NULL_ROTATION_ANIMATION_FACTORY) {
            NullRotationAnimationFactory.js_NULL_ROTATION_ANIMATION_FACTORY = true;
            NullRotationAnimationFactory.jv_NULL_ROTATION_ANIMATION_FACTORY = new NullRotationAnimationFactory().jinit_NullRotationAnimationFactory_0();
        }
        return NullRotationAnimationFactory.jv_NULL_ROTATION_ANIMATION_FACTORY;
    }
    static set NULL_ROTATION_ANIMATION_FACTORY(value: NullRotationAnimationFactory | null) {
        NullRotationAnimationFactory.js_NULL_ROTATION_ANIMATION_FACTORY = true;
        NullRotationAnimationFactory.jv_NULL_ROTATION_ANIMATION_FACTORY = value;
    }
    NULL_ROTATION_ANIMATION_ARRAY: StaticArray<RotationAnimation | null> | null = null;
    NULL_ANIMATION: Animation | null = null;

    jfields_NullRotationAnimationFactory(): void {
    this.NULL_ROTATION_ANIMATION_ARRAY = new StaticArray<RotationAnimation | null>(0);
    this.NULL_ANIMATION = new NullRotationAnimation2().jinit_NullRotationAnimation2_0();
    }
    

    jinit_NullRotationAnimationFactory_0(): NullRotationAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_NullRotationAnimationFactory();
        return this;
    }
    

    static getFactoryInstance(): NullRotationAnimationFactory | null {
        return NullRotationAnimationFactory.NULL_ROTATION_ANIMATION_FACTORY;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return this.NULL_ANIMATION;
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        return this.NULL_ANIMATION;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

