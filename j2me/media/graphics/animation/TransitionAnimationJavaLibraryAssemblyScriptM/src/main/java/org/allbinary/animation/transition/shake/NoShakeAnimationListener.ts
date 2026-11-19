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
// package org.allbinary.animation.transition.shake

@global export class NoShakeAnimationListener extends ShakeAnimationListener {

    jclassName(): string {
        return "org.allbinary.animation.transition.shake.NoShakeAnimationListener";
    }
    @lazy static jv_NO_SHAKE_ANIMATION_LISTENER: ShakeAnimationListener | null = null;
    @lazy static js_NO_SHAKE_ANIMATION_LISTENER: bool = false;
    static get NO_SHAKE_ANIMATION_LISTENER(): ShakeAnimationListener | null {
        if (!NoShakeAnimationListener.js_NO_SHAKE_ANIMATION_LISTENER) {
            NoShakeAnimationListener.js_NO_SHAKE_ANIMATION_LISTENER = true;
            NoShakeAnimationListener.jv_NO_SHAKE_ANIMATION_LISTENER = new NoShakeAnimationListener().jinit_NoShakeAnimationListener_0();
        }
        return NoShakeAnimationListener.jv_NO_SHAKE_ANIMATION_LISTENER;
    }
    static set NO_SHAKE_ANIMATION_LISTENER(value: ShakeAnimationListener | null) {
        NoShakeAnimationListener.js_NO_SHAKE_ANIMATION_LISTENER = true;
        NoShakeAnimationListener.jv_NO_SHAKE_ANIMATION_LISTENER = value;
    }

    jinit_NoShakeAnimationListener_0(): NoShakeAnimationListener {
        super.jinit_ShakeAnimationListener_0();
        return this;
    }
}

