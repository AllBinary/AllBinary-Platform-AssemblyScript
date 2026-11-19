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

@global export class NullIndexedAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.NullIndexedAnimationFactory";
    }
    @lazy static jv_NULL_INDEXED_ANIMATION_ARRAY: StaticArray<IndexedAnimation | null> | null = null;
    @lazy static js_NULL_INDEXED_ANIMATION_ARRAY: bool = false;
    static get NULL_INDEXED_ANIMATION_ARRAY(): StaticArray<IndexedAnimation | null> | null {
        if (!NullIndexedAnimationFactory.js_NULL_INDEXED_ANIMATION_ARRAY) {
            NullIndexedAnimationFactory.js_NULL_INDEXED_ANIMATION_ARRAY = true;
            NullIndexedAnimationFactory.jv_NULL_INDEXED_ANIMATION_ARRAY = new StaticArray<IndexedAnimation | null>(0);
        }
        return NullIndexedAnimationFactory.jv_NULL_INDEXED_ANIMATION_ARRAY;
    }
    static set NULL_INDEXED_ANIMATION_ARRAY(value: StaticArray<IndexedAnimation | null> | null) {
        NullIndexedAnimationFactory.js_NULL_INDEXED_ANIMATION_ARRAY = true;
        NullIndexedAnimationFactory.jv_NULL_INDEXED_ANIMATION_ARRAY = value;
    }
    @lazy static jv_NULL_INDEXED_ANIMATION_FACTORY: NullIndexedAnimationFactory | null = null;
    @lazy static js_NULL_INDEXED_ANIMATION_FACTORY: bool = false;
    static get NULL_INDEXED_ANIMATION_FACTORY(): NullIndexedAnimationFactory | null {
        if (!NullIndexedAnimationFactory.js_NULL_INDEXED_ANIMATION_FACTORY) {
            NullIndexedAnimationFactory.js_NULL_INDEXED_ANIMATION_FACTORY = true;
            NullIndexedAnimationFactory.jv_NULL_INDEXED_ANIMATION_FACTORY = new NullIndexedAnimationFactory().jinit_NullIndexedAnimationFactory_0();
        }
        return NullIndexedAnimationFactory.jv_NULL_INDEXED_ANIMATION_FACTORY;
    }
    static set NULL_INDEXED_ANIMATION_FACTORY(value: NullIndexedAnimationFactory | null) {
        NullIndexedAnimationFactory.js_NULL_INDEXED_ANIMATION_FACTORY = true;
        NullIndexedAnimationFactory.jv_NULL_INDEXED_ANIMATION_FACTORY = value;
    }
    NULL_ANIMATION: Animation | null = null;

    jfields_NullIndexedAnimationFactory(): void {
    this.NULL_ANIMATION = new NullIndexedAnimationInner().jinit_NullIndexedAnimationInner_0();
    }
    

    jinit_NullIndexedAnimationFactory_0(): NullIndexedAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_NullIndexedAnimationFactory();
        return this;
    }
    

    static getFactoryInstance(): NullIndexedAnimationFactory | null {
        return NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_FACTORY;
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

