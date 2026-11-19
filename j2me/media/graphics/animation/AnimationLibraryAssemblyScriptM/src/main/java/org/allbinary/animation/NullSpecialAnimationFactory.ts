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
// import org.allbinary.animation.special.SpecialAnimation
// import org.allbinary.media.ScaleProperties

@global export class NullSpecialAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.NullSpecialAnimationFactory";
    }
    @lazy static jv_NULL_SPECIAL_ANIMATION_FACTORY: NullSpecialAnimationFactory | null = null;
    @lazy static js_NULL_SPECIAL_ANIMATION_FACTORY: bool = false;
    static get NULL_SPECIAL_ANIMATION_FACTORY(): NullSpecialAnimationFactory | null {
        if (!NullSpecialAnimationFactory.js_NULL_SPECIAL_ANIMATION_FACTORY) {
            NullSpecialAnimationFactory.js_NULL_SPECIAL_ANIMATION_FACTORY = true;
            NullSpecialAnimationFactory.jv_NULL_SPECIAL_ANIMATION_FACTORY = new NullSpecialAnimationFactory().jinit_NullSpecialAnimationFactory_0();
        }
        return NullSpecialAnimationFactory.jv_NULL_SPECIAL_ANIMATION_FACTORY;
    }
    static set NULL_SPECIAL_ANIMATION_FACTORY(value: NullSpecialAnimationFactory | null) {
        NullSpecialAnimationFactory.js_NULL_SPECIAL_ANIMATION_FACTORY = true;
        NullSpecialAnimationFactory.jv_NULL_SPECIAL_ANIMATION_FACTORY = value;
    }
    

    jinit_NullSpecialAnimationFactory_0(): NullSpecialAnimationFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getFactoryInstance(): NullSpecialAnimationFactory | null {
        return NullSpecialAnimationFactory.NULL_SPECIAL_ANIMATION_FACTORY;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return SpecialAnimation.getInstance();
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        return SpecialAnimation.getInstance();
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

