/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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

@global export class AnimationBehaviorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.AnimationBehaviorFactory";
    }
    @lazy static jv_instance: AnimationBehaviorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnimationBehaviorFactory | null {
        if (!AnimationBehaviorFactory.js_instance) {
            AnimationBehaviorFactory.js_instance = true;
            AnimationBehaviorFactory.jv_instance = new AnimationBehaviorFactory().jinit_AnimationBehaviorFactory_0();
        }
        return AnimationBehaviorFactory.jv_instance;
    }
    static set instance(value: AnimationBehaviorFactory | null) {
        AnimationBehaviorFactory.js_instance = true;
        AnimationBehaviorFactory.jv_instance = value;
    }

    jinit_AnimationBehaviorFactory_0(): AnimationBehaviorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AnimationBehaviorFactory | null {
        return AnimationBehaviorFactory.instance;
    }
    

    getOrCreateInstance(): AnimationBehavior | null {
        return AnimationBehavior.getInstance();
    }
}

