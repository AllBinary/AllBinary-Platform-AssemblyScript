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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.media.ScaleProperties

@global export class NullAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.NullAnimationFactory";
    }
    @lazy static jv_NULL_NOT_FOR_USE_ANIMATION_FACTORY: NullAnimationFactory | null = null;
    @lazy static js_NULL_NOT_FOR_USE_ANIMATION_FACTORY: bool = false;
    static get NULL_NOT_FOR_USE_ANIMATION_FACTORY(): NullAnimationFactory | null {
        if (!NullAnimationFactory.js_NULL_NOT_FOR_USE_ANIMATION_FACTORY) {
            NullAnimationFactory.js_NULL_NOT_FOR_USE_ANIMATION_FACTORY = true;
            NullAnimationFactory.jv_NULL_NOT_FOR_USE_ANIMATION_FACTORY = new NullAnimationFactory().jinit_NullAnimationFactory_0();
        }
        return NullAnimationFactory.jv_NULL_NOT_FOR_USE_ANIMATION_FACTORY;
    }
    static set NULL_NOT_FOR_USE_ANIMATION_FACTORY(value: NullAnimationFactory | null) {
        NullAnimationFactory.js_NULL_NOT_FOR_USE_ANIMATION_FACTORY = true;
        NullAnimationFactory.jv_NULL_NOT_FOR_USE_ANIMATION_FACTORY = value;
    }
    @lazy static jv_NULL_ANIMATION_FACTORY: NullAnimationFactory | null = null;
    @lazy static js_NULL_ANIMATION_FACTORY: bool = false;
    static get NULL_ANIMATION_FACTORY(): NullAnimationFactory | null {
        if (!NullAnimationFactory.js_NULL_ANIMATION_FACTORY) {
            NullAnimationFactory.js_NULL_ANIMATION_FACTORY = true;
            NullAnimationFactory.jv_NULL_ANIMATION_FACTORY = new NullAnimationFactory().jinit_NullAnimationFactory_0();
        }
        return NullAnimationFactory.jv_NULL_ANIMATION_FACTORY;
    }
    static set NULL_ANIMATION_FACTORY(value: NullAnimationFactory | null) {
        NullAnimationFactory.js_NULL_ANIMATION_FACTORY = true;
        NullAnimationFactory.jv_NULL_ANIMATION_FACTORY = value;
    }
    NULL_ANIMATION: Animation | null = null;
    EMPTY_ARRAY: StaticArray<Animation | null> | null = null;

    jfields_NullAnimationFactory(): void {
    this.NULL_ANIMATION = changetype<Animation | null>(0) /* Java anonymous class: not converted
        

        paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        } */;
    this.EMPTY_ARRAY = new StaticArray<Animation | null>(0);
    }
    

    jinit_NullAnimationFactory_0(): NullAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_NullAnimationFactory();
        return this;
    }
    

    static getFactoryInstance(): NullAnimationFactory | null {
        return NullAnimationFactory.NULL_ANIMATION_FACTORY;
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

