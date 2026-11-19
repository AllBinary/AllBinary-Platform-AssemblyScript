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
// package org.allbinary.input.motion.gesture.observer
// import org.allbinary.game.input.InputFactory
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.logic.util.event.AllBinaryEventCircularPool

@global export class MotionEventCircularPool extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.MotionEventCircularPool";
    }
    MIN: i32 = 0;
    eventPool: AllBinaryEventCircularPool | null = null;

    jfields_MotionEventCircularPool(): void {
    this.MIN = TouchMotionGestureFactory.getInstance()!.LAST_MOTION!.getId();
    this.eventPool = new AllBinaryEventCircularPool().jinit_AllBinaryEventCircularPool_1((InputFactory.getInstance()!.MAX - 1) - this.MIN);
    }
    

    static createPool(id: i32): MotionEventCircularPool | null {
        return new MotionEventCircularPool().jinit_MotionEventCircularPool_1(id);
    }
    

    jinit_MotionEventCircularPool_1(id: i32): MotionEventCircularPool {
        super.jinit_JObject_0();
        this.jfields_MotionEventCircularPool();
        this.eventPool!.initAllBinaryEventCircularPool(new MotionEventFactory().jinit_MotionEventFactory_2(this.eventPool, id)); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getInstance1(motionGestureInput: MotionGestureInput | null): MotionGestureEvent | null {
        return changetype<MotionGestureEvent | null>(this.eventPool!.getInstance1(motionGestureInput!.getId() - this.MIN));
    }
}

