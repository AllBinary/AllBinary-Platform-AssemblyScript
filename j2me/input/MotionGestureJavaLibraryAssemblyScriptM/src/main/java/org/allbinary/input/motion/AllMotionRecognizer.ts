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
// import org.allbinary.input.motion.button.TouchButtonRecognizer
// import org.allbinary.input.motion.gesture.MotionGestureRecognizer
// import org.allbinary.logic.communication.log.LogUtil

@global export class AllMotionRecognizer extends MotionRecognizer {

    jclassName(): string {
        return "org.allbinary.input.motion.AllMotionRecognizer";
    }
    @lazy static index: i32 = 0;
    @lazy static jv_pointCircularPool: GPointCircularPool | null = null;
    @lazy static js_pointCircularPool: bool = false;
    static get pointCircularPool(): GPointCircularPool | null {
        if (!AllMotionRecognizer.js_pointCircularPool) {
            AllMotionRecognizer.js_pointCircularPool = true;
            AllMotionRecognizer.jv_pointCircularPool = new GPointCircularPool().jinit_GPointCircularPool_1(40);
        }
        return AllMotionRecognizer.jv_pointCircularPool;
    }
    static set pointCircularPool(value: GPointCircularPool | null) {
        AllMotionRecognizer.js_pointCircularPool = true;
        AllMotionRecognizer.jv_pointCircularPool = value;
    }
    logUtil: LogUtil | null = null;
    motionGestureRecognizer: MotionGestureRecognizer | null = null;
    touchButtonProcessing: bool = false;
    touchButtonRecognizer: TouchButtonRecognizer | null = null;
    id: i32 = 0;
    lastX: i32 = 0;
    lastY: i32 = 0;

    jfields_AllMotionRecognizer(): void {
    this.logUtil = LogUtil.getInstance();
    
    this.touchButtonProcessing = false;
    
    
    this.lastX = 0;
    this.lastY = 0;
    }
    

    jinit_AllMotionRecognizer_0(): AllMotionRecognizer {
        super.jinit_MotionRecognizer_0();
        this.jfields_AllMotionRecognizer();
        this.id = AllMotionRecognizer.index++;
        this.motionGestureRecognizer = new MotionGestureRecognizer().jinit_MotionGestureRecognizer_1(this.id); if (JThrowable.pending !== null) return this;
        this.touchButtonRecognizer = new TouchButtonRecognizer().jinit_TouchButtonRecognizer_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processStartMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        if (this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId)) {
            this.touchButtonProcessing = true;
        } if (JThrowable.pending !== null) return;
        if (!this.touchButtonProcessing) {
            let point: CustomGPoint | null = changetype<CustomGPoint | null>(AllMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
            point!.setX(x); if (JThrowable.pending !== null) return;
            point!.setY(y); if (JThrowable.pending !== null) return;
            this.motionGestureRecognizer!.processPressedMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processEndMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        if (this.touchButtonRecognizer!.releaseTouchButtonInput(x, y, deviceId)) {
        } if (JThrowable.pending !== null) return;
        if (!this.touchButtonProcessing) {
            let point: CustomGPoint | null = changetype<CustomGPoint | null>(AllMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
            point!.setX(x); if (JThrowable.pending !== null) return;
            point!.setY(y); if (JThrowable.pending !== null) return;
            this.motionGestureRecognizer!.processReleasedMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.touchButtonProcessing) {
            this.touchButtonProcessing = false;
        }
    }
    

    processDraggedMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        if (this.touchButtonProcessing) {
            this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (!this.touchButtonProcessing) {
            let point: CustomGPoint | null = changetype<CustomGPoint | null>(AllMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
            point!.setX(x); if (JThrowable.pending !== null) return;
            point!.setY(y); if (JThrowable.pending !== null) return;
            this.motionGestureRecognizer!.processDraggedMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processMovedMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        if (x != this.lastX || y != this.lastY) {
            this.lastX = x;
            this.lastY = y;
            let point: CustomGPoint | null = changetype<CustomGPoint | null>(AllMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
            point!.setX(x); if (JThrowable.pending !== null) return;
            point!.setY(y); if (JThrowable.pending !== null) return;
            this.motionGestureRecognizer!.processMovedMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processScrolledMotionEvent(x: i32, y: i32, deviceId: i32, modifiers: i32): void {
        let point: CustomGPoint | null = changetype<CustomGPoint | null>(AllMotionRecognizer.pointCircularPool!.getNextInstance()); if (JThrowable.pending !== null) return;
        point!.setX(x); if (JThrowable.pending !== null) return;
        point!.setY(y); if (JThrowable.pending !== null) return;
        this.motionGestureRecognizer!.processScrolledMotionEvent(point, deviceId, modifiers); if (JThrowable.pending !== null) return;
    }
    

    getMotionGestureRecognizer(): MotionGestureRecognizer | null {
        return this.motionGestureRecognizer;
    }
}

