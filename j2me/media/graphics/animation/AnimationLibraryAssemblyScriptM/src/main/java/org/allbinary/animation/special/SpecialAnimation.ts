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
// package org.allbinary.animation.special
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.animation.IndexedAnimationBehavior

@global export class SpecialAnimation extends IndexedAnimation implements SpecialAnimationInterface {

    jclassName(): string {
        return "org.allbinary.animation.special.SpecialAnimation";
    }
    @lazy static jv_NULL_SPECIAL_ANIMATION: SpecialAnimation | null = null;
    @lazy static js_NULL_SPECIAL_ANIMATION: bool = false;
    static get NULL_SPECIAL_ANIMATION(): SpecialAnimation | null {
        if (!SpecialAnimation.js_NULL_SPECIAL_ANIMATION) {
            SpecialAnimation.js_NULL_SPECIAL_ANIMATION = true;
            SpecialAnimation.jv_NULL_SPECIAL_ANIMATION = new SpecialAnimation().jinit_SpecialAnimation_1(new IndexedAnimationBehavior().jinit_IndexedAnimationBehavior_2(1, 250));
        }
        return SpecialAnimation.jv_NULL_SPECIAL_ANIMATION;
    }
    static set NULL_SPECIAL_ANIMATION(value: SpecialAnimation | null) {
        SpecialAnimation.js_NULL_SPECIAL_ANIMATION = true;
        SpecialAnimation.jv_NULL_SPECIAL_ANIMATION = value;
    }
    

    static getInstance(): SpecialAnimation | null {
        return SpecialAnimation.NULL_SPECIAL_ANIMATION;
    }
    

    jinit_SpecialAnimation_1(animationBehavior: AnimationBehavior | null): SpecialAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        return this;
    }
    

    nextFrame(): void {
        let indexedAnimationBehavior: IndexedAnimationBehavior | null = (changetype<IndexedAnimationBehavior | null>(this.animationBehaviorP));
        indexedAnimationBehavior!.loopIndex++;
    }
    

    setLastFrame(): void {
    }
    

    isComplete(): bool {
        return false;
    }
    

    open(): void {
    }
    

    close(): void {
    }
    

    process(): void {
    }
}

