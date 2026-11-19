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
// package org.allbinary.input.motion
// import org.allbinary.graphics.CustomGPoint
// import org.allbinary.graphics.GPointCircularPool
// import org.allbinary.input.motion.gesture.MotionGestureRecognizer

@global export class GestureOnlyMotionRecognizer extends MotionRecognizer {

    jclassName(): string {
        return "org.allbinary.input.motion.GestureOnlyMotionRecognizer";
    }
    @lazy static index: i32 = 0;
    @lazy static jv_pointCircularPool: GPointCircularPool | null = null;
    @lazy static js_pointCircularPool: bool = false;
    static get pointCircularPool(): GPointCircularPool | null {
        if (!GestureOnlyMotionRecognizer.js_pointCircularPool) {
            GestureOnlyMotionRecognizer.js_pointCircularPool = true;
            GestureOnlyMotionRecognizer.jv_pointCircularPool = new GPointCircularPool().jinit_GPointCircularPool_1(40);
        }
        return GestureOnlyMotionRecognizer.jv_pointCircularPool;
    }
    static set pointCircularPool(value: GPointCircularPool | null) {
        GestureOnlyMotionRecognizer.js_pointCircularPool = true;
        GestureOnlyMotionRecognizer.jv_pointCircularPool = value;
    }
    motionGestureRecognizer: MotionGestureRecognizer | null = null;
    id: i32 = 0;

    jfields_GestureOnlyMotionRecognizer(): void {
    
    
    }
    

    jinit_GestureOnlyMotionRecognizer_0(): GestureOnlyMotionRecognizer {
        super.jinit_MotionRecognizer_0();
        this.jfields_GestureOnlyMotionRecognizer();
        this.id = GestureOnlyMotionRecognizer.index++;
        this.motionGestureRecognizer = new MotionGestureRecognizer().jinit_MotionGestureRecognizer_1(this.id); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processStartMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        let point: CustomGPoint | null = changetype<CustomGPoint | null>(GestureOnlyMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
        point!.setX(x); if (JThrowable.pending !== null) return;
        point!.setY(y); if (JThrowable.pending !== null) return;
        this.motionGestureRecognizer!.processPressedMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
    }
    

    processEndMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        let point: CustomGPoint | null = changetype<CustomGPoint | null>(GestureOnlyMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
        point!.setX(x); if (JThrowable.pending !== null) return;
        point!.setY(y); if (JThrowable.pending !== null) return;
        this.motionGestureRecognizer!.processReleasedMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
    }
    

    processDraggedMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        let point: CustomGPoint | null = changetype<CustomGPoint | null>(GestureOnlyMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
        point!.setX(x); if (JThrowable.pending !== null) return;
        point!.setY(y); if (JThrowable.pending !== null) return;
        this.motionGestureRecognizer!.processDraggedMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
    }
}

