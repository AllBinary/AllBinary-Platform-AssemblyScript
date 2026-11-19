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

@global export class IndexedAnimationBehavior extends AnimationBehavior {

    jclassName(): string {
        return "org.allbinary.animation.IndexedAnimationBehavior";
    }
    frameDelayTime: i64 = 0;
    loopTotal: i32 = 0;
    elapsedTime: i64 = 0;
    loopIndex: i32 = 0;

    jfields_IndexedAnimationBehavior(): void {
    
    
    this.elapsedTime = 0;
    this.loopIndex = 0;
    }
    

    jinit_IndexedAnimationBehavior_2(loopTotal: i32, frameDelayTime: i64): IndexedAnimationBehavior {
        super.jinit_AnimationBehavior_0();
        this.jfields_IndexedAnimationBehavior();
        this.loopTotal = loopTotal;
        this.frameDelayTime = frameDelayTime;
        return this;
    }
    

    reset(): void {
        this.loopIndex = 0;
    }
}

