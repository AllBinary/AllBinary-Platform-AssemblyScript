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
// package org.allbinary.input.motion.gesture
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.input.motion.gesture.observer.MotionEventCircularPool
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent

@global export class MirrorMotionGestureEventUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.MirrorMotionGestureEventUtil";
    }
    @lazy static jv_instance: MirrorMotionGestureEventUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MirrorMotionGestureEventUtil | null {
        if (!MirrorMotionGestureEventUtil.js_instance) {
            MirrorMotionGestureEventUtil.js_instance = true;
            MirrorMotionGestureEventUtil.jv_instance = new MirrorMotionGestureEventUtil().jinit_MirrorMotionGestureEventUtil_0();
        }
        return MirrorMotionGestureEventUtil.jv_instance;
    }
    static set instance(value: MirrorMotionGestureEventUtil | null) {
        MirrorMotionGestureEventUtil.js_instance = true;
        MirrorMotionGestureEventUtil.jv_instance = value;
    }
    motionEventCircularPool: MotionEventCircularPool | null = null;

    jfields_MirrorMotionGestureEventUtil(): void {
    
    }
    

    jinit_MirrorMotionGestureEventUtil_0(): MirrorMotionGestureEventUtil {
        super.jinit_JObject_0();
        this.jfields_MirrorMotionGestureEventUtil();
        this.motionEventCircularPool = MotionEventCircularPool.createPool(JInteger.MAX_VALUE); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    mirrorVerticle(motionGestureEvent: MotionGestureEvent | null, halfWidth: i32): MotionGestureEvent | null {
        let event: MotionGestureEvent | null = this.motionEventCircularPool!.getInstance1(motionGestureEvent!.getMotionGesture()); if (JThrowable.pending !== null) return null;
        let previousNewX: i32 = this.getNewX(motionGestureEvent!.getPreviousPoint()!.getX(), halfWidth); if (JThrowable.pending !== null) return null;
        let currentNewX: i32 = this.getNewX(motionGestureEvent!.getCurrentPoint()!.getX(), halfWidth); if (JThrowable.pending !== null) return null;
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let mirroredPreviousPoint: GPoint | null = pointFactory!.createXY(previousNewX, motionGestureEvent!.getPreviousPoint()!.getY()); if (JThrowable.pending !== null) return null;
        let mirroredCurrentPoint: GPoint | null = pointFactory!.createXY(currentNewX, motionGestureEvent!.getCurrentPoint()!.getY()); if (JThrowable.pending !== null) return null;
        event!.setPreviousPoint(mirroredPreviousPoint); if (JThrowable.pending !== null) return null;
        event!.setCurrentPoint(mirroredCurrentPoint); if (JThrowable.pending !== null) return null;
        return event;
    }
    

    getNewX(x: i32, halfWidth: i32): i32 {
        let newX: i32 = 0;
        if (x > halfWidth) {
            newX = halfWidth - (x - halfWidth);
        } else {
            newX = halfWidth + (halfWidth - x);
        }
        return newX;
    }
    

    static getInstance(): MirrorMotionGestureEventUtil | null {
        return MirrorMotionGestureEventUtil.instance;
    }
}

