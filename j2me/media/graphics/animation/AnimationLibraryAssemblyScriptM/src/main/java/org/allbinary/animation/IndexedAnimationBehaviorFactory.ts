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

@global export class IndexedAnimationBehaviorFactory extends AnimationBehaviorFactory {

    jclassName(): string {
        return "org.allbinary.animation.IndexedAnimationBehaviorFactory";
    }
    frameDelayTime: i64 = 0;
    loopTotal: i32 = 0;

    jfields_IndexedAnimationBehaviorFactory(): void {
    
    
    }
    

    jinit_IndexedAnimationBehaviorFactory_2(loopTotal: i32, frameDelayTime: i64): IndexedAnimationBehaviorFactory {
        super.jinit_AnimationBehaviorFactory_0();
        this.jfields_IndexedAnimationBehaviorFactory();
        this.loopTotal = loopTotal;
        this.frameDelayTime = frameDelayTime;
        return this;
    }
    

    getOrCreateInstance(): AnimationBehavior | null {
        return new IndexedAnimationBehavior().jinit_IndexedAnimationBehavior_2(this.loopTotal, this.frameDelayTime);
    }
}

