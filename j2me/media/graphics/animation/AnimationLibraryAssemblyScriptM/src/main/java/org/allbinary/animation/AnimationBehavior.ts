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

@global export class AnimationBehavior extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.AnimationBehavior";
    }
    @lazy static jv_instance: AnimationBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnimationBehavior | null {
        if (!AnimationBehavior.js_instance) {
            AnimationBehavior.js_instance = true;
            AnimationBehavior.jv_instance = new AnimationBehavior().jinit_AnimationBehavior_0();
        }
        return AnimationBehavior.jv_instance;
    }
    static set instance(value: AnimationBehavior | null) {
        AnimationBehavior.js_instance = true;
        AnimationBehavior.jv_instance = value;
    }

    jinit_AnimationBehavior_0(): AnimationBehavior {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AnimationBehavior | null {
        return AnimationBehavior.instance;
    }
    

    reset(): void {
    }
}

