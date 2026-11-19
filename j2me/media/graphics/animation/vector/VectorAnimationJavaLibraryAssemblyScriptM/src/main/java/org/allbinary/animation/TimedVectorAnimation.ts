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
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

@global export class TimedVectorAnimation extends VectorAnimation {

    jclassName(): string {
        return "org.allbinary.animation.TimedVectorAnimation";
    }
    timeElapsedHelper: TimeDelayHelper | null = null;

    jfields_TimedVectorAnimation(): void {
    this.timeElapsedHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(200);
    }
    

    jinit_TimedVectorAnimation_3(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null, animationBehavior: AnimationBehavior | null): TimedVectorAnimation {
        super.jinit_VectorAnimation_3(currentPoints, basicColor, animationBehavior);
        this.jfields_TimedVectorAnimation();
        return this;
    }
    

    nextFrame(): void {
        if (this.timeElapsedHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime)) {
            super.nextFrame(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

